// data/localizationUtils.ts

export function parseDisplayNamesFromResx(resxXml: string): Map<string, string> {
  const displayNames = new Map<string, string>();
  if (typeof DOMParser === 'undefined') {
    console.warn('DOMParser not available. Skipping RESX parsing for display names.');
    return displayNames;
  }

  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(resxXml, "application/xml");
    const dataElements = xmlDoc.getElementsByTagName("data");

    for (let i = 0; i < dataElements.length; i++) {
      const dataElement = dataElements[i];
      const nameAttribute = dataElement.getAttribute("name");
      const valueElement = dataElement.getElementsByTagName("value")[0];

      if (nameAttribute && valueElement && valueElement.textContent) {
        const localizedValue = valueElement.textContent.trim();
        displayNames.set(nameAttribute, localizedValue); // Set the full key first

        if (nameAttribute.startsWith("DisplayName_Block_")) {
          const shortKey = nameAttribute.substring("DisplayName_Block_".length);
          // Only add/overwrite shortKey if:
          // 1. shortKey doesn't exist OR
          // 2. shortKey exists but its current value is the same as this new localizedValue
          // AND
          // 3. The localizedValue is not empty (to prevent adding empty short keys that might hide other valid names)
          if (localizedValue !== "") { 
            if (!displayNames.has(shortKey) || displayNames.get(shortKey) === localizedValue) {
              displayNames.set(shortKey, localizedValue);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error("Error parsing RESX XML for display names:", error);
  }
  
  return displayNames;
}