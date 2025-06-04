
import {
  SpaceEngineersData,
  GridSize,
  ThrusterType,
  ThrusterSize,
  CelestialBodyId,
  BlockComponent, // Updated
  BlockDefinition, // Updated
  CelestialBody,
  Thruster,
  ThrusterPerformance,
  Footnote
} from '../types';
import { parseBlockDefinitions } from './blockDataUtils';

// Import raw XML data from all modularized files
import { baseGameRawXml } from './baseGameBlockData';
import { dlcContactRawXml } from './dlcContactData';
import { dlcDecorativeBlocksRawXml } from './dlcDecorativeBlocksData';
import { dlcDecorativeBlocks2RawXml } from './dlcDecorativeBlocks2Data';
import { dlcDecorativeBlocks3RawXml } from './dlcDecorativeBlocks3Data';
import { dlcEconomyRawXml } from './dlcEconomyData';
import { dlcFieldworkRawXml } from './dlcFieldworkData';
import { dlcFrostbiteRawXml } from './dlcFrostbiteData';
import { dlcHeavyIndustryRawXml } from './dlcHeavyIndustryData';
import { dlcGridAIPackRawXml } from './dlcGridAIPackData';
import { dlcAutomatonsRawXml } from './dlcAutomatonsData';
import { vanillaConveyorGasAndCargoRawXml } from './vanillaConveyorGasAndCargoData';
import { vanillaPistonHingeRawXml } from './vanillaPistonHingeData'; // Added Import

// --- Static Data Definitions ---
const celestialBodiesData: CelestialBody[] = [
  { id: CelestialBodyId.EARTH, name: 'Earth-like', gravityG: 1.00, gravityMs2: 9.81, atmosphereDensity: 'Optimal (100%)', atmosphereNotes: 'Breathable' },
  { id: CelestialBodyId.MOON, name: 'Moon', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'None (0%)' },
  { id: CelestialBodyId.MARS, name: 'Mars', gravityG: 0.90, gravityMs2: 8.83, atmosphereDensity: 'Thin (60%)', atmosphereNotes: 'Unbreathable (CO2)' },
  { id: CelestialBodyId.EUROPA, name: 'Europa', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'Thin (15%)', atmosphereNotes: 'Unbreathable, Low Oxygen' },
  { id: CelestialBodyId.ALIEN, name: 'Alien', gravityG: 1.10, gravityMs2: 10.79, atmosphereDensity: 'Dense (120%)', atmosphereNotes: 'Unbreathable' },
  { id: CelestialBodyId.TITAN, name: 'Titan', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'Dense (120%)', atmosphereNotes: 'Unbreathable' },
  { id: CelestialBodyId.TRITON, name: 'Triton', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'Thin (30%)', atmosphereNotes: 'Unbreathable, very cold' },
  { id: CelestialBodyId.PERTAM, name: 'Pertam', gravityG: 1.20, gravityMs2: 11.77, atmosphereDensity: 'Thin (70%)', atmosphereNotes: 'Breathable, dusty' },
];

