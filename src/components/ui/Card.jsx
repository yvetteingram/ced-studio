import React from 'react';

export default function Card({ children, accent, className = '', topAccent = false }) {
  const accentStyle = accent
    ? topAccent
      ? { borderTop: `3px solid ${accent}` }
      : { borderLeft: `3px solid ${accent}` }
    : {};

  return (
    <div
      className={`card p-6 ${className}`}
      style={accentStyle}
    >
      {children}
    </div>
  );
}
