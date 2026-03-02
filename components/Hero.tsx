'use client';

import React from 'react';
import { useLang } from './LangProvider';

export function Hero() {
  const { lang, t } = useLang();
  const hero = t.hero;

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-orb" />
      <div className="hero-bg-orb" />
      <div className="hero-bg-orb" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse" />
          {hero.badge}
        </div>

        <h1 className="hero-title">
          {lang === 'tr' ? 'Merhaba, ben' : 'Hi, I\'m'}
          <br />
          <span className="gradient-text">{hero.title}</span>
        </h1>

        <p className="hero-subtitle">{hero.subtitle}</p>

        <div className="hero-cta-group">
          <a href="#projects" className="btn btn-primary">
            {hero.ctaPrimary} →
          </a>
          <a
            href={
              lang === 'tr'
                ? '/Mustafa-Erhan-Portakal-CV-TR.pdf'
                : '/Mustafa-Erhan-Portakal-CV.pdf'
            }
            download={lang === 'tr' ? 'Mustafa-Erhan-Portakal-CV-TR.pdf' : 'Mustafa-Erhan-Portakal-CV.pdf'}
            className="btn btn-secondary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 10v6m0 0l-3-3m3 3l3-3M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>{lang === 'tr' ? 'AŞAĞI KAYDIR' : 'SCROLL DOWN'}</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
