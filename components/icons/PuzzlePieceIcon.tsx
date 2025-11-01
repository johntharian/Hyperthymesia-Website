
import React from 'react';

export const PuzzlePieceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}>
    <path d="M14 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2"></path>
    <path d="M16 12h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"></path>
    <path d="M8 12v2a2 2 0 0 0 2 2h4"></path>
    <path d="M8 16H6a2 2 0 0 1-2-2V8"></path>
  </svg>
);
