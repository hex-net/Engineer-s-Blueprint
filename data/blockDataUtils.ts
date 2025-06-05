
import { 
    BlockDefinition, 
    GridSize, 
    BlockComponent, 
    Thruster, 
    ThrusterType, 
    ThrusterSize, 
    FuelConverterInfo, 
    CelestialBody, 
    ThrusterPerformance, 
    CelestialBodyId, 
    AmmoMagazineDefinition,
    AmmoDefinition,
    GuiBlockCategoryDefinition,
    BlockIdentifierInTag, 
    BlockTagDefinition,
    BlueprintClass,
    BlueprintRecipe,
    BlueprintRecipeItem,
    BotDefinition,
    ComponentDefinition, 
    DroneBehaviorDefinition, 
    WeaponBehavior, 
    WeaponRule,
    AnimationDefinition, // Added
    EmoteDefinition, // Added
    EmoteAnimationEntry, // Added
    EmoteOverride // Added
} from '../types'; 

// Helper to parse numeric values, handling "N/A" or other non-numeric strings
export const parseNumeric = (value: string | number | undefined): number | undefined => {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'string') {
    const cleanedValue = value.replace(/,/g, '');
    if (isNaN(parseFloat(cleanedValue))) {
        return undefined; // Return undefined for strings that are not numbers
    }
    return parseFloat(cleanedValue);
  }
  return value; // If it's already a number
};

// Approximate component masses in kg. Used for calculating block/thruster mass from their components.
const componentMasses: Record<string, number> = {
  SteelPlate: 20.3, InteriorPlate: 5.06, Construction: 2.03, Motor: 24.38, Computer: 0.51,
  LargeTube: 8.13, SmallTube: 2.03, Girder: 7.01, MetalGrid: 6.09, SolarCell: 1.01,
  PowerCell: 30.48, BulletproofGlass: 15.24, Reactor: 5.06, Thrust: 25.38, // Default mass for "Thrust" component
  RadioCommunication: 2.03, Detector: 6.09, Medical: 1.01, ZoneChip: 50.75,
  Superconductor: 20.3, GravityGenerator: 203, Display: 1.01, Explosives: 1.01, Canvas: 0.51,
  PrototechFrame: 100, PrototechCapacitor: 50, PrototechCircuitry: 10, PrototechPanel: 10,
  PrototechCoolingUnit: 20, PrototechPropulsionUnit: 30, PrototechMachinery: 40,
};

// Conversion factor: 1 MW of power for a Hydrogen thruster consumes approx. 166.666... L/s of Hydrogen
const HYDROGEN_MW_TO_LPS = 166.66666666666666;
// Platinum Ingot: Mass: 1.00 kg, Volume: 0.05 L per unit. Density = 1.00 / 0.05 = 20 kg/L
export const PLATINUM_INGOT_DENSITY_KG_PER_LITER = 20.0;


// Helper function to generate a more readable name
export const generateReadableName = (
  identifier: string, // primary identifier, usually SubtypeId
  typeIdOriginal: string,
  gridSize?: GridSize,
  blockPairName?: string,
  originalDisplayNameKey?: string, // Content of <DisplayName> tag from block's XML
  localizedDisplayNames?: Map<string, string>
): string => {
  let name: string | undefined;

  if (originalDisplayNameKey && localizedDisplayNames?.has(originalDisplayNameKey)) {
    name = localizedDisplayNames.get(originalDisplayNameKey);
  } else if (identifier && localizedDisplayNames?.has(`DisplayName_Block_${identifier}`)) {
    name = localizedDisplayNames.get(`DisplayName_Block_${identifier}`);
  } else if (identifier && localizedDisplayNames?.has(`DisplayName_Item_${identifier}`)) { 
    name = localizedDisplayNames.get(`DisplayName_Item_${identifier}`);
  } else if (identifier && localizedDisplayNames?.has(`DisplayName_Emote${identifier}`)) { // For emotes like "EmoteWave" -> "Wave"
    name = localizedDisplayNames.get(`DisplayName_Emote${identifier}`);
  } else if (identifier && localizedDisplayNames?.has(identifier)) {
    name = localizedDisplayNames.get(identifier);
  } else if (blockPairName && localizedDisplayNames?.has(`DisplayName_Block_${blockPairName}`)) {
    name = localizedDisplayNames.get(`DisplayName_Block_${blockPairName}`);
  } else if (blockPairName && localizedDisplayNames?.has(blockPairName)) {
    name = localizedDisplayNames.get(blockPairName);
  }

  if (name === undefined) { 
    let generatedBaseName = identifier; 
    if ((!generatedBaseName || generatedBaseName.trim() === "") && blockPairName) {
      generatedBaseName = blockPairName; 
    }
    if (!generatedBaseName || generatedBaseName.trim() === "") {
      generatedBaseName = typeIdOriginal; 
    }
    if (!generatedBaseName || generatedBaseName.trim() === "") {
      if (typeIdOriginal === 'Component') return "Unknown Component";
      if (typeIdOriginal === 'AnimationDefinition') return "Unknown Animation";
      if (typeIdOriginal === 'EmoteDefinition') return "Unknown Emote";
      return "Unknown Block"; 
    }
    name = generatedBaseName;

    const prefixesToRemove = ["LargeBlock", "SmallBlock", "Large", "Small", "DB", "Emote"];
    for (const prefix of prefixesToRemove) {
      if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
        name = name.substring(prefix.length);
      }
    }
    
    if (name.startsWith("Armor") && !["ArmorPanel", "ArmorCenter", "ArmorCorner", "ArmorInvCorner", "ArmorSide", "ArmorSloped"].some(specific => name.startsWith(specific))) {
      if (!(name.toLowerCase().includes('panel') || name.toLowerCase().includes('center') || name.toLowerCase().includes('corner') || name.toLowerCase().includes('side') || name.toLowerCase().includes('sloped'))) {
           name = name.substring(5);
      }
    }
  
    if (typeIdOriginal.includes('Light') && name.endsWith('Light') && name !== 'Reflector Light' && name !== 'Interior Light' && name !== 'Corner Light') {
      name = name.substring(0, name.length - 5).trim();
    }
  
    name = name.replace(/([A-Z0-9]+)/g, ' $1').trim().replace(/\s+/g, ' ');
    name = name.replace(/2Base/g, ' 2 Base').replace(/2Tip/g, ' 2 Tip').replace(/Inv( |$)/g, 'Inverted$1');
    
    name = name.split(' ').map(word => word.length > 1 && word.toUpperCase() === word ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    
    const checkIdentifier = identifier || generatedBaseName;
    if (checkIdentifier) { 
      if (checkIdentifier.toLowerCase().includes('lightarmor') && !name.toLowerCase().includes('light armor')) name = name.replace(/Armor/i, 'Light Armor').replace('Light Light', 'Light');
      else if (checkIdentifier.toLowerCase().includes('heavyarmor') && !name.toLowerCase().includes('heavy armor')) name = name.replace(/Armor/i, 'Heavy Armor').replace('Heavy Heavy', 'Heavy');
    }
  }
  
  name = name || ''; 

  if (typeIdOriginal !== 'Component' && 
      typeIdOriginal !== 'AmmoMagazine' && 
      typeIdOriginal !== 'AnimationDefinition' && 
      typeIdOriginal !== 'EmoteDefinition' &&
      typeIdOriginal.startsWith('PhysicalGunObject') === false && 
      typeIdOriginal.startsWith('ConsumableItem') === false && 
      typeIdOriginal.startsWith('OxygenContainerObject') === false && 
      typeIdOriginal.startsWith('GasContainerObject') === false) {
      if (gridSize) { 
        const lowerName = name.toLowerCase();
        const commonGridPrefixes = ['large ', 'lg ', 'small ', 'sm '];
        let hasGridPrefix = commonGridPrefixes.some(p => lowerName.startsWith(p));

        if (!hasGridPrefix && (name.match(/^Large[A-Z]/) || name.match(/^Small[A-Z]/))) {
            hasGridPrefix = true; 
        }
        
        if (!hasGridPrefix) {
          if (gridSize === GridSize.LARGE && !name.toLowerCase().startsWith('large')) name = 'Large ' + name;
          else if (gridSize === GridSize.SMALL && !name.toLowerCase().startsWith('small')) name = 'Small ' + name;
        }

        if (gridSize === GridSize.LARGE && name.toLowerCase().startsWith('large large ')) name = name.substring(6).trim();
        else if (gridSize === GridSize.SMALL && name.toLowerCase().startsWith('small small ')) name = name.substring(6).trim();
        
        if (name.toLowerCase().startsWith('large ') && !name.startsWith('Large ')) name = 'Large ' + name.substring(6);
        if (name.toLowerCase().startsWith('small ') && !name.startsWith('Small ')) name = 'Small ' + name.substring(6);
      }
  }

  return name.replace(/\s+/g, ' ').trim();
};

