import { BlockDefinition, GridSize, BlockComponent, Thruster, ThrusterType, ThrusterSize, FuelConverterInfo, CelestialBody, ThrusterPerformance, CelestialBodyId } from '../types'; // Updated imports

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

// Approximate component masses in kg.
const componentMasses: Record<string, number> = {
  SteelPlate: 20.3, InteriorPlate: 5.06, Construction: 2.03, Motor: 24.38, Computer: 0.51,
  LargeTube: 8.13, SmallTube: 2.03, Girder: 7.01, MetalGrid: 6.09, SolarCell: 1.01,
  PowerCell: 30.48, BulletproofGlass: 15.24, Reactor: 5.06, Thrust: 25.38, // Default mass for "Thrust" component
  RadioCommunication: 2.03, Detector: 6.09, Medical: 1.01, ZoneChip: 50.75,
  Superconductor: 20.3, GravityGenerator: 203, Display: 1.01, Explosives: 1.01, Canvas: 0.51,
  PrototechFrame: 100, PrototechCapacitor: 50, PrototechCircuitry: 10, PrototechPanel: 10,
  PrototechCoolingUnit: 20, PrototechPropulsionUnit: 30, PrototechMachinery: 40,
};


// Helper function to generate a more readable name
export const generateReadableName = (identifier: string, typeIdOriginal: string, gridSize?: GridSize, blockPairName?: string): string => {
  let name = identifier;
  if ((!name || name.trim() === "") && blockPairName) name = blockPairName;
  if (!name || name.trim() === "") name = typeIdOriginal;
  if (!name || name.trim() === "") return "Unknown Block";
  
  const prefixesToRemove = ["LargeBlock", "SmallBlock", "Large", "Small", "DB"];
  for (const prefix of prefixesToRemove) {
    if (name.toLowerCase().startsWith(prefix.toLowerCase())) name = name.substring(prefix.length);
  }
  if (name.startsWith("Armor") && !["ArmorPanel", "ArmorCenter", "ArmorCorner", "ArmorInvCorner", "ArmorSide", "ArmorSloped"].some(specific => name.startsWith(specific))) name = name.substring(5);
  if (typeIdOriginal.includes('Light') && name.endsWith('Light') && name !== 'Reflector Light' && name !== 'Interior Light' && name !== 'Corner Light') name = name.substring(0, name.length - 5).trim();

  name = name.replace(/([A-Z0-9]+)/g, ' $1').trim().replace(/\s+/g, ' ');
  name = name.replace(/2Base/g, ' 2 Base').replace(/2Tip/g, ' 2 Tip').replace(/Inv( |$)/g, 'Inverted$1');
  
  name = name.split(' ').map(word => word.length > 1 && word.toUpperCase() === word ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  
  if (identifier) {
    if (identifier.toLowerCase().includes('lightarmor') && !name.toLowerCase().includes('light armor')) name = name.replace(/Armor/i, 'Light Armor').replace('Light Light', 'Light');
    else if (identifier.toLowerCase().includes('heavyarmor') && !name.toLowerCase().includes('heavy armor')) name = name.replace(/Armor/i, 'Heavy Armor').replace('Heavy Heavy', 'Heavy');
  }
  
  const lowerName = name.toLowerCase();
  const commonPrefixes = ['large', 'lg', 'small', 'sm'];
  if (!commonPrefixes.some(p => lowerName.startsWith(p))) {
    if (gridSize === GridSize.LARGE) name = 'Large ' + name;
    else if (gridSize === GridSize.SMALL) name = 'Small ' + name;
  }

  if (gridSize === GridSize.LARGE && name.toLowerCase().startsWith('large large')) name = 'Large ' + name.substring(12).trim();
  else if (gridSize === GridSize.SMALL && name.toLowerCase().startsWith('small small')) name = 'Small ' + name.substring(12).trim();

  if ((name.toLowerCase() === 'large' || name.toLowerCase() === 'small') && blockPairName) name = (gridSize === GridSize.LARGE ? 'Large ' : 'Small ') + blockPairName;
  else if (name.toLowerCase() === 'large block' || name.toLowerCase() === 'small block') {
    if (identifier && identifier.toLowerCase().includes('armor')) name = (gridSize === GridSize.LARGE ? 'Large Armor Block' : 'Small Armor Block');
    else if (blockPairName) name = (gridSize === GridSize.LARGE ? 'Large ' : 'Small ') + blockPairName;
  }
  if (name.match(/^Large Large/i)) name = name.substring(6).trim();
  if (name.match(/^Small Small/i)) name = name.substring(6).trim();

  return name.replace(/\s+/g, ' ').trim();
};

const parseComponents = (def: Element): BlockComponent[] => {
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


export const parseBlockDefinitions = (xmlStrings: string[]): BlockDefinition[] => {
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

        if (typeId === 'Thrust') return; // Skip thruster definitions, handled by parseThrusterDefinitions

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

        const displayNameElement = def.querySelector('DisplayName');
        const iconElement = def.querySelector('Icon');
        const sizeElement = def.querySelector('Size');
        const buildTimeElement = def.querySelector('BuildTimeSeconds');
        const pcuElement = def.querySelector('PCU');
        const pcuConsoleElement = def.querySelector('PCUConsole'); // Fallback PCU
        const edgeTypeElement = def.querySelector('EdgeType');
        const isAirTightElement = def.querySelector('IsAirTight');
        const guiVisibleElement = def.querySelector('GuiVisible');
        const dlcElement = def.querySelector('DLC');
        
        const components = parseComponents(def);
        
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
        if (calculatedMassKg !== undefined && calculatedMassKg < 0.01) calculatedMassKg = 0.01; // Ensure a minimum mass if calculated
        
        const massElement = def.querySelector('Mass');
        if (massElement?.textContent) calculatedMassKg = parseFloat(massElement.textContent) || calculatedMassKg;

        const blockDefinition: BlockDefinition = {
          id: uniqueId, typeId: typeId, name: generateReadableName(subtypeId, typeId, gridSize, blockPairName),
          displayNameKey: displayNameElement?.textContent || `DisplayName_Block_${uniqueId}`, icon: iconFileName, iconPath: iconPath, gridSize, size,
          buildTimeSeconds: parseNumeric(buildTimeElement?.textContent), components: components.length ? components : undefined,
          pcu: parseNumeric(pcuElement?.textContent) ?? parseNumeric(pcuConsoleElement?.textContent), massKg: calculatedMassKg,
          blockPairName, edgeType: edgeTypeElement?.textContent || undefined,
          isAirTight: isAirTightElement ? isAirTightElement.textContent?.toLowerCase() === 'true' : undefined,
          guiVisible: guiVisibleElement ? guiVisibleElement.textContent?.toLowerCase() !== 'false' : undefined,
          dlc: dlcElement?.textContent || undefined,
          weaponDefinitionId: weaponDefIdElement?.getAttribute('Subtype') || undefined, ammoMagazines,
          maxRangeMeters: parseNumeric(maxRangeMetersElement?.textContent),
          baseRateOfFire: parseNumeric(rateOfFireElement?.textContent),
          shotDeviationAngle: parseNumeric(deviateShotAngleElement?.textContent),
        };
        parsedBlocks.push(blockDefinition);
      } catch (e) {
        console.error("Error processing block definition:", e, def.innerHTML.substring(0,500) + "...");
      }
    });
  });
  return parsedBlocks;
};

