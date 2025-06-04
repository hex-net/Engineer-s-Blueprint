
import React, { useState, useMemo } from 'react';
import { Thruster, CelestialBodyId, ThrusterType, ThrusterSize, CelestialBody, SortDirection } from '../types';
import { formatNumber, MaterialsIcon, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';

const ThrusterTypeIcon: React.FC<{ type: ThrusterType }> = ({ type }) => {
  let icon;
  let color;
  switch (type) {
    case ThrusterType.HYDROGEN:
      icon = 'H₂'; color = 'text-blue-400'; break;
    case ThrusterType.ATMOS:
      icon = 'ATM'; color = 'text-green-400'; break;
    case ThrusterType.ATMO_FLAT:
      icon = 'FLT'; color = 'text-teal-400'; break;
    case ThrusterType.ION:
      icon = 'ION'; color = 'text-purple-400'; break;
    case ThrusterType.PROTOTECH:
      icon = 'PT'; color = 'text-indigo-400'; break;
    default:
      icon = '?'; color = 'text-gray-400';
  }
  return <span className={`font-bold ${color} text-xs sm:text-sm`} title={type}>{icon}</span>;
};

const parseLiftValue = (liftValue: string | number | undefined): React.ReactNode => {
    if (liftValue === undefined) return <span className="text-slate-500">N/A</span>;
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
}

type ThrusterSortKeys = keyof Thruster | 'staticLiftKg';

interface ThrusterTableSortConfig {
  key: ThrusterSortKeys | null;
  direction: SortDirection;
}


export const ThrusterTable: React.FC<ThrusterTableProps> = ({ thrusters, selectedPlanetId, celestialBodies }) => {
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
          if (aValue === undefined || isNaN(aValue as number)) aValue = -Infinity; // Treat N/A as very small for sorting
          if (bValue === undefined || isNaN(bValue as number)) bValue = -Infinity;
        } else {
          // If sortConfig.key is not 'staticLiftKg', it must be a 'keyof Thruster'.
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
      // Optional: third click resets sort or removes it. For now, toggle.
      // setSortConfig({ key: null, direction: 'ascending' }); return;
      direction = 'ascending'; // Default back to ascending or could clear
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: ThrusterSortKeys) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };


  if (thrusters.length === 0) {
    return <p className="text-center text-slate-400 py-8">No thrusters match the current selection.</p>;
  }
  
  const renderHeader = (key: ThrusterSortKeys, title: string, helpText: string, textAlign: 'text-left' | 'text-right' | 'text-center' = 'text-left') => (
    <th 
      scope="col" 
      className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap cursor-pointer hover:text-sky-200 ${textAlign}`}
      onClick={() => requestSort(key)}
    >
      {title}
      <SortIndicator direction={getSortDirectionFor(key)} />
      <InfoTooltip text={helpText} />
    </th>
  );


  return (
    <div className="overflow-x-auto bg-slate-800 shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-slate-700/50">
          <tr>
            {renderHeader('type', 'Type', 'The energy source and operational principle of the thruster (e.g., Ion, Hydrogen, Atmospheric).')}
            {renderHeader('size', 'Size', 'The physical size category of the thruster unit (Large or Small).')}
            {renderHeader('name', 'Name', 'The specific model name of the thruster.')}
            {renderHeader('massKg', 'Weight (kg)', "The mass of the thruster in kilograms. Calculated from components if not directly specified.", 'text-right')}
            {renderHeader('thrustN', 'Thrust (N)', "The raw force output of the thruster in Newtons, before accounting for atmospheric or gravitational effectiveness.", 'text-right')}
            {renderHeader('staticLiftKg', `Static Lift (kg) on ${selectedPlanetName}`, "The maximum mass (in kilograms) this thruster can lift against the selected celestial body's gravity when stationary. This calculation accounts for the thruster's effectiveness and its own mass.", 'text-right')}
            {renderHeader('pcu', 'PCU', "Performance Cost Unit. Represents the computational load a block places on the game. Higher PCU impacts performance.", 'text-right')}
            {renderHeader('buildTimeSeconds', 'Build Time (s)', "Base time in seconds to construct this block with a standard hand welder.", 'text-right')}
            <th scope="col" className="px-3 py-3.5 text-center text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Materials <InfoTooltip text="Components required to build the thruster. Hover over the icon for details."/></th>
            {renderHeader('damageRange', 'Flame Length (m)', "Approximate length of the thruster's damaging flame exhaust in meters.", 'text-right')}
            {renderHeader('powerMW', 'Power (MW)', "Maximum power consumption in Megawatts at full output.", 'text-right')}
            {renderHeader('dlc', 'DLC', 'Downloadable Content pack this thruster belongs to, if any.')}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 bg-slate-800">
          {sortedThrusters.map((thruster) => {
            const performanceData = thruster.performance ? thruster.performance[selectedPlanetId] : undefined;
            const staticLiftDisplay = performanceData ? parseLiftValue(performanceData.staticLiftKg) : <span className="text-slate-500">N/A</span>;
            
            return (
              <tr key={thruster.id + thruster.gridSize} className="hover:bg-slate-700/70 transition-colors duration-150">
                <td className="px-3 py-4 text-sm text-slate-300 whitespace-nowrap">
                  <div className="flex items-center">
                    <ThrusterTypeIcon type={thruster.type} />
                    <span className="ml-2 hidden sm:inline">{thruster.type}</span>
                  </div>
                </td>
                <td className="px-3 py-4 text-sm text-slate-300 capitalize whitespace-nowrap">{thruster.size}</td>
                <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 whitespace-nowrap">{thruster.name}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.massKg)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.thrustN)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{staticLiftDisplay}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.pcu)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.buildTimeSeconds)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-center whitespace-nowrap">
                  <MaterialsIcon components={thruster.components} />
                </td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.damageRange)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.powerMW)}</td>
                 <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">
                    {thruster.dlc ? <span className="text-amber-400 text-xs">{thruster.dlc}</span> : <span className="text-slate-500">N/A</span>}
                 </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
