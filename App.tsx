
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { ThrusterTable } from './components/ThrusterTable';
import { BlockTable } from './components/BlockTable'; // Renamed from ArmorBlockTable
import { PlanetInfo } from './components/PlanetInfo';
import { Footer } from './components/Footer';
import { GridSize, CelestialBodyId, BlockDefinition, CelestialBody } from './types'; // Updated import
import { spaceEngineersData } from './data/spaceEngineersData';

export const BLOCK_CATEGORIES = [
  'All',
  'Armor & Structural',
  'Control & Cockpits',
  'Power & Survival',
  'Production & Refining',
  'Conveyors & Cargo',
  'Weapons & Tools',
  'Lights',
  'Communication & Navigation',
  'Doors & Mechanical',
  'Gravity & Mass',
  'Displays & Signs',
  'Furniture & Stations',
  'AI & Automation',
  'Miscellaneous'
];

// Helper function to determine block category
// This function can be quite complex and might need ongoing refinement
export function getBlockCategory(block: BlockDefinition): string {
  const typeId = block.typeId;
  const subtypeId = block.id.toLowerCase(); // block.id is SubtypeId
  const blockPairName = block.blockPairName?.toLowerCase() || '';
  const name = block.name.toLowerCase();

  // Prioritize specific TypeIds
  const TYPEID_TO_MAIN_CATEGORY: Record<string, string> = {
    ReflectorLight: 'Lights',
    InteriorLight: 'Lights',
    OxygenGenerator: 'Power & Survival',
    Reactor: 'Power & Survival',
    SolarPanel: 'Power & Survival',
    WindTurbine: 'Power & Survival',
    BatteryBlock: 'Power & Survival',
    HydrogenEngine: 'Power & Survival', // Assuming TypeId
    SurvivalKit: 'Power & Survival', // Assuming TypeId, might be 'SurvivalKitBlock'
    MedicalRoom: 'Power & Survival', // Assuming TypeId
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
    MotorStator: 'Doors & Mechanical', // Rotor
    MotorAdvancedStator: 'Doors & Mechanical', // Adv Rotor
    PistonBase: 'Doors & Mechanical',
    ExtendedPistonBase: 'Doors & Mechanical',
    PistonTop: 'Doors & Mechanical',
    LandingGear: 'Doors & Mechanical',
    MergeBlock: 'Doors & Mechanical',
    Connector: 'Conveyors & Cargo',
    ConveyorConnector: 'Conveyors & Cargo', // Tubes, Pipes
    Conveyor: 'Conveyors & Cargo', // Sorter, Junction
    ConveyorSorter: 'Conveyors & Cargo',
    Collector: 'Conveyors & Cargo',
    Ejector: 'Conveyors & Cargo', // Often 'Connector' TypeId with 'Ejector' in name/subtype
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
    TargetDummyBlock: 'Miscellaneous', // Could also be Weapons & Tools if it has health/takes damage for testing
    Projector: 'Miscellaneous',
    SoundBlock: 'Miscellaneous',
    UpgradeModule: 'Miscellaneous', // Often for production or weapons
    StoreBlock: 'Furniture & Stations', // Or a new "Trading" category
    VendingMachine: 'Furniture & Stations',
    Jukebox: 'Furniture & Stations',
    Kitchen: 'Furniture & Stations',
    Planter: 'Furniture & Stations',
    CryoChamber: 'Furniture & Stations',
    ButtonPanel: 'Control & Cockpits',
    Ladder2: 'Armor & Structural',
    Passage: 'Armor & Structural',
    AirVent: 'Doors & Mechanical', // Could also be Power & Survival
    ExhaustBlock: 'Furniture & Stations', // Decorative
    SafeZoneBlock: 'Miscellaneous', // Or a dedicated 'Station Services'
    ContractBlock: 'Miscellaneous', // Or "Trading"
    Thrust: 'Thrusters', // Should be handled by thruster table
    Warhead: 'Weapons & Tools',
    Decoy: 'Weapons & Tools', // Or Communication & Navigation
  };

  if (TYPEID_TO_MAIN_CATEGORY[typeId]) {
    // Special handling for TerminalBlock as it's very generic
    if (typeId === 'TerminalBlock') {
      if (subtypeId.includes('accesspanel') || name.includes('access panel')) return 'Doors & Mechanical';
      if (subtypeId.includes('controlpanel') || name.includes('control panel')) return 'Control & Cockpits';
      if (subtypeId.includes('freezer') || subtypeId.includes('firstaid')) return 'Furniture & Stations';
      return 'Control & Cockpits'; // Default for other terminals
    }
     if (typeId === 'Connector' && (subtypeId.includes('ejector') || name.includes('ejector'))) {
      return 'Conveyors & Cargo';
    }
    if (typeId === 'ShipWelder' || typeId === 'ShipGrinder' || typeId === 'Drill') return 'Weapons & Tools';
    return TYPEID_TO_MAIN_CATEGORY[typeId];
  }

  // Heuristics for CubeBlock and others not directly mapped
  if (typeId === 'CubeBlock') {
    if (subtypeId.includes('armor') || blockPairName.includes('armor') || name.includes('armor block')) return 'Armor & Structural';
    if (subtypeId.includes('beam') || blockPairName.includes('beam') || name.includes('beam block')) return 'Armor & Structural';
    if (subtypeId.includes('girder') || blockPairName.includes('girder')) return 'Armor & Structural';
    if (name.includes('column') || name.includes('pillar')) return 'Armor & Structural';
    if (subtypeId.includes('passage') || blockPairName.includes('passage') || subtypeId.includes('corridor')) return 'Armor & Structural';
    if (subtypeId.includes('catwalk') || blockPairName.includes('catwalk')) return 'Armor & Structural';
    if (subtypeId.includes('window') || blockPairName.includes('window')) return 'Armor & Structural';
    if (subtypeId.includes('interiorwall') || blockPairName.includes('interiorwall')) return 'Armor & Structural';
    if (subtypeId.includes('stairs') || blockPairName.includes('stairs')) return 'Armor & Structural';
    if (subtypeId.includes('ramp') || blockPairName.includes('ramp')) return 'Armor & Structural';
    if (subtypeId.includes('coverwall') || blockPairName.includes('coverwall')) return 'Armor & Structural';
    if (subtypeId.includes('railing') || blockPairName.includes('railing')) return 'Armor & Structural';
    if (subtypeId.includes('floor') && !name.includes('slab')) return 'Armor & Structural';
    if (subtypeId.includes('floorslab') || (subtypeId.includes('floor') && name.includes('slab'))) return 'Furniture & Stations';
    if (subtypeId.includes('duct') || name.includes('duct')) return 'Armor & Structural';
    if (subtypeId.includes('pipework') || name.includes('pipe work')) return 'Armor & Structural';
    if (subtypeId.includes('warningsign') || name.includes('warning sign') || name.includes('sign block')) return 'Displays & Signs';
    // Furniture / Decorative for CubeBlock
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
    
    return 'Miscellaneous'; // Default for unclassified CubeBlocks
  }
   // Default weapon categorization if not caught by TypeId map
  if (name.includes('turret') || name.includes('gatling') || name.includes('missile launcher') || name.includes('rocket launcher') || name.includes('gun')) {
    return 'Weapons & Tools';
  }


  return 'Miscellaneous'; // Default for any other TypeId
}


