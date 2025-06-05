import React, { useState, useMemo } from 'react';
import { DroneBehaviorDefinition, WeaponBehavior, SortConfig, SortDirection, ColumnConfig, ColumnVisibility, DroneBehaviorColumnKey } from '../types';
import { formatNumber, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';

const DroneBehaviorIconDisplay: React.FC<{ iconName?: string }> = ({ iconName }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5 text-[var(--color-text-muted)]"
      aria-label={iconName || "Drone Behavior Icon"}
    >
      {iconName && <title>{iconName}</title>}
      {/* Generic AI/Chip Icon Path */}
      <path d="M10.75 2.75a.75.75 0 00-1.5 0V5.5h-2.75a.75.75 0 000 1.5H9.5V9.75a.75.75 0 001.5 0V7H13.75a.75.75 0 000-1.5H11.25V2.75z" />
      <path fillRule="evenodd" d="M2 6.545c0-1.22.906-2.528 2.065-3.11A.75.75 0 014.75 3.5v13a.75.75 0 01-.685.737A18.23 18.23 0 0110 17.5c1.499 0 2.96.169 4.385.487a.75.75 0 00.685-.737V3.5a.75.75 0 01.685-.075C16.929 4.017 18 5.242 18 6.455V17a3 3 0 01-3 3H5a3 3 0 01-3-3V6.545zM8.25 8.5a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zm2.5 3a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H10.75zM7.5 12.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
);
  
type DroneBehaviorSortKeys = keyof DroneBehaviorDefinition;

interface DroneBehaviorTableProps {
  droneBehaviors: DroneBehaviorDefinition[];
  columnVisibility: ColumnVisibility<DroneBehaviorColumnKey>;
}

export const DRONE_BEHAVIOR_COLUMN_CONFIG: ColumnConfig<DroneBehaviorDefinition>[] = [
  { key: 'iconDisplay', label: 'Icon', helpText: "Visual icon of the drone behavior.", isIcon: true, textAlign: 'text-left', defaultVisible: true },
  { key: 'name', label: 'Name', helpText: 'Identifier of the drone behavior.', textAlign: 'text-left', defaultVisible: true },
  { key: 'speedLimit', label: 'Speed Limit', helpText: 'Maximum speed of the drone.', textAlign: 'text-right', defaultVisible: true },
  { key: 'targetDistance', label: 'Target Dist. (m)', helpText: 'Preferred engagement distance.', textAlign: 'text-right', defaultVisible: true },
  { key: 'strafeDisplay', label: 'Strafe (W/H/D)', helpText: 'Strafe width, height, and depth.', textAlign: 'text-left', defaultVisible: false },
  { key: 'useStaticWeaponry', label: 'Static Weapons', helpText: 'Uses static weaponry.', textAlign: 'text-center', defaultVisible: false },
  { key: 'useRammingBehavior', label: 'Ramming', helpText: 'Engages in ramming behavior.', textAlign: 'text-center', defaultVisible: false },
  { key: 'usePlanetHover', label: 'Planet Hover', helpText: 'Hovers on planets.', textAlign: 'text-center', defaultVisible: false },
  { key: 'weaponBehaviorsDisplay', label: 'Weapon Behaviors', helpText: 'Number and names of defined weapon behaviors. Hover for details.', textAlign: 'text-left', defaultVisible: true },
  { key: 'alternativeBehavior', label: 'Alt. Behavior', helpText: 'Alternative behavior if current one fails.', textAlign: 'text-left', defaultVisible: false },
  { key: 'lostTimeMs', label: 'Lost Timeout (ms)', helpText: 'Time until drone considers target lost.', textAlign: 'text-right', defaultVisible: false },
];

const formatWeaponBehaviors = (behaviors?: WeaponBehavior[]): string => {
    if (!behaviors || behaviors.length === 0) return 'N/A';
    return `${behaviors.length} behavior(s): ${behaviors.map(wb => wb.name).join(', ')}`;
};
  
const getWeaponBehaviorsTooltip = (behaviors?: WeaponBehavior[]): string => {
    if (!behaviors || behaviors.length === 0) return 'No weapon behaviors defined.';
    return behaviors.map(wb => {
        let reqStr = 'Any Weapon';
        if (wb.requirements && wb.requirements.weapons.length > 0) {
            reqStr = `${wb.requirementsIsWhitelist ? 'Only:' : 'Excluding:'} ${wb.requirements.weapons.join(', ')}`;
        }
        const rulesStr = wb.weaponRules ? `${wb.weaponRules.length} rule(s)` : 'No rules';
        return `Name: ${wb.name}\nPriority: ${wb.priority}\nReqs: ${reqStr}\nCooldown: ${wb.timeMin}-${wb.timeMax}s\nRules: ${rulesStr}`;
    }).join('\n\n');
};

export const DroneBehaviorTable: React.FC<DroneBehaviorTableProps> = ({ droneBehaviors, columnVisibility }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<DroneBehaviorDefinition>>({ key: 'name', direction: 'ascending' });

  const sortedDroneBehaviors = useMemo(() => {
    let sortableItems = [...droneBehaviors];
    if (sortConfig.key && sortConfig.key !== 'iconDisplay' && sortConfig.key !== 'strafeDisplay' && sortConfig.key !== 'weaponBehaviorsDisplay') {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as DroneBehaviorSortKeys];
        const bValue = b[sortConfig.key as DroneBehaviorSortKeys];
        
        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (bValue === undefined) return sortConfig.direction === 'ascending' ? 1 : -1;

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
        }
        if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
            if (aValue === bValue) return 0;
            return sortConfig.direction === 'ascending' ? (aValue ? 1 : -1) : (bValue ? 1 : -1);
        }
        return 0;
      });
    } else if (sortConfig.key === 'weaponBehaviorsDisplay') {
        sortableItems.sort((a,b) => {
            const aCount = a.weaponBehaviors?.length || 0;
            const bCount = b.weaponBehaviors?.length || 0;
            return sortConfig.direction === 'ascending' ? aCount - bCount : bCount - aCount;
        });
    }
    return sortableItems;
  }, [droneBehaviors, sortConfig]);
  
  const requestSort = (key: DroneBehaviorSortKeys | string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: DroneBehaviorSortKeys | string) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  if (droneBehaviors.length === 0) {
    return <p className="text-center text-[var(--color-text-secondary)] py-8">No drone behaviors found in the data.</p>;
  }

  const NA_Cell = <span className="text-[var(--color-text-muted)]">N/A</span>;
  
  const renderHeader = (colConfig: ColumnConfig<DroneBehaviorDefinition>) => (
    <th 
      scope="col" 
      className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-[var(--color-text-accent)] opacity-80 whitespace-nowrap cursor-pointer hover:text-[var(--color-text-accent)] hover:opacity-100 ${colConfig.textAlign || 'text-left'}`}
      onClick={() => requestSort(colConfig.key as DroneBehaviorSortKeys)}
      aria-sort={sortConfig.key === colConfig.key ? sortConfig.direction : undefined}
    >
      {colConfig.label}
      <SortIndicator direction={getSortDirectionFor(colConfig.key as DroneBehaviorSortKeys)} />
      <InfoTooltip text={colConfig.helpText} />
    </th>
  );

  return (
    <div className="overflow-x-auto bg-[var(--color-surface-1)] shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-[var(--color-border)]">
        <thead className="bg-[var(--color-surface-2)] bg-opacity-50">
          <tr>
            {DRONE_BEHAVIOR_COLUMN_CONFIG.map(col => columnVisibility[col.key as DroneBehaviorColumnKey] && renderHeader(col))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-surface-1)]">
          {sortedDroneBehaviors.map((db) => (
            <tr key={db.id} className="hover:bg-[var(--color-surface-2)] hover:bg-opacity-70 transition-colors duration-150">
              {columnVisibility.iconDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap"><DroneBehaviorIconDisplay /></td>}
              {columnVisibility.name && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-nowrap">{db.name}</td>}
              {columnVisibility.speedLimit && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(db.speedLimit)}</td>}
              {columnVisibility.targetDistance && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(db.targetDistance)}</td>}
              {columnVisibility.strafeDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{`${formatNumber(db.strafeWidth)}/${formatNumber(db.strafeHeight)}/${formatNumber(db.strafeDepth)}`}</td>}
              {columnVisibility.useStaticWeaponry && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                  {db.useStaticWeaponry ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}
                </td>
              )}
              {columnVisibility.useRammingBehavior && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                  {db.useRammingBehavior ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}
                </td>
              )}
               {columnVisibility.usePlanetHover && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                  {db.usePlanetHover === undefined ? NA_Cell : (db.usePlanetHover ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>)}
                </td>
              )}
              {columnVisibility.weaponBehaviorsDisplay && (
                 <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                    {formatWeaponBehaviors(db.weaponBehaviors)}
                    {db.weaponBehaviors && db.weaponBehaviors.length > 0 && <InfoTooltip text={getWeaponBehaviorsTooltip(db.weaponBehaviors)} />}
                 </td>
              )}
              {columnVisibility.alternativeBehavior && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{db.alternativeBehavior || NA_Cell}</td>}
              {columnVisibility.lostTimeMs && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(db.lostTimeMs)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};