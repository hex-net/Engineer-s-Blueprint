import React, { useState, useMemo, useEffect } from 'react';
import { Thruster, CelestialBody, GridSize, BlockDefinition } from '../types';
import { formatNumber } from './TableHelpers';
import { InfoTooltip } from './InfoTooltip';
import { PLATINUM_INGOT_DENSITY_KG_PER_LITER } from '../data/blockDataUtils';

interface ThrusterCalculatorProps {
  allThrusters: Thruster[]; 
  allBlocks: BlockDefinition[];
  selectedPlanet: CelestialBody | undefined;
  selectedGridSize: GridSize; 
}

type CalculatorMode = 'calcLift' | 'calcThrusters';

const DEFAULT_AVERAGE_CARGO_DENSITY = 2.7027; // Approx. for Stone/Common Ores (1kg / 0.37L)


interface CargoSet {
  id: string;
  selectedInventoryBlockId: string;
  numInventoryBlocks: string;
  inventoryFullness: string; 
  averageDensity: string;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

export const ThrusterCalculator: React.FC<ThrusterCalculatorProps> = ({
  allThrusters, 
  allBlocks,
  selectedPlanet,
  selectedGridSize, 
}) => {
  const [selectedThrusterId, setSelectedThrusterId] = useState<string>('');
  const [numThrusters, setNumThrusters] = useState<string>('1');
  const [baseStructuralMass, setBaseStructuralMass] = useState<string>('1000'); // Renamed from targetMass for clarity
  const [mode, setMode] = useState<CalculatorMode>('calcLift');
  
  const [blockListInput, setBlockListInput] = useState<string>('');
  const [calculatedBlockMass, setCalculatedBlockMass] = useState<number | null>(null);
  const [blockMassError, setBlockMassError] = useState<string>('');

  const [customWeightInput, setCustomWeightInput] = useState<string>('');
  const [calculatedCustomWeight, setCalculatedCustomWeight] = useState<number | null>(null);
  const [customWeightError, setCustomWeightError] = useState<string>('');
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);


  const inventoryBlocks = useMemo(() => {
    return allBlocks.filter(b => b.gridSize === selectedGridSize && b.maxVolumeLiters && b.maxVolumeLiters > 0)
      .sort((a,b) => a.name.localeCompare(b.name));
  }, [allBlocks, selectedGridSize]);

  const firstInventoryBlockId = useMemo(() => inventoryBlocks.length > 0 ? inventoryBlocks[0].id : '', [inventoryBlocks]);

  const [cargoSets, setCargoSets] = useState<CargoSet[]>([
    { 
      id: `set-${Date.now()}`,
      selectedInventoryBlockId: firstInventoryBlockId,
      numInventoryBlocks: '1', 
      inventoryFullness: '100',
      averageDensity: DEFAULT_AVERAGE_CARGO_DENSITY.toString(),
    }
  ]);

  const availableThrusters = allThrusters; 

  useEffect(() => {
    if (availableThrusters.length > 0 && !availableThrusters.find(t => t.id === selectedThrusterId)) {
      setSelectedThrusterId(availableThrusters[0]?.id || '');
    } else if (availableThrusters.length === 0) {
      setSelectedThrusterId('');
    }
  }, [availableThrusters, selectedThrusterId]);
  
  useEffect(() => {
    if (inventoryBlocks.length === 0) {
      setCargoSets(prevSets => {
        const needsReset = prevSets.length !== 1 || prevSets[0].selectedInventoryBlockId !== '';
        if (needsReset) {
          return [{
            id: `set-${Date.now()}-empty`,
            selectedInventoryBlockId: '',
            numInventoryBlocks: '1',
            inventoryFullness: '100',
            averageDensity: DEFAULT_AVERAGE_CARGO_DENSITY.toString(),
          }];
        }
        return prevSets; 
      });
    } else {
      setCargoSets(prevSets => {
        if (prevSets.length === 0 || (prevSets.length === 1 && prevSets[0].selectedInventoryBlockId === '')) { 
          return [{
            id: `set-${Date.now()}-init`,
            selectedInventoryBlockId: firstInventoryBlockId, 
            numInventoryBlocks: '1',
            inventoryFullness: '100',
            averageDensity: DEFAULT_AVERAGE_CARGO_DENSITY.toString(),
          }];
        }
        return prevSets.map(set => {
          const isCurrentSelectionValid = inventoryBlocks.some(b => b.id === set.selectedInventoryBlockId);
          if (!isCurrentSelectionValid && set.selectedInventoryBlockId !== '') {
            return { ...set, selectedInventoryBlockId: firstInventoryBlockId };
          }
          return set;
        });
      });
    }
  }, [firstInventoryBlockId, inventoryBlocks]);


