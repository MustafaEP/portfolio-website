'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal'),
    );
    if (!elements.length) return;

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            (entry.target as HTMLElement).classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}

