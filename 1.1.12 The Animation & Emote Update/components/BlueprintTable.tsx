
import React, { useState, useMemo } from 'react';
import { BlueprintClass, SortConfig, SortDirection, ColumnConfig, ColumnVisibility, BlueprintColumnKey } from '../types';
import { SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';

// Generic Icon for Blueprint Classes (can be replaced with specific icons if available)
const BlueprintIconDisplay: React.FC<{ iconName?: string }> = ({ iconName }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5 text-[var(--color-text-muted)]"
      aria-label={iconName || "Blueprint Class Icon"}
    >
      {iconName && <title>{iconName}</title>}
      {/* Generic Blueprint Icon Path */}
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v2.586L7.414 8H6V4zm2 0h2v3.5a.5.5 0 00.5.5h3.5v-2A1.5 1.5 0 0012.5 5H8V4zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
    </svg>
);
  

type BlueprintSortKeys = keyof BlueprintClass;

interface BlueprintTableProps {
  blueprints: BlueprintClass[];
  columnVisibility: ColumnVisibility<BlueprintColumnKey>;
}

export const BLUEPRINT_COLUMN_CONFIG: ColumnConfig<BlueprintClass>[] = [
  { key: 'iconDisplay', label: 'Icon', helpText: "Visual icon of the blueprint class.", isIcon: true, textAlign: 'text-left', defaultVisible: true },
  { key: 'idSubtypeId', label: 'ID', helpText: 'Subtype ID of the blueprint class.', textAlign: 'text-left', defaultVisible: true },
  { key: 'displayName', label: 'Name', helpText: 'User-friendly name of the blueprint class.', textAlign: 'text-left', defaultVisible: true },
  { key: 'description', label: 'Description', helpText: 'Description of the blueprint class.', textAlign: 'text-left', defaultVisible: true },
];

export const BlueprintTable: React.FC<BlueprintTableProps> = ({ blueprints, columnVisibility }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<BlueprintClass>>({ key: 'displayName', direction: 'ascending' });

  const sortedBlueprints = useMemo(() => {
    let sortableItems = [...blueprints];
    if (sortConfig.key && sortConfig.key !== 'iconDisplay') {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as BlueprintSortKeys];
        const bValue = b[sortConfig.key as BlueprintSortKeys];
        
        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (bValue === undefined) return sortConfig.direction === 'ascending' ? 1 : -1;

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return 0;
      });
    }
    return sortableItems;
  }, [blueprints, sortConfig]);
  
  const requestSort = (key: BlueprintSortKeys | string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: BlueprintSortKeys | string) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  if (blueprints.length === 0) {
    return <p className="text-center text-[var(--color-text-secondary)] py-8">No blueprint classes found in the data.</p>;
  }

  const NA_Cell = <span className="text-[var(--color-text-muted)]">N/A</span>;
  
  const renderHeader = (colConfig: ColumnConfig<BlueprintClass>) => (
    <th 
      scope="col" 
      className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-[var(--color-text-accent)] opacity-80 whitespace-nowrap cursor-pointer hover:text-[var(--color-text-accent)] hover:opacity-100 ${colConfig.textAlign || 'text-left'}`}
      onClick={() => requestSort(colConfig.key as BlueprintSortKeys)}
      aria-sort={sortConfig.key === colConfig.key ? sortConfig.direction : undefined}
    >
      {colConfig.label}
      <SortIndicator direction={getSortDirectionFor(colConfig.key as BlueprintSortKeys)} />
      <InfoTooltip text={colConfig.helpText} />
    </th>
  );

  return (
    <div className="overflow-x-auto bg-[var(--color-surface-1)] shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-[var(--color-border)]">
        <thead className="bg-[var(--color-surface-2)] bg-opacity-50">
          <tr>
            {BLUEPRINT_COLUMN_CONFIG.map(col => columnVisibility[col.key as BlueprintColumnKey] && renderHeader(col))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-surface-1)]">
          {sortedBlueprints.map((bp) => (
            <tr key={`${bp.idTypeId}-${bp.idSubtypeId}`} className="hover:bg-[var(--color-surface-2)] hover:bg-opacity-70 transition-colors duration-150">
              {columnVisibility.iconDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap"><BlueprintIconDisplay iconName={bp.icon} /></td>}
              {columnVisibility.idSubtypeId && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-nowrap">{bp.idSubtypeId || NA_Cell}</td>}
              {columnVisibility.displayName && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-nowrap" title={bp.displayNameKey}>{bp.displayName || NA_Cell}</td>}
              {columnVisibility.description && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-normal max-w-md">{bp.description || NA_Cell}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};