  const selectedThruster = useMemo(() => {
    return availableThrusters.find(t => t.id === selectedThrusterId);
  }, [selectedThrusterId, availableThrusters]);

  const thrusterPerformance = useMemo(() => {
    if (!selectedThruster || !selectedPlanet) return null;
    return selectedThruster.performance?.[selectedPlanet.id];
  }, [selectedThruster, selectedPlanet]);

  const netLiftPerThruster = useMemo(() => {
    if (!selectedThruster || !thrusterPerformance || !selectedPlanet || typeof thrusterPerformance.staticLiftKg === 'string') return 0;
    const liftKg = parseFloat(String(thrusterPerformance.staticLiftKg));
    return isNaN(liftKg) ? 0 : liftKg;
  }, [selectedThruster, thrusterPerformance, selectedPlanet]);
  
  const totalAdditionalCargoWeight = useMemo(() => {
    return cargoSets.reduce((total, currentSet) => {
      const selectedInvBlock = inventoryBlocks.find(b => b.id === currentSet.selectedInventoryBlockId);
      const density = parseFloat(currentSet.averageDensity);
  
      if (!selectedInvBlock || !selectedInvBlock.maxVolumeLiters || isNaN(density) || density <= 0) return total;
  
      const numBlocks = parseInt(currentSet.numInventoryBlocks);
      const fullness = parseFloat(currentSet.inventoryFullness);
  
      if (isNaN(numBlocks) || numBlocks <= 0 || isNaN(fullness) || fullness < 0 || fullness > 100) {
        return total;
      }
      
      const totalEffectiveVolume = selectedInvBlock.maxVolumeLiters * numBlocks * (fullness / 100);
      return total + (totalEffectiveVolume * density);
    }, 0);
  }, [cargoSets, inventoryBlocks]);

