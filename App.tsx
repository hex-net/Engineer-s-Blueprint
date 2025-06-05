
import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { ThrusterTable, THRUSTER_COLUMN_CONFIG } from './components/ThrusterTable';
import { BlockTable, BLOCK_COLUMN_CONFIG } from './components/BlockTable'; 
import { WeaponTable, WEAPON_COLUMN_CONFIG } from './components/WeaponTable';
import { BlueprintTable, BLUEPRINT_COLUMN_CONFIG } from './components/BlueprintTable';
import { BlueprintRecipeTable, BLUEPRINT_RECIPE_COLUMN_CONFIG } from './components/BlueprintRecipeTable';
import { BotTable, BOT_COLUMN_CONFIG } from './components/BotTable';
import { ComponentTable, COMPONENT_COLUMN_CONFIG } from './components/ComponentTable';
import { DroneBehaviorTable, DRONE_BEHAVIOR_COLUMN_CONFIG } from './components/DroneBehaviorTable'; // Added
import { PlanetInfo } from './components/PlanetInfo';
import { Footer } from './components/Footer';
import { ThrusterCalculator } from './components/ThrusterCalculator';
import { GridSize, CelestialBodyId, BlockDefinition, Thruster, ColumnVisibility, ThrusterColumnKey, BlockColumnKey, WeaponColumnKey, ThemeMode, ThemeConfig, BlueprintColumnKey, BlueprintClass, BlueprintRecipe, BlueprintRecipeColumnKey, BotDefinition, BotColumnKey, ComponentDefinition, ComponentColumnKey, DroneBehaviorDefinition, DroneBehaviorColumnKey } from './types'; 
import { spaceEngineersData } from './data/spaceEngineersData';

