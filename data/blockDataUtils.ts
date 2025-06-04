import { BlockDefinition, GridSize, BlockComponent } from '../types'; // Updated imports

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

// Approximate component masses in kg. This is a simplified model.
// Real SE mass is complex and derived from voxel materials or specific physics properties.
// These values are illustrative.
const componentMasses: Record<string, number> = {
  SteelPlate: 20.3,       // Vanilla SE value for 1 Steel Plate
  InteriorPlate: 5.06,    // Vanilla SE value for 1 Interior Plate
  Construction: 2.03,     // Vanilla SE value for 1 Construction Component
  Motor: 24.38,           // Vanilla SE value for 1 Motor
  Computer: 0.51,         // Vanilla SE value for 1 Computer
  LargeTube: 8.13,        // Vanilla SE value for 1 Large Steel Tube
  SmallTube: 2.03,        // Vanilla SE value for 1 Small Steel Tube
  Girder: 7.01,           // Vanilla SE value for 1 Girder
  MetalGrid: 6.09,        // Vanilla SE value for 1 Metal Grid
  SolarCell: 1.01,        // Vanilla SE value for 1 Solar Cell
  PowerCell: 30.48,       // Vanilla SE value for 1 Power Cell
  BulletproofGlass: 15.24, // Vanilla SE value for 1 Bulletproof Glass
  Reactor: 5.06,          // Vanilla SE value for 1 Reactor Component
  Thrust: 25.38,          // Vanilla SE value for 1 Thruster Component (used in thrusters)
  RadioCommunication: 2.03, // Vanilla SE value for 1 Radio Comm Component
  Detector: 6.09,         // Vanilla SE value for 1 Detector Component
  Medical: 1.01,          // Medical Component (often just "Medical")
  ZoneChip: 50.75,        // Example, actual might vary
  Superconductor: 20.3,   // Vanilla SE value for 1 Superconductor
  GravityGenerator: 203, // Gravity Generator Component (not the block itself)
  SolarPanel: 0, // This is a block TypeId, not a component
  WindTurbine: 0, // This is a block TypeId, not a component
  ReactorBlock: 0, // Placeholder if mistakenly used as component, actual reactors are more
  OxygenGenerator: 0, // Block TypeId
  HydrogenEngine: 0, // Block TypeId
  SurvivalKit: 0, // Block TypeId
  MedicalRoom: 0, // Block TypeId
  Assembler: 0, // Block TypeId
  Refinery: 0, // Block TypeId
  Cockpit: 0, // Block TypeId
  RemoteControl: 0, // Block TypeId
  Display: 1.01, // Vanilla SE value for 1 Display
  Explosives: 1.01, // Vanilla SE value
  Canvas: 0.51, // Example
};


