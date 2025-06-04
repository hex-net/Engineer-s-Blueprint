
import React from 'react';
import { CelestialBody } from '../types';

interface PlanetInfoProps {
  planet: CelestialBody;
}

export const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet }) => {
  return (
    <div className="mb-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-sky-400 mb-2">{planet.name} Details</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
        <div>
          <span className="font-medium text-slate-400">Gravity (g):</span> {planet.gravityG.toFixed(2)}
        </div>
        <div>
          <span className="font-medium text-slate-400">Gravity (m/s²):</span> {planet.gravityMs2.toFixed(2)}
        </div>
        <div>
          <span className="font-medium text-slate-400">Atmosphere:</span> {planet.atmosphereDensity}
        </div>
        {planet.atmosphereNotes && (
           <div>
             <span className="font-medium text-slate-400">Note:</span> {planet.atmosphereNotes}
           </div>
        )}
      </div>
    </div>
  );
};
