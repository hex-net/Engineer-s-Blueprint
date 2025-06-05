
import React, { useState, useMemo } from 'react';
import { BotDefinition, SortConfig, SortDirection, ColumnConfig, ColumnVisibility, BotColumnKey } from '../types';
import { formatNumber, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';

// Generic Icon for Bots (can be replaced with specific icons if available)
const BotIconDisplay: React.FC<{ iconName?: string }> = ({ iconName }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-5 h-5 text-[var(--color-text-muted)]"
      aria-label={iconName || "Bot Icon"}
    >
      {iconName && <title>{iconName}</title>}
      {/* Generic Bot Icon Path - Paw Print */}
      <path d="M9.205 4.057a1 1 0 01.59 0l.59.295a1 1 0 01.53.908v.998c0 .513.402.94.908.99l.998.134a1 1 0 01.867 1.233l-.295.59a1 1 0 01-.908.53H12.5v.998a1 1 0 01-.908.99l-.998.134a1 1 0 01-1.233-.867l-.295-.59a1 1 0 01.53-.908h.998a1 1 0 01.908-.99l.998-.134a1 1 0 01.867-1.233l.295-.59a1 1 0 01-.908-.53h-.998a1 1 0 01-.908-.99v-.998a1 1 0 01-.53-.908l-.59-.295zM3.502 9.057a1 1 0 01.59 0l.59.295a1 1 0 01.53.908v.998c0 .513.402.94.908.99l.998.134a1 1 0 01.867 1.233l-.295.59a1 1 0 01-.908.53H7.5v.998a1 1 0 01-.908.99l-.998.134a1 1 0 01-1.233-.867l-.295-.59a1 1 0 01.53-.908h.998a1 1 0 01.908-.99l.998-.134a1 1 0 01.867-1.233l.295-.59a1 1 0 01-.908-.53H5.502a1 1 0 01-.908-.99v-.998a1 1 0 01-.53-.908l-.59-.295z" />
      <path fillRule="evenodd" d="M7.857 3.654a.75.75 0 01.53-.22h3.226a.75.75 0 01.53.22l.05.046.052.045a1.75 1.75 0 01.213 2.25L10 9.057l-2.428-2.836a1.75 1.75 0 01.213-2.25l.052-.045.05-.046zm.69 1.04a.25.25 0 00-.075.322L10 7.692l1.528-1.79a.25.25 0 00-.075-.322L10 4.057l-1.453.537zM6.25 11.5a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM15.25 11.5a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" clipRule="evenodd" />

    </svg>
);
  

type BotSortKeys = keyof BotDefinition;

interface BotTableProps {
  bots: BotDefinition[];
  columnVisibility: ColumnVisibility<BotColumnKey>;
}

export const BOT_COLUMN_CONFIG: ColumnConfig<BotDefinition>[] = [
  { key: 'iconDisplay', label: 'Icon', helpText: "Visual icon of the bot.", isIcon: true, textAlign: 'text-left', defaultVisible: true },
  { key: 'name', label: 'Name', helpText: 'User-friendly name of the bot.', textAlign: 'text-left', defaultVisible: true },
  { key: 'botModel', label: 'Model', helpText: "The bot's 3D model name.", textAlign: 'text-left', defaultVisible: true },
  { key: 'behaviorType', label: 'Behavior Type', helpText: "The bot's primary behavior classification.", textAlign: 'text-left', defaultVisible: true },
  { key: 'targetType', label: 'Target Type', helpText: "The type of entity this bot targets.", textAlign: 'text-left', defaultVisible: true },
  { key: 'factionTag', label: 'Faction', helpText: "Default faction tag for this bot type.", textAlign: 'text-left', defaultVisible: false },
  { key: 'characterDamage', label: 'Char. Dmg', helpText: "Damage inflicted on characters.", textAlign: 'text-right', defaultVisible: true },
  { key: 'gridDamage', label: 'Grid Dmg', helpText: "Damage inflicted on grids.", textAlign: 'text-right', defaultVisible: true },
  { key: 'attackRadius', label: 'Attack Range (m)', helpText: "Effective attack radius in meters.", textAlign: 'text-right', defaultVisible: true },
  { key: 'targetCharactersDisplay', label: 'Targets Chars', helpText: "Whether the bot targets characters.", textAlign: 'text-center', defaultVisible: false },
  { key: 'targetGridsDisplay', label: 'Targets Grids', helpText: "Whether the bot targets grids.", textAlign: 'text-center', defaultVisible: false },
  { key: 'dlc', label: 'DLC', helpText: 'Downloadable Content pack this bot belongs to, if any.', textAlign: 'text-left', defaultVisible: false },
  { key: 'id', label: 'ID', helpText: "Internal SubtypeId of the bot.", textAlign: 'text-left', defaultVisible: false },
];

export const BotTable: React.FC<BotTableProps> = ({ bots, columnVisibility }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<BotDefinition>>({ key: 'name', direction: 'ascending' });

  const sortedBots = useMemo(() => {
    let sortableItems = [...bots];
    if (sortConfig.key && sortConfig.key !== 'iconDisplay' && sortConfig.key !== 'targetCharactersDisplay' && sortConfig.key !== 'targetGridsDisplay') {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as BotSortKeys];
        const bValue = b[sortConfig.key as BotSortKeys];
        
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
    } else if (sortConfig.key === 'targetCharactersDisplay') {
        sortableItems.sort((a,b) => {
            const aVal = a.targetCharacters ? 1 : 0;
            const bVal = b.targetCharacters ? 1 : 0;
            return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
        });
    } else if (sortConfig.key === 'targetGridsDisplay') {
        sortableItems.sort((a,b) => {
            const aVal = a.targetGrids ? 1 : 0;
            const bVal = b.targetGrids ? 1 : 0;
            return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
        });
    }
    return sortableItems;
  }, [bots, sortConfig]);
  
  const requestSort = (key: BotSortKeys | string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: BotSortKeys | string) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  if (bots.length === 0) {
    return <p className="text-center text-[var(--color-text-secondary)] py-8">No bots match the current filters.</p>;
  }

  const NA_Cell = <span className="text-[var(--color-text-muted)]">N/A</span>;
  
  const renderHeader = (colConfig: ColumnConfig<BotDefinition>) => (
    <th 
      scope="col" 
      className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-[var(--color-text-accent)] opacity-80 whitespace-nowrap cursor-pointer hover:text-[var(--color-text-accent)] hover:opacity-100 ${colConfig.textAlign || 'text-left'}`}
      onClick={() => requestSort(colConfig.key as BotSortKeys)}
      aria-sort={sortConfig.key === colConfig.key ? sortConfig.direction : undefined}
    >
      {colConfig.label}
      <SortIndicator direction={getSortDirectionFor(colConfig.key as BotSortKeys)} />
      <InfoTooltip text={colConfig.helpText} />
    </th>
  );

  return (
    <div className="overflow-x-auto bg-[var(--color-surface-1)] shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-[var(--color-border)]">
        <thead className="bg-[var(--color-surface-2)] bg-opacity-50">
          <tr>
            {BOT_COLUMN_CONFIG.map(col => columnVisibility[col.key as BotColumnKey] && renderHeader(col))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-surface-1)]">
          {sortedBots.map((bot) => (
            <tr key={bot.id} className="hover:bg-[var(--color-surface-2)] hover:bg-opacity-70 transition-colors duration-150">
              {columnVisibility.iconDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap"><BotIconDisplay iconName={bot.icon} /></td>}
              {columnVisibility.name && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-nowrap" title={bot.displayNameKey}>{bot.name}</td>}
              {columnVisibility.botModel && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{bot.botModel}</td>}
              {columnVisibility.behaviorType && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{bot.behaviorType}</td>}
              {columnVisibility.targetType && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{bot.targetType}</td>}
              {columnVisibility.factionTag && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{bot.factionTag || NA_Cell}</td>}
              {columnVisibility.characterDamage && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(bot.characterDamage)}</td>}
              {columnVisibility.gridDamage && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(bot.gridDamage)}</td>}
              {columnVisibility.attackRadius && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(bot.attackRadius)}</td>}
              {columnVisibility.targetCharactersDisplay && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                  {bot.targetCharacters ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}
                </td>
              )}
              {columnVisibility.targetGridsDisplay && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                  {bot.targetGrids ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}
                </td>
              )}
               {columnVisibility.dlc && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap">{bot.dlc ? <span className="text-[var(--color-text-accent)] opacity-70 text-xs">{bot.dlc}</span> : NA_Cell}</td>}
              {columnVisibility.id && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap truncate max-w-xs">{bot.id}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
