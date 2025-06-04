import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { ThrusterTable } from './components/ThrusterTable';
import { BlockTable } from './components/BlockTable'; 
import { WeaponTable } from './components/WeaponTable';
import { PlanetInfo } from './components/PlanetInfo';
import { Footer } from './components/Footer';
import { ThrusterCalculator } from './components/ThrusterCalculator'; // Import Calculator
import { GridSize, CelestialBodyId, BlockDefinition } from './types'; 
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
export function getBlockCategory(block: BlockDefinition): string {
  const typeId = block.typeId;
  const subtypeId = block.id.toLowerCase(); 
  const blockPairName = block.blockPairName?.toLowerCase() || '';
  const name = block.name.toLowerCase();

  const TYPEID_TO_MAIN_CATEGORY: Record<string, string> = {
    ReflectorLight: 'Lights',
    InteriorLight: 'Lights',
    EmissiveBlock: 'Lights', // Added for Sparks of the Future (Neon Tubes)
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
    UpgradeModule: 'Miscellaneous', 
    StoreBlock: 'Furniture & Stations', 
    VendingMachine: 'Furniture & Stations',
    Jukebox: 'Furniture & Stations',
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
    Thrust: 'Thrusters', // This is a generic typeId, should be fine as it's handled by ThrusterTable
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
    if (typeId === 'Thrust') return 'Thrusters'; // Ensure thrusters are not miscategorized
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
    if (subtypeId.includes('interiorwall') || blockPairName.includes('interiorwall') || subtypeId.includes('scifiwall')) return 'Armor & Structural'; // Added scifiwall
    if (subtypeId.includes('stairs') || blockPairName.includes('stairs')) return 'Armor & Structural';
    if (subtypeId.includes('ramp') || blockPairName.includes('ramp')) return 'Armor & Structural';
    if (subtypeId.includes('coverwall') || blockPairName.includes('coverwall')) return 'Armor & Structural';
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
    if (subtypeId.includes('barcounter') || name.includes('bar counter')) return 'Furniture & Stations'; // Added for Sparks of the Future
    
    return 'Miscellaneous'; 
  }
  
  if (name.includes('turret') || name.includes('gatling') || name.includes('missile') || name.includes('rocket launcher') || name.includes('gun') || name.includes('warhead') || name.includes('decoy') ||
      subtypeId.includes('gatling') || subtypeId.includes('missile') || subtypeId.includes('rocket') || subtypeId.includes('turret')) {
    return 'Weapons & Tools';
  }

  return 'Miscellaneous';
}


const App: React.FC = () => {
  const [selectedGridSize, setSelectedGridSize] = useState<GridSize>(GridSize.LARGE);
  const [selectedPlanetId, setSelectedPlanetId] = useState<CelestialBodyId>(CelestialBodyId.EARTH);
  const [selectedBlockCategory, setSelectedBlockCategory] = useState<string>(BLOCK_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { celestialBodies, thrusters: allThrusters, footnotes, blocks: allBlocksData } = spaceEngineersData;
  const allBlocks = useMemo(() => allBlocksData || [], [allBlocksData]);

  const selectedPlanet = useMemo(() => {
    return celestialBodies.find(p => p.id === selectedPlanetId);
  }, [selectedPlanetId, celestialBodies]);

  const filteredThrusters = useMemo(() => {
    return allThrusters.filter(t => t.gridSize === selectedGridSize);
  }, [selectedGridSize, allThrusters]);

  const baseFilteredBlocks = useMemo(() => {
    let tempBlocks = allBlocks;
    // Filter by grid size
    tempBlocks = tempBlocks.filter(block => block.gridSize === selectedGridSize);
    
    // Filter by search query
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
  }, [allBlocks, selectedGridSize, searchQuery]);

  const weaponBlocksForTable = useMemo(() => {
    return baseFilteredBlocks.filter(block => getBlockCategory(block) === 'Weapons & Tools');
  }, [baseFilteredBlocks]);

  const nonWeaponBlocksForBlockTable = useMemo(() => {
    const nonWeapons = baseFilteredBlocks.filter(block => getBlockCategory(block) !== 'Weapons & Tools' && getBlockCategory(block) !== 'Thrusters');
    if (selectedBlockCategory === 'All') {
      return nonWeapons;
    }
    if (selectedBlockCategory === 'Weapons & Tools') {
      return []; // Weapons are handled by WeaponTable
    }
    return nonWeapons.filter(block => getBlockCategory(block) === selectedBlockCategory);
  }, [baseFilteredBlocks, selectedBlockCategory]);

  const showWeaponTable = (selectedBlockCategory === 'All' && weaponBlocksForTable.length > 0) || selectedBlockCategory === 'Weapons & Tools';
  const showBlockTable = selectedBlockCategory !== 'Weapons & Tools';
  
  const blockTableTitle = useMemo(() => {
    if (selectedBlockCategory === 'All') return "Other Block Information";
    return `${selectedBlockCategory} Information`;
  }, [selectedBlockCategory]);

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

        <ThrusterCalculator 
          allThrusters={allThrusters}
          allBlocks={allBlocks}
          selectedPlanet={selectedPlanet}
          selectedGridSize={selectedGridSize}
        />
        
        <h3 className="text-2xl font-semibold text-sky-400 mt-8 mb-4">Thruster Information</h3>
        <ThrusterTable
          thrusters={filteredThrusters}
          selectedPlanetId={selectedPlanetId}
          celestialBodies={celestialBodies}
        />

        {showWeaponTable && (
          <>
            <h3 className="text-2xl font-semibold text-sky-400 mt-10 mb-4">Weapon Information</h3>
            <WeaponTable weapons={weaponBlocksForTable} />
          </>
        )}
        
        {showBlockTable && nonWeaponBlocksForBlockTable.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-sky-400 mt-10 mb-4">{blockTableTitle}</h3>
            <BlockTable blocks={nonWeaponBlocksForBlockTable} />
          </>
        )}

      </main>
      <Footer footnotes={footnotes} />
    </div>
  );
};

export default App;
