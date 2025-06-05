
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface TooltipPopupProps {
  text: string;
  id: string;
  iconRect: DOMRect | null;
  onClose: () => void; // To allow parent to know when it might want to hide due to click outside etc.
}

const TooltipPopup: React.FC<TooltipPopupProps> = ({ text, id, iconRect }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [opacity, setOpacity] = useState(0); // Start hidden for smooth positioning

  useEffect(() => {
    if (tooltipRef.current && iconRect) {
      const tooltipEl = tooltipRef.current;
      const tooltipRect = tooltipEl.getBoundingClientRect();
      
      let finalTop = iconRect.top - tooltipRect.height - 8; // 8px gap above icon
      let finalLeft = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;

      // Adjust if tooltip goes off-screen (simple adjustment)
      if (finalLeft < 0) finalLeft = 8;
      if (finalLeft + tooltipRect.width > window.innerWidth) {
        finalLeft = window.innerWidth - tooltipRect.width - 8;
      }
      if (finalTop < 0) { // If it goes off the top, position below
        finalTop = iconRect.bottom + 8;
      }


      tooltipEl.style.top = `${finalTop}px`;
      tooltipEl.style.left = `${finalLeft}px`;
      setOpacity(1); // Make visible after positioning
    }
  }, [iconRect, text]); // Re-calculate if iconRect or text (content might change width) changes

  if (!iconRect) return null;

  return (
    <span
      ref={tooltipRef}
      id={id}
      role="tooltip"
      className="fixed z-[9999] max-w-xs w-auto p-3 text-xs text-[var(--color-text-primary)] bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-md shadow-xl whitespace-normal pointer-events-none transition-opacity duration-150"
      style={{
        opacity: opacity,
        // Initial position off-screen or hidden, will be updated by useEffect
        top: '-9999px', 
        left: '-9999px',
      }}
    >
      {text}
    </span>
  );
};

interface InfoTooltipProps {
  text: string;
  className?: string;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ text, className }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [currentIconRect, setCurrentIconRect] = useState<DOMRect | null>(null);
  
  const iconRef = useRef<HTMLSpanElement>(null);
  const tooltipId = `tooltip-${Math.random().toString(36).substring(2, 9)}`;
  const portalRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure this runs only client-side
    portalRootRef.current = document.getElementById('tooltip-portal-root');
  }, []);

  const showTooltip = useCallback(() => {
    if (iconRef.current) {
      setCurrentIconRect(iconRef.current.getBoundingClientRect());
      setIsTooltipVisible(true);
    }
  }, []);

  const hideTooltip = useCallback(() => {
    setIsTooltipVisible(false);
    // setCurrentIconRect(null); // Keep rect for potential quick re-show, or clear if preferred
  }, []);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isTooltipVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    } else if (e.key === 'Escape') {
        hideTooltip();
    }
  };

  return (
    <span
      ref={iconRef}
      className={`inline-flex items-center ml-1 cursor-help align-middle ${className || ''}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip} // Hide when focus is lost
      tabIndex={0}
      aria-describedby={isTooltipVisible ? tooltipId : undefined}
      onKeyDown={handleKeyDown}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--color-text-accent)] hover:opacity-80">
        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A.75.75 0 0 0 10 14.25a.75.75 0 0 0 .75-.75v-.634a.75.75 0 0 0-.75-.75h-.398a.25.25 0 0 1-.243-.304l.459-2.066A.75.75 0 0 0 9.75 9h-.75Z" clipRule="evenodd" />
      </svg>
      {isTooltipVisible && portalRootRef.current && currentIconRect &&
        createPortal(
          <TooltipPopup
            text={text}
            id={tooltipId}
            iconRect={currentIconRect}
            onClose={hideTooltip} // Pass hideTooltip if TooltipPopup needs to close itself
          />,
          portalRootRef.current
        )}
    </span>
  );
};