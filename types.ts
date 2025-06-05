export enum GridSize {
  LARGE = 'Large Grid',
  SMALL = 'Small Grid',
}

export enum ThrusterType {
  HYDROGEN = 'Hydrogen',
  ATMOS = 'Atmos',
  ATMO_FLAT = 'Atmo-flat', // For flat atmospheric thrusters if distinct
  ION = 'Ion',
  PROTOTECH = 'Prototech', // Added for Prototech thrusters from DLC
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
  atmosphereDensity: string; // e.g. "Optimal (100%)", "Thin (60%)", "None (0%)"
  atmosphereNotes?: string;
}

export interface ThrusterPerformance {
  staticLiftKg: string | number; // Can be number or string like "0²" or "N/A"
  actualEffectiveness?: number; // Added to store calculated effectiveness
}

export interface BlockComponent { // This represents a component needed to BUILD a block
  subtype: string; // e.g., SteelPlate, Computer
  count: number;
}

export interface FuelConverterInfo {
  fuelId: {
    typeId: string;
    subtypeId: string;
  };
  efficiency: number;
}

export interface Thruster {
  id: string; // From SubtypeId
  name: string; // Generated name
  icon: string; // Icon filename
  gridSize: GridSize;
  type: ThrusterType;
  size: ThrusterSize; // Large or Small thruster unit
  thrustN: number; // ForceMagnitude
  powerMW: number; // MaxPowerConsumption
  minPowerConsumption?: number; // MinPowerConsumption
  damageRange?: number; // FlameDamageLengthScale
  flameDirectDamage?: number; // FlameDamage
  pcu?: number;
  buildTimeSeconds?: number;
  components?: BlockComponent[];
  performance?: Partial<Record<CelestialBodyId, ThrusterPerformance>>; 
  minPlanetaryInfluence?: number;
  maxPlanetaryInfluence?: number;
  effectivenessAtMinInfluence?: number;
  effectivenessAtMaxInfluence?: number;
  needsAtmosphereForInfluence?: boolean;
  fuelConverter?: FuelConverterInfo;
  dlc?: string;
  massKg?: number; // Added for thruster weight
  fuelLitersPerSecond?: number; // Added for fuel consumption rate
}

export interface Footnote {
  id: string;
  text: string;
  link?: string;
}

export interface BlockDefinition {
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
  baseRateOfFire?: number;     // e.g., from RateOfFire in a linked WeaponDefinition
  shotsPerSecond?: number;    // Derived: baseRateOfFire / 60
  shotDeviationAngle?: number; // e.g., from DeviateShotAngle for accuracy indication
  projectileDamage?: number;   // Placeholder; actual damage is usually in AmmoDefinition
  // Inventory specific properties
  maxVolumeLiters?: number;        // Maximum inventory volume in Liters
  maxPossibleCargoWeightKg?: number; // Max weight if filled with Platinum Ingots (kg)
}

// Represents a craftable/tradeable component item itself
export interface ComponentDefinition {
  id: string; // SubtypeId
  typeId: string; // Should always be Component
  displayNameKey: string;
  name: string; // Generated name
  icon?: string; // Icon filename
  iconPath?: string;
  size?: { x: number; y: number; z: number }; // Physical dimensions of the item
  massKg?: number;
  volumeLiters?: number;
  model?: string;
  physicalMaterial?: string;
  maxIntegrity?: number;
  dropProbability?: number;
  health?: number;
  dlc?: string; 
  minimumOfferAmount?: number;
  maximumOfferAmount?: number;
  minimumOrderAmount?: number;
  maximumOrderAmount?: number;
  canPlayerOrder?: boolean;
  minimumAcquisitionAmount?: number;
  maximumAcquisitionAmount?: number;
}


export interface CargoReferenceItem {
  id: string; 
  name: string; 
  massKgPerUnit: number;
  volumeLitersPerUnit: number;
  densityKgPerLiter: number; 
}

export interface AmmoMagazineDefinition {
  id: string; 
  typeId: string; 
  displayNameKey: string;
  name: string; 
  icon?: string;
  iconPath?: string; 
  size?: { x: number; y: number; z: number };
  massKg?: number;
  volumeLiters?: number;
  capacity?: number;
  ammoDefinitionId?: string; 
  dlc?: string;
  minimumOfferAmount?: number;
  maximumOfferAmount?: number;
  minimumOrderAmount?: number;
  maximumOrderAmount?: number;
  canPlayerOrder?: boolean;
}

