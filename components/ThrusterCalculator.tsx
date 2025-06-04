import React, { useState, useMemo, useEffect } from 'react';
import { Thruster, CelestialBody, GridSize, BlockDefinition } from '../types';
import { formatNumber } from './TableHelpers';

interface ThrusterCalculatorProps {
  allThrusters: Thruster[];
  allBlocks: BlockDefinition[];
  selectedPlanet: CelestialBody | undefined;
  selectedGridSize: GridSize;
}

type CalculatorMode = 'calcLift' | 'calcThrusters';

export const ThrusterCalculator: React.FC<ThrusterCalculatorProps> = ({
  allThrusters,
  allBlocks,
  selectedPlanet,
  selectedGridSize,
}) => {
  const [selectedThrusterId, setSelectedThrusterId] = useState<string>('');
  const [numThrusters, setNumThrusters] = useState<string>('1');
  const [targetMass, setTargetMass] = useState<string>('1000');
  const [mode, setMode] = useState<CalculatorMode>('calcLift');
  
  const [blockListInput, setBlockListInput] = useState<string>('');
  const [calculatedBlockMass, setCalculatedBlockMass] = useState<number | null>(null);
  const [blockMassError, setBlockMassError] = useState<string>('');

  const availableThrusters = useMemo(() => {
    return allThrusters.filter(t => t.gridSize === selectedGridSize);
  }, [allThrusters, selectedGridSize]);

  useEffect(() => {
    // Reset selected thruster if it's not in the new available list
    if (availableThrusters.length > 0 && !availableThrusters.find(t => t.id === selectedThrusterId)) {
      setSelectedThrusterId(availableThrusters[0]?.id || '');
    } else if (availableThrusters.length === 0) {
      setSelectedThrusterId('');
    }
  }, [availableThrusters, selectedThrusterId]);


  const selectedThruster = useMemo(() => {
    return availableThrusters.find(t => t.id === selectedThrusterId);
  }, [selectedThrusterId, availableThrusters]);

  const thrusterPerformance = useMemo(() => {
    if (!selectedThruster || !selectedPlanet) return null;
    return selectedThruster.performance?.[selectedPlanet.id];
  }, [selectedThruster, selectedPlanet]);

  const netLiftPerThruster = useMemo(() => {
    if (!selectedThruster || !thrusterPerformance || !selectedPlanet || typeof thrusterPerformance.staticLiftKg === 'string') return 0;
    const thrusterMass = selectedThruster.massKg || 0;
    // staticLiftKg is total lift, subtract thruster mass to get net lift
    return thrusterPerformance.staticLiftKg - thrusterMass;
  }, [selectedThruster, thrusterPerformance, selectedPlanet]);

  const calculationResult = useMemo(() => {
    if (!selectedThruster || !selectedPlanet || netLiftPerThruster === null) return { text: 'N/A', error: false };

    const num = parseInt(numThrusters);
    const mass = parseFloat(targetMass);

    if (mode === 'calcLift') {
      if (isNaN(num) || num <= 0) return { text: 'Invalid number of thrusters.', error: true };
      const totalLift = num * netLiftPerThruster;
      return { text: `${formatNumber(totalLift)} kg`, error: false };
    } else {
      if (isNaN(mass) || mass <= 0) return { text: 'Invalid target mass.', error: true };
      if (netLiftPerThruster <= 0) return { text: 'Thruster cannot lift itself on this planet.', error: true, isSelfLiftError: true };
      const thrustersNeeded = Math.ceil(mass / netLiftPerThruster);
      return { text: `${thrustersNeeded} thruster(s)`, error: false };
    }
  }, [mode, selectedThruster, selectedPlanet, netLiftPerThruster, numThrusters, targetMass]);

  const handleCalculateBlockMass = () => {
    setBlockMassError('');
    let totalMass = 0;
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

      const block = allBlocks.find(b => b.name.toLowerCase() === name && b.gridSize === selectedGridSize);
      if (!block) {
        setBlockMassError(`Block not found for current grid size: "${parts[0].trim()}".`);
        setCalculatedBlockMass(null);
        return;
      }
      totalMass += (block.massKg || 0) * quantity;
    }
    setCalculatedBlockMass(totalMass);
  };
  
  const effectiveThrustN = useMemo(() => {
    if (!selectedThruster || !thrusterPerformance || typeof thrusterPerformance.actualEffectiveness !== 'number') return 0;
    return selectedThruster.thrustN * thrusterPerformance.actualEffectiveness;
  }, [selectedThruster, thrusterPerformance]);


  return (
    <div className="mt-10 mb-8 p-6 bg-slate-800 rounded-lg shadow-xl">
      <h3 className="text-2xl font-semibold text-sky-400 mb-6 text-center">Thruster Lift & Mass Calculator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Left Column: Thruster Selection & Main Calculator */}
        <div className="space-y-4">
          <div>
            <label htmlFor="thruster-select" className="block text-sm font-medium text-sky-300 mb-1">
              Select Thruster ({selectedGridSize})
            </label>
            <select
              id="thruster-select"
              value={selectedThrusterId}
              onChange={(e) => setSelectedThrusterId(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-200"
              disabled={availableThrusters.length === 0}
            >
              {availableThrusters.length === 0 && <option>No thrusters for this grid size</option>}
              {availableThrusters.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          {selectedThruster && selectedPlanet && (
            <div className="p-3 bg-slate-700/50 rounded-md text-xs">
              <p><span className="font-semibold text-slate-400">Selected:</span> {selectedThruster.name}</p>
              <p><span className="font-semibold text-slate-400">Base Thrust:</span> {formatNumber(selectedThruster.thrustN)} N</p>
              <p><span className="font-semibold text-slate-400">Effective Thrust on {selectedPlanet.name}:</span> {formatNumber(effectiveThrustN)} N ({((thrusterPerformance?.actualEffectiveness ?? 0) * 100).toFixed(1)}%)</p>
              <p><span className="font-semibold text-slate-400">Thruster Mass:</span> {formatNumber(selectedThruster.massKg)} kg</p>
              <p><span className="font-semibold text-slate-400">Net Lift per Thruster:</span> <span className={netLiftPerThruster <=0 ? "text-red-400" : ""}>{formatNumber(netLiftPerThruster)} kg</span></p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-sky-300 mb-1">Calculation Mode</label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setMode('calcLift')}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${mode === 'calcLift' ? 'bg-sky-600 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}
              >
                Calculate Total Lift
              </button>
              <button
                type="button"
                onClick={() => setMode('calcThrusters')}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${mode === 'calcThrusters' ? 'bg-sky-600 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}
              >
                Calculate Thrusters Needed
              </button>
            </div>
          </div>

          {mode === 'calcLift' ? (
            <div>
              <label htmlFor="num-thrusters" className="block text-sm font-medium text-sky-300 mb-1">
                Number of Thrusters
              </label>
              <input
                id="num-thrusters"
                type="number"
                value={numThrusters}
                onChange={(e) => setNumThrusters(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-200"
                min="1"
                step="1"
                disabled={!selectedThruster}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="target-mass" className="block text-sm font-medium text-sky-300 mb-1">
                Target Mass to Lift (kg)
              </label>
              <input
                id="target-mass"
                type="number"
                value={targetMass}
                onChange={(e) => setTargetMass(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-200"
                min="0"
                step="100"
                disabled={!selectedThruster}
              />
            </div>
          )}
          
          {selectedThruster && selectedPlanet && (
            <div className="mt-4 p-4 bg-slate-900 rounded-md text-center">
              <p className="text-sm text-slate-400 mb-1">
                {mode === 'calcLift' ? 'Total Net Lift Achievable:' : 'Minimum Thrusters Required:'}
              </p>
              <p className={`text-2xl font-bold ${calculationResult.error ? 'text-red-400' : 'text-green-400'}`}>
                {calculationResult.text}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Block Mass Calculator */}
        <div className="space-y-4 p-4 bg-slate-700/30 rounded-md">
          <h4 className="text-lg font-semibold text-sky-300 mb-2">Calculate Mass from Block List</h4>
          <p className="text-xs text-slate-400 mb-2">Enter one block per line: "Block Name: Quantity". Ensure block names match those in the tables for the current grid size.</p>
          <div>
            <label htmlFor="block-list-input" className="block text-sm font-medium text-sky-300 mb-1">
              Block List
            </label>
            <textarea
              id="block-list-input"
              rows={5}
              value={blockListInput}
              onChange={(e) => setBlockListInput(e.target.value)}
              placeholder={`Example:\nLarge Cargo Container: 5\nSmall Reactor: 10`}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-200 placeholder-slate-500 text-sm"
            />
          </div>
          <button
            type="button"
            onClick={handleCalculateBlockMass}
            className="w-full px-4 py-2 text-sm font-semibold rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-colors"
          >
            Calculate Block Mass
          </button>
          {blockMassError && (
            <p className="text-sm text-red-400">{blockMassError}</p>
          )}
          {calculatedBlockMass !== null && (
            <div className="mt-2 p-3 bg-slate-900/70 rounded-md">
              <p className="text-sm text-slate-400">Total Mass of Blocks:</p>
              <p className="text-lg font-semibold text-green-400">{formatNumber(calculatedBlockMass)} kg</p>
              <button 
                onClick={() => { setTargetMass(String(calculatedBlockMass)); setMode('calcThrusters');}}
                className="mt-2 text-xs px-2 py-1 bg-sky-700 hover:bg-sky-800 rounded-md text-white"
              >
                Use as Target Mass
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
