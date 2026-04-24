'use client';

import React from 'react';
import { useLang } from './LangProvider';

export function Education() {
  const { lang, t } = useLang();
  const cert = t.certifications.professionalCertificate;

  return (
    <section id="education" className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">{lang === 'tr' ? '§ 05 - EGITIM' : '§ 05 - EDUCATION'}</div>
          <h2>
            {lang === 'tr' ? 'Egitim ve' : 'Learning &'} <em>{lang === 'tr' ? 'sertifikalar' : 'credentials'}</em>.
          </h2>
        </div>
        <div className="meta">{lang === 'tr' ? 'Diploma + sertifikalar' : 'Degree + certifications'}</div>
      </div>

      <div className="edu-grid">
        <div className="edu-card">
          <div className="year">25</div>
          <div className="label">{lang === 'tr' ? 'Lisans Derecesi' : 'Bachelor of Science'}</div>
          <h3>
            {lang === 'tr' ? 'Bilgisayar' : 'Computer'} <em>{lang === 'tr' ? 'Muhendisligi' : 'Engineering'}</em>
          </h3>
          <div className="sub">
            {lang === 'tr'
              ? 'Bursa Teknik Universitesi · Mezuniyet Agu 2025'
              : 'Bursa Technical University · Graduated Aug 2025'}
          </div>
          <p className="caption">
            {lang === 'tr'
              ? 'Algoritmalar, sistemler, aglar ve veritabani konularini kapsayan lisans programi. Bitirme projesi: Moodify-AI.'
              : 'BSc program covering algorithms, systems, networks, and databases. Capstone project: Moodify-AI.'}
          </p>
        </div>

        <div className="certs">
          <div className="eyebrow" style={{ marginBottom: 8 }}>
            {lang === 'tr' ? 'Sertifikalar' : 'Certifications'}
          </div>
          <a className="cert-card" href={cert.link} target="_blank" rel="noreferrer">
            <span className="icon">IBM</span>
            <span>
              <div className="name">{cert.name}</div>
              <div className="meta">
                {cert.provider} · {cert.date}
              </div>
            </span>
            <span className="verify">Verify ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