export interface AmmoDefinition {
  id: string; 
  typeId: string; 
  desiredSpeed?: number;
  speedVariance?: number;
  maxTrajectory?: number;
  backkickForce?: number;
  physicalMaterial?: string;
  explosiveDamageMultiplier?: number;
  isExplosive?: boolean; 
  deathMessage?: string;
  endOfLifeSound?: string; 
  endOfLifeEffect?: string; 
  projectileTrailScale?: number;
  projectileHitImpulse?: number;
  projectileMassDamage?: number;
  projectileHealthDamage?: number;
  headShot?: boolean;
  projectileHeadShotDamage?: number;
  missileMass?: number;
  missileExplosionRadius?: number;
  missileModelName?: string;
  missileAcceleration?: number;
  missileInitialSpeed?: number;
  missileSkipAcceleration?: boolean;
  missileExplosionDamage?: number;
  missileTrailEffect?: string;
  missileHealthPool?: number;
  missileGravityEnabled?: boolean;
  missileMinRicochetAngle?: number;
  missileMaxRicochetAngle?: number;
  missileMinRicochetProbability?: number;
  missileMaxRicochetProbability?: number;
  missileRicochetDamage?: number;
  explosionFlags?: string;
}

export interface GuiBlockCategoryDefinition {
  idTypeId: string;
  idSubtypeId?: string;
  displayNameKey: string; 
  displayName: string; 
  name: string; 
  searchBlocks: boolean;
  isToolCategory: boolean;
  isShipCategory: boolean;
  isAnimationCategory: boolean;
  publicItem: boolean; 
  availableInSurvival: boolean;
  strictSearch: boolean;
  dlc?: string; 
  itemIds: string[];
}

export interface BlockIdentifierInTag {
  typeId: string;
  subtypeId: string;
}

export interface BlockTagDefinition {
  id: string; 
  displayName: string; 
  blocks: BlockIdentifierInTag[]; 
}

export interface BlueprintClass {
  idTypeId: string; 
  idSubtypeId: string;
  displayNameKey: string;
  displayName: string;
  descriptionKey?: string;
  description?: string;
  icon?: string;
  highlightIcon?: string;
  focusIcon?: string;
  inputConstraintIcon?: string;
  outputConstraintIcon?: string;
}

export interface BlueprintRecipeItem {
  typeId: string;
  subtypeId: string;
  amount: number;
}

export interface BlueprintRecipe {
  idTypeId: string; 
  idSubtypeId: string; 
  displayNameKey: string;
  displayName: string; 
  icon?: string; 
  prerequisites: BlueprintRecipeItem[];
  results: BlueprintRecipeItem[];
  baseProductionTimeInSeconds: number;
  isPrimary?: boolean;
  priority?: number;
}

export interface BotDefinition {
  id: string; 
  displayNameKey: string;
  name: string; 
  icon?: string; 
  botModel: string;
  botBehaviorTreeSubtype: string;
  behaviorType: string;
  targetType: string;
  factionTag?: string;
  attackLength?: number;
  attackRadius?: number;
  characterDamage?: number;
  gridDamage?: number;
  targetGrids?: boolean;
  targetCharacters?: boolean;
  dlc?: string;
}

export interface WeaponRule {
  weapon?: string;
  timeMin: number;
  timeMax: number;
  firingAfterLosingSight?: boolean;
  canGoThroughVoxels?: boolean;
}

export interface WeaponBehavior {
  name: string;
  priority: number;
  requirements?: { weapons: string[] };
  requirementsIsWhitelist?: boolean;
  ignoresVoxels?: boolean;
  ignoresGrids?: boolean;
  timeMin: number;
  timeMax: number;
  weaponRules?: WeaponRule[];
}

export interface DroneBehaviorDefinition {
  id: string; 
  name: string; 
  strafeWidth?: number;
  strafeHeight?: number;
  strafeDepth?: number;
  minStrafeDistance?: number;
  avoidCollisions?: boolean;
  rotateToPlayer?: boolean;
  useStaticWeaponry?: boolean;
  useTools?: boolean;
  useRammingBehavior?: boolean;
  alternativeBehavior?: string;
  speedLimit?: number;
  playerYAxisOffset?: number;
  targetDistance?: number;
  maxManeuverDistance?: number;
  staticWeaponryUsage?: number;
  toolsUsage?: number;
  rammingBehaviorDistance?: number;
  waypointDelayMsMin?: number;
  waypointDelayMsMax?: number;
  waypointMaxTime?: number;
  waypointThresholdDistance?: number;
  lostTimeMs?: number;
  usesWeaponBehaviors?: boolean;
  weaponBehaviorNotFoundDelay?: number;
  weaponBehaviors?: WeaponBehavior[];
  usePlanetHover?: boolean;
  planetHoverMin?: number;
  planetHoverMax?: number;
  soundLoop?: string;
  canBeDisabled?: boolean;
  dlc?: string; 
}

