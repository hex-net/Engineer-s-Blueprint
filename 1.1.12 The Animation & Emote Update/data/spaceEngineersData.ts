
import {
  SpaceEngineersData,
  GridSize,
  ThrusterType,
  ThrusterSize,
  CelestialBodyId,
  BlockDefinition, 
  ComponentDefinition, 
  CelestialBody,
  Thruster,
  Footnote,
  CargoReferenceItem,
  AmmoMagazineDefinition,
  AmmoDefinition,
  GuiBlockCategoryDefinition,
  BlockTagDefinition,
  BlueprintClass,
  BlueprintRecipe,
  BotDefinition,
  DroneBehaviorDefinition,
  AnimationDefinition, // Added
  EmoteDefinition // Added
} from '../types';
import { parseBlockDefinitions, parseThrusterDefinitions, calculateThrusterPerformanceOnPlanet, parseAmmoMagazineDefinitions, parseAmmoDefinitions, parseCategoryClasses, parseBlockTags, parseBlueprintClasses, parseBlueprintRecipes, parseBotDefinitions, parseComponentDefinitions, parseDroneBehaviorDefinitions, parseAnimationDefinitions, parseEmoteDefinitions } from './blockDataUtils'; // Added parseAnimationDefinitions, parseEmoteDefinitions
import { resxXmlData } from './localizationResxData'; 
import { parseDisplayNamesFromResx } from './localizationUtils';

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
import { utilityBlockDataRawXml } from './utilityBlockData'; 
import { dlcWarfare1RawXml } from './dlcWarfare1Data'; 
import { dlcWarfare2RawXml } from './dlcWarfare2Data';
import { vanillaWheelDataRawXml } from './vanillaWheelData';
import { vanillaWindowRawXml } from './vanillaWindowData'; 
import { economySystemRawXml } from './economySystemData'; 
import { gameDefinitionRawXml } from './gameDefinitionData';
import { antiCheatRawXml } from './antiCheatData'; 
import { ammoMagazinesRawXml } from './AmmoMagazinesData';
import { ammosRawXml } from './ammosData'; 
import { droneBehaviorRawXml } from './AIBehaviourData'; 
import { categoryClassesRawXml } from './categoryClassesData'; 
import { blockTagsRawXml } from './blockTagsData'; 
import { blueprintClassDefinitionsRawXml } from './blueprintClassDefinitionsData';
import { blueprintRecipesRawXml } from './blueprintRecipesData'; 
import { botDataRawXml } from './botData';
import { componentsRawXml } from './componentsData'; 
import { animationEmoteRawXml } from './animationEmoteData'; // Added


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