const parseBlockBuildComponents = (def: Element): BlockComponent[] => { 
  const componentsElements = Array.from(def.querySelectorAll('Components Component'));
  return componentsElements.reduce((acc: BlockComponent[], compElement: Element) => {
    const subtype = compElement.getAttribute('Subtype') || 'UnknownSubtype';
    const count = parseInt(compElement.getAttribute('Count') || '0', 10);
    const existingComponent = acc.find(c => c.subtype === subtype);
    if (existingComponent) existingComponent.count += count;
    else acc.push({ subtype, count });
    return acc;
  }, []);
};


export const parseBlockDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): BlockDefinition[] => {
  const parser = new DOMParser();
  const parsedBlocks: BlockDefinition[] = [];

  xmlStrings.forEach(xmlString => {
    if (!xmlString || xmlString.trim() === "") return;
    const doc = parser.parseFromString(xmlString, "application/xml");
    
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
        console.error("Error parsing XML for BlockDefinitions:", parserError.textContent);
        return;
    }

    const definitions = Array.from(doc.getElementsByTagName('Definition'));
    definitions.forEach(def => {
      try {
        const idElement = def.querySelector('Id');
        const typeIdElement = idElement?.querySelector('TypeId');
        const typeId = typeIdElement?.textContent || 'UnknownType';

        if (typeId === 'Thrust' || typeId === 'Component' || typeId === 'AmmoMagazine' || typeId === 'MyObjectBuilder_BehaviorTreeDefinition' || typeId === 'GuiBlockCategoryDefinition' || typeId === 'CubeBlockTagDefinition' || typeId === 'BlueprintClassDefinition' || typeId === 'MyObjectBuilder_BankingSystemDefinition' || typeId === 'MyObjectbuilder_SessionComponentEconomyDefinition' || typeId === 'MyObjectBuilder_SessionComponentContractSystemDefinition' || typeId === 'MyObjectbuilder_SessionComponentAntiCheatDefinition' || typeId === 'MyObjectBuilder_GameDefinition' || typeId === 'MyObjectBuilder_ContainerDropSystemDefinition' || typeId === 'MyObjectbuilder_AutopilotPathfindingComponentDefinition' || typeId === 'MyObjectbuilder_AiRvoComponentDefinition' || typeId === 'MyObjectbuilder_GlobalEncountersGeneratorDefinition' || typeId === 'MyObjectBuilder_AIBehaviorDefinition' || typeId === 'MyObjectBuilder_AnimalBotDefinition' || typeId === 'DroneBehaviorDefinition' || typeId === 'AnimationDefinition' || typeId === 'EmoteDefinition') return; 


        const subtypeIdElement = idElement?.querySelector('SubtypeId');
        let subtypeId = subtypeIdElement?.textContent || '';
        
        const gridSizeElement = def.querySelector('CubeSize');
        const gridSize = gridSizeElement?.textContent === 'Large' ? GridSize.LARGE : GridSize.SMALL;

        const blockPairNameElement = def.querySelector('BlockPairName');
        const blockPairName = blockPairNameElement?.textContent || undefined;

        let uniqueId = subtypeId; 
        if (!uniqueId || uniqueId.trim() === "") {
          uniqueId = blockPairName || typeId + "_AutoGen_" + Math.random().toString(36).substring(2, 9);
        }
        if (subtypeId.trim() === "" && blockPairName) {
            subtypeId = blockPairName; 
        }


        const displayNameElement = def.querySelector('DisplayName');
        const displayNameKeyFromXml = displayNameElement?.textContent || `DisplayName_Block_${uniqueId}`;
        
        const iconElement = def.querySelector('Icon');
        const sizeElement = def.querySelector('Size');
        const buildTimeElement = def.querySelector('BuildTimeSeconds');
        const pcuElement = def.querySelector('PCU');
        const pcuConsoleElement = def.querySelector('PCUConsole'); 
        const edgeTypeElement = def.querySelector('EdgeType');
        const isAirTightElement = def.querySelector('IsAirTight');
        const guiVisibleElement = def.querySelector('GuiVisible');
        const dlcElement = def.querySelector('DLC');
        
        const components = parseBlockBuildComponents(def);
        
        const iconPath = iconElement?.textContent || 'UnknownIcon.dds';
        const iconFileName = iconPath.split(/[\\/]/).pop() || 'UnknownIcon.dds';
        
        const size = sizeElement ? {
            x: parseInt(sizeElement.getAttribute('x') || '1', 10),
            y: parseInt(sizeElement.getAttribute('y') || '1', 10),
            z: parseInt(sizeElement.getAttribute('z') || '1', 10),
          } : undefined;
        
        const weaponDefIdElement = def.querySelector('WeaponDefinitionId');
        const ammoMagazinesElements = Array.from(def.querySelectorAll('AmmoMagazines AmmoMagazine'));
        const maxRangeMetersElement = def.querySelector('MaxRangeMeters');
        const rateOfFireElement = def.querySelector('RateOfFire'); 
        const deviateShotAngleElement = def.querySelector('DeviateShotAngle');

        const ammoMagazines = ammoMagazinesElements.length > 0 ? 
            ammoMagazinesElements.map(el => el.getAttribute('Subtype') || 'UnknownAmmo').filter(s => s !== 'UnknownAmmo') : undefined;
        
        let calculatedMassKg: number | undefined = components.length > 0 ? components.reduce((totalMass, component) => (totalMass + (componentMasses[component.subtype] || 0) * component.count), 0) : undefined;
        if (calculatedMassKg !== undefined && calculatedMassKg < 0.01 && calculatedMassKg !== 0) calculatedMassKg = 0.01; 
        
        const massElement = def.querySelector('Mass');
        if (massElement?.textContent) calculatedMassKg = parseFloat(massElement.textContent) || calculatedMassKg;

        const generatedName = generateReadableName(subtypeId, typeId, gridSize, blockPairName, displayNameKeyFromXml, localizedDisplayNames);
        
        const baseRateOfFire = parseNumeric(rateOfFireElement?.textContent);
        let shotsPerSecond: number | undefined = undefined;
        if (baseRateOfFire && baseRateOfFire > 0) {
          shotsPerSecond = baseRateOfFire / 60;
        }
        
        let maxVolumeLiters: number | undefined;
        let maxPossibleCargoWeightKg: number | undefined;
        const inventoryMaxVolumeElement = def.querySelector('InventoryMaxVolume');
        const inventorySizeElement = def.querySelector('InventorySize');

        if (inventoryMaxVolumeElement?.textContent) {
            const volumeM3 = parseFloat(inventoryMaxVolumeElement.textContent);
            if (!isNaN(volumeM3)) {
                maxVolumeLiters = volumeM3 * 1000;
            }
        } else if (inventorySizeElement) {
            const x = parseFloat(inventorySizeElement.getAttribute('x') || '0');
            const y = parseFloat(inventorySizeElement.getAttribute('y') || '0');
            const z = parseFloat(inventorySizeElement.getAttribute('z') || '0');
            if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
                maxVolumeLiters = x * y * z * 1000;
            }
        }

        if (maxVolumeLiters !== undefined && maxVolumeLiters > 0) {
            maxPossibleCargoWeightKg = maxVolumeLiters * PLATINUM_INGOT_DENSITY_KG_PER_LITER;
        }


        const blockDefinition: BlockDefinition = {
          id: uniqueId, typeId: typeId, name: generatedName,
          displayNameKey: displayNameKeyFromXml, icon: iconFileName, iconPath: iconPath, gridSize, size,
          buildTimeSeconds: parseNumeric(buildTimeElement?.textContent), components: components.length ? components : undefined,
          pcu: parseNumeric(pcuElement?.textContent) ?? parseNumeric(pcuConsoleElement?.textContent), massKg: calculatedMassKg,
          blockPairName, edgeType: edgeTypeElement?.textContent || undefined,
          isAirTight: isAirTightElement ? isAirTightElement.textContent?.toLowerCase() === 'true' : undefined,
          guiVisible: guiVisibleElement ? guiVisibleElement.textContent?.toLowerCase() !== 'false' : undefined,
          dlc: dlcElement?.textContent || undefined,
          weaponDefinitionId: weaponDefIdElement?.getAttribute('Subtype') || undefined, ammoMagazines,
          maxRangeMeters: parseNumeric(maxRangeMetersElement?.textContent),
          baseRateOfFire: baseRateOfFire,
          shotsPerSecond: shotsPerSecond,
          shotDeviationAngle: parseNumeric(deviateShotAngleElement?.textContent),
          maxVolumeLiters: maxVolumeLiters,
          maxPossibleCargoWeightKg: maxPossibleCargoWeightKg,
        };
        parsedBlocks.push(blockDefinition);
      } catch (e) {
        console.error("Error processing block definition:", e, def.innerHTML.substring(0,500) + "...");
      }
    });
  });
  return parsedBlocks;
};