// Helper function to determine block category
export function getBlockCategory(block: BlockDefinition, categoryClasses: typeof spaceEngineersData.categoryClasses): string {
  const blockFullId = `Definition:${block.typeId}/${block.id}`;

  for (const category of categoryClasses) {
    if (category.itemIds.includes(blockFullId)) {
      return category.displayName;
    }
  }
  
  const typeId = block.typeId;
  const subtypeId = block.id.toLowerCase(); 
  const blockPairName = block.blockPairName?.toLowerCase() || '';
  const name = block.name.toLowerCase();

  const TYPEID_TO_MAIN_CATEGORY: Record<string, string> = {
    ReflectorLight: 'Lights',
    InteriorLight: 'Lights',
    EmissiveBlock: 'Lights', 
    HeatVentBlock: 'Lights', 
    Searchlight: 'Lights', 
    OxygenGenerator: 'Power & Survival',
    Reactor: 'Power & Survival',
    SolarPanel: 'Power & Survival',
    WindTurbine: 'Power & Survival',
    BatteryBlock: 'Power & Survival',
    HydrogenEngine: 'Power & Survival', 
    SurvivalKit: 'Power & Survival', 
    MedicalRoom: 'Power & Survival', 
    Assembler: 'Production & Refining',
    Refinery: 'Production & Refining',
    Cockpit: 'Control & Cockpits',
    RemoteControl: 'Control & Cockpits',
    TimerBlock: 'AI & Automation',
    SensorBlock: 'AI & Automation',
    Gyro: 'Control & Cockpits',
    RadioAntenna: 'Communication & Navigation',
    LaserAntenna: 'Communication & Navigation',
    Beacon: 'Communication & Navigation',
    CameraBlock: 'Communication & Navigation',
    Door: 'Doors & Mechanical',
    AirtightHangarDoor: 'Doors & Mechanical',
    AirtightSlideDoor: 'Doors & Mechanical',
    AdvancedDoor: 'Doors & Mechanical',
    MotorSuspension: 'Doors & Mechanical',
    MotorStator: 'Doors & Mechanical', 
    MotorAdvancedStator: 'Doors & Mechanical', 
    PistonBase: 'Doors & Mechanical',
    ExtendedPistonBase: 'Doors & Mechanical',
    PistonTop: 'Doors & Mechanical',
    LandingGear: 'Doors & Mechanical',
    MergeBlock: 'Doors & Mechanical',
    Connector: 'Conveyors & Cargo',
    ConveyorConnector: 'Conveyors & Cargo', 
    Conveyor: 'Conveyors & Cargo', 
    ConveyorSorter: 'Conveyors & Cargo',
    Collector: 'Conveyors & Cargo',
    Ejector: 'Conveyors & Cargo', 
    EjectorConnector: 'Conveyors & Cargo',
    CargoContainer: 'Conveyors & Cargo',
    TextPanel: 'Displays & Signs',
    LCDPanelsBlock: 'Displays & Signs',
    LargeGatlingTurret: 'Weapons & Tools',
    LargeMissileTurret: 'Weapons & Tools',
    SmallGatlingGun: 'Weapons & Tools', 
    SmallMissileLauncher: 'Weapons & Tools',
    InteriorTurret: 'Weapons & Tools', 
    ShipWelder: 'Weapons & Tools',
    ShipGrinder: 'Weapons & Tools',
    Drill: 'Weapons & Tools', 
    GravityGenerator: 'Gravity & Mass',
    GravityGeneratorSphere: 'Gravity & Mass',
    VirtualMass: 'Gravity & Mass',
    SpaceBall: 'Gravity & Mass',
    ProgrammableBlock: 'AI & Automation',
    EventControllerBlock: 'AI & Automation',
    PathRecorderBlock: 'AI & Automation',
    DefensiveCombatBlock: 'AI & Automation',
    OffensiveCombatBlock: 'AI & Automation',
    BasicCombatBlock: 'AI & Automation',
    FlightMovementBlock: 'AI & Automation',
    TargetDummyBlock: 'Miscellaneous', 
    Projector: 'Miscellaneous',
    SoundBlock: 'Miscellaneous',
    Jukebox: 'Furniture & Stations',
    UpgradeModule: 'Miscellaneous', 
    StoreBlock: 'Furniture & Stations', 
    VendingMachine: 'Furniture & Stations',
    Kitchen: 'Furniture & Stations',
    Planter: 'Furniture & Stations',
    CryoChamber: 'Furniture & Stations',
    ButtonPanel: 'Control & Cockpits',
    Ladder2: 'Armor & Structural',
    Passage: 'Armor & Structural',
    AirVent: 'Doors & Mechanical', 
    ExhaustBlock: 'Furniture & Stations', 
    SafeZoneBlock: 'Miscellaneous', 
    ContractBlock: 'Miscellaneous', 
    Thrust: 'Thrusters', 
    Warhead: 'Weapons & Tools',
    Decoy: 'Weapons & Tools', 
  };

  if (TYPEID_TO_MAIN_CATEGORY[typeId]) {
    if (typeId === 'TerminalBlock') {
      if (subtypeId.includes('accesspanel') || name.includes('access panel')) return 'Doors & Mechanical';
      if (subtypeId.includes('controlpanel') || name.includes('control panel')) return 'Control & Cockpits';
      if (subtypeId.includes('freezer') || subtypeId.includes('firstaid')) return 'Furniture & Stations';
      return 'Control & Cockpits'; 
    }
     if (typeId === 'Connector' && (subtypeId.includes('ejector') || name.includes('ejector'))) {
      return 'Conveyors & Cargo';
    }
    if (typeId === 'ShipWelder' || typeId === 'ShipGrinder' || typeId === 'Drill') return 'Weapons & Tools';
    if (typeId === 'Thrust') return 'Thrusters';
    if (name.includes('turret') || name.includes('gatling') || name.includes('missile') || name.includes('rocket launcher') || name.includes('gun') || name.includes('warhead') || name.includes('decoy')) {
      return 'Weapons & Tools';
    }
    return TYPEID_TO_MAIN_CATEGORY[typeId];
  }

  if (typeId === 'CubeBlock') {
    if (subtypeId.includes('armor') || blockPairName.includes('armor') || name.includes('armor block')) return 'Armor & Structural';
    if (subtypeId.includes('beam') || blockPairName.includes('beam') || name.includes('beam block')) return 'Armor & Structural';
    if (subtypeId.includes('girder') || blockPairName.includes('girder')) return 'Armor & Structural';
    if (name.includes('column') || name.includes('pillar')) return 'Armor & Structural';
    if (subtypeId.includes('passage') || blockPairName.includes('passage') || subtypeId.includes('corridor')) return 'Armor & Structural';
    if (subtypeId.includes('catwalk') || blockPairName.includes('catwalk')) return 'Armor & Structural';
    if (subtypeId.includes('window') || blockPairName.includes('window')) return 'Armor & Structural';
    if (subtypeId.includes('interiorwall') || blockPairName.includes('interiorwall') || subtypeId.includes('scifiwall')) return 'Armor & Structural';
    if (subtypeId.includes('stairs') || blockPairName.includes('stairs')) return 'Armor & Structural';
    if (subtypeId.includes('ramp') || blockPairName.includes('ramp')) return 'Armor & Structural';
    if (subtypeId.includes('coverwall') || blockPairName.includes('coverwall') || subtypeId.includes('firecover') || name.includes('embrasure')) return 'Armor & Structural';
    if (subtypeId.includes('railing') || blockPairName.includes('railing')) return 'Armor & Structural';
    if (subtypeId.includes('floor') && !name.includes('slab')) return 'Armor & Structural';
    if (subtypeId.includes('floorslab') || (subtypeId.includes('floor') && name.includes('slab'))) return 'Furniture & Stations';
    if (subtypeId.includes('duct') || name.includes('duct')) return 'Armor & Structural';
    if (subtypeId.includes('pipework') || name.includes('pipe work')) return 'Armor & Structural';
    if (subtypeId.includes('warningsign') || name.includes('warning sign') || name.includes('sign block')) return 'Displays & Signs';
    if (subtypeId.includes('deadbody') || blockPairName.includes('deadbody')) return 'Furniture & Stations';
    if (subtypeId.includes('desk') || name.includes('desk')) return 'Furniture & Stations';
    if (subtypeId.includes('couch') || name.includes('couch')) return 'Furniture & Stations';
    if (subtypeId.includes('toilet') || name.includes('toilet')) return 'Furniture & Stations';
    if (subtypeId.includes('bathroom') || name.includes('bathroom')) return 'Furniture & Stations';
    if (subtypeId.includes('shower') || name.includes('shower')) return 'Furniture & Stations';
    if (subtypeId.includes('bed') && !blockPairName.includes('cryo')) return 'Furniture & Stations';
    if (subtypeId.includes('locker') || name.includes('locker')) return 'Furniture & Stations';
    if (subtypeId.includes('cabinet') || name.includes('cabinet')) return 'Furniture & Stations';
    if (subtypeId.includes('shelf') || name.includes('shelf')) return 'Furniture & Stations';
    if (subtypeId.includes('sink') || name.includes('sink')) return 'Furniture & Stations';
    if (subtypeId.includes('barcounter') || name.includes('bar counter')) return 'Furniture & Stations'; 
    
    return 'Miscellaneous'; 
  }
  
  if (name.includes('turret') || name.includes('gatling') || name.includes('missile') || name.includes('rocket launcher') || name.includes('gun') || name.includes('warhead') || name.includes('decoy') ||
      subtypeId.includes('gatling') || subtypeId.includes('missile') || subtypeId.includes('rocket') || subtypeId.includes('turret')) {
    return 'Weapons & Tools';
  }

  return 'Miscellaneous';
}

