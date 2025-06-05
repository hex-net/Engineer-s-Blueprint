
import React, { useState, useMemo } from 'react';
import { BlueprintRecipe, SortConfig, SortDirection, ColumnConfig, ColumnVisibility, BlueprintRecipeColumnKey, BlockDefinition, AmmoMagazineDefinition, ComponentDefinition, BlueprintRecipeItem } from '../types';
import { formatNumber, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';

const BlueprintRecipeIconDisplay: React.FC<{ iconPath?: string }> = ({ iconPath }) => {
    const iconName = iconPath ? iconPath.split(/[\\/]/).pop() : 'UnknownIcon.dds';
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor" 
        className="w-5 h-5 text-[var(--color-text-muted)]"
        aria-label={iconName || "Blueprint Recipe Icon"}
      >
        {iconName && <title>{iconName}</title>}
        <path d="M10.75 2.75a.75.75 0 00-1.5 0V5.5h-2.75a.75.75 0 000 1.5H9.5V9.75a.75.75 0 001.5 0V7H13.75a.75.75 0 000-1.5H11.25V2.75z" />
        <path fillRule="evenodd" d="M2 6.545c0-1.22.906-2.528 2.065-3.11A.75.75 0 014.75 3.5v13a.75.75 0 01-.685.737A18.23 18.23 0 0110 17.5c1.499 0 2.96.169 4.385.487a.75.75 0 00.685-.737V3.5a.75.75 0 01.685-.075C16.929 4.017 18 5.242 18 6.455V17a3 3 0 01-3 3H5a3 3 0 01-3-3V6.545z" clipRule="evenodd" />
      </svg>
    );
  };

type BlueprintRecipeSortKeys = keyof BlueprintRecipe;

interface BlueprintRecipeTableProps {
  recipes: BlueprintRecipe[];
  columnVisibility: ColumnVisibility<BlueprintRecipeColumnKey>;
  allBlocks: BlockDefinition[]; 
  allAmmoMagazines: AmmoMagazineDefinition[];
  allComponents: ComponentDefinition[]; // Added
}

const getItemDisplayName = (
    item: BlueprintRecipeItem, 
    allBlocks: BlockDefinition[], 
    allAmmoMagazines: AmmoMagazineDefinition[],
    allComponents: ComponentDefinition[] // Added
): string => {
    if (item.typeId === 'Component') {
        const componentMatch = allComponents.find(c => c.id === item.subtypeId);
        if (componentMatch) return componentMatch.name;
    }
    if (item.typeId.endsWith('Block') || item.typeId.endsWith('Definition') && !item.typeId.includes('Ammo')) {
        const blockMatch = allBlocks.find(b => b.id === item.subtypeId && b.typeId === item.typeId);
        if (blockMatch) return blockMatch.name;
    }
    if (item.typeId === 'AmmoMagazine') {
        const ammoMatch = allAmmoMagazines.find(a => a.id === item.subtypeId);
        if (ammoMatch) return ammoMatch.name;
    }
    // Fallback for simple ores/ingots or if not found above
    const simpleName = item.subtypeId.replace(/([A-Z])/g, ' $1').trim();
    if (item.typeId === 'Ore') return `${simpleName} Ore`;
    if (item.typeId === 'Ingot') return `${simpleName} Ingot`;
    
    return `${item.subtypeId} (${item.typeId})`;
};


const formatRecipeItems = (
    items: BlueprintRecipeItem[], 
    allBlocks: BlockDefinition[], 
    allAmmoMagazines: AmmoMagazineDefinition[],
    allComponents: ComponentDefinition[] // Added
): string => {
  if (!items || items.length === 0) return 'N/A';
  return items.map(item => `${formatNumber(item.amount)} ${getItemDisplayName(item, allBlocks, allAmmoMagazines, allComponents)}`).join(', ');
};

export const BLUEPRINT_RECIPE_COLUMN_CONFIG: ColumnConfig<BlueprintRecipe>[] = [
  { key: 'iconDisplay', label: 'Icon', helpText: "Visual icon of the blueprint recipe.", isIcon: true, textAlign: 'text-left', defaultVisible: true },
  { key: 'displayName', label: 'Recipe Name', helpText: 'User-friendly name of the blueprint recipe.', textAlign: 'text-left', defaultVisible: true },
  { key: 'idSubtypeId', label: 'Recipe ID', helpText: 'Unique identifier for the blueprint recipe.', textAlign: 'text-left', defaultVisible: false },
  { key: 'resultsDisplay', label: 'Result(s)', helpText: 'Item(s) produced by this recipe.', textAlign: 'text-left', defaultVisible: true },
  { key: 'prerequisitesDisplay', label: 'Prerequisites', helpText: 'Item(s) required to craft this recipe.', textAlign: 'text-left', defaultVisible: true },
  { key: 'productionTimeDisplay', label: 'Prod. Time (s)', helpText: 'Base production time in seconds.', textAlign: 'text-right', defaultVisible: true },
  { key: 'isPrimaryDisplay', label: 'Primary', helpText: 'Indicates if this is a primary blueprint.', textAlign: 'text-center', defaultVisible: false },
];


