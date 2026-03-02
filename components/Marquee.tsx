'use client';

import React from 'react';

const items = [
  'TypeScript',
  'React',
  'Next.js',
  'NestJS',
  'FastAPI',
  'Django',
  'PostgreSQL',
  'Docker',
  'React Native',
];

export function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item} <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

