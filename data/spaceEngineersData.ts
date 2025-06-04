import {
  SpaceEngineersData,
  GridSize,
  ThrusterType,
  ThrusterSize,
  CelestialBodyId,
  BlockDefinition, 
  CelestialBody,
  Thruster,
  Footnote
} from '../types';
import { parseBlockDefinitions, parseThrusterDefinitions, calculateThrusterPerformanceOnPlanet } from './blockDataUtils';

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
import { vanillaPistonHingeRawXml } from './vanillaPistonHingeData';
import { vanillaMedicalCryoRawXml } from './vanillaMedicalCryoData';
import { vanillaProductionSurvivalRawXml } from './vanillaProductionSurvivalData';
import { dlcPrototechRawXml } from './dlcPrototechData';
import { dlcScrapRacePt1RawXml } from './dlcScrapRacePt1Data'; 
import { dlcScrapRacePt2RawXml } from './dlcScrapRacePt2Data'; 
import { dlcSparksOfTheFutureRawXml } from './dlcSparksOfTheFutureData';
import { dlcSignalDataRawXml } from './dlcSignalData';
import { vanillaThrusterDataRawXml } from './vanillaThrusterData'; 

// --- Static Data Definitions ---
const celestialBodiesData: CelestialBody[] = [
  { id: CelestialBodyId.EARTH, name: 'Earth-like', gravityG: 1.00, gravityMs2: 9.81, atmosphereDensity: 'Optimal (100%)', atmosphereNotes: 'Breathable' },
  { id: CelestialBodyId.MOON, name: 'Moon', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'None (0%)' },
  { id: CelestialBodyId.MARS, name: 'Mars', gravityG: 0.90, gravityMs2: 8.83, atmosphereDensity: 'Thin (60%)', atmosphereNotes: 'Unbreathable (CO2)' },
  { id: CelestialBodyId.EUROPA, name: 'Europa', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'Thin (15%)', atmosphereNotes: 'Unbreathable, Low Oxygen' },
  { id: CelestialBodyId.ALIEN, name: 'Alien', gravityG: 1.10, gravityMs2: 10.79, atmosphereDensity: 'Dense (120%)', atmosphereNotes: 'Unbreathable' },
  { id: CelestialBodyId.TITAN, name: 'Titan', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'Dense (120%)', atmosphereNotes: 'Unbreathable' },
  { id: CelestialBodyId.TRITON, name: 'Triton', gravityG: 0.25, gravityMs2: 2.45, atmosphereDensity: 'Thin (30%)', atmosphereNotes: 'Unbreathable, very cold' },
  { id: CelestialBodyId.PERTAM, name: 'Pertam', gravityG: 1.20, gravityMs2: 11.77, atmosphereDensity: 'Optimal (100%)', atmosphereNotes: 'Breathable, hot' },
];

// --- Footnotes Data ---
const footnotesData: Footnote[] = [
  { id: '1', text: 'Optimal atmospheric density (100% at sea level for Earth-like).' },
  { id: '2', text: 'No significant atmosphere.' },
  { id: '3', text: 'Thin atmosphere, primarily CO2.' },
  { id: 'optimal_conditions', text: 'Performance values are under optimal conditions (100% efficiency, sea level for atmo thrusters where applicable).' },
  { id: 'main_source', text: 'Data compiled from various community sources and in-game observations.'},
  { id: 'wiki_link', text: 'For more detailed information, consult the Space Engineers Wiki:', link: 'https://spaceengineers.fandom.com/wiki/Space_Engineers_Wiki'}
];

// Combine all raw XML strings from different sources
const allRawXmlData: string[] = [
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
  ...vanillaPistonHingeRawXml,
  ...vanillaMedicalCryoRawXml,
  ...vanillaProductionSurvivalRawXml,
  ...dlcPrototechRawXml,
  ...dlcScrapRacePt1RawXml, 
  ...dlcScrapRacePt2RawXml,
  ...dlcSparksOfTheFutureRawXml,
  ...dlcSignalDataRawXml,
  ...vanillaThrusterDataRawXml, 
];

// --- Parse all blocks (excluding thrusters) ---
const allParsedBlocks: BlockDefinition[] = parseBlockDefinitions(allRawXmlData);

// --- Parse all thrusters ---
const allParsedThrusters: Thruster[] = parseThrusterDefinitions(allRawXmlData);

// --- Calculate and populate thruster performance data ---
allParsedThrusters.forEach(thruster => {
  thruster.performance = {}; // Initialize if undefined
  celestialBodiesData.forEach(planet => {
    if (thruster.performance) { // Type guard
      thruster.performance[planet.id] = calculateThrusterPerformanceOnPlanet(thruster, planet);
    }
  });
});


// --- Main data export ---
export const spaceEngineersData: SpaceEngineersData = {
  celestialBodies: celestialBodiesData,
  thrusters: allParsedThrusters,
  footnotes: footnotesData,
  blocks: allParsedBlocks,
};