export const parseComponentDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): ComponentDefinition[] => {
  const parser = new DOMParser();
  const parsedComponents: ComponentDefinition[] = [];

  xmlStrings.forEach(xmlString => {
      if (!xmlString || xmlString.trim() === "") return;
      const doc = parser.parseFromString(xmlString, "application/xml");
      const parserError = doc.querySelector("parsererror");
      if (parserError) {
          console.error("Error parsing XML for ComponentDefinitions:", parserError.textContent);
          return;
      }

      const componentElements = Array.from(doc.getElementsByTagName('Component'));
      componentElements.forEach(compEl => {
          try {
              const idElement = compEl.querySelector('Id');
              const typeId = idElement?.querySelector('TypeId')?.textContent || 'Component';
              if (typeId !== 'Component') return; 

              const subtypeId = idElement?.querySelector('SubtypeId')?.textContent || 'UnknownComponent';
              
              const displayNameElement = compEl.querySelector('DisplayName');
              const displayNameKey = displayNameElement?.textContent || `DisplayName_Item_${subtypeId}`;
              
              const iconElement = compEl.querySelector('Icon');
              const iconPath = iconElement?.textContent || undefined;
              const iconFileName = iconPath ? iconPath.split(/[\\/]/).pop() : undefined;

              const sizeElement = compEl.querySelector('Size');
              const size = sizeElement ? {
                  x: parseNumeric(sizeElement.querySelector('X')?.textContent) ?? 0,
                  y: parseNumeric(sizeElement.querySelector('Y')?.textContent) ?? 0,
                  z: parseNumeric(sizeElement.querySelector('Z')?.textContent) ?? 0,
              } : undefined;
              
              const name = generateReadableName(subtypeId, typeId, undefined, undefined, displayNameKey, localizedDisplayNames);

              const component: ComponentDefinition = {
                  id: subtypeId,
                  typeId: typeId,
                  displayNameKey: displayNameKey,
                  name: name,
                  icon: iconFileName,
                  iconPath: iconPath,
                  size,
                  massKg: parseNumeric(compEl.querySelector('Mass')?.textContent),
                  volumeLiters: parseNumeric(compEl.querySelector('Volume')?.textContent),
                  model: compEl.querySelector('Model')?.textContent || undefined,
                  physicalMaterial: compEl.querySelector('PhysicalMaterial')?.textContent || undefined,
                  maxIntegrity: parseNumeric(compEl.querySelector('MaxIntegrity')?.textContent),
                  dropProbability: parseNumeric(compEl.querySelector('DropProbability')?.textContent),
                  health: parseNumeric(compEl.querySelector('Health')?.textContent),
                  dlc: compEl.querySelector('DLC')?.textContent || undefined, 
                  minimumOfferAmount: parseNumeric(compEl.querySelector('MinimumOfferAmount')?.textContent),
                  maximumOfferAmount: parseNumeric(compEl.querySelector('MaximumOfferAmount')?.textContent),
                  minimumOrderAmount: parseNumeric(compEl.querySelector('MinimumOrderAmount')?.textContent),
                  maximumOrderAmount: parseNumeric(compEl.querySelector('MaximumOrderAmount')?.textContent),
                  canPlayerOrder: compEl.querySelector('CanPlayerOrder')?.textContent?.toLowerCase() === 'true',
                  minimumAcquisitionAmount: parseNumeric(compEl.querySelector('MinimumAcquisitionAmount')?.textContent),
                  maximumAcquisitionAmount: parseNumeric(compEl.querySelector('MaximumAcquisitionAmount')?.textContent),
              };
              parsedComponents.push(component);

          } catch (e) {
              console.error("Error processing component definition:", e, compEl.innerHTML.substring(0, 300) + "...");
          }
      });
  });
  return parsedComponents;
};


export const parseThrusterDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): Thruster[] => {
  const parser = new DOMParser();
  const parsedThrusters: Thruster[] = [];

  xmlStrings.forEach(xmlString => {
    if (!xmlString || xmlString.trim() === "") return;
    const doc = parser.parseFromString(xmlString, "application/xml");
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
      console.error("Error parsing XML for ThrusterDefinitions:", parserError.textContent);
      return;
    }

    const definitions = Array.from(doc.getElementsByTagName('Definition'));
    definitions.forEach(def => {
      try {
        const idElement = def.querySelector('Id');
        const typeId = idElement?.querySelector('TypeId')?.textContent;

        if (typeId !== 'Thrust') return; 

        const subtypeId = idElement?.querySelector('SubtypeId')?.textContent || 'UnknownThruster';
        const displayNameKeyFromXml = def.querySelector('DisplayName')?.textContent || `DisplayName_Block_${subtypeId}`;
        const iconPath = def.querySelector('Icon')?.textContent || 'UnknownIcon.dds';
        const iconFileName = iconPath.split(/[\\/]/).pop() || 'UnknownIcon.dds';
        
        const gridSizeXml = def.querySelector('CubeSize')?.textContent;
        const gridSize = gridSizeXml === 'Large' ? GridSize.LARGE : GridSize.SMALL;

        const thrusterTypeXml = def.querySelector('ThrusterType')?.textContent?.toLowerCase();
        let thrusterType: ThrusterType;
        if (thrusterTypeXml === 'ion') thrusterType = ThrusterType.ION;
        else if (thrusterTypeXml === 'hydrogen') thrusterType = ThrusterType.HYDROGEN;
        else if (thrusterTypeXml === 'atmospheric') thrusterType = ThrusterType.ATMOS;
        else if (thrusterTypeXml === 'prototech') thrusterType = ThrusterType.PROTOTECH;
        else thrusterType = ThrusterType.ION; 

        let thrusterSizeEnum: ThrusterSize = ThrusterSize.SMALL;
        const subtypeIdLower = subtypeId.toLowerCase();
        if (subtypeIdLower.includes('largethrust') || subtypeIdLower.includes('large_thrust') || subtypeIdLower.includes('largeatmo') || subtypeIdLower.includes('largehydro') || subtypeIdLower.includes('largeprototech')) {
            thrusterSizeEnum = ThrusterSize.LARGE;
        } else if (subtypeIdLower.includes('smallthrust') || subtypeIdLower.includes('small_thrust') || subtypeIdLower.includes('smallatmo') || subtypeIdLower.includes('smallhydro') || subtypeIdLower.includes('smallprototech')) {
            thrusterSizeEnum = ThrusterSize.SMALL;
        }
        
        const components = parseBlockBuildComponents(def);
        const blockPairName = def.querySelector('BlockPairName')?.textContent || undefined;
        const dlc = def.querySelector('DLC')?.textContent || undefined;

        let calculatedMassKg: number | undefined = components.length > 0 ? components.reduce((totalMass, component) => (totalMass + (componentMasses[component.subtype] || 0) * component.count), 0) : undefined;
        if (calculatedMassKg !== undefined && calculatedMassKg < 0.01 && calculatedMassKg !== 0) calculatedMassKg = 0.01; 
        
        const massElement = def.querySelector('Mass'); 
        if (massElement?.textContent) {
          calculatedMassKg = parseFloat(massElement.textContent) || calculatedMassKg;
        }

        let fuelConverterInfo: FuelConverterInfo | undefined = undefined;
        const fuelConverterElement = def.querySelector('FuelConverter');
        if (fuelConverterElement) {
            const fuelIdElement = fuelConverterElement.querySelector('FuelId');
            const fuelTypeId = fuelIdElement?.querySelector('TypeId')?.textContent;
            const fuelSubtypeId = fuelIdElement?.querySelector('SubtypeId')?.textContent;
            const efficiency = parseNumeric(fuelConverterElement.querySelector('Efficiency')?.textContent);
            if (fuelTypeId && fuelSubtypeId && efficiency !== undefined) {
                fuelConverterInfo = { fuelId: { typeId: fuelTypeId, subtypeId: fuelSubtypeId }, efficiency };
            }
        }
        
        const generatedName = generateReadableName(subtypeId, typeId, gridSize, blockPairName, displayNameKeyFromXml, localizedDisplayNames);
        
        const maxPowerConsumption = parseNumeric(def.querySelector('MaxPowerConsumption')?.textContent) || 0;
        let fuelLitersPerSecond: number | undefined;
        if (thrusterType === ThrusterType.HYDROGEN && fuelConverterInfo?.fuelId.subtypeId.toLowerCase() === 'hydrogen') {
          fuelLitersPerSecond = maxPowerConsumption * HYDROGEN_MW_TO_LPS;
        }


        const thruster: Thruster = {
          id: subtypeId,
          name: generatedName,
          icon: iconFileName,
          gridSize,
          type: thrusterType,
          size: thrusterSizeEnum,
          massKg: calculatedMassKg,
          thrustN: parseNumeric(def.querySelector('ForceMagnitude')?.textContent) || 0,
          powerMW: maxPowerConsumption,
          fuelLitersPerSecond: fuelLitersPerSecond,
          minPowerConsumption: parseNumeric(def.querySelector('MinPowerConsumption')?.textContent),
          damageRange: parseNumeric(def.querySelector('FlameDamageLengthScale')?.textContent),
          flameDirectDamage: parseNumeric(def.querySelector('FlameDamage')?.textContent),
          pcu: parseNumeric(def.querySelector('PCU')?.textContent),
          buildTimeSeconds: parseNumeric(def.querySelector('BuildTimeSeconds')?.textContent),
          components: components.length > 0 ? components : undefined,
          minPlanetaryInfluence: parseNumeric(def.querySelector('MinPlanetaryInfluence')?.textContent),
          maxPlanetaryInfluence: parseNumeric(def.querySelector('MaxPlanetaryInfluence')?.textContent),
          effectivenessAtMinInfluence: parseNumeric(def.querySelector('EffectivenessAtMinInfluence')?.textContent),
          effectivenessAtMaxInfluence: parseNumeric(def.querySelector('EffectivenessAtMaxInfluence')?.textContent),
          needsAtmosphereForInfluence: def.querySelector('NeedsAtmosphereForInfluence')?.textContent?.toLowerCase() === 'true',
          fuelConverter: fuelConverterInfo,
          dlc: dlc,
          performance: {}, 
        };
        parsedThrusters.push(thruster);
      } catch (e) {
        console.error("Error processing thruster definition:", e, def.innerHTML.substring(0,500) + "...");
      }
    });
  });
  return parsedThrusters;
};

