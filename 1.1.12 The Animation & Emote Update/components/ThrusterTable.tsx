
import React, { useState, useMemo } from 'react';
import { Thruster, CelestialBodyId, ThrusterType, ThrusterSize, CelestialBody, SortDirection, ColumnConfig, ColumnVisibility, ThrusterColumnKey } from '../types';
import { formatNumber, MaterialsIcon, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';

const ThrusterTypeIconDisplay: React.FC<{ type: ThrusterType }> = ({ type }) => {
  let icon;
  let colorClass; // Using Tailwind classes directly for icon colors as they are specific and unlikely to change with theme
  switch (type) {
    case ThrusterType.HYDROGEN:
      icon = 'H₂'; colorClass = 'text-blue-400'; break;
    case ThrusterType.ATMOS:
      icon = 'ATM'; colorClass = 'text-green-400'; break;
    case ThrusterType.ATMO_FLAT:
      icon = 'FLT'; colorClass = 'text-teal-400'; break;
    case ThrusterType.ION:
      icon = 'ION'; colorClass = 'text-purple-400'; break;
    case ThrusterType.PROTOTECH:
      icon = 'PT'; colorClass = 'text-indigo-400'; break;
    default:
      icon = '?'; colorClass = 'text-gray-400';
  }
  return <span className={`font-bold ${colorClass} text-xs sm:text-sm`} title={type}>{icon}</span>;
};

const parseLiftValue = (liftValue: string | number | undefined): React.ReactNode => {
    if (liftValue === undefined) return <span className="text-[var(--color-text-muted)]">N/A</span>;
    if (typeof liftValue !== 'string') {
      return formatNumber(liftValue);
    }
    const match = liftValue.match(/([\d,.-]+)([¹²³]?)/);
    if (match) {
      const numPart = formatNumber(match[1]);
      const supPart = match[2];
      return (
        <>
          {numPart}
          {supPart && <sup className="text-xs align-super">{supPart}</sup>}
        </>
      );
    }
    return liftValue;
  };

interface ThrusterTableProps {
  thrusters: Thruster[];
  selectedPlanetId: CelestialBodyId;
  celestialBodies: CelestialBody[];
  columnVisibility: ColumnVisibility<ThrusterColumnKey>;
}

type ThrusterSortKeys = keyof Thruster | 'staticLiftKg';

interface ThrusterTableSortConfig {
  key: ThrusterSortKeys | null;
  direction: SortDirection;
}

export const THRUSTER_COLUMN_CONFIG: ColumnConfig<Thruster>[] = [
  { key: 'typeDisplay', label: 'Type', helpText: 'The energy source and operational principle of the thruster (e.g., Ion, Hydrogen, Atmospheric).', textAlign: 'text-left' },
  { key: 'size', label: 'Size', helpText: 'The physical size category of the thruster unit (Large or Small).', textAlign: 'text-left'},
  { key: 'name', label: 'Name', helpText: 'The specific model name of the thruster.', textAlign: 'text-left' },
  { key: 'massKg', label: 'Weight (kg)', helpText: "The mass of the thruster in kilograms. Calculated from components if not directly specified.", textAlign: 'text-right' },
  { key: 'thrustN', label: 'Thrust (N)', helpText: "The raw force output of the thruster in Newtons, before accounting for atmospheric or gravitational effectiveness.", textAlign: 'text-right' },
  { key: 'staticLiftKg', label: `Static Lift (kg)`, helpText: "The maximum mass (in kilograms) this thruster can lift against the selected celestial body's gravity when stationary. This calculation accounts for the thruster's effectiveness and its own mass.", textAlign: 'text-right' },
  { key: 'powerMW', label: 'Power (MW)', helpText: "Maximum power consumption in Megawatts at full output.", textAlign: 'text-right' },
  { key: 'fuelLitersPerSecond', label: 'Fuel/s (L/s)', helpText: "Fuel consumption rate in Liters per second (L/s) for applicable thruster types (e.g., Hydrogen). Displays 'N/A' if not applicable.", textAlign: 'text-right' },
  { key: 'pcu', label: 'PCU', helpText: "Performance Cost Unit. Represents the computational load a block places on the game. Higher PCU impacts performance.", textAlign: 'text-right' },
  { key: 'buildTimeSeconds', label: 'Build Time (s)', helpText: "Base time in seconds to construct this block with a standard hand welder.", textAlign: 'text-right' },
  { key: 'materialsDisplay', label: 'Materials', helpText: "Components required to build the thruster. Hover over the icon for details.", textAlign: 'text-center', isMaterials: true },
  { key: 'damageRange', label: 'Flame Length (m)', helpText: "Approximate length of the thruster's damaging flame exhaust in meters.", textAlign: 'text-right' },
  { key: 'dlc', label: 'DLC', helpText: 'Downloadable Content pack this thruster belongs to, if any.', textAlign: 'text-left' },
];


export const ThrusterTable: React.FC<ThrusterTableProps> = ({ thrusters, selectedPlanetId, celestialBodies, columnVisibility }) => {
  const [sortConfig, setSortConfig] = useState<ThrusterTableSortConfig>({ key: 'thrustN', direction: 'descending' });
  
  const selectedPlanetName = celestialBodies.find(p => p.id === selectedPlanetId)?.name || 'Selected Planet';

  const sortedThrusters = useMemo(() => {
    let sortableItems = [...thrusters];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        let aValue: any;
        let bValue: any;

        if (sortConfig.key === 'staticLiftKg') {
          const aPerf = a.performance?.[selectedPlanetId]?.staticLiftKg;
          const bPerf = b.performance?.[selectedPlanetId]?.staticLiftKg;
          aValue = typeof aPerf === 'string' ? parseFloat(aPerf.replace(/[^0-9.-]+/g,"")) : aPerf;
          bValue = typeof bPerf === 'string' ? parseFloat(bPerf.replace(/[^0-9.-]+/g,"")) : bPerf;
          if (aValue === undefined || isNaN(aValue as number)) aValue = -Infinity; 
          if (bValue === undefined || isNaN(bValue as number)) bValue = -Infinity;
        } else {
          const typedKey = sortConfig.key as keyof Thruster;
          aValue = a[typedKey];
          bValue = b[typedKey];
        }

        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (bValue === undefined) return sortConfig.direction === 'ascending' ? 1 : -1;
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [thrusters, sortConfig, selectedPlanetId]);

  const requestSort = (key: ThrusterSortKeys) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = 'ascending'; 
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: ThrusterSortKeys) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };


  if (thrusters.length === 0) {
    return <p className="text-center text-[var(--color-text-secondary)] py-8">No thrusters match the current selection.</p>;
  }
  
  const renderHeader = (colConfig: ColumnConfig<Thruster>) => {
    const title = colConfig.key === 'staticLiftKg' ? `Static Lift (kg) on ${selectedPlanetName}` : colConfig.label;
    return (
        <th 
          scope="col" 
          className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-[var(--color-text-accent)] opacity-80 whitespace-nowrap cursor-pointer hover:text-[var(--color-text-accent)] hover:opacity-100 ${colConfig.textAlign || 'text-left'}`}
          onClick={() => requestSort(colConfig.key as ThrusterSortKeys)}
          aria-sort={sortConfig.key === colConfig.key ? sortConfig.direction : undefined}
        >
          {title}
          <SortIndicator direction={getSortDirectionFor(colConfig.key as ThrusterSortKeys)} />
          <InfoTooltip text={colConfig.helpText} />
        </th>
    );
  };


  return (
    <div className="overflow-x-auto bg-[var(--color-surface-1)] shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-[var(--color-border)]">
        <thead className="bg-[var(--color-surface-2)] bg-opacity-50">
          <tr>
            {THRUSTER_COLUMN_CONFIG.map(col => columnVisibility[col.key as ThrusterColumnKey] && renderHeader(col))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-surface-1)]">
          {sortedThrusters.map((thruster) => {
            const performanceData = thruster.performance ? thruster.performance[selectedPlanetId] : undefined;
            const staticLiftDisplay = performanceData ? parseLiftValue(performanceData.staticLiftKg) : <span className="text-[var(--color-text-muted)]">N/A</span>;
            
            return (
              <tr key={thruster.id + thruster.gridSize} className="hover:bg-[var(--color-surface-2)] hover:bg-opacity-70 transition-colors duration-150">
                {columnVisibility.typeDisplay && (
                    <td className="px-3 py-4 text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                        <div className="flex items-center">
                            <ThrusterTypeIconDisplay type={thruster.type} />
                            <span className="ml-2 hidden sm:inline">{thruster.type}</span>
                        </div>
                    </td>
                )}
                {columnVisibility.size && <td className="px-3 py-4 text-sm text-[var(--color-text-secondary)] capitalize whitespace-nowrap">{thruster.size}</td>}
                {columnVisibility.name && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-nowrap">{thruster.name}</td>}
                {columnVisibility.massKg && <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(thruster.massKg)}</td>}
                {columnVisibility.thrustN && <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(thruster.thrustN)}</td>}
                {columnVisibility.staticLiftKg && <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{staticLiftDisplay}</td>}
                {columnVisibility.powerMW && <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(thruster.powerMW)}</td>}
                {columnVisibility.fuelLitersPerSecond && (
                    <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">
                        {thruster.fuelLitersPerSecond !== undefined ? formatNumber(thruster.fuelLitersPerSecond) : <span className="text-[var(--color-text-muted)]">N/A</span>}
                    </td>
                )}
                {columnVisibility.pcu && <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(thruster.pcu)}</td>}
                {columnVisibility.buildTimeSeconds && <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(thruster.buildTimeSeconds)}</td>}
                {columnVisibility.materialsDisplay && (
                    <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                        <MaterialsIcon components={thruster.components} />
                    </td>
                )}
                {columnVisibility.damageRange && <td className="px-3 py-4 text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(thruster.damageRange)}</td>}
                {columnVisibility.dlc && (
                    <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                        {thruster.dlc ? <span className="text-[var(--color-text-accent)] opacity-70 text-xs">{thruster.dlc}</span> : <span className="text-[var(--color-text-muted)]">N/A</span>}
                    </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};