export interface AnimationDefinition {
  id: string; // SubtypeId
  displayNameKey?: string;
  name: string; // Localized or generated
  descriptionKey?: string;
  description?: string;
  icon?: string; // Icon filename
  animationModel: string;
  clipIndex: number;
  influenceArea?: string;
  public?: boolean;
  allowInCockpit?: boolean;
  allowWithWeapon?: boolean;
  dlc?: string; 
}

export interface EmoteAnimationEntry {
  animationId: string; // References AnimationDefinition SubtypeId
  probability?: number;
}
export interface EmoteOverride {
  characterIdType: string;
  characterIdSubtype: string;
  animationIdType: string;
  animationIdSubtype: string;
}

export interface EmoteDefinition {
  id: string; // SubtypeId
  displayNameKey: string;
  name: string; // Localized name
  icon?: string; // Icon filename
  dlc?: string;
  animationId?: string; // Primary AnimationDefinition SubtypeId
  overrideAnimationId?: string; // Female override AnimationDefinition SubtypeId
  animations?: EmoteAnimationEntry[]; // For random emotes
  chatCommand?: string;
  chatCommandName?: string;
  chatCommandDescription?: string;
  priority?: number;
  public?: boolean;
  overrides?: EmoteOverride[];
}


export interface SpaceEngineersData {
  celestialBodies: CelestialBody[];
  thrusters: Thruster[];
  footnotes: Footnote[];
  blocks: BlockDefinition[];
  components: ComponentDefinition[]; 
  cargoReferenceItems: CargoReferenceItem[];
  ammoMagazines: AmmoMagazineDefinition[];
  ammos: AmmoDefinition[];
  categoryClasses: GuiBlockCategoryDefinition[];
  blockTags: BlockTagDefinition[]; 
  blueprintClasses: BlueprintClass[];
  blueprintRecipes: BlueprintRecipe[];
  bots: BotDefinition[];
  droneBehaviors: DroneBehaviorDefinition[];
  animations: AnimationDefinition[]; // Added
  emotes: EmoteDefinition[]; // Added
}

export type SortDirection = 'ascending' | 'descending';

export interface SortConfig<T> {
  key: keyof T | string | null; 
  direction: SortDirection;
}

export interface ColumnConfig<TData> {
  key: keyof TData | string; 
  label: string;
  helpText: string;
  defaultVisible?: boolean;
  textAlign?: 'text-left' | 'text-right' | 'text-center';
  isIcon?: boolean; 
  isMaterials?: boolean; 
}

export type ThrusterColumnKey = keyof Thruster | 'staticLiftKg' | 'materialsDisplay' | 'typeDisplay';
export type BlockColumnKey = keyof BlockDefinition | 'iconDisplay' | 'sizeDisplay' | 'materialsDisplay' | 'airtightDisplay';
export type WeaponColumnKey = keyof BlockDefinition | 'iconDisplay' | 'sizeDisplay' | 'materialsDisplay' | 'ammoMagazinesDisplay' | 'airtightDisplay';
export type BlueprintColumnKey = keyof BlueprintClass | 'iconDisplay';
export type BlueprintRecipeColumnKey = keyof BlueprintRecipe | 'iconDisplay' | 'prerequisitesDisplay' | 'resultsDisplay' | 'productionTimeDisplay' | 'isPrimaryDisplay';
export type BotColumnKey = keyof BotDefinition | 'iconDisplay' | 'targetGridsDisplay' | 'targetCharactersDisplay';
export type ComponentColumnKey = keyof ComponentDefinition | 'iconDisplay' | 'sizeDisplay' | 'healthDisplay';
export type DroneBehaviorColumnKey = keyof DroneBehaviorDefinition | 'iconDisplay' | 'strafeDisplay' | 'weaponBehaviorsDisplay';
export type AnimationColumnKey = keyof AnimationDefinition | 'iconDisplay' | 'allowInCockpitDisplay' | 'allowWithWeaponDisplay' | 'publicDisplay';
export type EmoteColumnKey = keyof EmoteDefinition | 'iconDisplay' | 'animationIdsDisplay' | 'publicDisplay';


export type ColumnVisibility<KeyType extends string | number | symbol> = Record<KeyType, boolean>;

export type ThemeMode = 'light' | 'dark';

export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: string;
}