export const getAtmosphereFactor = (atmosphereDensityString: string): number => {
  if (atmosphereDensityString.toLowerCase().includes("none")) return 0.0;
  const match = atmosphereDensityString.match(/\((\d+)%\)/);
  if (match && match[1]) {
    return parseInt(match[1], 10) / 100;
  }
  if (atmosphereDensityString.toLowerCase().includes("optimal")) return 1.0;
  if (atmosphereDensityString.toLowerCase().includes("dense")) return 1.2; 
  if (atmosphereDensityString.toLowerCase().includes("thin")) return 0.5; 
  return 0.0; 
};

export const calculateThrusterPerformanceOnPlanet = (thruster: Thruster, planet: CelestialBody): ThrusterPerformance => {
  let actualEffectiveness = 0;

  const minPI = thruster.minPlanetaryInfluence ?? 0;
  const maxPI = thruster.maxPlanetaryInfluence ?? 1;
  const effAtMin = thruster.effectivenessAtMinInfluence ?? 0;
  const effAtMax = thruster.effectivenessAtMaxInfluence ?? 1;

  if (thruster.type === ThrusterType.ATMOS) {
    const atmFactor = getAtmosphereFactor(planet.atmosphereDensity);
    if (thruster.needsAtmosphereForInfluence && atmFactor === 0) {
      actualEffectiveness = 0;
    } else if (atmFactor < minPI) {
      actualEffectiveness = effAtMin; 
    } else if (atmFactor > maxPI) {
      actualEffectiveness = effAtMax;
    } else {
      const range = maxPI - minPI;
      if (range <= 0) { 
        actualEffectiveness = (atmFactor >= minPI) ? effAtMax : effAtMin;
      } else {
        const t = (atmFactor - minPI) / range;
        actualEffectiveness = effAtMin + t * (effAtMax - effAtMin);
      }
    }
    if (thruster.needsAtmosphereForInfluence && atmFactor === 0 && minPI > 0) { 
      actualEffectiveness = 0;
    }

  } else if (thruster.type === ThrusterType.ION || thruster.type === ThrusterType.HYDROGEN || thruster.type === ThrusterType.PROTOTECH) {
    const gravInfluence = planet.gravityG; 
     if (gravInfluence < minPI) {
      actualEffectiveness = effAtMin;
    } else if (gravInfluence > maxPI) {
      actualEffectiveness = effAtMax;
    } else {
       const range = maxPI - minPI;
       if (range <= 0) {
         actualEffectiveness = (gravInfluence >= minPI) ? effAtMax : effAtMin;
       } else {
        const t = (gravInfluence - minPI) / range;
        actualEffectiveness = effAtMin + t * (effAtMax - effAtMin);
       }
    }
  }
  
  actualEffectiveness = Math.max(0, Math.min(1, actualEffectiveness));

  let staticLiftKg: string | number = "N/A";
  if (planet.gravityMs2 > 0) {
    const liftForceN = thruster.thrustN * actualEffectiveness;
    staticLiftKg = liftForceN / planet.gravityMs2;
  }

  return { staticLiftKg, actualEffectiveness };
};


export const parseAmmoMagazineDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): AmmoMagazineDefinition[] => {
  const parser = new DOMParser();
  const parsedMagazines: AmmoMagazineDefinition[] = [];

  xmlStrings.forEach(xmlString => {
    if (!xmlString || xmlString.trim() === "") return;
    const doc = parser.parseFromString(xmlString, "application/xml");
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
      console.error("Error parsing XML for AmmoMagazineDefinitions:", parserError.textContent);
      return;
    }
    
    const definitions = Array.from(doc.getElementsByTagName('AmmoMagazine'));
    definitions.forEach(def => {
      try {
        const idElement = def.querySelector('Id');
        const typeId = idElement?.querySelector('TypeId')?.textContent || 'AmmoMagazine'; 
        const subtypeId = idElement?.querySelector('SubtypeId')?.textContent || 'UnknownAmmoMagazine';

        const displayNameElement = def.querySelector('DisplayName');
        const displayNameKey = displayNameElement?.textContent || `DisplayName_Item_${subtypeId}`;
        
        const iconElement = def.querySelector('Icon');
        const iconPath = iconElement?.textContent || 'UnknownIcon.dds';
        const iconFileName = iconPath.split(/[\\/]/).pop() || 'UnknownIcon.dds';

        const sizeElement = def.querySelector('Size');
        const size = sizeElement ? {
            x: parseFloat(sizeElement.querySelector('X')?.textContent || '0'),
            y: parseFloat(sizeElement.querySelector('Y')?.textContent || '0'),
            z: parseFloat(sizeElement.querySelector('Z')?.textContent || '0'),
          } : undefined;

        const massKg = parseNumeric(def.querySelector('Mass')?.textContent);
        const volumeLiters = parseNumeric(def.querySelector('Volume')?.textContent);
        const capacity = parseNumeric(def.querySelector('Capacity')?.textContent);
        
        const ammoDefIdElement = def.querySelector('AmmoDefinitionId');
        const ammoDefinitionId = ammoDefIdElement?.getAttribute('Subtype') || undefined;

        const generatedName = generateReadableName(subtypeId, typeId, undefined, undefined, displayNameKey, localizedDisplayNames);

        const magazine: AmmoMagazineDefinition = {
          id: subtypeId,
          typeId,
          displayNameKey,
          name: generatedName,
          icon: iconFileName,
          iconPath,
          size,
          massKg,
          volumeLiters,
          capacity,
          ammoDefinitionId,
          dlc: def.querySelector('DLC')?.textContent || undefined,
          minimumOfferAmount: parseNumeric(def.querySelector('MinimumOfferAmount')?.textContent),
          maximumOfferAmount: parseNumeric(def.querySelector('MaximumOfferAmount')?.textContent),
          minimumOrderAmount: parseNumeric(def.querySelector('MinimumOrderAmount')?.textContent),
          maximumOrderAmount: parseNumeric(def.querySelector('MaximumOrderAmount')?.textContent),
          canPlayerOrder: def.querySelector('CanPlayerOrder')?.textContent?.toLowerCase() === 'true',
        };
        parsedMagazines.push(magazine);
      } catch (e) {
        console.error("Error processing ammo magazine definition:", e, def.innerHTML.substring(0,300) + "...");
      }
    });
  });
  return parsedMagazines;
};