  const handleCalculateCustomWeight = () => {
    setCustomWeightError('');
    let sum = 0;
    const lines = customWeightInput.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) {
      setCalculatedCustomWeight(0); 
      return;
    }
    for (const line of lines) {
      const weight = parseFloat(line.trim());
      if (isNaN(weight) || weight < 0) {
        setCustomWeightError(`Invalid weight: "${line}". Please enter positive numbers only.`);
        setCalculatedCustomWeight(null);
        return;
      }
      sum += weight;
    }
    setCalculatedCustomWeight(sum);
  };


  const totalMassToLift = useMemo(() => {
    const base = parseFloat(baseStructuralMass);
    const cargoWeight = totalAdditionalCargoWeight;
    const custom = calculatedCustomWeight || 0;
    if (isNaN(base)) return cargoWeight + custom;
    return base + cargoWeight + custom;
  }, [baseStructuralMass, totalAdditionalCargoWeight, calculatedCustomWeight]);

  const calculationResult = useMemo(() => {
    if (!selectedThruster || !selectedPlanet || netLiftPerThruster === null) return { text: 'N/A', error: false };

    const num = parseInt(numThrusters);
    const massForCalc = totalMassToLift;

    if (mode === 'calcLift') {
      if (isNaN(num) || num <= 0) return { text: 'Invalid number of thrusters.', error: true };
      const totalLift = num * netLiftPerThruster;
      return { text: `${formatNumber(totalLift)} kg`, error: false };
    } else {
      if (isNaN(massForCalc) || massForCalc < 0) return { text: 'Invalid total mass.', error: true };
      if (massForCalc === 0 && netLiftPerThruster >= 0) return { text: `0 thruster(s)`, error: false }; 
      if (netLiftPerThruster <= 0) return { text: 'Thruster cannot lift itself on this planet.', error: true, isSelfLiftError: true };
      const thrustersNeeded = Math.ceil(massForCalc / netLiftPerThruster);
      return { text: `${formatNumber(thrustersNeeded)} thruster(s)`, error: false };
    }
  }, [mode, selectedThruster, selectedPlanet, netLiftPerThruster, numThrusters, totalMassToLift]);

  const handleCalculateBlockMass = () => {
    setBlockMassError('');
    let currentCalcTotalMass = 0;
    const lines = blockListInput.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) {
      setBlockMassError('Block list is empty.');
      setCalculatedBlockMass(null);
      return;
    }

    for (const line of lines) {
      const parts = line.split(':');
      if (parts.length !== 2) {
        setBlockMassError(`Invalid format: "${line}". Use "Block Name: Quantity".`);
        setCalculatedBlockMass(null);
        return;
      }
      const name = parts[0].trim().toLowerCase();
      const quantity = parseInt(parts[1].trim());

      if (isNaN(quantity) || quantity <= 0) {
        setBlockMassError(`Invalid quantity for "${parts[0].trim()}".`);
        setCalculatedBlockMass(null);
        return;
      }

      const block = allBlocks.find(b => 
        b.name.toLowerCase() === name && 
        b.gridSize === selectedGridSize 
      );

      if (!block) {
        setBlockMassError(`Block not found for current grid size: "${parts[0].trim()}". Make sure the name matches exactly including grid size prefix (e.g., "Large Light Armor Block").`);
        setCalculatedBlockMass(null);
        return;
      }
      currentCalcTotalMass += (block.massKg || 0) * quantity;
    }
    setCalculatedBlockMass(currentCalcTotalMass);
  };
  
  const effectiveThrustN = useMemo(() => {
    if (!selectedThruster || !thrusterPerformance || typeof thrusterPerformance.actualEffectiveness !== 'number') return 0;
    return selectedThruster.thrustN * thrusterPerformance.actualEffectiveness;
  }, [selectedThruster, thrusterPerformance]);

  const handleAddCargoSet = () => {
    setCargoSets(prevSets => [
      ...prevSets,
      {
        id: `set-${Date.now()}-${prevSets.length}`,
        selectedInventoryBlockId: firstInventoryBlockId,
        numInventoryBlocks: '1',
        inventoryFullness: '100',
        averageDensity: DEFAULT_AVERAGE_CARGO_DENSITY.toString(),
      }
    ]);
  };

  const handleRemoveCargoSet = (idToRemove: string) => {
    setCargoSets(prevSets => {
      const newSets = prevSets.filter(set => set.id !== idToRemove);
      if (newSets.length === 0 && inventoryBlocks.length > 0) {
        return [{
          id: `set-${Date.now()}-default`,
          selectedInventoryBlockId: firstInventoryBlockId,
          numInventoryBlocks: '1',
          inventoryFullness: '100',
          averageDensity: DEFAULT_AVERAGE_CARGO_DENSITY.toString(),
        }];
      } else if (newSets.length === 0 && inventoryBlocks.length === 0) {
         return [{
            id: `set-${Date.now()}-empty-default`,
            selectedInventoryBlockId: '',
            numInventoryBlocks: '1',
            inventoryFullness: '100',
            averageDensity: DEFAULT_AVERAGE_CARGO_DENSITY.toString(),
          }];
      }
      return newSets;
    });
  };

  const handleCargoSetChange = (idToUpdate: string, field: keyof Omit<CargoSet, 'id'>, value: string) => {
    setCargoSets(prevSets => 
      prevSets.map(set => 
        set.id === idToUpdate ? { ...set, [field]: value } : set
      )
    );
  };

  const maxPossibleCargoWeightKgFromSets = useMemo(() => {
    return cargoSets.reduce((totalMaxWeight, currentSet) => {
      const selectedInvBlock = inventoryBlocks.find(b => b.id === currentSet.selectedInventoryBlockId);
      if (!selectedInvBlock || !selectedInvBlock.maxPossibleCargoWeightKg) return totalMaxWeight;
      const numBlocks = parseInt(currentSet.numInventoryBlocks);
      if (isNaN(numBlocks) || numBlocks <=0) return totalMaxWeight;
      return totalMaxWeight + (selectedInvBlock.maxPossibleCargoWeightKg * numBlocks);
    }, 0);
  }, [cargoSets, inventoryBlocks]);

  const totalMaxPotentialMassToLift = useMemo(() => {
    const base = parseFloat(baseStructuralMass);
    const maxCargo = maxPossibleCargoWeightKgFromSets;
    if (isNaN(base)) return maxCargo;
    return base + maxCargo;
  }, [baseStructuralMass, maxPossibleCargoWeightKgFromSets]);

  const maxThrustersNeededResult = useMemo(() => {
    if (!selectedThruster || !selectedPlanet || netLiftPerThruster === null) return { text: 'N/A', error: false };
    const massForCalc = totalMaxPotentialMassToLift;
    if (isNaN(massForCalc) || massForCalc <= 0) return { text: 'Invalid total max mass.', error: true };
    if (netLiftPerThruster <= 0) return { text: 'Thruster cannot lift itself on this planet.', error: true };
    const thrustersNeeded = Math.ceil(massForCalc / netLiftPerThruster);
    return { text: `${formatNumber(thrustersNeeded)} thruster(s)`, error: false };
  }, [selectedThruster, selectedPlanet, netLiftPerThruster, totalMaxPotentialMassToLift]);


  return (
    <div className="mt-10 mb-8 p-6 bg-[var(--color-surface-1)] rounded-lg shadow-xl">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="text-2xl font-semibold text-[var(--color-text-accent)]">Thruster Lift & Mass Calculator</h3>
        <button
            onClick={() => setIsGuideOpen(!isGuideOpen)}
            className="flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-[var(--color-surface-3)] hover:bg-opacity-80 text-[var(--color-text-accent)] opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-surface-1)] focus:ring-[var(--color-primary-focus)]"
            aria-expanded={isGuideOpen}
            aria-controls="thruster-calculator-guide"
        >
            <span>{isGuideOpen ? 'Hide' : 'Show'} Calculator Guide</span>
            <ChevronIcon isOpen={isGuideOpen} />
        </button>
      </div>

      {isGuideOpen && (
        <div id="thruster-calculator-guide" className="mb-6 p-4 bg-[var(--color-surface-2)] bg-opacity-70 rounded-md text-sm text-[var(--color-text-secondary)] prose prose-sm max-w-none prose-headings:text-[var(--color-text-accent)] prose-strong:text-[var(--color-text-primary)] prose-ul:list-disc prose-li:ml-4">
            <h4 className="font-semibold">How to Use This Calculator</h4>
            <p>This calculator helps you estimate thruster performance for your ship designs. You can either calculate the total lift capacity for a given number of thrusters or determine how many thrusters are needed to lift a specific mass.</p>
            
            <h5>1. Thruster Selection & Info</h5>
            <ul>
                <li><strong>Select Thruster:</strong> Choose a thruster from the dropdown. The list is filtered by the Grid Size and DLC selected in the main Controls panel above.</li>
                <li><strong>Thruster Stats (Displayed below selection):</strong>
                    <ul>
                        <li><strong>Base Thrust:</strong> The raw force output of the thruster in Newtons (N).</li>
                        <li><strong>Effective Thrust on {selectedPlanet?.name || 'Planet'}:</strong> Base Thrust adjusted for the selected planet's atmospheric density or gravity. Displayed in N and as a percentage.</li>
                        <li><strong>Thruster Mass:</strong> The weight of a single thruster unit in kg.</li>
                        <li><strong>Net Lift per Thruster:</strong> The actual mass (in kg) one thruster can lift against the selected planet's gravity, after accounting for its own mass and effectiveness. This is the key value used for lift calculations. If this is zero or negative, the thruster cannot lift its own weight on this planet.</li>
                    </ul>
                </li>
            </ul>

            <h5>2. Calculation Mode & Primary Input</h5>
            <ul>
                <li><strong>Calculate Total Lift:</strong>
                    <ul>
                        <li>Select this mode if you know how many thrusters you have.</li>
                        <li>Input the <strong>Number of Thrusters</strong>.</li>
                        <li>The calculator will output the total mass these thrusters can lift.</li>
                    </ul>
                </li>
                <li><strong>Calculate Thrusters Needed:</strong>
                    <ul>
                        <li>Select this mode if you know the total mass your ship needs to lift.</li>
                        <li>Input the <strong>Base Structural Mass (kg)</strong>. This is the primary mass input for this mode.</li>
                        <li>The calculator will output the minimum number of selected thrusters required.</li>
                    </ul>
                </li>
            </ul>

            <h5>3. Mass Inputs & Adjustments</h5>
            <p>The "Total Mass to Lift" is derived from three sources: Base Structural Mass, Cargo Weight Adjustment, and Custom Weight List.</p>
            <ul>
                <li><strong>Base Structural Mass (kg):</strong>
                    <ul>
                        <li>Enter your ship's dry mass (without cargo) directly into the "Base Structural Mass (kg)" field if you've selected "Calculate Thrusters Needed" mode.</li>
                        <li>Alternatively, use the <strong>"Calculate Base Mass from Block List"</strong> section:
                            <ul>
                                <li>Enter your ship's blocks, one per line, in the format: <code>Block Name: Quantity</code> (e.g., <code>Large Light Armor Block: 100</code>).</li>
                                <li><strong>Important:</strong> Use the exact block names as they appear in the tables above, including "Large" or "Small" prefixes if applicable for the currently selected Grid Size.</li>
                                <li>Click "Calculate Block Mass". The total mass will appear below.</li>
                                <li>Click "Use as Base Structural Mass" to automatically populate the "Base Structural Mass (kg)" field in the main calculator (and switch to "Calculate Thrusters Needed" mode if not already selected).</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Cargo Weight Adjustment (Cargo Sets):</strong>
                    <ul>
                        <li>This section allows you to add weight from specific inventory-holding blocks.</li>
                        <li><strong>Inv. Block Type:</strong> Select the type of block (e.g., Large Cargo Container, Reactor). The list is filtered by the selected Grid Size.</li>
                        <li><strong>Avg. Cargo Density (kg/L):</strong> Enter the average density of the items in these containers.
                            <ul>
                                <li>The default (approx. {DEFAULT_AVERAGE_CARGO_DENSITY.toFixed(4)} kg/L) is for common ores like Stone.</li>
                                <li>Platinum Ingots are very dense (approx. {PLATINUM_INGOT_DENSITY_KG_PER_LITER.toFixed(1)} kg/L). Use this for worst-case scenario planning.</li>
                                <li>Components vary widely (e.g., Steel Plates are ~7.8 kg/L, Computers ~0.5 kg/L).</li>
                            </ul>
                        </li>
                        <li><strong>Number of Blocks:</strong> How many of this specific block type you have.</li>
                        <li><strong>Cargo Fullness (%):</strong> How full these blocks are, as a percentage (0-100).</li>
                        <li>Click "+ Add Another Cargo Set" to add more types of cargo or blocks. Click "×" to remove a set.</li>
                        <li><strong>Total Additional Cargo Weight:</strong> This sum is automatically added to the "Total Mass to Lift".</li>
                    </ul>
                </li>
                <li><strong>Custom Weight List:</strong>
                    <ul>
                        <li>Use this for any other weights not covered by inventory blocks (e.g., mass of subgrids attached via rotors/pistons, specific loose components you know the weight of).</li>
                        <li>Enter one weight (in kg) per line in the text area.</li>
                        <li>Click "Calculate & Add Custom Weights". The sum will be calculated and added to the "Total Mass to Lift".</li>
                    </ul>
                </li>
            </ul>

            <h5>4. Understanding the Results</h5>
            <ul>
                <li><strong>Total Mass to Lift:</strong> This is the sum of:
                    <ul>
                        <li>Base Structural Mass (either directly inputted or from the block list calculator).</li>
                        <li>Total Additional Cargo Weight (from all cargo sets).</li>
                        <li>Sum of Custom Weights.</li>
                    </ul>
                </li>
                <li><strong>Main Calculation Result (Green/Red Text):</strong>
                    <ul>
                        <li>If in "Calculate Total Lift" mode: Shows the <strong>Total Net Lift Achievable</strong> by the specified number of thrusters for the "Total Mass to Lift".</li>
                        <li>If in "Calculate Thrusters Needed" mode: Shows the <strong>Minimum Thrusters Required</strong> to lift the "Total Mass to Lift".</li>
                        <li>The text will be red if there's an error (e.g., invalid input, thruster cannot lift itself).</li>
                    </ul>
                </li>
            </ul>
            
            <h5>5. Maximum Potential Lift Scenario</h5>
            <ul>
                <li>This section helps plan for a "worst-case" scenario where all inventory blocks specified in your "Cargo Sets" are filled to 100% capacity with Platinum Ingots (the densest common cargo material).</li>
                <li><strong>Total Max Cargo Capacity (Platinum):</strong> The total weight of platinum your specified cargo containers could hold.</li>
                <li><strong>Structural Mass:</strong> The value from your "Base Structural Mass" input.</li>
                <li><strong>Total Max Potential Mass:</strong> The sum of the structural mass and the maximum platinum cargo weight.</li>
                <li><strong>Thrusters Needed for Max Potential Mass:</strong> The number of selected thrusters required to lift this absolute maximum potential mass. This helps ensure your ship can move even when fully laden with the heaviest cargo.</li>
            </ul>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        <div className="space-y-4 md:col-span-2">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="thruster-select" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
              Select Thruster ({selectedGridSize})
            </label>
            <select
              id="thruster-select"
              value={selectedThrusterId}
              onChange={(e) => setSelectedThrusterId(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
              disabled={availableThrusters.length === 0}
            >
              {availableThrusters.length === 0 && <option value="">No thrusters for this selection</option>}
              {availableThrusters.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          {selectedThruster && selectedPlanet && (
            <div className="p-3 bg-[var(--color-surface-2)] bg-opacity-50 rounded-md text-xs text-[var(--color-text-primary)]">
              <p><span className="font-semibold text-[var(--color-text-secondary)]">Selected:</span> {selectedThruster.name}</p>
              <p><span className="font-semibold text-[var(--color-text-secondary)]">Base Thrust:</span> {formatNumber(selectedThruster.thrustN)} N</p>
              <p><span className="font-semibold text-[var(--color-text-secondary)]">Effective Thrust on {selectedPlanet.name}:</span> {formatNumber(effectiveThrustN)} N ({((thrusterPerformance?.actualEffectiveness ?? 0) * 100).toFixed(1)}%)</p>
              <p><span className="font-semibold text-[var(--color-text-secondary)]">Thruster Mass:</span> {formatNumber(selectedThruster.massKg)} kg</p>
              <p><span className="font-semibold text-[var(--color-text-secondary)]">Net Lift per Thruster:</span> <span className={netLiftPerThruster <=0 ? "text-red-400" : "text-[var(--color-text-primary)]"}>{formatNumber(netLiftPerThruster)} kg</span></p>
            </div>
          )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">Calculation Mode</label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setMode('calcLift')}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${mode === 'calcLift' ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)]' : 'bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
              >
                Calculate Total Lift
              </button>
              <button
                type="button"
                onClick={() => setMode('calcThrusters')}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${mode === 'calcThrusters' ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)]' : 'bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
              >
                Calculate Thrusters Needed
              </button>
            </div>
          </div>

          {mode === 'calcLift' ? (
            <div>
              <label htmlFor="num-thrusters" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
                Number of Thrusters
              </label>
              <input
                id="num-thrusters"
                type="number"
                value={numThrusters}
                onChange={(e) => setNumThrusters(e.target.value)}
                className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
                min="1"
                step="1"
                disabled={!selectedThruster}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="base-structural-mass" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
                Base Structural Mass (kg)
              </label>
              <input
                id="base-structural-mass"
                type="number"
                value={baseStructuralMass}
                onChange={(e) => setBaseStructuralMass(e.target.value)}
                className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
                min="0"
                step="100"
                disabled={!selectedThruster}
              />
            </div>
          )}
          
          <div className="space-y-4 p-4 bg-[var(--color-surface-2)] bg-opacity-30 rounded-md mt-4">
            <h4 className="text-md font-semibold text-[var(--color-text-accent)] opacity-80">
                Cargo Weight Adjustment
                <InfoTooltip text="Define sets of inventory blocks (like Cargo Containers) and their contents to calculate additional cargo mass." />
            </h4>
            {cargoSets.map((set, index) => {
              const currentSetInvBlock = inventoryBlocks.find(b => b.id === set.selectedInventoryBlockId);
              let currentSetWeight = 0;
              const density = parseFloat(set.averageDensity);

              if (currentSetInvBlock && currentSetInvBlock.maxVolumeLiters && !isNaN(density) && density > 0) {
                const numBlocks = parseInt(set.numInventoryBlocks);
                const fullness = parseFloat(set.inventoryFullness);
                if (!isNaN(numBlocks) && numBlocks > 0 && !isNaN(fullness) && fullness >= 0 && fullness <= 100) {
                  const totalEffectiveVolume = currentSetInvBlock.maxVolumeLiters * numBlocks * (fullness / 100);
                  currentSetWeight = totalEffectiveVolume * density;
                }
              }

              return (
                <div key={set.id} className="p-3 border border-[var(--color-border)] rounded-md space-y-3 bg-[var(--color-surface-1)] bg-opacity-50 relative">
                    {cargoSets.length > 1 && (
                    <button
                        type="button"
                        onClick={() => handleRemoveCargoSet(set.id)}
                        className="absolute top-2 right-2 text-xs px-1.5 py-0.5 bg-red-600 hover:bg-red-700 rounded-md text-white transition-colors"
                        aria-label={`Remove Cargo Set ${index + 1}`}
                    >
                        &times;
                    </button>
                    )}
                    <p className="text-sm font-medium text-[var(--color-text-accent)] opacity-70">Cargo Set {index + 1}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                          <label htmlFor={`inventory-block-select-${set.id}`} className="block text-xs font-medium text-[var(--color-text-secondary)] mb-1">
                              Inv. Block Type {index + 1} ({selectedGridSize})
                          </label>
                          <select
                              id={`inventory-block-select-${set.id}`}
                              value={set.selectedInventoryBlockId}
                              onChange={(e) => handleCargoSetChange(set.id, 'selectedInventoryBlockId', e.target.value)}
                              className="w-full px-3 py-1.5 text-xs bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
                              disabled={inventoryBlocks.length === 0}
                          >
                              {inventoryBlocks.length === 0 && <option value="">No inventory blocks</option>}
                              {inventoryBlocks.map(b => (
                                  <option key={b.id} value={b.id}>{b.name} ({formatNumber(b.maxVolumeLiters)} L)</option>
                              ))}
                          </select>
                      </div>
                      <div>
                          <label htmlFor={`average-density-${set.id}`} className="block text-xs font-medium text-[var(--color-text-secondary)] mb-1">
                              Avg. Cargo Density {index + 1} (kg/L)
                              <InfoTooltip text="Default is Stone/Ore density. Platinum Ingots are ~20 kg/L. Common components are ~0.5 to ~8 kg/L." />
                          </label>
                          <input
                              id={`average-density-${set.id}`}
                              type="number"
                              value={set.averageDensity}
                              onChange={(e) => handleCargoSetChange(set.id, 'averageDensity', e.target.value)}
                              min="0.001" step="0.1"
                              placeholder={DEFAULT_AVERAGE_CARGO_DENSITY.toString()}
                              className="w-full px-3 py-1.5 text-xs bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]"
                              disabled={!set.selectedInventoryBlockId && inventoryBlocks.length > 0}
                          />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                          <label htmlFor={`num-inventory-blocks-${set.id}`} className="block text-xs font-medium text-[var(--color-text-secondary)] mb-1">
                              Number of Blocks {index + 1}
                          </label>
                          <input
                              id={`num-inventory-blocks-${set.id}`}
                              type="number"
                              value={set.numInventoryBlocks}
                              onChange={(e) => handleCargoSetChange(set.id, 'numInventoryBlocks', e.target.value)}
                              min="0" step="1"
                              className="w-full px-3 py-1.5 text-xs bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
                              disabled={!set.selectedInventoryBlockId && inventoryBlocks.length > 0}
                          />
                      </div>
                      <div>
                          <label htmlFor={`inventory-fullness-${set.id}`} className="block text-xs font-medium text-[var(--color-text-secondary)] mb-1">
                              Cargo Fullness {index + 1} (%)
                          </label>
                          <input
                              id={`inventory-fullness-${set.id}`}
                              type="number"
                              value={set.inventoryFullness}
                              onChange={(e) => handleCargoSetChange(set.id, 'inventoryFullness', e.target.value)}
                              min="0" max="100" step="1"
                              className="w-full px-3 py-1.5 text-xs bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)]"
                              disabled={!set.selectedInventoryBlockId && inventoryBlocks.length > 0}
                          />
                      </div>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                        Additional Cargo Weight (Set {index + 1}): <span className="font-semibold text-[var(--color-text-primary)]">{formatNumber(currentSetWeight)} kg</span>
                    </p>
                </div>
              );
            })}
            <button
              type="button"
              onClick={handleAddCargoSet}
              className="w-full mt-3 px-3 py-1.5 text-xs font-medium rounded-md bg-[var(--color-primary-hover)] hover:bg-[var(--color-primary-focus)] text-[var(--color-primary-text)] transition-colors"
            >
              + Add Another Cargo Set
            </button>
            <p className="mt-4 text-sm text-[var(--color-text-secondary)] font-semibold">
                Total Additional Cargo Weight: <span className="text-[var(--color-text-accent)]">{formatNumber(totalAdditionalCargoWeight)} kg</span>
            </p>
          </div>
          
          <div className="space-y-4 p-4 bg-[var(--color-surface-2)] bg-opacity-30 rounded-md mt-4">
             <h4 className="text-md font-semibold text-[var(--color-text-accent)] opacity-80">
                Custom Weight List
                <InfoTooltip text="Add miscellaneous weights not covered by inventory blocks, like attached grids or specific components. Enter one weight (kg) per line." />
            </h4>
            <textarea
              id="custom-weight-input"
              rows={3}
              value={customWeightInput}
              onChange={(e) => setCustomWeightInput(e.target.value)}
              placeholder={`Example:\n150\n2000.5\n75`}
              className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm"
            />
            <button
                type="button"
                onClick={handleCalculateCustomWeight}
                className="w-full px-4 py-2 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:bg-[var(--color-primary-hover)] transition-colors"
            >
                Calculate & Add Custom Weights
            </button>
            {customWeightError && <p className="text-sm text-red-400">{customWeightError}</p>}
            {calculatedCustomWeight !== null && (
                <p className="text-sm text-[var(--color-text-secondary)] font-semibold">
                    Sum of Custom Weights: <span className="text-[var(--color-text-accent)]">{formatNumber(calculatedCustomWeight)} kg</span>
                </p>
            )}
          </div>


          {selectedThruster && selectedPlanet && (
            <div className="mt-4 p-4 bg-[var(--color-background)] rounded-md text-center">
              <p className="text-sm text-[var(--color-text-secondary)] mb-1">Total Mass to Lift (Base + Cargo + Custom): <span className="font-bold text-[var(--color-text-accent)]">{formatNumber(totalMassToLift)} kg</span></p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                {mode === 'calcLift' ? 'Total Net Lift Achievable:' : 'Minimum Thrusters Required:'}
              </p>
              <p className={`text-2xl font-bold ${calculationResult.error ? 'text-red-400' : 'text-green-400'}`}>
                {calculationResult.text}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Block Mass Calculator */}
        <div className="space-y-4 p-4 bg-[var(--color-surface-2)] bg-opacity-30 rounded-md md:col-span-1">
          <h4 className="text-lg font-semibold text-[var(--color-text-accent)] opacity-80 mb-2">Calculate Base Mass from Block List</h4>
          <p className="text-xs text-[var(--color-text-secondary)] mb-2">Enter one block per line: "Block Name: Quantity". Ensure block names match those in the tables for the current grid size.</p>
          <div>
            <label htmlFor="block-list-input" className="block text-sm font-medium text-[var(--color-text-accent)] opacity-80 mb-1">
              Block List ({selectedGridSize})
            </label>
            <textarea
              id="block-list-input"
              rows={8}
              value={blockListInput}
              onChange={(e) => setBlockListInput(e.target.value)}
              placeholder={`Example:\nLarge Light Armor Block: 100\nLarge Reactor: 1`}
              className="w-full px-3 py-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:border-[var(--color-primary-focus)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm"
            />
          </div>
          <button
            type="button"
            onClick={handleCalculateBlockMass}
            className="w-full px-4 py-2 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Calculate Block Mass
          </button>
          {blockMassError && (
            <p className="text-sm text-red-400">{blockMassError}</p>
          )}
          {calculatedBlockMass !== null && (
            <div className="mt-2 p-3 bg-[var(--color-background)] bg-opacity-70 rounded-md">
              <p className="text-sm text-[var(--color-text-secondary)]">Total Mass of Blocks (Base):</p>
              <p className="text-lg font-semibold text-green-400">{formatNumber(calculatedBlockMass)} kg</p>
              <button 
                onClick={() => { setBaseStructuralMass(String(calculatedBlockMass)); setMode('calcThrusters');}}
                className="mt-2 text-xs px-2 py-1 bg-[var(--color-primary-hover)] hover:bg-[var(--color-primary-focus)] rounded-md text-[var(--color-primary-text)]"
              >
                Use as Base Structural Mass
              </button>
            </div>
          )}
        </div>
      </div>
      
      {selectedThruster && selectedPlanet && cargoSets.length > 0 && cargoSets.some(cs => cs.selectedInventoryBlockId) && (
         <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
            <h4 className="text-xl font-semibold text-[var(--color-text-accent)] mb-4 text-center">
                Maximum Potential Lift Scenario
                <InfoTooltip text="Calculates thrusters needed if all selected inventory blocks were filled to capacity with Platinum Ingots (densest cargo)." />
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-[var(--color-surface-2)] bg-opacity-30 rounded-md">
                <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Structural Mass (kg):</p>
                    <p className="text-md font-semibold text-[var(--color-text-primary)]">{formatNumber(parseFloat(baseStructuralMass) || 0)}</p>
                </div>
                <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Total Max Cargo (Platinum) (kg):</p>
                    <p className="text-md font-semibold text-[var(--color-text-primary)]">{formatNumber(maxPossibleCargoWeightKgFromSets)}</p>
                </div>
                 <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Total Max Potential Mass (kg):</p>
                    <p className="text-md font-semibold text-[var(--color-text-primary)]">{formatNumber(totalMaxPotentialMassToLift)}</p>
                </div>
                <div className="sm:col-span-2 lg:col-span-3 text-center mt-2">
                    <p className="text-sm text-[var(--color-text-secondary)]">Thrusters for Max Potential Lift:</p>
                    <p className={`text-xl font-bold ${maxThrustersNeededResult.error ? 'text-red-400' : 'text-green-400'}`}>
                        {maxThrustersNeededResult.text}
                    </p>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};