const inputThrustersData: Omit<Thruster, 'performance' | 'pcu' | 'buildTimeSeconds' | 'components'>[] = [
  // Large Grid
  { id: 'LargeBlockLargeHydrogenThruster', gridSize: GridSize.LARGE, type: ThrusterType.HYDROGEN, size: ThrusterSize.LARGE, thrustN: 7200000, powerMW: 'N/A', damageRange: 10 },
  { id: 'LargeBlockSmallHydrogenThruster', gridSize: GridSize.LARGE, type: ThrusterType.HYDROGEN, size: ThrusterSize.SMALL, thrustN: 1080000, powerMW: 'N/A', damageRange: 5 },
  { id: 'LargeBlockLargeAtmosphericThruster', gridSize: GridSize.LARGE, type: ThrusterType.ATMOS, size: ThrusterSize.LARGE, thrustN: 6480000, powerMW: 33.6, damageRange: 11 },
  { id: 'LargeBlockSmallAtmosphericThruster', gridSize: GridSize.LARGE, type: ThrusterType.ATMOS, size: ThrusterSize.SMALL, thrustN: 840000, powerMW: 2.4, damageRange: 6 },
  { id: 'LargeFlatAtmosphericThruster', gridSize: GridSize.LARGE, type: ThrusterType.ATMO_FLAT, size: ThrusterSize.LARGE, thrustN: 2880000, powerMW: 16.8, damageRange: 9 },
  { id: 'SmallFlatAtmosphericThruster', gridSize: GridSize.LARGE, type: ThrusterType.ATMO_FLAT, size: ThrusterSize.SMALL, thrustN: 480000, powerMW: 2.4, damageRange: 5 },
  { id: 'LargeBlockLargeModularThruster', gridSize: GridSize.LARGE, type: ThrusterType.ION, size: ThrusterSize.LARGE, thrustN: 4320000, powerMW: 33.6, damageRange: 7 },
  { id: 'LargeBlockSmallModularThruster', gridSize: GridSize.LARGE, type: ThrusterType.ION, size: ThrusterSize.SMALL, thrustN: 345600, powerMW: 2.4, damageRange: 4 },
  // Small Grid
  { id: 'SmallBlockLargeHydrogenThruster', gridSize: GridSize.SMALL, type: ThrusterType.HYDROGEN, size: ThrusterSize.LARGE, thrustN: 480000, powerMW: 'N/A', damageRange: 5 },
  { id: 'SmallBlockSmallHydrogenThruster', gridSize: GridSize.SMALL, type: ThrusterType.HYDROGEN, size: ThrusterSize.SMALL, thrustN: 100000, powerMW: 'N/A', damageRange: 3 },
  { id: 'SmallBlockLargeAtmosphericThruster', gridSize: GridSize.SMALL, type: ThrusterType.ATMOS, size: ThrusterSize.LARGE, thrustN: 576000, powerMW: 2.4, damageRange: 7 },
  { id: 'SmallBlockSmallAtmosphericThruster', gridSize: GridSize.SMALL, type: ThrusterType.ATMOS, size: ThrusterSize.SMALL, thrustN: 96000, powerMW: 0.6, damageRange: 5 },
  { id: 'SmallBlockLargeModularThruster', gridSize: GridSize.SMALL, type: ThrusterType.ION, size: ThrusterSize.LARGE, thrustN: 172800, powerMW: 2.4, damageRange: 4 },
  { id: 'SmallBlockSmallModularThruster', gridSize: GridSize.SMALL, type: ThrusterType.ION, size: ThrusterSize.SMALL, thrustN: 14400, powerMW: 0.2, damageRange: 2 },
];