export const getDefaultVisibility = <KeyType extends string | number | symbol>(
  config: { key: KeyType; defaultVisible?: boolean }[]
): ColumnVisibility<KeyType> => {
  const visibility: Partial<ColumnVisibility<KeyType>> = {};
  config.forEach(col => {
    visibility[col.key] = col.defaultVisible ?? true;
  });
  return visibility as ColumnVisibility<KeyType>;
};

const DEFAULT_PRIMARY_COLOR = '#0ea5e9'; // sky-500

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


const App: React.FC = () => {
  const [selectedGridSize, setSelectedGridSize] = useState<GridSize>(GridSize.LARGE);
  const [selectedPlanetId, setSelectedPlanetId] = useState<CelestialBodyId>(CelestialBodyId.EARTH);
  
  const { celestialBodies, thrusters: allThrusters, footnotes, blocks: allBlocksData, components: allComponentsData, categoryClasses, blueprintClasses, blueprintRecipes, ammoMagazines, bots: allBots, droneBehaviors: allDroneBehaviors } = spaceEngineersData; // Added droneBehaviors

  const BLOCK_CATEGORIES = useMemo(() => {
    const dynamicCategories = Array.from(new Set(categoryClasses.map(cat => cat.displayName)))
                                 .filter(name => name && name.trim() !== '') 
                                 .sort((a, b) => a.localeCompare(b));
    return ['All', ...dynamicCategories];
  }, [categoryClasses]);


  const [selectedBlockCategory, setSelectedBlockCategory] = useState<string>(BLOCK_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDlc, setSelectedDlc] = useState<string>('All');

  const allBlocks = useMemo(() => allBlocksData || [], [allBlocksData]);
  const allBlueprintClasses = useMemo(() => blueprintClasses || [], [blueprintClasses]);
  const allBlueprintRecipes = useMemo(() => blueprintRecipes || [], [blueprintRecipes]);
  const allComponents = useMemo(() => allComponentsData || [], [allComponentsData]);
  const allBehaviors = useMemo(() => allDroneBehaviors || [], [allDroneBehaviors]); // Added


  const dlcOptions = useMemo(() => {
    const dlcs = new Set<string>();
    allBlocks.forEach(block => {
      if (block.dlc && block.dlc.trim() !== '') dlcs.add(block.dlc);
    });
    allThrusters.forEach(thruster => {
      if (thruster.dlc && thruster.dlc.trim() !== '') dlcs.add(thruster.dlc);
    });
    allBots.forEach(bot => {
      if (bot.dlc && bot.dlc.trim() !== '') dlcs.add(bot.dlc);
    });
    allComponents.forEach(component => { 
        if (component.dlc && component.dlc.trim() !== '') dlcs.add(component.dlc);
    });
    allBehaviors.forEach(behavior => { // Added for drone behaviors
      if (behavior.dlc && behavior.dlc.trim() !== '') dlcs.add(behavior.dlc);
    });
    return ['All', 'Base Game', ...Array.from(dlcs).sort()];
  }, [allBlocks, allThrusters, allBots, allComponents, allBehaviors]);


  const selectedPlanet = useMemo(() => {
    return celestialBodies.find(p => p.id === selectedPlanetId);
  }, [selectedPlanetId, celestialBodies]);

  const filteredThrusters = useMemo(() => {
    let thrustersToFilter = allThrusters.filter(t => t.gridSize === selectedGridSize);
    if (selectedDlc !== 'All') {
      if (selectedDlc === 'Base Game') {
        thrustersToFilter = thrustersToFilter.filter(t => !t.dlc || t.dlc.trim() === '');
      } else {
        thrustersToFilter = thrustersToFilter.filter(t => t.dlc === selectedDlc);
      }
    }
    return thrustersToFilter;
  }, [selectedGridSize, selectedDlc, allThrusters]);

  const thrustersForCalculator = useMemo(() => {
    let thrusters = allThrusters.filter(t => t.gridSize === selectedGridSize);
    if (selectedDlc !== 'All') {
      if (selectedDlc === 'Base Game') {
        thrusters = thrusters.filter(t => !t.dlc || t.dlc.trim() === '');
      } else {
        thrusters = thrusters.filter(t => t.dlc === selectedDlc);
      }
    }
    return thrusters;
  }, [allThrusters, selectedGridSize, selectedDlc]);

  const baseFilteredBlocks = useMemo(() => {
    let tempBlocks = allBlocks;
    tempBlocks = tempBlocks.filter(block => block.gridSize === selectedGridSize);

    if (selectedDlc !== 'All') {
      if (selectedDlc === 'Base Game') {
        tempBlocks = tempBlocks.filter(block => !block.dlc || block.dlc.trim() === '');
      } else {
        tempBlocks = tempBlocks.filter(block => block.dlc === selectedDlc);
      }
    }
    
    if (searchQuery.trim() !== '') {
      const lowerSearchQuery = searchQuery.toLowerCase();
      tempBlocks = tempBlocks.filter(block =>
        block.name.toLowerCase().includes(lowerSearchQuery) ||
        block.id.toLowerCase().includes(lowerSearchQuery) ||
        (block.blockPairName && block.blockPairName.toLowerCase().includes(lowerSearchQuery)) ||
        block.displayNameKey.toLowerCase().includes(lowerSearchQuery) ||
        block.typeId.toLowerCase().includes(lowerSearchQuery) ||
        (block.weaponDefinitionId && block.weaponDefinitionId.toLowerCase().includes(lowerSearchQuery)) ||
        (block.ammoMagazines && block.ammoMagazines.some(mag => mag.toLowerCase().includes(lowerSearchQuery)))
      );
    }
    return tempBlocks;
  }, [allBlocks, selectedGridSize, selectedDlc, searchQuery]);
  
  const filteredBots = useMemo(() => { 
    let botsToFilter = allBots;
    if (selectedDlc !== 'All') {
      if (selectedDlc === 'Base Game') {
        botsToFilter = botsToFilter.filter(b => !b.dlc || b.dlc.trim() === '');
      } else {
        botsToFilter = botsToFilter.filter(b => b.dlc === selectedDlc);
      }
    }
    return botsToFilter;
  }, [allBots, selectedDlc]);

  const filteredComponents = useMemo(() => { 
    let componentsToFilter = allComponents;
    if (selectedDlc !== 'All') {
      if (selectedDlc === 'Base Game') {
        componentsToFilter = componentsToFilter.filter(c => !c.dlc || c.dlc.trim() === '');
      } else {
        componentsToFilter = componentsToFilter.filter(c => c.dlc === selectedDlc);
      }
    }
    return componentsToFilter;
  }, [allComponents, selectedDlc]);

  const filteredDroneBehaviors = useMemo(() => { // Added
    let behaviorsToFilter = allBehaviors;
    if (selectedDlc !== 'All') {
      if (selectedDlc === 'Base Game') {
        behaviorsToFilter = behaviorsToFilter.filter(b => !b.dlc || b.dlc.trim() === '');
      } else {
        behaviorsToFilter = behaviorsToFilter.filter(b => b.dlc === selectedDlc);
      }
    }
    return behaviorsToFilter;
  }, [allBehaviors, selectedDlc]);


  const weaponBlocksForTable = useMemo(() => {
    return baseFilteredBlocks.filter(block => getBlockCategory(block, categoryClasses) === 'Weapons & Tools');
  }, [baseFilteredBlocks, categoryClasses]);

  const nonWeaponBlocksForBlockTable = useMemo(() => {
    const nonWeapons = baseFilteredBlocks.filter(block => {
        const category = getBlockCategory(block, categoryClasses);
        return category !== 'Weapons & Tools' && category !== 'Thrusters';
    });

    if (selectedBlockCategory === 'All') {
      return nonWeapons;
    }
    if (selectedBlockCategory === 'Weapons & Tools') { 
      return []; 
    }
    return nonWeapons.filter(block => getBlockCategory(block, categoryClasses) === selectedBlockCategory);
  }, [baseFilteredBlocks, selectedBlockCategory, categoryClasses]);

  const showWeaponTable = (selectedBlockCategory === 'All' && weaponBlocksForTable.length > 0) || selectedBlockCategory === 'Weapons & Tools';
  const showBlockTable = selectedBlockCategory !== 'Weapons & Tools';
  
  const blockTableTitle = useMemo(() => {
    if (selectedBlockCategory === 'All') return "Other Block Information";
    return `${selectedBlockCategory} Information`;
  }, [selectedBlockCategory]);

  useEffect(() => {
    if (!BLOCK_CATEGORIES.includes(selectedBlockCategory)) {
      setSelectedBlockCategory(BLOCK_CATEGORIES[0]);
    }
  }, [BLOCK_CATEGORIES, selectedBlockCategory]);

  const [thrusterVisibility, setThrusterVisibility] = useState<ColumnVisibility<ThrusterColumnKey>>(
    () => getDefaultVisibility(THRUSTER_COLUMN_CONFIG)
  );
  const [blockVisibility, setBlockVisibility] = useState<ColumnVisibility<BlockColumnKey>>(
    () => getDefaultVisibility(BLOCK_COLUMN_CONFIG)
  );
  const [weaponVisibility, setWeaponVisibility] = useState<ColumnVisibility<WeaponColumnKey>>(
    () => getDefaultVisibility(WEAPON_COLUMN_CONFIG)
  );
  const [blueprintVisibility, setBlueprintVisibility] = useState<ColumnVisibility<BlueprintColumnKey>>(
    () => getDefaultVisibility(BLUEPRINT_COLUMN_CONFIG)
  );
  const [blueprintRecipeVisibility, setBlueprintRecipeVisibility] = useState<ColumnVisibility<BlueprintRecipeColumnKey>>(
    () => getDefaultVisibility(BLUEPRINT_RECIPE_COLUMN_CONFIG)
  );
  const [botVisibility, setBotVisibility] = useState<ColumnVisibility<BotColumnKey>>( 
    () => getDefaultVisibility(BOT_COLUMN_CONFIG)
  );
  const [componentVisibility, setComponentVisibility] = useState<ColumnVisibility<ComponentColumnKey>>( 
    () => getDefaultVisibility(COMPONENT_COLUMN_CONFIG)
  );
  const [droneBehaviorVisibility, setDroneBehaviorVisibility] = useState<ColumnVisibility<DroneBehaviorColumnKey>>( // Added
    () => getDefaultVisibility(DRONE_BEHAVIOR_COLUMN_CONFIG)
  );


  const handleToggleThrusterColumn = (key: ThrusterColumnKey) => setThrusterVisibility(prev => ({ ...prev, [key]: !prev[key] }));
  const handleToggleBlockColumn = (key: BlockColumnKey) => setBlockVisibility(prev => ({ ...prev, [key]: !prev[key] }));
  const handleToggleWeaponColumn = (key: WeaponColumnKey) => setWeaponVisibility(prev => ({ ...prev, [key]: !prev[key] }));
  const handleToggleBlueprintColumn = (key: BlueprintColumnKey) => setBlueprintVisibility(prev => ({ ...prev, [key]: !prev[key] }));
  const handleToggleBlueprintRecipeColumn = (key: BlueprintRecipeColumnKey) => setBlueprintRecipeVisibility(prev => ({ ...prev, [key]: !prev[key] }));
  const handleToggleBotColumn = (key: BotColumnKey) => setBotVisibility(prev => ({ ...prev, [key]: !prev[key] }));
  const handleToggleComponentColumn = (key: ComponentColumnKey) => setComponentVisibility(prev => ({ ...prev, [key]: !prev[key] })); 
  const handleToggleDroneBehaviorColumn = (key: DroneBehaviorColumnKey) => setDroneBehaviorVisibility(prev => ({ ...prev, [key]: !prev[key] })); // Added


  const handleResetThrusterColumns = () => setThrusterVisibility(getDefaultVisibility(THRUSTER_COLUMN_CONFIG));
  const handleResetBlockColumns = () => setBlockVisibility(getDefaultVisibility(BLOCK_COLUMN_CONFIG));
  const handleResetWeaponColumns = () => setWeaponVisibility(getDefaultVisibility(WEAPON_COLUMN_CONFIG));
  const handleResetBlueprintColumns = () => setBlueprintVisibility(getDefaultVisibility(BLUEPRINT_COLUMN_CONFIG));
  const handleResetBlueprintRecipeColumns = () => setBlueprintRecipeVisibility(getDefaultVisibility(BLUEPRINT_RECIPE_COLUMN_CONFIG));
  const handleResetBotColumns = () => setBotVisibility(getDefaultVisibility(BOT_COLUMN_CONFIG));
  const handleResetComponentColumns = () => setComponentVisibility(getDefaultVisibility(COMPONENT_COLUMN_CONFIG)); 
  const handleResetDroneBehaviorColumns = () => setDroneBehaviorVisibility(getDefaultVisibility(DRONE_BEHAVIOR_COLUMN_CONFIG)); // Added


  // Theme State
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    mode: 'dark',
    primaryColor: DEFAULT_PRIMARY_COLOR,
  });

  const handleThemeModeChange = (mode: ThemeMode) => setThemeConfig(prev => ({ ...prev, mode }));
  const handlePrimaryColorChange = (color: string) => setThemeConfig(prev => ({ ...prev, primaryColor: color }));
  const handleResetTheme = () => setThemeConfig({ mode: 'dark', primaryColor: DEFAULT_PRIMARY_COLOR });

  useEffect(() => {
    const styleElement = document.getElementById('dynamic-theme-styles');
    if (styleElement) {
      let cssText = `:root {
        --color-primary: ${themeConfig.primaryColor};
        --color-primary-hover: ${adjustColor(themeConfig.primaryColor, -20)};
        --color-primary-focus: ${adjustColor(themeConfig.primaryColor, -40)};
        --color-primary-text: ${getContrastingTextColor(themeConfig.primaryColor)};
        --color-selection-bg: var(--color-primary);
        --color-selection-text: var(--color-primary-text);
      `;
      if (themeConfig.mode === 'dark') {
        cssText += `
          --color-background: #0f172a; 
          --color-text-primary: #e2e8f0; 
          --color-text-secondary: #94a3b8; 
          --color-text-muted: #64748b; 
          --color-text-accent: var(--color-primary);
          --color-surface-1: #1e293b; 
          --color-surface-2: #334155; 
          --color-surface-3: #475569; 
          --color-border: #475569; 
          --color-scrollbar-track: #1e293b;
          --color-scrollbar-thumb: var(--color-primary);
          --color-scrollbar-thumb-hover: var(--color-primary-hover);
        }`;
      } else { 
        cssText += `
          --color-background: #f8fafc; 
          --color-text-primary: #0f172a; 
          --color-text-secondary: #475569; 
          --color-text-muted: #94a3b8; 
          --color-text-accent: var(--color-primary);
          --color-surface-1: #ffffff; 
          --color-surface-2: #f1f5f9; 
          --color-surface-3: #e2e8f0; 
          --color-border: #cbd5e1; 
          --color-scrollbar-track: #e2e8f0; 
          --color-scrollbar-thumb: var(--color-primary);
          --color-scrollbar-thumb-hover: var(--color-primary-hover);
        }`;
      }
      styleElement.textContent = cssText + ` }`; 
    }
  }, [themeConfig]);

  function adjustColor(color: string, amount: number): string {
    let usePound = false;
    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    if (r > 255) r = 255; else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) b = 255; else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amount;
    if (g > 255) g = 255; else if (g < 0) g = 0;
    const hex = (g | (b << 8) | (r << 16)).toString(16);
    return (usePound ? "#" : "") + ('000000' + hex).slice(-6);
  }

  function getContrastingTextColor(hexcolor: string): string {
    if (hexcolor.startsWith('#')) hexcolor = hexcolor.slice(1);
    if (hexcolor.length === 3) hexcolor = hexcolor.split('').map(char => char + char).join('');
    const r = parseInt(hexcolor.substring(0, 2), 16);
    const g = parseInt(hexcolor.substring(2, 4), 16);
    const b = parseInt(hexcolor.substring(4, 6), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#0f172a' : '#ffffff';
  }

  const [isPlanetInfoOpen, setIsPlanetInfoOpen] = useState(true);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(true);
  const [isThrusterTableOpen, setIsThrusterTableOpen] = useState(true);
  const [isWeaponTableOpen, setIsWeaponTableOpen] = useState(true);
  const [isOtherBlockTableOpen, setIsOtherBlockTableOpen] = useState(true);
  const [isBlueprintTableOpen, setIsBlueprintTableOpen] = useState(true);
  const [isBlueprintRecipeTableOpen, setIsBlueprintRecipeTableOpen] = useState(true);
  const [isBotTableOpen, setIsBotTableOpen] = useState(true); 
  const [isComponentTableOpen, setIsComponentTableOpen] = useState(true);
  const [isDroneBehaviorTableOpen, setIsDroneBehaviorTableOpen] = useState(true); // Added


  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-[var(--color-background)] text-[var(--color-text-primary)] selection:bg-[var(--color-selection-bg)] selection:text-[var(--color-selection-text)]">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl mt-6">
        <Controls
          gridSizes={Object.values(GridSize)}
          selectedGridSize={selectedGridSize}
          onGridSizeChange={setSelectedGridSize}
          planets={celestialBodies}
          selectedPlanetId={selectedPlanetId}
          onPlanetChange={setSelectedPlanetId}
          blockCategories={BLOCK_CATEGORIES}
          selectedBlockCategory={selectedBlockCategory}
          onBlockCategoryChange={setSelectedBlockCategory}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          dlcOptions={dlcOptions}
          selectedDlc={selectedDlc}
          onDlcChange={setSelectedDlc}
          thrusterColumnConfig={THRUSTER_COLUMN_CONFIG}
          thrusterVisibility={thrusterVisibility}
          onToggleThrusterColumn={handleToggleThrusterColumn}
          onResetThrusterColumns={handleResetThrusterColumns}
          blockColumnConfig={BLOCK_COLUMN_CONFIG}
          blockVisibility={blockVisibility}
          onToggleBlockColumn={handleToggleBlockColumn}
          onResetBlockColumns={handleResetBlockColumns}
          weaponColumnConfig={WEAPON_COLUMN_CONFIG}
          weaponVisibility={weaponVisibility}
          onToggleWeaponColumn={handleToggleWeaponColumn}
          onResetWeaponColumns={handleResetWeaponColumns}
          blueprintColumnConfig={BLUEPRINT_COLUMN_CONFIG}
          blueprintVisibility={blueprintVisibility}
          onToggleBlueprintColumn={handleToggleBlueprintColumn}
          onResetBlueprintColumns={handleResetBlueprintColumns}
          blueprintRecipeColumnConfig={BLUEPRINT_RECIPE_COLUMN_CONFIG}
          blueprintRecipeVisibility={blueprintRecipeVisibility}
          onToggleBlueprintRecipeColumn={handleToggleBlueprintRecipeColumn}
          onResetBlueprintRecipeColumns={handleResetBlueprintRecipeColumns}
          botColumnConfig={BOT_COLUMN_CONFIG}
          botVisibility={botVisibility}
          onToggleBotColumn={handleToggleBotColumn}
          onResetBotColumns={handleResetBotColumns}
          componentColumnConfig={COMPONENT_COLUMN_CONFIG} 
          componentVisibility={componentVisibility} 
          onToggleComponentColumn={handleToggleComponentColumn} 
          onResetComponentColumns={handleResetComponentColumns} 
          droneBehaviorColumnConfig={DRONE_BEHAVIOR_COLUMN_CONFIG} // Added
          droneBehaviorVisibility={droneBehaviorVisibility} // Added
          onToggleDroneBehaviorColumn={handleToggleDroneBehaviorColumn} // Added
          onResetDroneBehaviorColumns={handleResetDroneBehaviorColumns} // Added
          themeConfig={themeConfig}
          onThemeModeChange={handleThemeModeChange}
          onPrimaryColorChange={handlePrimaryColorChange}
          onResetTheme={handleResetTheme}
        />
        
        {selectedPlanet && (
           <section className="mb-6">
            <button 
              onClick={() => setIsPlanetInfoOpen(!isPlanetInfoOpen)} 
              className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
              aria-expanded={isPlanetInfoOpen}
              aria-controls="planet-info-content"
            >
              <span>{selectedPlanet.name} Details</span>
              <ChevronIcon isOpen={isPlanetInfoOpen} />
            </button>
            {isPlanetInfoOpen && (
              <div id="planet-info-content">
                <PlanetInfo planet={selectedPlanet} />
              </div>
            )}
          </section>
        )}

        <section className="mb-6">
            <button 
              onClick={() => setIsCalculatorOpen(!isCalculatorOpen)} 
              className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
              aria-expanded={isCalculatorOpen}
              aria-controls="calculator-content"
            >
              <span>Thruster Lift & Mass Calculator</span>
              <ChevronIcon isOpen={isCalculatorOpen} />
            </button>
           {isCalculatorOpen && (
              <div id="calculator-content">
                 <ThrusterCalculator 
                    allThrusters={thrustersForCalculator}
                    allBlocks={allBlocks}
                    selectedPlanet={selectedPlanet}
                    selectedGridSize={selectedGridSize}
                  />
              </div>
           )}
        </section>
        
        <section className="mb-6">
            <button 
              onClick={() => setIsThrusterTableOpen(!isThrusterTableOpen)} 
              className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
              aria-expanded={isThrusterTableOpen}
              aria-controls="thruster-table-content"
            >
              <span>Thruster Information</span>
              <ChevronIcon isOpen={isThrusterTableOpen} />
            </button>
           {isThrusterTableOpen && (
              <div id="thruster-table-content">
                <ThrusterTable
                    thrusters={filteredThrusters}
                    selectedPlanetId={selectedPlanetId}
                    celestialBodies={celestialBodies}
                    columnVisibility={thrusterVisibility}
                  />
              </div>
           )}
        </section>

        {showWeaponTable && weaponBlocksForTable.length > 0 && (
          <section className="mb-6">
             <button 
                onClick={() => setIsWeaponTableOpen(!isWeaponTableOpen)} 
                className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
                aria-expanded={isWeaponTableOpen}
                aria-controls="weapon-table-content"
              >
                <span>Weapon Information</span>
                <ChevronIcon isOpen={isWeaponTableOpen} />
            </button>
            {isWeaponTableOpen && (
                <div id="weapon-table-content">
                    <WeaponTable 
                        weapons={weaponBlocksForTable} 
                        columnVisibility={weaponVisibility}
                    />
                </div>
            )}
          </section>
        )}
        
        {showBlockTable && nonWeaponBlocksForBlockTable.length > 0 && (
          <section className="mb-6">
            <button 
                onClick={() => setIsOtherBlockTableOpen(!isOtherBlockTableOpen)} 
                className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
                aria-expanded={isOtherBlockTableOpen}
                aria-controls="other-block-table-content"
              >
                <span>{blockTableTitle}</span>
                <ChevronIcon isOpen={isOtherBlockTableOpen} />
            </button>
            {isOtherBlockTableOpen && (
                <div id="other-block-table-content">
                    <BlockTable 
                    blocks={nonWeaponBlocksForBlockTable} 
                    columnVisibility={blockVisibility}
                    />
                </div>
            )}
          </section>
        )}

        {filteredComponents.length > 0 && ( 
            <section className="mb-6">
                <button 
                    onClick={() => setIsComponentTableOpen(!isComponentTableOpen)} 
                    className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
                    aria-expanded={isComponentTableOpen}
                    aria-controls="component-table-content"
                >
                    <span>Component Information</span>
                    <ChevronIcon isOpen={isComponentTableOpen} />
                </button>
                {isComponentTableOpen && (
                    <div id="component-table-content">
                        <ComponentTable 
                            components={filteredComponents} 
                            columnVisibility={componentVisibility}
                        />
                    </div>
                )}
            </section>
        )}

        {allBlueprintClasses.length > 0 && (
            <section className="mb-6">
                <button 
                    onClick={() => setIsBlueprintTableOpen(!isBlueprintTableOpen)} 
                    className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
                    aria-expanded={isBlueprintTableOpen}
                    aria-controls="blueprint-table-content"
                >
                    <span>Blueprint Classes Information</span>
                    <ChevronIcon isOpen={isBlueprintTableOpen} />
                </button>
                {isBlueprintTableOpen && (
                    <div id="blueprint-table-content">
                        <BlueprintTable 
                            blueprints={allBlueprintClasses} 
                            columnVisibility={blueprintVisibility}
                        />
                    </div>
                )}
            </section>
        )}
        
        {allBlueprintRecipes.length > 0 && (
            <section className="mb-6">
                <button 
                    onClick={() => setIsBlueprintRecipeTableOpen(!isBlueprintRecipeTableOpen)} 
                    className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
                    aria-expanded={isBlueprintRecipeTableOpen}
                    aria-controls="blueprint-recipe-table-content"
                >
                    <span>Blueprint Recipes Information</span>
                    <ChevronIcon isOpen={isBlueprintRecipeTableOpen} />
                </button>
                {isBlueprintRecipeTableOpen && (
                    <div id="blueprint-recipe-table-content">
                        <BlueprintRecipeTable 
                            recipes={allBlueprintRecipes} 
                            columnVisibility={blueprintRecipeVisibility}
                            allBlocks={allBlocks}
                            allComponents={allComponents}
                            allAmmoMagazines={ammoMagazines}
                        />
                    </div>
                )}
            </section>
        )}

        {filteredBots.length > 0 && ( 
            <section className="mb-6">
                <button 
                    onClick={() => setIsBotTableOpen(!isBotTableOpen)} 
                    className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
                    aria-expanded={isBotTableOpen}
                    aria-controls="bot-table-content"
                >
                    <span>Bot Information</span>
                    <ChevronIcon isOpen={isBotTableOpen} />
                </button>
                {isBotTableOpen && (
                    <div id="bot-table-content">
                        <BotTable 
                            bots={filteredBots} 
                            columnVisibility={botVisibility}
                        />
                    </div>
                )}
            </section>
        )}

        {filteredDroneBehaviors.length > 0 && ( // Added DroneBehaviorTable Section
            <section className="mb-6">
                <button 
                    onClick={() => setIsDroneBehaviorTableOpen(!isDroneBehaviorTableOpen)} 
                    className="flex items-center justify-between w-full text-xl font-semibold text-[var(--color-text-accent)] mb-2 p-2 rounded hover:bg-[var(--color-surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)]"
                    aria-expanded={isDroneBehaviorTableOpen}
                    aria-controls="drone-behavior-table-content"
                >
                    <span>Drone Behavior Information</span>
                    <ChevronIcon isOpen={isDroneBehaviorTableOpen} />
                </button>
                {isDroneBehaviorTableOpen && (
                    <div id="drone-behavior-table-content">
                        <DroneBehaviorTable 
                            droneBehaviors={filteredDroneBehaviors} 
                            columnVisibility={droneBehaviorVisibility}
                        />
                    </div>
                )}
            </section>
        )}


      </main>
      <Footer footnotes={footnotes} />
    </div>
  );
};

export default App;