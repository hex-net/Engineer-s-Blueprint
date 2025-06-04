
import React from 'react';
import { Thruster, CelestialBodyId, ThrusterType, ThrusterSize, CelestialBody, BlockComponent } from '../types';
import { formatNumber, MaterialsIcon } from './TableHelpers'; // Import shared helpers

// ThrusterTypeIcon remains local as it's specific to thrusters
const ThrusterTypeIcon: React.FC<{ type: ThrusterType }> = ({ type }) => {
  let icon;
  let color;
  switch (type) {
    case ThrusterType.HYDROGEN:
      icon = 'H₂'; color = 'text-blue-400'; break;
    case ThrusterType.ATMOS:
      icon = 'ATM'; color = 'text-green-400'; break;
    case ThrusterType.ATMO_FLAT:
      icon = 'FLT'; color = 'text-teal-400'; break;
    case ThrusterType.ION:
      icon = 'ION'; color = 'text-purple-400'; break;
    default:
      icon = '?'; color = 'text-gray-400';
  }
  return <span className={`font-bold ${color} text-xs sm:text-sm`} title={type}>{icon}</span>;
};

// parseLiftValue remains local as it's specific to thruster lift values
const parseLiftValue = (liftValue: string | number): React.ReactNode => {
    if (typeof liftValue !== 'string') {
      return formatNumber(liftValue);
    }
    const match = liftValue.match(/([\d,.-]+)([¹²³]?)/);
    if (match) {
      const numPart = formatNumber(match[1]);
      const supPart = match[2];
      return (
        <>
          {numPart}
          {supPart && <sup className="text-xs align-super">{supPart}</sup>}
        </>
      );
    }
    return liftValue;
  };

interface ThrusterTableProps {
  thrusters: Thruster[];
  selectedPlanetId: CelestialBodyId;
  celestialBodies: CelestialBody[];
}

export const ThrusterTable: React.FC<ThrusterTableProps> = ({ thrusters, selectedPlanetId, celestialBodies }) => {
  const selectedPlanetName = celestialBodies.find(p => p.id === selectedPlanetId)?.name || 'Selected Planet';

  if (thrusters.length === 0) {
    return <p className="text-center text-slate-400 py-8">No thrusters match the current selection.</p>;
  }

  return (
    <div className="overflow-x-auto bg-slate-800 shadow-2xl rounded-lg">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-slate-700/50">
          <tr>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-sky-300 whitespace-nowrap">Type</th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-sky-300 whitespace-nowrap">Size</th>
            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-sky-300 whitespace-nowrap">Thrust (N)*</th>
            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-sky-300 whitespace-nowrap">Static Lift (kg) on {selectedPlanetName}</th>
            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-sky-300 whitespace-nowrap">PCU</th>
            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-sky-300 whitespace-nowrap">Build Time (s)</th>
            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-sky-300 whitespace-nowrap">Materials</th>
            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-sky-300 whitespace-nowrap">Damage Range*</th>
            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-sky-300 whitespace-nowrap">Power (MW)*</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 bg-slate-800">
          {thrusters.map((thruster) => {
            const performanceData = thruster.performance[selectedPlanetId];
            const staticLiftDisplay = performanceData ? parseLiftValue(performanceData.staticLiftKg) : <span className="text-slate-500">N/A</span>;
            
            return (
              <tr key={thruster.id} className="hover:bg-slate-700/70 transition-colors duration-150">
                <td className="px-3 py-4 text-sm text-slate-300 whitespace-nowrap">
                  <div className="flex items-center">
                    <ThrusterTypeIcon type={thruster.type} />
                    <span className="ml-2 hidden sm:inline">{thruster.type}</span>
                  </div>
                </td>
                <td className="px-3 py-4 text-sm text-slate-300 capitalize whitespace-nowrap">{thruster.size}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.thrustN)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{staticLiftDisplay}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.pcu)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.buildTimeSeconds)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-center whitespace-nowrap">
                  <MaterialsIcon components={thruster.components} />
                </td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.damageRange)}</td>
                <td className="px-3 py-4 text-sm text-slate-200 text-right whitespace-nowrap">{formatNumber(thruster.powerMW)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
