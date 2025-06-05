
import React, { useState, useMemo } from 'react';
import { BlockDefinition, SortConfig, SortDirection, ColumnConfig, ColumnVisibility, BlockColumnKey } from '../types';
import { formatNumber, MaterialsIcon, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';


const BlockIconDisplay: React.FC<{ iconName?: string }> = ({ iconName }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-5 h-5 text-[var(--color-text-muted)]"
    aria-label={iconName || "Block Icon"}
  >
    {iconName && <title>{iconName}</title>}
    <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v11.5A2.25 2.25 0 0 1 15.75 18H4.25A2.25 2.25 0 0 1 2 15.75V4.25ZM4.25 3.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H4.25Z" clipRule="evenodd" />
  </svg>
);

type BlockSortKeys = keyof BlockDefinition;

interface BlockTableProps {
  blocks: BlockDefinition[];
  columnVisibility: ColumnVisibility<BlockColumnKey>;
}

export const BLOCK_COLUMN_CONFIG: ColumnConfig<BlockDefinition>[] = [
  { key: 'iconDisplay', label: 'Icon', helpText: "Visual icon of the block.", isIcon: true, textAlign: 'text-left' },
  { key: 'name', label: 'Name', helpText: 'User-friendly name of the block.', textAlign: 'text-left' },
  { key: 'gridSize', label: 'Grid', helpText: 'The grid size this block can be placed on (Large Grid or Small Grid).', textAlign: 'text-left' },
  { key: 'sizeDisplay', label: 'Size (LxWxH)', helpText: "The block's dimensions in grid units (Length x Width x Height).", textAlign: 'text-left' },
  { key: 'massKg', label: 'Weight (kg)', helpText: "The mass of the block in kilograms. Calculated from components if not directly specified.", textAlign: 'text-right' },
  { key: 'buildTimeSeconds', label: 'Build Time (s)', helpText: "Base time in seconds to construct this block with a standard hand welder.", textAlign: 'text-right' },
  { key: 'materialsDisplay', label: 'Materials', helpText: "Components required to build the block. Hover over the icon for details.", textAlign: 'text-center', isMaterials: true },
  { key: 'pcu', label: 'PCU', helpText: "Performance Cost Unit. Represents the computational load a block places on the game.", textAlign: 'text-right' },
  { key: 'blockPairName', label: 'Block Pair', helpText: "Name used to group variants of the same block (e.g., different armor shapes).", textAlign: 'text-left' },
  { key: 'edgeType', label: 'Edge Type', helpText: "Defines how the block connects visually and structurally (e.g., 'Light' or 'Heavy').", textAlign: 'text-left' },
  { key: 'airtightDisplay', label: 'Airtight', helpText: "Indicates if the block can form an airtight seal for pressurized environments.", textAlign: 'text-center' },
  { key: 'dlc', label: 'DLC', helpText: 'Downloadable Content pack this block belongs to, if any.', textAlign: 'text-left' },
];


export const BlockTable: React.FC<BlockTableProps> = ({ blocks, columnVisibility }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<BlockDefinition>>({ key: 'name', direction: 'ascending' });

  const sortedBlocks = useMemo(() => {
    let sortableItems = [...blocks];
    if (sortConfig.key && sortConfig.key !== 'sizeDisplay' && sortConfig.key !== 'airtightDisplay' && sortConfig.key !== 'iconDisplay' && sortConfig.key !== 'materialsDisplay') {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as BlockSortKeys];
        const bValue = b[sortConfig.key as BlockSortKeys];

        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (bValue === undefined) return sortConfig.direction === 'ascending' ? 1 : -1;

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
          if (aValue === bValue) return 0;
          return sortConfig.direction === 'ascending' ? (aValue ? 1 : -1) : (bValue ? 1 : -1)
        }
        // Ensure aValue and bValue are numbers before comparison for numeric sorting
        const numA = Number(aValue);
        const numB = Number(bValue);
        if (!isNaN(numA) && !isNaN(numB)) {
           if (numA < numB) return sortConfig.direction === 'ascending' ? -1 : 1;
           if (numA > numB) return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    // Add specific sorting logic for composite/display keys if needed, or rely on default string comparison if values are formatted text
     else if (sortConfig.key === 'sizeDisplay') {
        sortableItems.sort((a,b) => {
            const aSize = a.size ? a.size.x * a.size.y * a.size.z : 0;
            const bSize = b.size ? b.size.x * b.size.y * b.size.z : 0;
            return sortConfig.direction === 'ascending' ? aSize - bSize : bSize - aSize;
        });
    } else if (sortConfig.key === 'airtightDisplay') {
        sortableItems.sort((a,b) => {
            const aVal = a.isAirTight === undefined ? -1 : (a.isAirTight ? 1 : 0);
            const bVal = b.isAirTight === undefined ? -1 : (b.isAirTight ? 1 : 0);
            return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
        });
    }
    return sortableItems;
  }, [blocks, sortConfig]);
  
  const requestSort = (key: BlockSortKeys | string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: BlockSortKeys | string) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };


  if (blocks.length === 0) {
    return <p className="text-center text-[var(--color-text-secondary)] py-8">No blocks match the current selection.</p>;
  }

  const NA_Cell = <span className="text-[var(--color-text-muted)]">N/A</span>;
  
  const renderHeader = (colConfig: ColumnConfig<BlockDefinition>) => (
    <th 
      scope="col" 
      className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-[var(--color-text-accent)] opacity-80 whitespace-nowrap cursor-pointer hover:text-[var(--color-text-accent)] hover:opacity-100 ${colConfig.textAlign || 'text-left'}`}
      onClick={() => requestSort(colConfig.key as BlockSortKeys)}
      aria-sort={sortConfig.key === colConfig.key ? sortConfig.direction : undefined}
    >
      {colConfig.label}
      <SortIndicator direction={getSortDirectionFor(colConfig.key as BlockSortKeys)} />
      <InfoTooltip text={colConfig.helpText} />
    </th>
  );


  return (
    <div className="overflow-x-auto bg-[var(--color-surface-1)] shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-[var(--color-border)]">
        <thead className="bg-[var(--color-surface-2)] bg-opacity-50">
          <tr>
            {BLOCK_COLUMN_CONFIG.map(col => columnVisibility[col.key as BlockColumnKey] && renderHeader(col))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-surface-1)]">
          {sortedBlocks.map((block) => (
            <tr key={`${block.typeId}-${block.id}-${block.gridSize}`} className="hover:bg-[var(--color-surface-2)] hover:bg-opacity-70 transition-colors duration-150">
              {columnVisibility.iconDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap"><BlockIconDisplay iconName={block.icon} /></td>}
              {columnVisibility.name && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-nowrap" title={block.displayNameKey}>{block.name}</td>}
              {columnVisibility.gridSize && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{block.gridSize}</td>}
              {columnVisibility.sizeDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-left whitespace-nowrap">{block.size ? `${block.size.x}x${block.size.y}x${block.size.z}` : NA_Cell}</td>}
              {columnVisibility.massKg && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(block.massKg)}</td>}
              {columnVisibility.buildTimeSeconds && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(block.buildTimeSeconds)}</td>}
              {columnVisibility.materialsDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap"><MaterialsIcon components={block.components} /></td>}
              {columnVisibility.pcu && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(block.pcu)}</td>}
              {columnVisibility.blockPairName && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{block.blockPairName || NA_Cell}</td>}
              {columnVisibility.edgeType && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{block.edgeType || NA_Cell}</td>}
              {columnVisibility.airtightDisplay && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                  {block.isAirTight === undefined ? NA_Cell : (block.isAirTight ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>)}
                </td>
              )}
              {columnVisibility.dlc && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{block.dlc ? <span className="text-[var(--color-text-accent)] opacity-70 text-xs">{block.dlc}</span> : NA_Cell}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};