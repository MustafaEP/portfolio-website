'use client';

import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
    );

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = document.querySelector(
        (e.currentTarget as HTMLAnchorElement).getAttribute('href') ?? '',
      );
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);
}

