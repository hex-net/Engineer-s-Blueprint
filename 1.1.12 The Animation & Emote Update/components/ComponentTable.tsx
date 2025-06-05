import React, { useState, useMemo } from 'react';
import { ComponentDefinition, SortConfig, SortDirection, ColumnConfig, ColumnVisibility, ComponentColumnKey } from '../types';
import { formatNumber, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';

// Generic Icon for Components (can be replaced with specific icons if available)
const ComponentIconDisplay: React.FC<{ iconName?: string }> = ({ iconName }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5 text-[var(--color-text-muted)]"
      aria-label={iconName || "Component Icon"}
    >
      {iconName && <title>{iconName}</title>}
      {/* Generic Component Icon Path - Cog */}
      <path fillRule="evenodd" d="M11.49 3.93a1 1 0 011.02 0l1.182.68a1 1 0 001.02-.001L16.08 3.93a1 1 0 011.02 0l1.182.68a1 1 0 001.02 0l.27-.155a1 1 0 011.212.732l.217 1.086a1 1 0 00.51.729l1.02.59a1 1 0 01.53 1.295l-.368 1.044a1 1 0 000 1.13l.368 1.044a1 1 0 01-.53 1.295l-1.02.59a1 1 0 00-.51.729l-.217 1.086a1 1 0 01-1.212.732l-.27-.155a1 1 0 00-1.02 0l-1.182.68a1 1 0 01-1.02 0l-1.182-.68a1 1 0 00-1.02 0l-.27.155a1 1 0 01-1.212-.732l-.217-1.086a1 1 0 00-.51-.729l-1.02-.59a1 1 0 01-.53-1.295l.368-1.044a1 1 0 000-1.13l-.368-1.044a1 1 0 01.53-1.295l1.02-.59a1 1 0 00.51-.729l.217-1.086a1 1 0 011.212-.732l.27.155a1 1 0 001.02 0l1.182-.68a1 1 0 011.02 0l1.182-.68zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
    </svg>
);
  

type ComponentSortKeys = keyof ComponentDefinition;

interface ComponentTableProps {
  components: ComponentDefinition[];
  columnVisibility: ColumnVisibility<ComponentColumnKey>;
}

export const COMPONENT_COLUMN_CONFIG: ColumnConfig<ComponentDefinition>[] = [
  { key: 'iconDisplay', label: 'Icon', helpText: "Visual icon of the component.", isIcon: true, textAlign: 'text-left', defaultVisible: true },
  { key: 'name', label: 'Name', helpText: 'User-friendly name of the component.', textAlign: 'text-left', defaultVisible: true },
  { key: 'massKg', label: 'Mass (kg)', helpText: "Mass of one unit of this component.", textAlign: 'text-right', defaultVisible: true },
  { key: 'volumeLiters', label: 'Volume (L)', helpText: "Volume one unit of this component occupies in inventory.", textAlign: 'text-right', defaultVisible: true },
  { key: 'maxIntegrity', label: 'Integrity', helpText: "Maximum integrity (health) of the component before it's considered damaged.", textAlign: 'text-right', defaultVisible: false },
  { key: 'health', label: 'Health', helpText: "Hit points of the component item.", textAlign: 'text-right', defaultVisible: false },
  { key: 'model', label: 'Model File', helpText: "Filename of the component's 3D model.", textAlign: 'text-left', defaultVisible: false },
  { key: 'id', label: 'ID', helpText: "Internal SubtypeId of the component.", textAlign: 'text-left', defaultVisible: false },
  { key: 'dlc', label: 'DLC', helpText: 'Downloadable Content pack this component belongs to, if any.', textAlign: 'text-left', defaultVisible: false },
];

export const ComponentTable: React.FC<ComponentTableProps> = ({ components, columnVisibility }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<ComponentDefinition>>({ key: 'name', direction: 'ascending' });

  const sortedComponents = useMemo(() => {
    let sortableItems = [...components];
    if (sortConfig.key && sortConfig.key !== 'iconDisplay' && sortConfig.key !== 'sizeDisplay') {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as ComponentSortKeys];
        const bValue = b[sortConfig.key as ComponentSortKeys];
        
        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (bValue === undefined) return sortConfig.direction === 'ascending' ? 1 : -1;

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
        }
        return 0;
      });
    } else if (sortConfig.key === 'sizeDisplay') {
        sortableItems.sort((a,b) => {
            const aSizeVal = a.size ? a.size.x * a.size.y * a.size.z : 0;
            const bSizeVal = b.size ? b.size.x * b.size.y * b.size.z : 0;
            return sortConfig.direction === 'ascending' ? aSizeVal - bSizeVal : bSizeVal - aSizeVal;
        });
    }
    return sortableItems;
  }, [components, sortConfig]);
  
  const requestSort = (key: ComponentSortKeys | string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: ComponentSortKeys | string) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  if (components.length === 0) {
    return <p className="text-center text-[var(--color-text-secondary)] py-8">No components found in the data.</p>;
  }

  const NA_Cell = <span className="text-[var(--color-text-muted)]">N/A</span>;
  
  const renderHeader = (colConfig: ColumnConfig<ComponentDefinition>) => (
    <th 
      scope="col" 
      className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-[var(--color-text-accent)] opacity-80 whitespace-nowrap cursor-pointer hover:text-[var(--color-text-accent)] hover:opacity-100 ${colConfig.textAlign || 'text-left'}`}
      onClick={() => requestSort(colConfig.key as ComponentSortKeys)}
      aria-sort={sortConfig.key === colConfig.key ? sortConfig.direction : undefined}
    >
      {colConfig.label}
      <SortIndicator direction={getSortDirectionFor(colConfig.key as ComponentSortKeys)} />
      <InfoTooltip text={colConfig.helpText} />
    </th>
  );

  return (
    <div className="overflow-x-auto bg-[var(--color-surface-1)] shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-[var(--color-border)]">
        <thead className="bg-[var(--color-surface-2)] bg-opacity-50">
          <tr>
            {COMPONENT_COLUMN_CONFIG.map(col => columnVisibility[col.key as ComponentColumnKey] && renderHeader(col))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-surface-1)]">
          {sortedComponents.map((comp) => (
            <tr key={comp.id} className="hover:bg-[var(--color-surface-2)] hover:bg-opacity-70 transition-colors duration-150">
              {columnVisibility.iconDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap"><ComponentIconDisplay iconName={comp.icon} /></td>}
              {columnVisibility.name && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-nowrap" title={comp.displayNameKey}>{comp.name}</td>}
              {columnVisibility.massKg && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(comp.massKg)}</td>}
              {columnVisibility.volumeLiters && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(comp.volumeLiters)}</td>}
              {columnVisibility.maxIntegrity && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(comp.maxIntegrity)}</td>}
              {columnVisibility.health && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(comp.health)}</td>}
              {columnVisibility.model && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap truncate max-w-xs" title={comp.model}>{comp.model || NA_Cell}</td>}
              {columnVisibility.id && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap truncate max-w-xs">{comp.id}</td>}
              {columnVisibility.dlc && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{comp.dlc ? <span className="text-[var(--color-text-accent)] opacity-70 text-xs">{comp.dlc}</span> : NA_Cell}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};