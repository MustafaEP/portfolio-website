'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/MustafaEP" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/mustafa-erhan-portakal-2142101ba" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:portakalm11@gmail.com">E-posta</a>
      </div>
      <p>© {new Date().getFullYear()} Mustafa Erhan Portakal</p>
    </footer>
  );
}

export default Footer;

