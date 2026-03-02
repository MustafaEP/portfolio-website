'use client';

import { useEffect } from 'react';

export function useTiltEffect() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>('.project-card, .tech-item'),
    );

    const handleMove = (card: HTMLElement, e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    };

    const handleLeave = (card: HTMLElement) => {
      card.style.transform = '';
    };

    const listeners: Array<() => void> = [];

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => handleMove(card, e);
      const onLeave = () => handleLeave(card);

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);

      listeners.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => {
      listeners.forEach((cleanup) => cleanup());
    };
  }, []);
}