const App: React.FC = () => {
  const [selectedGridSize, setSelectedGridSize] = useState<GridSize>(GridSize.LARGE);
  const [selectedPlanetId, setSelectedPlanetId] = useState<CelestialBodyId>(CelestialBodyId.EARTH);
  const [selectedBlockCategory, setSelectedBlockCategory] = useState<string>(BLOCK_CATEGORIES[0]); // Default to 'All'
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { celestialBodies, thrusters: allThrusters, footnotes, blocks: allBlocksData } = spaceEngineersData;
  const allBlocks = useMemo(() => allBlocksData || [], [allBlocksData]);


  const selectedPlanet = useMemo(() => {
    return celestialBodies.find(p => p.id === selectedPlanetId);
  }, [selectedPlanetId, celestialBodies]);

  const filteredThrusters = useMemo(() => {
    return allThrusters.filter(t => t.gridSize === selectedGridSize);
  }, [selectedGridSize, allThrusters]);

  const categorizedAndFilteredBlocks = useMemo(() => {
    let tempBlocks = allBlocks;

    // Filter by category
    if (selectedBlockCategory !== 'All') {
      tempBlocks = tempBlocks.filter(block => getBlockCategory(block) === selectedBlockCategory);
    }

    // Filter by grid size
    tempBlocks = tempBlocks.filter(block => block.gridSize === selectedGridSize);
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const lowerSearchQuery = searchQuery.toLowerCase();
      tempBlocks = tempBlocks.filter(block =>
        block.name.toLowerCase().includes(lowerSearchQuery) ||
        block.id.toLowerCase().includes(lowerSearchQuery) || // SubtypeId
        (block.blockPairName && block.blockPairName.toLowerCase().includes(lowerSearchQuery)) ||
        block.displayNameKey.toLowerCase().includes(lowerSearchQuery) ||
        block.typeId.toLowerCase().includes(lowerSearchQuery) ||
        (block.weaponDefinitionId && block.weaponDefinitionId.toLowerCase().includes(lowerSearchQuery)) ||
        (block.ammoMagazines && block.ammoMagazines.some(mag => mag.toLowerCase().includes(lowerSearchQuery)))
      );
    }
    return tempBlocks;
  }, [allBlocks, selectedBlockCategory, selectedGridSize, searchQuery]);
  
  const currentBlockTableTitle = selectedBlockCategory === 'All' ? 
    'All Blocks' : 
    `${selectedBlockCategory} Information`;

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-slate-900 text-slate-200 selection:bg-sky-500 selection:text-white">
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
        />
        {selectedPlanet && <PlanetInfo planet={selectedPlanet} />}
        
        <h3 className="text-2xl font-semibold text-sky-400 mt-8 mb-4">Thruster Information</h3>
        <ThrusterTable
          thrusters={filteredThrusters}
          selectedPlanetId={selectedPlanetId}
          celestialBodies={celestialBodies}
        />

        <h3 className="text-2xl font-semibold text-sky-400 mt-10 mb-4">{currentBlockTableTitle}</h3>
        <BlockTable blocks={categorizedAndFilteredBlocks} />

      </main>
      <Footer footnotes={footnotes} />
    </div>
  );
};

export default App;