export const parseAmmoDefinitions = (xmlStrings: string[]): AmmoDefinition[] => {
  const parser = new DOMParser();
  const parsedAmmos: AmmoDefinition[] = [];

  xmlStrings.forEach(xmlString => {
    if (!xmlString || xmlString.trim() === "") return;
    const doc = parser.parseFromString(xmlString, "application/xml");
    
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
        console.error("Error parsing XML for AmmoDefinitions:", parserError.textContent);
        return; 
    }

    const ammoElements = Array.from(doc.getElementsByTagName('Ammo')); 
    ammoElements.forEach(ammoEl => {
      try {
        const idElement = ammoEl.querySelector('Id');
        const typeId = idElement?.querySelector('TypeId')?.textContent || 'AmmoDefinition'; 
        if (typeId !== 'AmmoDefinition') return;
        
        const subtypeId = idElement?.querySelector('SubtypeId')?.textContent || 'UnknownAmmo';

        const getText = (parent: Element, tagName: string): string | undefined => 
            parent.querySelector(`:scope > ${tagName}`)?.textContent || undefined;
        
        const getNumeric = (parent: Element, tagName: string): number | undefined => 
            parseNumeric(getText(parent, tagName));

        const getBoolean = (parent: Element, tagName: string): boolean | undefined => {
            const textVal = getText(parent, tagName);
            return textVal ? textVal.toLowerCase() === 'true' : undefined;
        }

        const basicPropsEl = ammoEl.querySelector('BasicProperties');
        const projectilePropsEl = ammoEl.querySelector('ProjectileProperties');
        const missilePropsEl = ammoEl.querySelector('MissileProperties');
        
        const ammo: AmmoDefinition = {
            id: subtypeId,
            typeId: typeId,
            desiredSpeed: basicPropsEl ? getNumeric(basicPropsEl, 'DesiredSpeed') : undefined,
            speedVariance: basicPropsEl ? getNumeric(basicPropsEl, 'SpeedVariance') : undefined,
            maxTrajectory: basicPropsEl ? getNumeric(basicPropsEl, 'MaxTrajectory') : undefined,
            backkickForce: basicPropsEl ? getNumeric(basicPropsEl, 'BackkickForce') : undefined,
            physicalMaterial: basicPropsEl ? getText(basicPropsEl, 'PhysicalMaterial') : undefined,
            explosiveDamageMultiplier: basicPropsEl ? getNumeric(basicPropsEl, 'ExplosiveDamageMultiplier') : undefined,
            isExplosive: basicPropsEl ? getBoolean(basicPropsEl, 'IsExplosive') : undefined,
            deathMessage: basicPropsEl ? getText(basicPropsEl, 'DeathMessage') : undefined,
            endOfLifeSound: basicPropsEl ? getText(basicPropsEl, 'EndOfLifeSound') : undefined,
            endOfLifeEffect: basicPropsEl ? getText(basicPropsEl, 'EndOfLifeEffect') : undefined,
            projectileTrailScale: projectilePropsEl ? getNumeric(projectilePropsEl, 'ProjectileTrailScale') : undefined,
            projectileHitImpulse: projectilePropsEl ? getNumeric(projectilePropsEl, 'ProjectileHitImpulse') : undefined,
            projectileMassDamage: projectilePropsEl ? getNumeric(projectilePropsEl, 'ProjectileMassDamage') : undefined,
            projectileHealthDamage: projectilePropsEl ? getNumeric(projectilePropsEl, 'ProjectileHealthDamage') : undefined,
            headShot: projectilePropsEl ? getBoolean(projectilePropsEl, 'HeadShot') : undefined,
            projectileHeadShotDamage: projectilePropsEl ? getNumeric(projectilePropsEl, 'ProjectileHeadShotDamage') : undefined,
            missileMass: missilePropsEl ? getNumeric(missilePropsEl, 'MissileMass') : undefined,
            missileExplosionRadius: missilePropsEl ? getNumeric(missilePropsEl, 'MissileExplosionRadius') : undefined,
            missileModelName: missilePropsEl ? getText(missilePropsEl, 'MissileModelName') : undefined,
            missileAcceleration: missilePropsEl ? getNumeric(missilePropsEl, 'MissileAcceleration') : undefined,
            missileInitialSpeed: missilePropsEl ? getNumeric(missilePropsEl, 'MissileInitialSpeed') : undefined,
            missileSkipAcceleration: missilePropsEl ? getBoolean(missilePropsEl, 'MissileSkipAcceleration') : undefined,
            missileExplosionDamage: missilePropsEl ? getNumeric(missilePropsEl, 'MissileExplosionDamage') : undefined,
            missileTrailEffect: missilePropsEl ? getText(missilePropsEl, 'MissileTrailEffect') : undefined,
            missileHealthPool: missilePropsEl ? getNumeric(missilePropsEl, 'MissileHealthPool') : undefined,
            missileGravityEnabled: missilePropsEl ? getBoolean(missilePropsEl, 'MissileGravityEnabled') : undefined,
            missileMinRicochetAngle: missilePropsEl ? getNumeric(missilePropsEl, 'MissileMinRicochetAngle') : undefined,
            missileMaxRicochetAngle: missilePropsEl ? getNumeric(missilePropsEl, 'MissileMaxRicochetAngle') : undefined,
            missileMinRicochetProbability: missilePropsEl ? getNumeric(missilePropsEl, 'MissileMinRicochetProbability') : undefined,
            missileMaxRicochetProbability: missilePropsEl ? getNumeric(missilePropsEl, 'MissileMaxRicochetProbability') : undefined,
            missileRicochetDamage: missilePropsEl ? getNumeric(missilePropsEl, 'MissileRicochetDamage') : undefined,
            explosionFlags: missilePropsEl ? getText(missilePropsEl, 'ExplosionFlags') : undefined,
        };
        parsedAmmos.push(ammo);
      } catch(e) {
        console.error("Error processing ammo definition:", e, ammoEl.innerHTML.substring(0,300) + "...");
      }
    });
  });
  return parsedAmmos;
};

export const parseCategoryClasses = (xmlString: string, localizedDisplayNames: Map<string, string>): GuiBlockCategoryDefinition[] => {
    const parser = new DOMParser();
    const categories: GuiBlockCategoryDefinition[] = [];
    if (!xmlString || xmlString.trim() === "") return categories;

    const doc = parser.parseFromString(xmlString, "application/xml");
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
        console.error("Error parsing XML for CategoryClasses:", parserError.textContent);
        return categories;
    }

    const categoryElements = Array.from(doc.getElementsByTagName('Category'));
    categoryElements.forEach(catEl => {
        try {
            const idElement = catEl.querySelector('Id');
            const idTypeId = idElement?.querySelector('TypeId')?.textContent || 'GuiBlockCategoryDefinition';
            const idSubtypeId = idElement?.querySelector('SubtypeId')?.textContent; 

            const displayNameKey = catEl.querySelector('DisplayName')?.textContent || '';
            const displayName = localizedDisplayNames.get(displayNameKey) || displayNameKey.replace('DisplayName_Category_', '').replace(/([A-Z])/g, ' $1').trim();
            
            const name = catEl.querySelector('Name')?.textContent || (idSubtypeId ? `Category_${idSubtypeId}` : `Category_AutoGen_${Math.random().toString(36).substring(2, 9)}`);

            const itemIds: string[] = [];
            catEl.querySelectorAll('ItemIds ItemId').forEach(itemIdEl => {
                if (itemIdEl.textContent) itemIds.push(itemIdEl.textContent);
            });
            
            const category: GuiBlockCategoryDefinition = {
                idTypeId: idTypeId,
                idSubtypeId: idSubtypeId,
                displayNameKey: displayNameKey,
                displayName: displayName,
                name: name,
                searchBlocks: catEl.querySelector('SearchBlocks')?.textContent?.toLowerCase() === 'true',
                isToolCategory: catEl.querySelector('IsToolCategory')?.textContent?.toLowerCase() === 'true',
                isShipCategory: catEl.querySelector('IsShipCategory')?.textContent?.toLowerCase() === 'true',
                isAnimationCategory: catEl.querySelector('IsAnimationCategory')?.textContent?.toLowerCase() === 'true',
                publicItem: catEl.querySelector('Public')?.textContent?.toLowerCase() === 'true',
                availableInSurvival: catEl.querySelector('AvailableInSurvival')?.textContent?.toLowerCase() !== 'false', 
                strictSearch: catEl.querySelector('StrictSearch')?.textContent?.toLowerCase() === 'true',
                dlc: catEl.querySelector('DLC')?.textContent || undefined,
                itemIds: itemIds,
            };
            categories.push(category);
        } catch (e) {
            console.error("Error processing category class definition:", e, catEl.innerHTML.substring(0, 300) + "...");
        }
    });
    return categories;
};

