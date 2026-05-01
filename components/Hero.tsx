'use client';

import React from 'react';
import { useLang } from './LangProvider';

export function Hero() {
  const { t } = useLang();
  const hero = t.hero;

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <span className="hero-availability">
          <span className="pulse" />
          {hero.badge}
        </span>

        <h1 className="hero-title">Mustafa Erhan Portakal</h1>

        <p className="hero-subtitle">{hero.subtitle}</p>

        <div className="hero-cta-group">
          <a href="#projects" className="btn btn-primary">
            {hero.ctaPrimary}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="/Mustafa-Erhan-Portakal-CV.pdf"
            download="Mustafa-Erhan-Portakal-CV.pdf"
            className="hero-link-secondary"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
