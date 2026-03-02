'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useLang } from './LangProvider';

export function Navbar() {
  const { toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handleScroll = () => {
      nav.classList.toggle('shrink', window.pageYOffset > 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menü açıkken scroll engelle
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const sections = [
    { id: 'about',      label: t.navbar.about },
    { id: 'projects',   label: t.navbar.projects },
    { id: 'experience', label: t.navbar.experience },
    { id: 'certifications', label: t.navbar.certifications },
    { id: 'contact',    label: t.navbar.contact },
  ];

  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav" ref={navRef}>
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={close}>
          Mustafa Erhan Portakal
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ul>

        {/* Controls — always visible on right */}
        <div className="nav-controls">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'tr' ? 'English' : 'Türkçe'}`}
          >
            <span className={lang === 'tr' ? 'lang-active' : ''}>TR</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>

          <div
            className="theme-toggle"
            role="button"
            aria-label="Tema değiştir"
            onClick={toggleTheme}
          />

          {/* Hamburger — only on mobile */}
          <button
            className={`nav-hamburger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(p => !p)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — OUTSIDE <nav> so position:fixed works correctly */}
      {open && (
        <div className="nav-mobile-overlay" onClick={close}>
          <button
            type="button"
            className="nav-mobile-close"
            onClick={close}
            aria-label={lang === 'tr' ? 'Menüyü kapat' : 'Close menu'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <ul
            className="nav-mobile-links"
            onClick={e => e.stopPropagation()}
          >
            {sections.map((s, i) => (
              <li key={s.id} style={{ animationDelay: `${i * 0.06}s` }}>
                <a href={`#${s.id}`} onClick={close}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
