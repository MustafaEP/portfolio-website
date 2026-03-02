'use client';

import React from 'react';
import { useLang } from './LangProvider';

export function About() {
  const { t } = useLang();
  const paragraphs = t.about.text.split('\n\n');

  return (
    <section className="section" id="about">
      <div className="reveal">
        <span className="section-label">{t.navbar.about}</span>
        <h2 className="section-title">{t.about.title}</h2>
      </div>

      <div className="about-grid">
        <div className="about-image-container reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="about-image-placeholder">👨‍💻</div>
          <div className="floating-badge">
            <span className="pulse" />
            {t.hero.badge}
          </div>
        </div>

        <div className="about-text reveal" style={{ transitionDelay: '0.2s' }}>
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">{t.navbar.experience === 'Deneyim' ? 'Staj' : 'Internship'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">{t.navbar.projects === 'Projeler' ? 'Aktif Proje' : 'Active Projects'}</div>
            </div>
            {/* <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">IBM {t.navbar.certifications === 'Sertifikalar' ? 'Kursu' : 'Courses'}</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
