import React, { useState, useMemo } from 'react';
import { BlockDefinition, SortConfig, SortDirection } from '../types';
import { formatNumber, MaterialsIcon, SortIndicator } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';


const BlockIcon: React.FC<{ iconName?: string }> = ({ iconName }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-5 h-5 text-slate-500"
    aria-label={iconName || "Block Icon"}
  >
    {iconName && <title>{iconName}</title>}
    <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v11.5A2.25 2.25 0 0 1 15.75 18H4.25A2.25 2.25 0 0 1 2 15.75V4.25ZM4.25 3.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H4.25Z" clipRule="evenodd" />
  </svg>
);

type WeaponSortKeys = keyof BlockDefinition;

interface WeaponTableProps {
  weapons: BlockDefinition[];
}

export const WeaponTable: React.FC<WeaponTableProps> = ({ weapons }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<BlockDefinition>>({ key: 'name', direction: 'ascending' });

  const sortedWeapons = useMemo(() => {
    let sortableItems = [...weapons];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];
        
        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (bValue === undefined) return sortConfig.direction === 'ascending' ? 1 : -1;

        if (sortConfig.key === 'ammoMagazines') {
          const aStr = (aValue as string[])?.join(', ') || '';
          const bStr = (bValue as string[])?.join(', ') || '';
          return sortConfig.direction === 'ascending' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [weapons, sortConfig]);

  const requestSort = (key: WeaponSortKeys) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionFor = (key: WeaponSortKeys) => {
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  if (weapons.length === 0) {
    return <p className="text-center text-slate-400 py-8">No weapons match the current selection.</p>;
  }

  const NA_Cell = <span className="text-slate-500">N/A</span>;
  
  const renderHeader = (key: WeaponSortKeys, title: string, helpText: string, textAlign: 'text-left' | 'text-right' | 'text-center' = 'text-left') => (
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
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Icon <InfoTooltip text="Visual icon of the block."/></th>
            {renderHeader('name', 'Name', 'User-friendly name of the weapon block.')}
            {renderHeader('gridSize', 'Grid', 'The grid size this block can be placed on (Large Grid or Small Grid).')}
            {renderHeader('size', 'Size (LxWxH)', "The block's dimensions in grid units (Length x Width x Height).")}
            {renderHeader('massKg', 'Weight (kg)', "The mass of the block in kilograms. Calculated from components if not directly specified.", 'text-right')}
            {renderHeader('buildTimeSeconds', 'Build Time (s)', "Base time in seconds to construct this block with a standard hand welder.", 'text-right')}
            <th scope="col" className="px-3 py-3.5 text-center text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Materials <InfoTooltip text="Components required to build the weapon. Hover over the icon for details."/></th>
            {renderHeader('pcu', 'PCU', "Performance Cost Unit. Represents the computational load a block places on the game.", 'text-right')}
            {renderHeader('weaponDefinitionId', 'Weapon Def ID', "Internal game identifier for the weapon's core definition.")}
            {renderHeader('ammoMagazines', 'Ammo Mags', "Types of ammunition magazines this weapon can use.", 'text-left')}
            {renderHeader('maxRangeMeters', 'Range (m)', "Maximum effective range of the weapon in meters.", 'text-right')}
            {renderHeader('baseRateOfFire', 'RoF (rpm)', "Rate of Fire, in rounds per minute. Base value, may be affected by game mechanics.", 'text-right')}
            {renderHeader('shotDeviationAngle', 'Deviation (°)', "Shot deviation angle in degrees, indicating inaccuracy. Lower is better.", 'text-right')}
            {renderHeader('dlc', 'DLC', 'Downloadable Content pack this weapon belongs to, if any.')}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 bg-slate-800">
          {sortedWeapons.map((block) => (
            <tr key={`${block.typeId}-${block.id}-${block.gridSize}`} className="hover:bg-slate-700/70 transition-colors duration-150">
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">
                <BlockIcon iconName={block.icon} />
              </td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 whitespace-nowrap" title={block.displayNameKey}>{block.name}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">{block.gridSize}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-left whitespace-nowrap">
                {block.size ? `${block.size.x}x${block.size.y}x${block.size.z}` : NA_Cell}
              </td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.massKg)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.buildTimeSeconds)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-center whitespace-nowrap">
                <MaterialsIcon components={block.components} />
              </td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.pcu)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap truncate max-w-[100px] sm:max-w-xs" title={block.weaponDefinitionId}>{block.weaponDefinitionId || NA_Cell}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">
                {block.ammoMagazines && block.ammoMagazines.length > 0 ? 
                  <div className="truncate max-w-[100px] sm:max-w-[150px]" title={block.ammoMagazines.join(', ')}>{block.ammoMagazines.join(', ')}</div> 
                  : NA_Cell}
              </td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.maxRangeMeters)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.baseRateOfFire)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{block.shotDeviationAngle !== undefined ? block.shotDeviationAngle.toFixed(2) : NA_Cell}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">
                {block.dlc ? <span className="text-amber-400 text-xs">{block.dlc}</span> : NA_Cell}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