export const parseBlockTags = (xmlString: string, localizedDisplayNames: Map<string, string>): BlockTagDefinition[] => {
    const parser = new DOMParser();
    const blockTags: BlockTagDefinition[] = [];
     if (!xmlString || xmlString.trim() === "") return blockTags;

    const doc = parser.parseFromString(xmlString, "application/xml");
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
        console.error("Error parsing XML for BlockTags:", parserError.textContent);
        return blockTags;
    }
    
    const tagElements = Array.from(doc.getElementsByTagName('BlockTag'));
    tagElements.forEach(tagEl => {
        try {
            const id = tagEl.querySelector('Id SubtypeId')?.textContent || `UnknownTag_${Math.random().toString(36).substring(2,9)}`;
            const displayNameKey = tagEl.querySelector('DisplayName')?.textContent || `DisplayName_BlockGroup_${id}`;
            const displayName = localizedDisplayNames.get(displayNameKey) || id.replace(/([A-Z])/g, ' $1').trim();

            const blocks: BlockIdentifierInTag[] = [];
            tagEl.querySelectorAll('Blocks Block').forEach(blockEl => {
                const typeId = blockEl.getAttribute('Type') || '';
                const subtypeId = blockEl.getAttribute('Subtype') || '';
                if (typeId) { 
                    blocks.push({ typeId, subtypeId });
                }
            });

            const blockTag: BlockTagDefinition = {
                id: id,
                displayName: displayName,
                blocks: blocks,
            };
            blockTags.push(blockTag);
        } catch (e) {
            console.error("Error processing block tag definition:", e, tagEl.innerHTML.substring(0,300) + "...");
        }
    });
    return blockTags;
};

export const parseBlueprintClasses = (xmlString: string, localizedDisplayNames: Map<string, string>): BlueprintClass[] => {
    const parser = new DOMParser();
    const blueprintClasses: BlueprintClass[] = [];
    if (!xmlString || xmlString.trim() === "") return blueprintClasses;
    
    const doc = parser.parseFromString(xmlString, "application/xml");
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
        console.error("Error parsing XML for BlueprintClasses:", parserError.textContent);
        return blueprintClasses;
    }

    const classElements = Array.from(doc.getElementsByTagName('Class'));
    classElements.forEach(classEl => {
        try {
            const idElement = classEl.querySelector('Id');
            const idTypeId = idElement?.querySelector('TypeId')?.textContent || 'BlueprintClassDefinition';
            const idSubtypeId = idElement?.querySelector('SubtypeId')?.textContent || `UnknownClass_${Math.random().toString(36).substring(2,9)}`;

            const displayNameKey = classEl.querySelector('DisplayName')?.textContent || '';
            const displayName = localizedDisplayNames.get(displayNameKey) || idSubtypeId.replace(/([A-Z])/g, ' $1').trim();
            
            const descriptionKey = classEl.querySelector('Description')?.textContent || '';
            const description = localizedDisplayNames.get(descriptionKey) || undefined;

            const iconPath = classEl.querySelector('Icon')?.textContent;
            const icon = iconPath ? iconPath.split(/[\\/]/).pop() : undefined;
            
            const highlightIconPath = classEl.querySelector('HighlightIcon')?.textContent;
            const highlightIcon = highlightIconPath ? highlightIconPath.split(/[\\/]/).pop() : undefined;

            const focusIconPath = classEl.querySelector('FocusIcon')?.textContent;
            const focusIcon = focusIconPath ? focusIconPath.split(/[\\/]/).pop() : undefined;
            
            const inputConstraintIconPath = classEl.querySelector('InputConstraintIcon')?.textContent;
            const inputConstraintIcon = inputConstraintIconPath ? inputConstraintIconPath.split(/[\\/]/).pop() : undefined;
            
            const outputConstraintIconPath = classEl.querySelector('OutputConstraintIcon')?.textContent;
            const outputConstraintIcon = outputConstraintIconPath ? outputConstraintIconPath.split(/[\\/]/).pop() : undefined;


            const bpClass: BlueprintClass = {
                idTypeId: idTypeId,
                idSubtypeId: idSubtypeId,
                displayNameKey: displayNameKey,
                displayName: displayName,
                descriptionKey: descriptionKey || undefined,
                description: description,
                icon,
                highlightIcon,
                focusIcon,
                inputConstraintIcon,
                outputConstraintIcon,
            };
            blueprintClasses.push(bpClass);
        } catch (e) {
             console.error("Error processing blueprint class definition:", e, classEl.innerHTML.substring(0,300) + "...");
        }
    });
    return blueprintClasses;
};

export const parseBlueprintRecipes = (xmlString: string, localizedDisplayNames: Map<string, string>): BlueprintRecipe[] => {
    const parser = new DOMParser();
    const recipes: BlueprintRecipe[] = [];
    if (!xmlString || xmlString.trim() === "") return recipes;

    const doc = parser.parseFromString(xmlString, "application/xml");
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
        console.error("Error parsing XML for BlueprintRecipes:", parserError.textContent);
        return recipes;
    }

    const blueprintElements = Array.from(doc.getElementsByTagName('Blueprint'));
    blueprintElements.forEach(bpEl => {
        try {
            const idElement = bpEl.querySelector('Id');
            const idTypeId = idElement?.querySelector('TypeId')?.textContent || 'BlueprintDefinition';
            const idSubtypeId = idElement?.querySelector('SubtypeId')?.textContent || `UnknownRecipe_${Math.random().toString(36).substring(2,9)}`;

            const displayNameKey = bpEl.querySelector('DisplayName')?.textContent || '';
            const displayName = localizedDisplayNames.get(displayNameKey) || generateReadableName(idSubtypeId, "Item", undefined, undefined, displayNameKey, localizedDisplayNames);

            const iconPath = bpEl.querySelector('Icon')?.textContent;
            const icon = iconPath ? iconPath.split(/[\\/]/).pop() : undefined;

            const prerequisites: BlueprintRecipeItem[] = [];
            bpEl.querySelectorAll('Prerequisites Item').forEach(itemEl => {
                prerequisites.push({
                    typeId: itemEl.getAttribute('TypeId') || 'UnknownType',
                    subtypeId: itemEl.getAttribute('SubtypeId') || 'UnknownSubtype',
                    amount: parseFloat(itemEl.getAttribute('Amount') || '0'),
                });
            });

            const results: BlueprintRecipeItem[] = [];
            bpEl.querySelectorAll('Results Item, Result').forEach(itemEl => {
                 results.push({
                    typeId: itemEl.getAttribute('TypeId') || 'UnknownType',
                    subtypeId: itemEl.getAttribute('SubtypeId') || 'UnknownSubtype',
                    amount: parseFloat(itemEl.getAttribute('Amount') || '0'),
                });
            });


            const recipe: BlueprintRecipe = {
                idTypeId: idTypeId,
                idSubtypeId: idSubtypeId,
                displayNameKey: displayNameKey,
                displayName: displayName,
                icon: icon,
                prerequisites: prerequisites,
                results: results,
                baseProductionTimeInSeconds: parseNumeric(bpEl.querySelector('BaseProductionTimeInSeconds')?.textContent) || 0,
                isPrimary: bpEl.querySelector('IsPrimary')?.textContent?.toLowerCase() === 'true',
                priority: parseNumeric(bpEl.querySelector('Priority')?.textContent)
            };
            recipes.push(recipe);
        } catch (e) {
            console.error("Error processing blueprint recipe definition:", e, bpEl.innerHTML.substring(0,300) + "...");
        }
    });
    return recipes;
};

