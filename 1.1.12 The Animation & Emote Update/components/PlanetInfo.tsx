
import React from 'react';
import { CelestialBody } from '../types';

interface PlanetInfoProps {
  planet: CelestialBody;
}

export const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet }) => {
  return (
    <div className="mb-6 p-4 bg-[var(--color-surface-1)] bg-opacity-50 border border-[var(--color-border)] rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-[var(--color-text-accent)] mb-2">{planet.name} Details</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
        <div>
          <span className="font-medium text-[var(--color-text-secondary)]">Gravity (g):</span> {planet.gravityG.toFixed(2)}
        </div>
        <div>
          <span className="font-medium text-[var(--color-text-secondary)]">Gravity (m/s²):</span> {planet.gravityMs2.toFixed(2)}
        </div>
        <div>
          <span className="font-medium text-[var(--color-text-secondary)]">Atmosphere:</span> {planet.atmosphereDensity}
        </div>
        {planet.atmosphereNotes && (
           <div>
             <span className="font-medium text-[var(--color-text-secondary)]">Note:</span> {planet.atmosphereNotes}
           </div>
        )}
      </div>
    </div>
  );
};