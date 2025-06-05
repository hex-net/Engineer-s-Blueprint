import React from 'react';

const SpaceEngineerIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[var(--color-text-accent)]">
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
  </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center space-x-4">
        <SpaceEngineerIcon />
        <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-accent)] tracking-tight">Engineer's Blueprint</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-secondary)]">A Space Engineers Compendium</h2>
        </div>
      </div>
      <p className="text-sm text-[var(--color-text-muted)] mt-1">Thruster & Block Data (June 2025)</p>
    </header>
  );
};