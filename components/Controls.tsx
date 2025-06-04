
import React from 'react';
import { GridSize, CelestialBody, CelestialBodyId } from '../types';

interface ControlsProps {
  gridSizes: GridSize[];
  selectedGridSize: GridSize;
  onGridSizeChange: (size: GridSize) => void;
  planets: CelestialBody[];
  selectedPlanetId: CelestialBodyId;
  onPlanetChange: (planetId: CelestialBodyId) => void;
  blockCategories: string[];
  selectedBlockCategory: string;
  onBlockCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  gridSizes,
  selectedGridSize,
  onGridSizeChange,
  planets,
  selectedPlanetId,
  onPlanetChange,
  blockCategories,
  selectedBlockCategory,
  onBlockCategoryChange,
  searchQuery,
  onSearchQueryChange,
}) => {
  return (
    <div className="mb-8 p-6 bg-slate-800 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="grid-size-select" className="block text-sm font-medium text-sky-300 mb-1">
            Grid Size
          </label>
          <div className="flex space-x-2">
            {gridSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => onGridSizeChange(size)}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500
                  ${selectedGridSize === size ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                aria-pressed={selectedGridSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="planet-select" className="block text-sm font-medium text-sky-300 mb-1">
            Celestial Body
          </label>
          <select
            id="planet-select"
            value={selectedPlanetId}
            onChange={(e) => onPlanetChange(e.target.value as CelestialBodyId)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-200"
          >
            {planets.map((planet) => (
              <option key={planet.id} value={planet.id}>
                {planet.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="block-category-select" className="block text-sm font-medium text-sky-300 mb-1">
            Block Category
          </label>
          <select
            id="block-category-select"
            value={selectedBlockCategory}
            onChange={(e) => onBlockCategoryChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-200"
          >
            {blockCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="search-query-input" className="block text-sm font-medium text-sky-300 mb-1">
            Search Blocks
          </label>
          <input
            id="search-query-input"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Search by name, ID, type..."
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-200 placeholder-slate-400"
          />
        </div>
      </div>
    </div>
  );
};
