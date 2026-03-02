'use client';

import { useEffect } from 'react';

export function useCursorGlowEffect() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    let glowVisible = false;

    const handleMove = (e: MouseEvent) => {
      if (!glowVisible) {
        cursorGlow.style.opacity = '1';
        glowVisible = true;
      }
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    };

    const handleLeave = () => {
      cursorGlow.style.opacity = '0';
      glowVisible = false;
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);
}