export const parseBotDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): BotDefinition[] => {
    const parser = new DOMParser();
    const bots: BotDefinition[] = [];
    
    xmlStrings.forEach(xmlString => {
        if (!xmlString || xmlString.trim() === "") return;
        const doc = parser.parseFromString(xmlString, "application/xml");
        const parserError = doc.querySelector("parsererror");
        if (parserError) {
            console.error("Error parsing XML for BotDefinitions:", parserError.textContent);
            return;
        }

        const botElements = Array.from(doc.getElementsByTagName('Bot'));
        botElements.forEach(botEl => {
            try {
                const idElement = botEl.querySelector('Id');
                const subtypeId = idElement?.querySelector('SubtypeId')?.textContent || `UnknownBot_${Math.random().toString(36).substring(2,9)}`;
                
                const displayNameKey = botEl.querySelector('DisplayName')?.textContent || `DisplayName_Bot_${subtypeId}`;
                const name = generateReadableName(subtypeId, "Bot", undefined, undefined, displayNameKey, localizedDisplayNames);
                
                const iconPath = botEl.querySelector('Icon')?.textContent;
                const icon = iconPath ? iconPath.split(/[\\/]/).pop() : undefined;

                const bot: BotDefinition = {
                    id: subtypeId,
                    displayNameKey: displayNameKey,
                    name: name,
                    icon: icon,
                    botModel: botEl.querySelector('BotModel')?.textContent || '',
                    botBehaviorTreeSubtype: botEl.querySelector('BotBehaviorTree')?.getAttribute('Subtype') || '',
                    behaviorType: botEl.querySelector('BehaviorType')?.textContent || '',
                    targetType: botEl.querySelector('TargetType')?.textContent || '',
                    factionTag: botEl.querySelector('FactionTag')?.textContent || undefined,
                    attackLength: parseNumeric(botEl.querySelector('AttackLength')?.textContent),
                    attackRadius: parseNumeric(botEl.querySelector('AttackRadius')?.textContent),
                    characterDamage: parseNumeric(botEl.querySelector('CharacterDamage')?.textContent),
                    gridDamage: parseNumeric(botEl.querySelector('GridDamage')?.textContent),
                    targetGrids: botEl.querySelector('TargetGrids')?.textContent?.toLowerCase() === 'true',
                    targetCharacters: botEl.querySelector('TargetCharacters')?.textContent?.toLowerCase() === 'true',
                    dlc: botEl.querySelector('DLC')?.textContent || undefined,
                };
                bots.push(bot);
            } catch(e) {
                console.error("Error processing bot definition:", e, botEl.innerHTML.substring(0,300) + "...");
            }
        });
    });
    return bots;
};

export const parseDroneBehaviorDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): DroneBehaviorDefinition[] => {
    const parser = new DOMParser();
    const behaviors: DroneBehaviorDefinition[] = [];

    xmlStrings.forEach(xmlString => {
        if (!xmlString || xmlString.trim() === "") return;
        const doc = parser.parseFromString(xmlString, "application/xml");
        const parserError = doc.querySelector("parsererror");
        if (parserError) {
            console.error("Error parsing XML for DroneBehaviorDefinitions:", parserError.textContent);
            return;
        }

        const behaviorElements = Array.from(doc.getElementsByTagName('AIBehavior'));
        behaviorElements.forEach(behEl => {
            const xsiType = behEl.getAttributeNS('http://www.w3.org/2001/XMLSchema-instance', 'type');
            if (xsiType && xsiType !== 'MyObjectBuilder_DroneBehaviorDefinition') return;

            try {
                const idElement = behEl.querySelector('Id');
                const subtypeId = idElement?.querySelector('SubtypeId')?.textContent || `UnknownDroneBehavior_${Math.random().toString(36).substring(2,9)}`;
                
                const name = subtypeId; 

                const weaponBehaviors: WeaponBehavior[] = [];
                behEl.querySelectorAll('WeaponBehaviors WeaponBehavior').forEach(wbEl => {
                    const weaponRules: WeaponRule[] = [];
                    wbEl.querySelectorAll('WeaponRules WeaponRule').forEach(wrEl => {
                        weaponRules.push({
                            weapon: wrEl.querySelector('Weapon')?.textContent || undefined,
                            timeMin: parseNumeric(wrEl.querySelector('TimeMin')?.textContent) ?? 0,
                            timeMax: parseNumeric(wrEl.querySelector('TimeMax')?.textContent) ?? 0,
                            firingAfterLosingSight: wrEl.querySelector('FiringAfterLosingSight')?.textContent?.toLowerCase() === 'true',
                            canGoThroughVoxels: wrEl.querySelector('CanGoThroughVoxels')?.textContent?.toLowerCase() === 'true',
                        });
                    });

                    const weaponRequirements: string[] = [];
                    wbEl.querySelectorAll('Requirements Weapon').forEach(wReqEl => {
                         if(wReqEl.textContent) weaponRequirements.push(wReqEl.textContent);
                    });

                    weaponBehaviors.push({
                        name: wbEl.querySelector('Name')?.textContent || 'Unnamed Weapon Behavior',
                        priority: parseNumeric(wbEl.querySelector('Priority')?.textContent) ?? 0,
                        requirements: weaponRequirements.length > 0 ? { weapons: weaponRequirements } : undefined,
                        requirementsIsWhitelist: wbEl.querySelector('RequirementsIsWhitelist')?.textContent?.toLowerCase() === 'true',
                        ignoresVoxels: wbEl.querySelector('IgnoresVoxels')?.textContent?.toLowerCase() === 'true',
                        ignoresGrids: wbEl.querySelector('IgnoresGrids')?.textContent?.toLowerCase() === 'true',
                        timeMin: parseNumeric(wbEl.querySelector('TimeMin')?.textContent) ?? 0,
                        timeMax: parseNumeric(wbEl.querySelector('TimeMax')?.textContent) ?? 0,
                        weaponRules: weaponRules.length > 0 ? weaponRules : undefined,
                    });
                });

                const behavior: DroneBehaviorDefinition = {
                    id: subtypeId,
                    name: name,
                    strafeWidth: parseNumeric(behEl.querySelector('StrafeWidth')?.textContent),
                    strafeHeight: parseNumeric(behEl.querySelector('StrafeHeight')?.textContent),
                    strafeDepth: parseNumeric(behEl.querySelector('StrafeDepth')?.textContent),
                    minStrafeDistance: parseNumeric(behEl.querySelector('MinStrafeDistance')?.textContent),
                    avoidCollisions: behEl.querySelector('AvoidCollisions')?.textContent?.toLowerCase() === 'true',
                    rotateToPlayer: behEl.querySelector('RotateToPlayer')?.textContent?.toLowerCase() === 'true',
                    useStaticWeaponry: behEl.querySelector('UseStaticWeaponry')?.textContent?.toLowerCase() === 'true',
                    useTools: behEl.querySelector('UseTools')?.textContent?.toLowerCase() === 'true',
                    useRammingBehavior: behEl.querySelector('UseRammingBehavior')?.textContent?.toLowerCase() === 'true',
                    alternativeBehavior: behEl.querySelector('AlternativeBehavior')?.textContent || undefined,
                    speedLimit: parseNumeric(behEl.querySelector('SpeedLimit')?.textContent),
                    playerYAxisOffset: parseNumeric(behEl.querySelector('PlayerYAxisOffset')?.textContent),
                    targetDistance: parseNumeric(behEl.querySelector('TargetDistance')?.textContent),
                    maxManeuverDistance: parseNumeric(behEl.querySelector('MaxManeuverDistance')?.textContent),
                    staticWeaponryUsage: parseNumeric(behEl.querySelector('StaticWeaponryUsage')?.textContent),
                    toolsUsage: parseNumeric(behEl.querySelector('ToolsUsage')?.textContent),
                    rammingBehaviorDistance: parseNumeric(behEl.querySelector('RammingBehaviorDistance')?.textContent),
                    waypointDelayMsMin: parseNumeric(behEl.querySelector('WaypointDelayMsMin')?.textContent),
                    waypointDelayMsMax: parseNumeric(behEl.querySelector('WaypointDelayMsMax')?.textContent),
                    waypointMaxTime: parseNumeric(behEl.querySelector('WaypointMaxTime')?.textContent),
                    waypointThresholdDistance: parseNumeric(behEl.querySelector('WaypointThresholdDistance')?.textContent),
                    lostTimeMs: parseNumeric(behEl.querySelector('LostTimeMs')?.textContent),
                    usesWeaponBehaviors: behEl.querySelector('UsesWeaponBehaviors')?.textContent?.toLowerCase() === 'true',
                    weaponBehaviorNotFoundDelay: parseNumeric(behEl.querySelector('WeaponBehaviorNotFoundDelay')?.textContent),
                    weaponBehaviors: weaponBehaviors.length > 0 ? weaponBehaviors : undefined,
                    usePlanetHover: behEl.querySelector('UsePlanetHover')?.textContent?.toLowerCase() === 'true',
                    planetHoverMin: parseNumeric(behEl.querySelector('PlanetHoverMin')?.textContent),
                    planetHoverMax: parseNumeric(behEl.querySelector('PlanetHoverMax')?.textContent),
                    soundLoop: behEl.querySelector('SoundLoop')?.textContent || undefined,
                    canBeDisabled: behEl.querySelector('CanBeDisabled')?.textContent?.toLowerCase() !== 'false', 
                    dlc: behEl.querySelector('DLC')?.textContent || undefined, 
                };
                behaviors.push(behavior);
            } catch(e) {
                console.error("Error processing drone behavior definition:", e, behEl.innerHTML.substring(0,300) + "...");
            }
        });
    });
    return behaviors;
};

