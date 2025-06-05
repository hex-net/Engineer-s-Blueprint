
import React from 'react';
import { GridSize, CelestialBody, CelestialBodyId, ColumnConfig, ThrusterColumnKey, BlockColumnKey, WeaponColumnKey, BlueprintColumnKey, BlueprintRecipeColumnKey, BotColumnKey, ComponentColumnKey, DroneBehaviorColumnKey, ColumnVisibility, ThemeMode, ThemeConfig } from '../types'; // Added DroneBehaviorColumnKey

interface ColumnToggleProps<KeyType extends string | number | symbol> {
  columns: ColumnConfig<any>[]; 
  visibility: ColumnVisibility<KeyType>;
  onToggle: (key: KeyType) => void;
  onReset: () => void;
  title: string;
}

const ColumnToggleGroup = <KeyType extends string | number | symbol>({
  columns,
  visibility,
  onToggle,
  onReset,
  title,
}: ColumnToggleProps<KeyType>) => (
  <div className="mt-4 p-3 bg-[var(--color-surface-2)] bg-opacity-50 rounded-md">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-md font-semibold text-[var(--color-text-accent)] opacity-80">{title}</h4>
      <button
        onClick={onReset}
        className="text-xs px-2 py-1 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-primary-text)] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-surface-1)] focus:ring-[var(--color-primary-focus)]"
        aria-label={`Reset ${title} columns to default`}
      >
        Reset
      </button>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {columns.map((col) => (
        <label key={String(col.key)} className="flex items-center space-x-2 text-xs cursor-pointer text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)]">
          <input
            type="checkbox"
            className="form-checkbox h-3 w-3 text-[var(--color-primary)] bg-[var(--color-surface-3)] border-[var(--color-border)] rounded focus:ring-[var(--color-primary-focus)] focus:ring-offset-[var(--color-surface-1)]"
            checked={visibility[col.key as KeyType] ?? true}
            onChange={() => onToggle(col.key as KeyType)}
            aria-labelledby={`col-label-${String(col.key)}`}
          />
          <span id={`col-label-${String(col.key)}`}>{col.label}</span>
        </label>
      ))}
    </div>
  </div>
);


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
  dlcOptions: string[];
  selectedDlc: string;
  onDlcChange: (dlc: string) => void;

  thrusterColumnConfig: ColumnConfig<any>[];
  thrusterVisibility: ColumnVisibility<ThrusterColumnKey>;
  onToggleThrusterColumn: (key: ThrusterColumnKey) => void;
  onResetThrusterColumns: () => void;

  blockColumnConfig: ColumnConfig<any>[];
  blockVisibility: ColumnVisibility<BlockColumnKey>;
  onToggleBlockColumn: (key: BlockColumnKey) => void;
  onResetBlockColumns: () => void;

  weaponColumnConfig: ColumnConfig<any>[];
  weaponVisibility: ColumnVisibility<WeaponColumnKey>;
  onToggleWeaponColumn: (key: WeaponColumnKey) => void;
  onResetWeaponColumns: () => void;

  blueprintColumnConfig: ColumnConfig<any>[];
  blueprintVisibility: ColumnVisibility<BlueprintColumnKey>;
  onToggleBlueprintColumn: (key: BlueprintColumnKey) => void;
  onResetBlueprintColumns: () => void;

  blueprintRecipeColumnConfig: ColumnConfig<any>[];
  blueprintRecipeVisibility: ColumnVisibility<BlueprintRecipeColumnKey>;
  onToggleBlueprintRecipeColumn: (key: BlueprintRecipeColumnKey) => void;
  onResetBlueprintRecipeColumns: () => void;

  botColumnConfig: ColumnConfig<any>[];
  botVisibility: ColumnVisibility<BotColumnKey>;
  onToggleBotColumn: (key: BotColumnKey) => void;
  onResetBotColumns: () => void;

  componentColumnConfig: ColumnConfig<any>[]; 
  componentVisibility: ColumnVisibility<ComponentColumnKey>; 
  onToggleComponentColumn: (key: ComponentColumnKey) => void; 
  onResetComponentColumns: () => void; 

  droneBehaviorColumnConfig: ColumnConfig<any>[]; // Added
  droneBehaviorVisibility: ColumnVisibility<DroneBehaviorColumnKey>; // Added
  onToggleDroneBehaviorColumn: (key: DroneBehaviorColumnKey) => void; // Added
  onResetDroneBehaviorColumns: () => void; // Added

  themeConfig: ThemeConfig;
  onThemeModeChange: (mode: ThemeMode) => void;
  onPrimaryColorChange: (color: string) => void;
  onResetTheme: () => void;
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
  dlcOptions,
  selectedDlc,
  onDlcChange,
  thrusterColumnConfig,
  thrusterVisibility,
  onToggleThrusterColumn,
  onResetThrusterColumns,
  blockColumnConfig,
  blockVisibility,
  onToggleBlockColumn,
  onResetBlockColumns,
  weaponColumnConfig,
  weaponVisibility,
  onToggleWeaponColumn,
  onResetWeaponColumns,
  blueprintColumnConfig,
  blueprintVisibility,
  onToggleBlueprintColumn,
  onResetBlueprintColumns,
  blueprintRecipeColumnConfig,
  blueprintRecipeVisibility,
  onToggleBlueprintRecipeColumn,
  onResetBlueprintRecipeColumns,
  botColumnConfig, 
  botVisibility, 
  onToggleBotColumn, 
  onResetBotColumns, 
  componentColumnConfig, 
  componentVisibility, 
  onToggleComponentColumn, 
  onResetComponentColumns, 
  droneBehaviorColumnConfig, // Added
  droneBehaviorVisibility, // Added
  onToggleDroneBehaviorColumn, // Added
  onResetDroneBehaviorColumns, // Added
  themeConfig,
  onThemeModeChange,
  onPrimaryColorChange,
  onResetTheme,
}) => {
  const [showColumnToggles, setShowColumnToggles] = React.useState(false);
  const [showThemeControls, setShowThemeControls] = React.useState(false);

  return (
    <div className="mb-8 p-6 bg-[var(--color-surface-1)] rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label htmlFor="grid-size-select" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
            Grid Size
          </label>
          <div className="flex space-x-2">
            {gridSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => onGridSizeChange(size)}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-surface-1)] focus:ring-[var(--color-primary-focus)]
                  ${selectedGridSize === size ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)] shadow-md' : 'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-3)]'}`}
                aria-pressed={selectedGridSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="planet-select" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
            Celestial Body
          </label>
          <select
            id="planet-select"
            value={selectedPlanetId}
            onChange={(e) => onPlanetChange(e.target.value as CelestialBodyId)}
            className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
          >
            {planets.map((planet) => (
              <option key={planet.id} value={planet.id}>
                {planet.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="block-category-select" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
            Block Category
          </label>
          <select
            id="block-category-select"
            value={selectedBlockCategory}
            onChange={(e) => onBlockCategoryChange(e.target.value)}
            className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
          >
            {blockCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
         <div>
          <label htmlFor="dlc-select" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
            Filter by DLC
          </label>
          <select
            id="dlc-select"
            value={selectedDlc}
            onChange={(e) => onDlcChange(e.target.value)}
            className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
          >
            {dlcOptions.map((dlc) => (
              <option key={dlc} value={dlc}>
                {dlc}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <label htmlFor="search-query-input" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
            Search Blocks
          </label>
          <input
            id="search-query-input"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Search by name, ID, type..."
            className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]"
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => setShowColumnToggles(!showColumnToggles)}
          className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--color-surface-3)] hover:bg-opacity-80 text-[var(--color-text-accent)] opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-surface-1)] focus:ring-[var(--color-primary-focus)]"
          aria-expanded={showColumnToggles}
          aria-controls="column-toggle-section"
        >
          {showColumnToggles ? 'Hide' : 'Customize'} Table Columns
        </button>
        <button
          onClick={() => setShowThemeControls(!showThemeControls)}
          className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--color-surface-3)] hover:bg-opacity-80 text-[var(--color-text-accent)] opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-surface-1)] focus:ring-[var(--color-primary-focus)]"
          aria-expanded={showThemeControls}
          aria-controls="theme-controls-section"
        >
          {showThemeControls ? 'Hide' : 'Customize'} Theme
        </button>
      </div>

      {showThemeControls && (
        <div id="theme-controls-section" className="mt-4 border-t border-[var(--color-border)] pt-4">
          <h3 className="text-lg font-semibold text-[var(--color-text-accent)] mb-3 text-center">Theme Customization</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Mode</label>
              <div className="flex space-x-2">
                <button onClick={() => onThemeModeChange('dark')} className={`flex-1 px-3 py-1.5 text-xs rounded-md ${themeConfig.mode === 'dark' ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)]' : 'bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)]'}`}>Dark</button>
                <button onClick={() => onThemeModeChange('light')} className={`flex-1 px-3 py-1.5 text-xs rounded-md ${themeConfig.mode === 'light' ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)]' : 'bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)]'}`}>Light</button>
              </div>
            </div>
            <div>
              <label htmlFor="primary-color-picker" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Primary Color</label>
              <input 
                id="primary-color-picker"
                type="color" 
                value={themeConfig.primaryColor} 
                onChange={(e) => onPrimaryColorChange(e.target.value)}
                className="w-full h-10 p-1 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md cursor-pointer"
              />
            </div>
            <div className="sm:mt-5">
              <button 
                onClick={onResetTheme}
                className="w-full px-3 py-1.5 text-xs font-medium rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-primary-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-surface-1)] focus:ring-[var(--color-primary-focus)]"
              >
                Reset Theme
              </button>
            </div>
          </div>
        </div>
      )}

      {showColumnToggles && (
        <div id="column-toggle-section" className="mt-4 border-t border-[var(--color-border)] pt-4">
          <h3 className="text-lg font-semibold text-[var(--color-text-accent)] mb-3 text-center">Customize Table Columns</h3>
          <ColumnToggleGroup
            columns={thrusterColumnConfig}
            visibility={thrusterVisibility}
            onToggle={onToggleThrusterColumn}
            onReset={onResetThrusterColumns}
            title="Thruster Columns"
          />
          <ColumnToggleGroup
            columns={weaponColumnConfig}
            visibility={weaponVisibility}
            onToggle={onToggleWeaponColumn}
            onReset={onResetWeaponColumns}
            title="Weapon Columns"
          />
          <ColumnToggleGroup
            columns={blockColumnConfig}
            visibility={blockVisibility}
            onToggle={onToggleBlockColumn}
            onReset={onResetBlockColumns}
            title="Other Block Columns"
          />
           <ColumnToggleGroup
            columns={componentColumnConfig}
            visibility={componentVisibility}
            onToggle={onToggleComponentColumn}
            onReset={onResetComponentColumns}
            title="Component Columns"
          />
          <ColumnToggleGroup
            columns={blueprintColumnConfig}
            visibility={blueprintVisibility}
            onToggle={onToggleBlueprintColumn}
            onReset={onResetBlueprintColumns}
            title="Blueprint Class Columns"
          />
          <ColumnToggleGroup
            columns={blueprintRecipeColumnConfig}
            visibility={blueprintRecipeVisibility}
            onToggle={onToggleBlueprintRecipeColumn}
            onReset={onResetBlueprintRecipeColumns}
            title="Blueprint Recipe Columns"
          />
          <ColumnToggleGroup
            columns={botColumnConfig}
            visibility={botVisibility}
            onToggle={onToggleBotColumn}
            onReset={onResetBotColumns}
            title="Bot Columns"
          />
          <ColumnToggleGroup
            columns={droneBehaviorColumnConfig}
            visibility={droneBehaviorVisibility}
            onToggle={onToggleDroneBehaviorColumn}
            onReset={onResetDroneBehaviorColumns}
            title="Drone Behavior Columns"
          />
        </div>
      )}
    </div>
  );
};