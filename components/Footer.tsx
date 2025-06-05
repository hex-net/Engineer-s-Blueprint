import React from 'react';
import { Footnote } from '../types';

interface FooterProps {
  footnotes: Footnote[];
}

export const Footer: React.FC<FooterProps> = ({ footnotes }) => {
  const mainSource = footnotes.find(f => f.id === 'main_source');
  const numberedNotes = footnotes.filter(f => !isNaN(parseInt(f.id)));
  const optimalConditionsNote = footnotes.find(f => f.id === 'optimal_conditions');
  const wikiLink = footnotes.find(f => f.id === 'wiki_link');

  return (
    <footer className="mt-12 pt-8 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
      <div className="container mx-auto max-w-7xl px-4">
        <h4 className="font-semibold text-[var(--color-text-primary)] opacity-80 mb-2">Notes & Sources:</h4>
        <ul className="space-y-1 list-inside mb-4">
          {numberedNotes.map(note => (
            <li key={note.id}>
              <sup className="font-bold">{note.id}</sup> {note.text}
            </li>
          ))}
          {optimalConditionsNote && (
             <li>
               <sup className="font-bold">*</sup> {optimalConditionsNote.text}
             </li>
          )}
        </ul>
        {mainSource && (
          <p className="mb-2">
            <span className="font-semibold text-[var(--color-text-primary)] opacity-80">Data Source:</span> {mainSource.text}
          </p>
        )}
        
        {wikiLink && wikiLink.link && (
          <p className="mb-2">
            {wikiLink.text}{' '}
            <a href={wikiLink.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-accent)] hover:opacity-80 underline">
              {wikiLink.link}
            </a>
          </p>
        )}
        <p className="mt-6 text-center text-[var(--color-text-muted)]">
          Block and Thruster base parameters sourced from game XML files. Thruster performance (including static lift) is calculated dynamically. This is an independent fan-made tool.
        </p>
      </div>
    </footer>
  );
};