const thrusterXmlData: Record<string, { pcu?: number; buildTimeSeconds?: number; components?: BlockComponent[] }> = { // Updated component type
  'LargeBlockLargeHydrogenThruster': { pcu: 200, buildTimeSeconds: 30, components: [{ subtype: 'LargeTube', count: 15 }, { subtype: 'SteelPlate', count: 120 }, { subtype: 'Thrust', count: 60 }] },
  'LargeBlockSmallHydrogenThruster': { pcu: 80, buildTimeSeconds: 10, components: [{ subtype: 'SmallTube', count: 10 }, { subtype: 'SteelPlate', count: 30 }, { subtype: 'Thrust', count: 10 }] },
  'LargeBlockLargeAtmosphericThruster': { pcu: 165, buildTimeSeconds: 20, components: [{ subtype: 'LargeTube', count: 10 }, { subtype: 'Motor', count: 20 }, { subtype: 'SteelPlate', count: 120 }, { subtype: 'Thrust', count: 25 }] },
  'LargeBlockSmallAtmosphericThruster': { pcu: 65, buildTimeSeconds: 7, components: [{ subtype: 'LargeTube', count: 2 }, { subtype: 'Motor', count: 4 }, { subtype: 'SteelPlate', count: 30 }, { subtype: 'Thrust', count: 5 }] },
  'LargeFlatAtmosphericThruster': { pcu: 165, buildTimeSeconds: 15, components: [{ subtype: 'LargeTube', count: 5 }, { subtype: 'Motor', count: 10 }, { subtype: 'SteelPlate', count: 60 }, { subtype: 'Thrust', count: 12 }] },
  'SmallFlatAtmosphericThruster': { pcu: 65, buildTimeSeconds: 5, components: [{ subtype: 'LargeTube', count: 1 }, { subtype: 'Motor', count: 2 }, { subtype: 'SteelPlate', count: 15 }, { subtype: 'Thrust', count: 3 }] },
  'LargeBlockLargeModularThruster': { pcu: 200, buildTimeSeconds: 40, components: [{ subtype: 'LargeTube', count: 10 }, { subtype: 'MetalGrid', count: 80 }, { subtype: 'Thrust', count: 120 }] },
  'LargeBlockSmallModularThruster': { pcu: 80, buildTimeSeconds: 10, components: [{ subtype: 'LargeTube', count: 2 }, { subtype: 'MetalGrid', count: 15 }, { subtype: 'Thrust', count: 12 }] },
  'SmallBlockLargeHydrogenThruster': { pcu: 70, buildTimeSeconds: 20, components: [{ subtype: 'SmallTube', count: 30 }, { subtype: 'SteelPlate', count: 10 }, { subtype: 'Thrust', count: 10 }] },
  'SmallBlockSmallHydrogenThruster': { pcu: 30, buildTimeSeconds: 7, components: [{ subtype: 'SmallTube', count: 12 }, { subtype: 'SteelPlate', count: 2 }, { subtype: 'Thrust', count: 1 }] },
  'SmallBlockLargeAtmosphericThruster': { pcu: 55, buildTimeSeconds: 15, components: [{ subtype: 'LargeTube', count: 2 }, { subtype: 'Motor', count: 8 }, { subtype: 'SteelPlate', count: 15 }, { subtype: 'Thrust', count: 6 }] },
  'SmallBlockSmallAtmosphericThruster': { pcu: 25, buildTimeSeconds: 5, components: [{ subtype: 'LargeTube', count: 1 }, { subtype: 'Motor', count: 1 }, { subtype: 'SteelPlate', count: 3 }, { subtype: 'Thrust', count: 1 }] },
  'SmallBlockLargeModularThruster': { pcu: 70, buildTimeSeconds: 25, components: [{ subtype: 'LargeTube', count: 2 }, { subtype: 'MetalGrid', count: 25 }, { subtype: 'Thrust', count: 12 }] },
  'SmallBlockSmallModularThruster': { pcu: 30, buildTimeSeconds: 7, components: [{ subtype: 'LargeTube', count: 1 }, { subtype: 'MetalGrid', count: 2 }, { subtype: 'Thrust', count: 1 }] },
  'LargeBlockLargeHydrogenThrustIndustrial': { pcu: 220, buildTimeSeconds: 90, components: [{ subtype: 'SteelPlate', count: 100 }, { subtype: 'MetalGrid', count: 250 }, { subtype: 'LargeTube', count: 40 }] },
  'LargeBlockSmallHydrogenThrustIndustrial': { pcu: 90, buildTimeSeconds: 40, components: [{ subtype: 'SteelPlate', count: 15 }, { subtype: 'MetalGrid', count: 40 }, { subtype: 'LargeTube', count: 8 }] },
  'SmallBlockLargeHydrogenThrustIndustrial': { pcu: 80, buildTimeSeconds: 20, components: [{ subtype: 'SteelPlate', count: 20 }, { subtype: 'MetalGrid', count: 22 }, { subtype: 'LargeTube', count: 10 }] },
  'SmallBlockSmallHydrogenThrustIndustrial': { pcu: 35, buildTimeSeconds: 10, components: [{ subtype: 'SteelPlate', count: 2 }, { subtype: 'MetalGrid', count: 4 }, { subtype: 'LargeTube', count: 2 }] },
};

const footnotes: Footnote[] = [
  { id: 'main_source', text: 'Community Sourced Data & Game XML Files (Thruster v5.0 Aug 2023, Blocks June 2025)' },
  { id: '1', text: 'Maximum effective height for atmospheric thrusters varies. Optimal performance is at 0m sea level.' },
  { id: '2', text: 'Hydrogen thruster effectiveness is constant across atmospheres and vacuum but consumes fuel.' },
  { id: '3', text: 'Ion thrusters are most effective in vacuum and lose effectiveness in denser atmospheres.' },
  { id: 'optimal_conditions', text: 'Values represent base performance in optimal conditions (e.g., sea level for atmospheric thrusters, vacuum for ion).' },
  { id: 'wiki_link', text: 'For more detailed mechanics, visit the Space Engineers Wiki:', link: 'https://spaceengineers.fandom.com/wiki/Space_Engineers_Wiki' },
];

// --- Data Processing ---

