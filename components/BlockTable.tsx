import React from 'react';
import { BlockDefinition, BlockComponent, GridSize } from '../types';
import { formatNumber, MaterialsIcon } from './TableHelpers';

// Generic Block Icon (Placeholder)
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


interface BlockTableProps {
  blocks: BlockDefinition[];
}

export const BlockTable: React.FC<BlockTableProps> = ({ blocks }) => {
  if (blocks.length === 0) {
    return <p className="text-center text-slate-400 py-8">No blocks match the current selection.</p>;
  }

  const NA_Cell = <span className="text-slate-500">N/A</span>;

  return (
    <div className="overflow-x-auto bg-slate-800 shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-slate-700/50">
          <tr>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Icon</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Name</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Grid</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Size (LxWxH)</th>
            <th scope="col" className="px-3 py-3.5 text-right text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Weight (kg)</th>
            <th scope="col" className="px-3 py-3.5 text-right text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Build Time (s)</th>
            <th scope="col" className="px-3 py-3.5 text-center text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Materials</th>
            <th scope="col" className="px-3 py-3.5 text-right text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">PCU</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Weapon Def ID</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Ammo Mags</th>
            <th scope="col" className="px-3 py-3.5 text-right text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Range (m)</th>
            <th scope="col" className="px-3 py-3.5 text-right text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">RoF (rpm)</th>
            <th scope="col" className="px-3 py-3.5 text-right text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Deviation (°)</th>
            <th scope="col" className="px-3 py-3.5 text-right text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Damage</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Block Pair</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Edge Type</th>
            <th scope="col" className="px-3 py-3.5 text-center text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">Airtight</th>
            <th scope="col" className="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-sky-300 whitespace-nowrap">DLC</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 bg-slate-800">
          {blocks.map((block) => (
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
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap" title={block.weaponDefinitionId}>{block.weaponDefinitionId || NA_Cell}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">
                {block.ammoMagazines && block.ammoMagazines.length > 0 ? 
                  <div className="max-w-xs truncate" title={block.ammoMagazines.join(', ')}>{block.ammoMagazines.join(', ')}</div> : NA_Cell}
              </td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.maxRangeMeters)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.baseRateOfFire)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.shotDeviationAngle)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(block.projectileDamage)}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">{block.blockPairName || NA_Cell}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-300 whitespace-nowrap">{block.edgeType || NA_Cell}</td>
              <td className="px-3 py-4 text-xs sm:text-sm text-slate-200 text-center whitespace-nowrap">
                {block.isAirTight === undefined ? NA_Cell : (block.isAirTight ? 
                  <span className="text-green-400">Yes</span> : 
                  <span className="text-red-400">No</span>)}
              </td>
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