// --- Cargo Reference Items Data ---
const cargoReferenceItemsData: CargoReferenceItem[] = [
  { id: "PlatinumIngot", name: "Platinum Ingot", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.05, densityKgPerLiter: 1.00 / 0.05 },
  { id: "UraniumIngot", name: "Uranium Ingot", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.05, densityKgPerLiter: 1.00 / 0.05 },
  { id: "GoldIngot", name: "Gold Ingot", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.052, densityKgPerLiter: 1.00 / 0.052 },
  { id: "IronIngot", name: "Iron Ingot", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.127, densityKgPerLiter: 1.00 / 0.127 },
  { id: "CobaltIngot", name: "Cobalt Ingot", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.112, densityKgPerLiter: 1.00 / 0.112 },
  { id: "NickelIngot", name: "Nickel Ingot", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.112, densityKgPerLiter: 1.00 / 0.112 },
  { id: "SiliconWafer", name: "Silicon Wafer", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.25, densityKgPerLiter: 1.00 / 0.25 },
  { id: "MagnesiumPowder", name: "Magnesium Powder", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "PlatinumOre", name: "Platinum Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "UraniumOre", name: "Uranium Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "GoldOre", name: "Gold Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "IronOre", name: "Iron Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "CobaltOre", name: "Cobalt Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "NickelOre", name: "Nickel Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "SiliconOre", name: "Silicon Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "SilverOre", name: "Silver Ore", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "Stone", name: "Stone", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "Ice", name: "Ice", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
  { id: "Gravel", name: "Gravel", massKgPerUnit: 1.00, volumeLitersPerUnit: 0.37, densityKgPerLiter: 1.00 / 0.37 },
];


// Combine all raw XML strings from different sources for blocks
const allBlockRawXmlData: string[] = [
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
  ...utilityBlockDataRawXml, 
  ...dlcWarfare1RawXml,
  ...dlcWarfare2RawXml,
  ...vanillaWheelDataRawXml,
  ...vanillaWindowRawXml,
  ...economySystemRawXml, 
  ...gameDefinitionRawXml, 
  ...antiCheatRawXml, 
  // droneBehaviorRawXml is parsed separately
  // animationEmoteRawXml is parsed separately
];

const allBotXmlData: string[] = [...botDataRawXml]; 

// --- Parse localized display names ---
const localizedDisplayNames: Map<string, string> = parseDisplayNamesFromResx(resxXmlData);

// --- Parse all blocks (excluding thrusters, components, etc.) ---
const allParsedBlocks: BlockDefinition[] = parseBlockDefinitions(allBlockRawXmlData, localizedDisplayNames);

// --- Parse all thrusters ---
const allParsedThrusters: Thruster[] = parseThrusterDefinitions(allBlockRawXmlData, localizedDisplayNames); // Thrusters might also be in allBlockRawXmlData

// --- Parse all components ---
const allParsedComponents: ComponentDefinition[] = parseComponentDefinitions(componentsRawXml, localizedDisplayNames);

// --- Parse all ammo magazines ---
const allParsedAmmoMagazines: AmmoMagazineDefinition[] = parseAmmoMagazineDefinitions(ammoMagazinesRawXml, localizedDisplayNames);

// --- Parse all ammunition definitions ---
const allParsedAmmos: AmmoDefinition[] = parseAmmoDefinitions(ammosRawXml);

// --- Parse all category classes (GUI Block Categories) ---
const allParsedCategoryClasses: GuiBlockCategoryDefinition[] = parseCategoryClasses(categoryClassesRawXml, localizedDisplayNames);

// --- Parse all block tags ---
const allParsedBlockTags: BlockTagDefinition[] = parseBlockTags(blockTagsRawXml, localizedDisplayNames);

// --- Parse all blueprint classes ---
const allParsedBlueprintClasses: BlueprintClass[] = parseBlueprintClasses(blueprintClassDefinitionsRawXml, localizedDisplayNames);

// --- Parse all blueprint recipes ---
const allParsedBlueprintRecipes: BlueprintRecipe[] = parseBlueprintRecipes(blueprintRecipesRawXml, localizedDisplayNames);

// --- Parse all bot definitions ---
const allParsedBots: BotDefinition[] = parseBotDefinitions(allBotXmlData, localizedDisplayNames);

// --- Parse all drone behavior definitions ---
const allParsedDroneBehaviors: DroneBehaviorDefinition[] = parseDroneBehaviorDefinitions(droneBehaviorRawXml, localizedDisplayNames);

// --- Parse all animation definitions ---
const allParsedAnimations: AnimationDefinition[] = parseAnimationDefinitions(animationEmoteRawXml, localizedDisplayNames); // Added

// --- Parse all emote definitions ---
const allParsedEmotes: EmoteDefinition[] = parseEmoteDefinitions(animationEmoteRawXml, localizedDisplayNames); // Added


// --- Calculate and populate thruster performance data ---
allParsedThrusters.forEach(thruster => {
  thruster.performance = {}; 
  celestialBodiesData.forEach(planet => {
    if (thruster.performance) { 
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
  components: allParsedComponents, 
  cargoReferenceItems: cargoReferenceItemsData,
  ammoMagazines: allParsedAmmoMagazines,
  ammos: allParsedAmmos,
  categoryClasses: allParsedCategoryClasses, 
  blockTags: allParsedBlockTags, 
  blueprintClasses: allParsedBlueprintClasses, 
  blueprintRecipes: allParsedBlueprintRecipes,
  bots: allParsedBots,
  droneBehaviors: allParsedDroneBehaviors,
  animations: allParsedAnimations, // Added
  emotes: allParsedEmotes, // Added
};
