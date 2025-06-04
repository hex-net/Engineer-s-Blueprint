export enum GridSize {
  LARGE = 'Large Grid',
  SMALL = 'Small Grid',
}

export enum ThrusterType {
  HYDROGEN = 'Hydrogen',
  ATMOS = 'Atmos',
  ATMO_FLAT = 'Atmo-flat',
  ION = 'Ion',
}

export enum ThrusterSize {
  LARGE = 'large',
  SMALL = 'small',
}

export enum CelestialBodyId {
  EARTH = 'earth',
  MOON = 'moon',
  MARS = 'mars',
  EUROPA = 'europa',
  ALIEN = 'alien',
  TITAN = 'titan',
  TRITON = 'triton',
  PERTAM = 'pertam',
}

export interface CelestialBody {
  id: CelestialBodyId;
  name: string;
  gravityG: number;
  gravityMs2: number;
  atmosphereDensity: string;
  atmosphereNotes?: string;
}

export interface ThrusterPerformance {
  staticLiftKg: string | number; // Can be number or string like "0²" or "N/A"
}

export interface BlockComponent { // Renamed from ThrusterComponent and ArmorBlockComponent
  subtype: string;
  count: number;
}

export interface Thruster {
  id: string;
  gridSize: GridSize;
  type: ThrusterType;
  size: ThrusterSize;
  thrustN: number;
  powerMW: string | number;
  damageRange: string | number;
  performance: Partial<Record<CelestialBodyId, ThrusterPerformance>>;
  pcu?: number;
  buildTimeSeconds?: number;
  components?: BlockComponent[]; // Updated to BlockComponent
}

export interface Footnote {
  id: string;
  text: string;
  link?: string;
}

export interface BlockDefinition { // Renamed from ArmorBlock
  id: string; // From SubtypeId
  typeId: string; // From TypeId
  name: string; // User-friendly name generated from SubtypeId
  displayNameKey: string; // Raw DisplayName from XML
  icon: string; // Filename extracted from Icon path
  iconPath: string; // Original icon path from XML
  gridSize: GridSize;
  size?: { x: number; y: number; z: number }; // Physical dimensions
  buildTimeSeconds?: number;
  components?: BlockComponent[];
  pcu?: number;
  massKg?: number; // Added for block weight
  blockPairName?: string;
  edgeType?: string;
  isAirTight?: boolean;
  guiVisible?: boolean;
  dlc?: string;
  // Light specific properties
  lightRadius?: { min: number; max: number; default: number };
  lightFalloff?: { min: number; max: number; default: number };
  lightIntensity?: { min: number; max: number; default: number };
  requiredPowerInput?: number;
  // Weapon specific properties
  weaponDefinitionId?: string; // From WeaponDefinitionId@Subtype
  ammoMagazines?: string[];    // From AmmoMagazines/AmmoMagazine@Subtype
  maxRangeMeters?: number;     // From MaxRangeMeters (primarily for turrets)
  // Fields typically from WeaponDefinition, might not be in block XML, added as placeholders
  baseRateOfFire?: number;     // e.g., from RateOfFire in a linked WeaponDefinition
  shotDeviationAngle?: number; // e.g., from DeviateShotAngle for accuracy indication
  projectileDamage?: number;   // Placeholder; actual damage is usually in AmmoDefinition
}

export interface SpaceEngineersData {
  celestialBodies: CelestialBody[];
  thrusters: Thruster[];
  footnotes: Footnote[];
  blocks?: BlockDefinition[];
}