export const parseAnimationDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): AnimationDefinition[] => {
    const parser = new DOMParser();
    const animations: AnimationDefinition[] = [];

    xmlStrings.forEach(xmlString => {
        if (!xmlString || xmlString.trim() === "") return;
        const doc = parser.parseFromString(xmlString, "application/xml");
        const parserError = doc.querySelector("parsererror");
        if (parserError) {
            console.error("Error parsing XML for AnimationDefinitions:", parserError.textContent);
            return;
        }

        const animationElements = Array.from(doc.querySelectorAll('Animations > Animation'));
        animationElements.forEach(animEl => {
            try {
                const idElement = animEl.querySelector('Id');
                if (idElement?.getAttribute('Type') !== 'AnimationDefinition') return;

                const subtypeId = idElement?.getAttribute('Subtype') || `UnknownAnimation_${Math.random().toString(36).substring(2, 9)}`;
                const displayNameKey = animEl.querySelector('DisplayName')?.textContent || `DisplayName_Animation_${subtypeId}`; // Default if not present
                const descriptionKey = animEl.querySelector('Description')?.textContent || undefined;
                
                const name = generateReadableName(subtypeId, "AnimationDefinition", undefined, undefined, displayNameKey, localizedDisplayNames);
                const description = descriptionKey ? (localizedDisplayNames.get(descriptionKey) || descriptionKey) : undefined;

                const iconPath = animEl.querySelector('Icon')?.textContent;
                const icon = iconPath ? iconPath.split(/[\\/]/).pop() : undefined;
                
                const animation: AnimationDefinition = {
                    id: subtypeId,
                    displayNameKey: displayNameKey === `DisplayName_Animation_${subtypeId}` ? undefined : displayNameKey, // Only store if not autogenerated
                    name: name,
                    descriptionKey: descriptionKey,
                    description: description,
                    icon: icon,
                    animationModel: animEl.querySelector('AnimationModel')?.textContent || '',
                    clipIndex: parseNumeric(animEl.querySelector('ClipIndex')?.textContent) ?? 0,
                    influenceArea: animEl.querySelector('InfluenceArea')?.textContent || undefined,
                    public: animEl.querySelector('Public')?.textContent?.toLowerCase() === 'true',
                    allowInCockpit: animEl.querySelector('AllowInCockpit')?.textContent?.toLowerCase() === 'true',
                    allowWithWeapon: animEl.querySelector('AllowWithWeapon')?.textContent?.toLowerCase() === 'true',
                    dlc: animEl.querySelector('DLC')?.textContent || undefined,
                };
                animations.push(animation);
            } catch (e) {
                console.error("Error processing animation definition:", e, animEl.innerHTML.substring(0, 300) + "...");
            }
        });
    });
    return animations;
};

export const parseEmoteDefinitions = (xmlStrings: string[], localizedDisplayNames: Map<string, string>): EmoteDefinition[] => {
    const parser = new DOMParser();
    const emotes: EmoteDefinition[] = [];

    xmlStrings.forEach(xmlString => {
        if (!xmlString || xmlString.trim() === "") return;
        const doc = parser.parseFromString(xmlString, "application/xml");
        const parserError = doc.querySelector("parsererror");
        if (parserError) {
            console.error("Error parsing XML for EmoteDefinitions:", parserError.textContent);
            return;
        }
        
        const emoteElements = Array.from(doc.querySelectorAll('Emotes > Definition'));
        emoteElements.forEach(emoteEl => {
            try {
                const idElement = emoteEl.querySelector('Id');
                if (idElement?.getAttribute('Type') !== 'EmoteDefinition') return;

                const subtypeId = idElement?.getAttribute('Subtype') || `UnknownEmote_${Math.random().toString(36).substring(2, 9)}`;
                const displayNameKey = emoteEl.querySelector('DisplayName')?.textContent || `DisplayName_Emote${subtypeId}`;

                const name = generateReadableName(subtypeId, "EmoteDefinition", undefined, undefined, displayNameKey, localizedDisplayNames);

                const iconPath = emoteEl.querySelector('Icon')?.textContent;
                const icon = iconPath ? iconPath.split(/[\\/]/).pop() : undefined;

                const primaryAnimationIdEl = emoteEl.querySelector(':scope > AnimationId[Type="AnimationDefinition"]');
                const primaryAnimationId = primaryAnimationIdEl?.getAttribute('Subtype') || undefined;
                
                const emoteAnimations: EmoteAnimationEntry[] = [];
                emoteEl.querySelectorAll('Animations Animation').forEach(animEntryEl => {
                    const animIdEl = animEntryEl.querySelector('AnimationId');
                    if (animIdEl && animIdEl.getAttribute('Subtype')) {
                        emoteAnimations.push({
                            animationId: animIdEl.getAttribute('Subtype') as string,
                            probability: parseNumeric(animEntryEl.querySelector('Probability')?.textContent),
                        });
                    }
                });

                const overrides: EmoteOverride[] = [];
                let femaleOverrideAnimId: string | undefined = undefined;
                emoteEl.querySelectorAll('Override').forEach(overrideEl => {
                    const charIdEl = overrideEl.querySelector('CharacterId');
                    const animIdEl = overrideEl.querySelector('AnimationId');
                    if (charIdEl && animIdEl && charIdEl.getAttribute('Type') && charIdEl.getAttribute('Subtype') && animIdEl.getAttribute('Type') && animIdEl.getAttribute('Subtype')) {
                        const charSubtype = charIdEl.getAttribute('Subtype') as string;
                        const animSubtype = animIdEl.getAttribute('Subtype') as string;
                        overrides.push({
                            characterIdType: charIdEl.getAttribute('Type') as string,
                            characterIdSubtype: charSubtype,
                            animationIdType: animIdEl.getAttribute('Type') as string,
                            animationIdSubtype: animSubtype,
                        });
                        if (charSubtype === 'Default_Astronaut_Female') {
                            femaleOverrideAnimId = animSubtype;
                        }
                    }
                });


                const emote: EmoteDefinition = {
                    id: subtypeId,
                    displayNameKey: displayNameKey,
                    name: name,
                    icon: icon,
                    dlc: emoteEl.querySelector('DLC')?.textContent || undefined,
                    animationId: primaryAnimationId,
                    overrideAnimationId: femaleOverrideAnimId, 
                    animations: emoteAnimations.length > 0 ? emoteAnimations : undefined,
                    overrides: overrides.length > 0 ? overrides : undefined,
                    chatCommand: emoteEl.querySelector('ChatCommand')?.textContent || undefined,
                    chatCommandName: emoteEl.querySelector('ChatCommandName')?.textContent || undefined,
                    chatCommandDescription: emoteEl.querySelector('ChatCommandDescription')?.textContent || undefined,
                    priority: parseNumeric(emoteEl.querySelector('Priority')?.textContent),
                    public: emoteEl.querySelector('Public')?.textContent?.toLowerCase() === 'true',
                };
                emotes.push(emote);
            } catch (e) {
                console.error("Error processing emote definition:", e, emoteEl.innerHTML.substring(0, 300) + "...");
            }
        });
    });
    return emotes;
};
