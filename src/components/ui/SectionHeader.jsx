import React from 'react';

export default function SectionHeader({ title, subtitle, accent }) {
  return (
    <div className="mb-12 text-center">
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-4"
        style={accent ? { color: accent } : {}}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-silver text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      {accent && (
        <div
          className="h-1 w-16 rounded-full mx-auto mt-4"
          style={{ backgroundColor: accent }}
        />
      )}
    </div>
  );
}