const calculatePerformance = (thruster: Omit<Thruster, 'performance' | 'pcu' | 'buildTimeSeconds' | 'components'>): Partial<Record<CelestialBodyId, ThrusterPerformance>> => {
  const performance: Partial<Record<CelestialBodyId, ThrusterPerformance>> = {};
  celestialBodiesData.forEach(planet => {
    let staticLiftKg: string | number = 'N/A';
    if (thruster.type === ThrusterType.HYDROGEN || thruster.type === ThrusterType.ION) {
      staticLiftKg = planet.gravityMs2 > 0 ? thruster.thrustN / planet.gravityMs2 : Infinity;
    } else if (thruster.type === ThrusterType.ATMOS || thruster.type === ThrusterType.ATMO_FLAT) {
      let effectiveness = 0;
      if (planet.atmosphereDensity === 'Optimal (100%)') effectiveness = 1.0;
      else if (planet.atmosphereDensity === 'Dense (120%)') effectiveness = 1.0;
      else if (planet.atmosphereDensity === 'Thin (70%)') effectiveness = 0.7;
      else if (planet.atmosphereDensity === 'Thin (60%)') effectiveness = 0.6;
      else if (planet.atmosphereDensity === 'Thin (30%)') effectiveness = 0.3;
      else if (planet.atmosphereDensity === 'Thin (15%)') effectiveness = 0.15;
      else if (planet.atmosphereDensity === 'None (0%)') effectiveness = 0;

      if (planet.id === CelestialBodyId.ALIEN && (thruster.id === 'LargeBlockLargeAtmosphericThruster' || thruster.id === 'LargeBlockSmallAtmosphericThruster')) {
         staticLiftKg = '0²';
      } else if (planet.id === CelestialBodyId.TRITON && (thruster.id === 'LargeBlockLargeAtmosphericThruster' || thruster.id === 'LargeBlockSmallAtmosphericThruster')) {
         staticLiftKg = '0³';
      } else {
        staticLiftKg = planet.gravityMs2 > 0 && effectiveness > 0 ? (thruster.thrustN * effectiveness) / planet.gravityMs2 : (effectiveness === 0 ? 0 : Infinity);
      }
    }
    performance[planet.id] = { staticLiftKg };
  });
  return performance;
};

const processedThrusters: Thruster[] = inputThrustersData.map(baseThruster => {
  const xmlDetails = thrusterXmlData[baseThruster.id] || {};
  return {
    ...baseThruster,
    performance: calculatePerformance(baseThruster),
    pcu: xmlDetails.pcu,
    buildTimeSeconds: xmlDetails.buildTimeSeconds,
    components: xmlDetails.components,
  };
});

// Combine all raw XML strings for blocks
const allRawBlockDefinitions: string[] = [
  ...baseGameRawXml,
  ...dlcContactRawXml,
  ...dlcDecorativeBlocksRawXml,
  ...dlcDecorativeBlocks2RawXml,
  ...dlcDecorativeBlocks3RawXml,
  ...dlcEconomyRawXml,
  ...dlcFieldworkRawXml,
  ...dlcFrostbiteRawXml,
  ...dlcHeavyIndustryRawXml,
  ...dlcGridAIPackRawXml,
  ...dlcAutomatonsRawXml,
  ...vanillaConveyorGasAndCargoRawXml,
  ...vanillaPistonHingeRawXml, // Added new XML data
];

// Parse all block definitions
const parsedGameBlocks: BlockDefinition[] = parseBlockDefinitions(allRawBlockDefinitions); // Renamed

// De-duplicate blocks
const uniqueBlocksMap = new Map<string, BlockDefinition>(); // Renamed
parsedGameBlocks.forEach(block => { // Renamed
  const key = `${block.typeId}-${block.id}-${block.gridSize}`; // Use a more robust composite key including TypeId
  if (!uniqueBlocksMap.has(key)) {
    uniqueBlocksMap.set(key, block);
  }
});
const finalUniqueBlocks: BlockDefinition[] = Array.from(uniqueBlocksMap.values()); // Renamed

// --- Final Export ---
export const spaceEngineersData: SpaceEngineersData = {
  celestialBodies: celestialBodiesData,
  thrusters: processedThrusters,
  footnotes,
  blocks: finalUniqueBlocks, // Renamed
};
