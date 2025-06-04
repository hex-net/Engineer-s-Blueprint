import React from 'react';
import { BlockComponent, SortDirection } from '../types'; 

// Helper to format numbers with commas
export const formatNumber = (num: number | string | undefined): string => {
  if (num === undefined || num === null) return 'N/A';
  if (typeof num === 'string' && (num.includes('²') || num.includes('³') || num === '-?-')) {
    return num; 
  }
  const numericValue = typeof num === 'string' ? parseFloat(num.replace(/,/g, '')) : num;
  if (isNaN(numericValue)) return String(num); 

  // Handle very small numbers that might display as 0.00
  if (numericValue !== 0 && Math.abs(numericValue) < 0.01 && Math.abs(numericValue) > 1e-7) {
    return numericValue.toExponential(2);
  }
  if (Math.abs(numericValue) < 1e-7 && numericValue !== 0) { // extremely small, effectively zero for display
    return '≈0';
  }

  return numericValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
};


export const MaterialsIcon: React.FC<{ components?: BlockComponent[] }> = ({ components }) => {
  if (!components || components.length === 0) {
    return <span className="text-slate-500">N/A</span>;
  }
  const title = components.map(c => `${c.subtype}: ${c.count}`).join(', ');
  return (
    <span title={title} aria-label={`Materials: ${title}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400 hover:text-sky-400 transition-colors">
        <path d="M10 3.75a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75Z" />
        <path fillRule="evenodd" d="M11.49 2.176a.75.75 0 0 1 .59.066l2.5 1.25a.75.75 0 0 1 .321.638V5.25h1.75a.75.75 0 0 1 0 1.5h-1.75v2.676L18.68 11.5a.75.75 0 0 1 .32.64v2.11a.75.75 0 0 1-.59.715l-2.5 1.25a.75.75 0 0 1-.75 0l-2.5-1.25a.75.75 0 0 1-.32-.638V13.5h-1.75a.75.75 0 0 1 0-1.5h1.75V9.324l-2.13-2.132a.75.75 0 0 1-.32-.64V4.43a.75.75 0 0 1 .59-.715l2.5-1.25a.75.75 0 0 1 .16-.039ZM8.25 4.832l2.5-1.25 2.5 1.25v2.086l-2.5 2.5-2.5-2.5V4.832ZM15 14.168l2.5-1.25v-1.336l-2.5 1.25v1.336ZM5 11.832l-2.5 1.25v1.336l2.5-1.25V11.832ZM12.41 16.285a.75.75 0 0 1 .18.026l2.5 1.25a.75.75 0 0 1 .321.638V19.75a.75.75 0 0 1-1.5 0v-1.066l-2.5-1.25a2.253 2.253 0 0 0-.16.039ZM7.59 16.285a.75.75 0 0 0-.18.026l-2.5 1.25a.75.75 0 0 0-.321.638V19.75a.75.75 0 0 0 1.5 0v-1.066l2.5-1.25c-.054.012-.107.023-.16.039Z" clipRule="evenodd" />
        <path d="M.922 7.884a.75.75 0 0 1 .32-.638l2.5-1.25a.75.75 0 0 1 .75 0l2.5 1.25a.75.75 0 0 1 .321.638V9.75h1.75a.75.75 0 0 1 0 1.5H7.25v2.676L5.12 15.998a.75.75 0 0 1-1.242-.002L1.75 13.926V11.25h-1a.75.75 0 0 1 0-1.5h1V7.884Z" />
      </svg>
    </span>
  );
};

interface SortIndicatorProps {
  direction: SortDirection | null;
}
export const SortIndicator: React.FC<SortIndicatorProps> = ({ direction }) => {
  if (!direction) return null;
  return (
    <span className="ml-1 inline-block w-3 h-3">
      {direction === 'ascending' ? 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
          <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.56l-1.97 1.97a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06L10.75 5.56v10.69a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
        </svg>
         : 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
          <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.69l1.97-1.97a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l1.97 1.97V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
        </svg>
      }
    </span>
  );
};
