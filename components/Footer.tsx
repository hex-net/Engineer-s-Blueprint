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
    <footer className="mt-12 pt-8 border-t border-slate-700 text-xs text-slate-400">
      <div className="container mx-auto max-w-7xl px-4">
        <h4 className="font-semibold text-slate-300 mb-2">Notes & Sources:</h4>
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
            <span className="font-semibold text-slate-300">Data Source:</span> {mainSource.text}
          </p>
        )}
        
        {wikiLink && wikiLink.link && (
          <p className="mb-2">
            {wikiLink.text}{' '}
            <a href={wikiLink.link} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline">
              {wikiLink.link}
            </a>
          </p>
        )}
        <p className="mt-6 text-center text-slate-500">
          Thruster data based on v5.0 (Aug 2023) by u/ProceduralTexture and community. Additional block data from game XML files. This is an independent fan-made tool.
        </p>
      </div>
    </footer>
  );
};