export const BlueprintRecipeTable: React.FC<BlueprintRecipeTableProps> = ({ recipes, columnVisibility, allBlocks, allAmmoMagazines, allComponents }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<BlueprintRecipe>>({ key: 'displayName', direction: 'ascending' });

  const sortedRecipes = useMemo(() => {
    let sortableItems = [...recipes];
    if (sortConfig.key && sortConfig.key !== 'iconDisplay' && sortConfig.key !== 'prerequisitesDisplay' && sortConfig.key !== 'resultsDisplay' && sortConfig.key !== 'productionTimeDisplay' && sortConfig.key !== 'isPrimaryDisplay') {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as BlueprintRecipeSortKeys];
        const bValue = b[sortConfig.key as BlueprintRecipeSortKeys];
        
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
    } else if (sortConfig.key === 'productionTimeDisplay') {
        sortableItems.sort((a,b) => {
            return sortConfig.direction === 'ascending' ? a.baseProductionTimeInSeconds - b.baseProductionTimeInSeconds : b.baseProductionTimeInSeconds - a.baseProductionTimeInSeconds;
        });
    } else if (sortConfig.key === 'isPrimaryDisplay') {
        sortableItems.sort((a,b) => {
            const aVal = a.isPrimary ? 1 : 0;
            const bVal = b.isPrimary ? 1 : 0;
            return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
        });
    }
    return sortableItems;
  }, [recipes, sortConfig]);
  
  const requestSort = (key: BlueprintRecipeSortKeys | string) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: BlueprintRecipeSortKeys | string) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  if (recipes.length === 0) {
    return <p className="text-center text-[var(--color-text-secondary)] py-8">No blueprint recipes found in the data.</p>;
  }

  const NA_Cell = <span className="text-[var(--color-text-muted)]">N/A</span>;
  
  const renderHeader = (colConfig: ColumnConfig<BlueprintRecipe>) => (
    <th 
      scope="col" 
      className={`px-3 py-3.5 text-xs sm:text-sm font-semibold text-[var(--color-text-accent)] opacity-80 whitespace-nowrap cursor-pointer hover:text-[var(--color-text-accent)] hover:opacity-100 ${colConfig.textAlign || 'text-left'}`}
      onClick={() => requestSort(colConfig.key as BlueprintRecipeSortKeys)}
      aria-sort={sortConfig.key === colConfig.key ? sortConfig.direction : undefined}
    >
      {colConfig.label}
      <SortIndicator direction={getSortDirectionFor(colConfig.key as BlueprintRecipeSortKeys)} />
      <InfoTooltip text={colConfig.helpText} />
    </th>
  );

  return (
    <div className="overflow-x-auto bg-[var(--color-surface-1)] shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-[var(--color-border)]">
        <thead className="bg-[var(--color-surface-2)] bg-opacity-50">
          <tr>
            {BLUEPRINT_RECIPE_COLUMN_CONFIG.map(col => columnVisibility[col.key as BlueprintRecipeColumnKey] && renderHeader(col))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-surface-1)]">
          {sortedRecipes.map((recipe) => (
            <tr key={`${recipe.idTypeId}-${recipe.idSubtypeId}`} className="hover:bg-[var(--color-surface-2)] hover:bg-opacity-70 transition-colors duration-150">
              {columnVisibility.iconDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap"><BlueprintRecipeIconDisplay iconPath={recipe.icon} /></td>}
              {columnVisibility.displayName && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] whitespace-normal max-w-xs" title={recipe.displayNameKey}>{recipe.displayName || NA_Cell}</td>}
              {columnVisibility.idSubtypeId && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-nowrap truncate max-w-xs">{recipe.idSubtypeId || NA_Cell}</td>}
              {columnVisibility.resultsDisplay && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-normal max-w-md">
                  {formatRecipeItems(recipe.results, allBlocks, allAmmoMagazines, allComponents)}
                </td>
              )}
              {columnVisibility.prerequisitesDisplay && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-secondary)] whitespace-normal max-w-md">
                  {formatRecipeItems(recipe.prerequisites, allBlocks, allAmmoMagazines, allComponents)}
                </td>
              )}
              {columnVisibility.productionTimeDisplay && <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-right whitespace-nowrap">{formatNumber(recipe.baseProductionTimeInSeconds)}</td>}
              {columnVisibility.isPrimaryDisplay && (
                <td className="px-3 py-4 text-xs sm:text-sm text-[var(--color-text-primary)] text-center whitespace-nowrap">
                  {recipe.isPrimary === undefined ? NA_Cell : (recipe.isPrimary ? 'Yes' : 'No')}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};