// Helper function to generate a more readable name from SubtypeId or fallback
export const generateReadableName = (identifier: string, typeIdOriginal: string, gridSize?: GridSize, blockPairName?: string): string => {
  let name = identifier;

  if ((!name || name.trim() === "") && blockPairName) {
    name = blockPairName;
  }
  if (!name || name.trim() === "") {
    name = typeIdOriginal; // Fallback to TypeId if SubtypeId and BlockPairName are empty
  }
  if (!name || name.trim() === "") {
    return "Unknown Block";
  }
  
  const prefixesToRemove = ["LargeBlock", "SmallBlock", "Large", "Small", "DB"];
  
  for (const prefix of prefixesToRemove) {
    if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
      name = name.substring(prefix.length);
    }
  }
  
  if (name.startsWith("Armor") && !["ArmorPanel", "ArmorCenter", "ArmorCorner", "ArmorInvCorner", "ArmorSide", "ArmorSloped"].some(specific => name.startsWith(specific))) {
      name = name.substring(5);
  }
  // Specific removals based on TypeId
  if (typeIdOriginal.includes('Light') && name.endsWith('Light') && name !== 'Reflector Light' && name !== 'Interior Light' && name !== 'Corner Light') {
    name = name.substring(0, name.length - 5).trim(); // Remove "Light" suffix if it's from TypeId like "ReflectorLight"
  }


  name = name.replace(/([A-Z0-9]+)/g, ' $1').trim();
  name = name.replace(/\s+/g, ' '); 

  name = name.replace(/2Base/g, ' 2 Base').replace(/2Tip/g, ' 2 Tip');
  name = name.replace(/Inv( |$)/g, 'Inverted$1');
  
  name = name.split(' ').map(word => {
    if (word.toUpperCase() === word && word.length > 1) {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  
  if (identifier) {
    if (identifier.toLowerCase().includes('lightarmor') && !name.toLowerCase().includes('light armor')) {
        name = name.replace(/Armor/i, 'Light Armor').replace('Light Light', 'Light');
    } else if (identifier.toLowerCase().includes('heavyarmor') && !name.toLowerCase().includes('heavy armor')) {
        name = name.replace(/Armor/i, 'Heavy Armor').replace('Heavy Heavy', 'Heavy');
    }
  }
  
  // Ensure grid prefix if not already present from more specific naming
  const lowerName = name.toLowerCase();
  const commonPrefixes = ['large', 'lg', 'small', 'sm'];
  let hasGridPrefix = commonPrefixes.some(p => lowerName.startsWith(p));

  if (!hasGridPrefix) {
    if (gridSize === GridSize.LARGE) {
      name = 'Large ' + name;
    } else if (gridSize === GridSize.SMALL) {
      name = 'Small ' + name;
    }
  }
  
  // Final cleanup pass to remove potential redundant grid size prefixes
  if (gridSize === GridSize.LARGE && name.toLowerCase().startsWith('large large')) {
    name = name.substring(6).trim();
     if (!name.toLowerCase().startsWith('large')) name = 'Large ' + name;
  } else if (gridSize === GridSize.SMALL && name.toLowerCase().startsWith('small small')) {
    name = name.substring(6).trim();
    if (!name.toLowerCase().startsWith('small')) name = 'Small ' + name;
  }

  if ((name.toLowerCase() === 'large' || name.toLowerCase() === 'small') && blockPairName) {
     name = gridSize === GridSize.LARGE ? 'Large ' + blockPairName : 'Small ' + blockPairName;
  } else if (name.toLowerCase() === 'large block' || name.toLowerCase() === 'small block') {
    if (identifier && identifier.toLowerCase().includes('armor')) {
      name = gridSize === GridSize.LARGE ? 'Large Armor Block' : 'Small Armor Block';
    } else if (blockPairName) {
      name = gridSize === GridSize.LARGE ? 'Large ' + blockPairName : 'Small ' + blockPairName;
    }
  }
   // Correct names like "Large Large Heavy Armor Block"
  if (name.match(/^Large Large/i)) name = name.substring(6);
  if (name.match(/^Small Small/i)) name = name.substring(6);


  return name.replace(/\s+/g, ' ').trim();
};

export const parseBlockDefinitions = (xmlStrings: string[]): BlockDefinition[] => {
  const parser = new DOMParser();
  const parsedBlocks: BlockDefinition[] = [];

  xmlStrings.forEach(xmlString => {
    if (!xmlString || xmlString.trim() === "") return;
    const doc = parser.parseFromString(xmlString, "application/xml");
    
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
        console.error("Error parsing XML string:", parserError.textContent);
        console.error("XML causing error:", xmlString.substring(0, 500) + "...");
        return;
    }

    const definitions = Array.from(doc.getElementsByTagName('Definition'));

    definitions.forEach(def => {
      try {
        const idElement = def.querySelector('Id');
        const subtypeIdElement = idElement?.querySelector('SubtypeId');
        const typeIdElement = idElement?.querySelector('TypeId');
        
        let subtypeId = subtypeIdElement?.textContent || '';
        const typeId = typeIdElement?.textContent || 'UnknownType';
        
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
        const pcuConsoleElement = def.querySelector('PCUConsole');
        const edgeTypeElement = def.querySelector('EdgeType');
        const isAirTightElement = def.querySelector('IsAirTight');
        const guiVisibleElement = def.querySelector('GuiVisible');
        const dlcElement = def.querySelector('DLC');
        const componentsElements = Array.from(def.querySelectorAll('Components Component'));

        // Weapon specific elements
        const weaponDefIdElement = def.querySelector('WeaponDefinitionId');
        const ammoMagazinesElements = Array.from(def.querySelectorAll('AmmoMagazines AmmoMagazine'));
        const maxRangeMetersElement = def.querySelector('MaxRangeMeters');
        const rateOfFireElement = def.querySelector('RateOfFire'); // Less common in block def
        const deviateShotAngleElement = def.querySelector('DeviateShotAngle'); // Less common in block def

        const components: BlockComponent[] = componentsElements.reduce((acc: BlockComponent[], compElement: Element) => {
          const subtype = compElement.getAttribute('Subtype') || 'UnknownSubtype';
          const count = parseInt(compElement.getAttribute('Count') || '0', 10);
          const existingComponent = acc.find(c => c.subtype === subtype);
          if (existingComponent) {
            existingComponent.count += count;
          } else {
            acc.push({ subtype, count });
          }
          return acc;
        }, []);
        
        const iconPath = iconElement?.textContent || 'UnknownIcon.dds';
        const iconFileName = iconPath.split(/[\\/]/).pop() || 'UnknownIcon.dds';
        
        const sizeXStr = sizeElement?.getAttribute('x');
        const sizeYStr = sizeElement?.getAttribute('y');
        const sizeZStr = sizeElement?.getAttribute('z');

        const size = sizeXStr && sizeYStr && sizeZStr ? {
            x: parseInt(sizeXStr, 10),
            y: parseInt(sizeYStr, 10),
            z: parseInt(sizeZStr, 10),
          } : undefined;
        
        const ammoMagazines = ammoMagazinesElements.length > 0 ? 
            ammoMagazinesElements.map(el => el.getAttribute('Subtype') || 'UnknownAmmo').filter(s => s !== 'UnknownAmmo') : undefined;

        let calculatedMassKg: number | undefined = undefined;
        if (components.length > 0) {
          calculatedMassKg = components.reduce((totalMass, component) => {
            const massPerUnit = componentMasses[component.subtype] || 0;
            return totalMass + (massPerUnit * component.count);
          }, 0);
          if (calculatedMassKg === 0 && components.some(c => (componentMasses[c.subtype] || 0) === 0)) {
             // If mass is 0 due to unknown components, mark as undefined
             const allComponentsUnknown = components.every(c => (componentMasses[c.subtype] || 0) === 0);
             if (allComponentsUnknown) calculatedMassKg = undefined;
          }
        }
        
        // Look for a direct <Mass> tag if calculation is not preferred or as a fallback/override
        const massElement = def.querySelector('Mass');
        if (massElement && massElement.textContent) {
            const directMass = parseFloat(massElement.textContent);
            if (!isNaN(directMass)) {
                calculatedMassKg = directMass;
            }
        }


        const blockDefinition: BlockDefinition = {
          id: uniqueId,
          typeId: typeId,
          name: generateReadableName(subtypeId, typeId, gridSize, blockPairName),
          displayNameKey: displayNameElement?.textContent || `DisplayName_Block_${uniqueId}`,
          icon: iconFileName,
          iconPath: iconPath,
          gridSize,
          size,
          buildTimeSeconds: parseNumeric(buildTimeElement?.textContent),
          components: components.length > 0 ? components : undefined,
          pcu: parseNumeric(pcuElement?.textContent) ?? parseNumeric(pcuConsoleElement?.textContent),
          massKg: calculatedMassKg,
          blockPairName: blockPairName || undefined,
          edgeType: edgeTypeElement?.textContent || undefined,
          isAirTight: isAirTightElement ? isAirTightElement.textContent?.toLowerCase() === 'true' : undefined,
          guiVisible: guiVisibleElement ? guiVisibleElement.textContent?.toLowerCase() === 'false' ? false : true : undefined,
          dlc: dlcElement?.textContent || undefined,
          // Weapon properties
          weaponDefinitionId: weaponDefIdElement?.getAttribute('Subtype') || undefined,
          ammoMagazines: ammoMagazines,
          maxRangeMeters: parseNumeric(maxRangeMetersElement?.textContent),
          baseRateOfFire: parseNumeric(rateOfFireElement?.textContent),
          shotDeviationAngle: parseNumeric(deviateShotAngleElement?.textContent),
          // projectileDamage will remain undefined here as it's not typically in block XML
        };
        parsedBlocks.push(blockDefinition);
      } catch (e) {
        console.error("Error processing definition:", e, def.innerHTML.substring(0,500) + "...");
      }
    });
  });
  
  return parsedBlocks;
};