export const parseThrusterDefinitions = (xmlStrings: string[]): Thruster[] => {
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

        if (typeId !== 'Thrust') return; // Only process thruster definitions

        const subtypeId = idElement?.querySelector('SubtypeId')?.textContent || 'UnknownThruster';
        const displayNameKey = def.querySelector('DisplayName')?.textContent || `DisplayName_Block_${subtypeId}`;
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
        
        const components = parseComponents(def);
        const blockPairName = def.querySelector('BlockPairName')?.textContent || undefined;
        const dlc = def.querySelector('DLC')?.textContent || undefined;

        let calculatedMassKg: number | undefined = components.length > 0 ? components.reduce((totalMass, component) => (totalMass + (componentMasses[component.subtype] || 0) * component.count), 0) : undefined;
        if (calculatedMassKg !== undefined && calculatedMassKg < 0.01) calculatedMassKg = 0.01; // Ensure a minimum mass if calculated
        
        const massElement = def.querySelector('Mass'); // Check for explicit Mass tag
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

        const thruster: Thruster = {
          id: subtypeId,
          name: generateReadableName(subtypeId, typeId, gridSize, blockPairName),
          icon: iconFileName,
          gridSize,
          type: thrusterType,
          size: thrusterSizeEnum,
          massKg: calculatedMassKg,
          thrustN: parseNumeric(def.querySelector('ForceMagnitude')?.textContent) || 0,
          powerMW: (parseNumeric(def.querySelector('MaxPowerConsumption')?.textContent) || 0),
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
          performance: {}, // Initialize performance object, to be populated later
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
  // Fallback for simpler strings or if parsing fails
  if (atmosphereDensityString.toLowerCase().includes("optimal")) return 1.0;
  if (atmosphereDensityString.toLowerCase().includes("dense")) return 1.2; // Default dense
  if (atmosphereDensityString.toLowerCase().includes("thin")) return 0.5; // Default thin
  return 0.0; // Default if unparseable
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
  
  actualEffectiveness = Math.max(0, Math.min(1, actualEffectiveness)); // Clamp effectiveness to [0,1]

  let staticLiftKg: string | number = "N/A";
  if (planet.gravityMs2 > 0) {
    const liftForceN = thruster.thrustN * actualEffectiveness;
    staticLiftKg = liftForceN / planet.gravityMs2;
  }

  return { staticLiftKg, actualEffectiveness };
};
