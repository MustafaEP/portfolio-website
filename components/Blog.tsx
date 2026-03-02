'use client';

import React, { useState } from 'react';
import { useLang } from './LangProvider';


export function Blog() {
  const { lang, t } = useLang();
  const cert = t.certifications.professionalCertificate;
  const [expanded, setExpanded] = useState(false);
  const visibleCourses = expanded ? cert.includedCourses : cert.includedCourses.slice(0, 5);

  return (
    <section className="section" id="certifications">
      <div className="reveal">
        <span className="section-label">{t.navbar.certifications}</span>
        <h2 className="section-title">
          {t.certifications.title}
        </h2>
      </div>

      <div className="cert-card reveal" style={{ transitionDelay: '0.1s' }}>
        {/* Header */}
        <div className="cert-card-header">
          <div className="cert-provider-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {cert.provider}
          </div>
          <span className="cert-date">{cert.date}</span>
        </div>

        {/* Title */}
        <h3 className="cert-title">
          IBM Full Stack Software Developer
          <span className="gradient-text"> – Professional Certificate</span>
        </h3>

        {/* Description */}
        <p className="cert-description">{cert.description}</p>

        {/* Stats row */}
        <div className="cert-stats">
          <div className="cert-stat">
            <span className="cert-stat-number">15</span>
            <span className="cert-stat-label">{lang === 'tr' ? 'Ders' : 'Courses'}</span>
          </div>
          <div className="cert-stat">
            <span className="cert-stat-number">6+</span>
            <span className="cert-stat-label">{lang === 'tr' ? 'Ay' : 'Months'}</span>
          </div>
          <div className="cert-stat">
            <span className="cert-stat-number">Pro</span>
            <span className="cert-stat-label">{lang === 'tr' ? 'Seviye' : 'Level'}</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mb-1">
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary cert-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            {lang === 'tr' ? 'Sertifikayı görüntüle' : 'View certificate'}
          </a>
          {cert.githubRepo && (
            <a
              href={cert.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="cert-github-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Repo
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="cert-divider" />

        {/* Courses */}
        <div className="cert-courses-header">
          <span className="cert-courses-label">{cert.includedCoursesLabel}</span>
        </div>

        <ul className="cert-courses-list">
          {visibleCourses.map((course, i) => (
            <li key={i} className="cert-course-item">
              <span className="cert-course-dot" />
              <a href={course.link} target="_blank" rel="noreferrer" className="cert-course-link">
                {course.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>

        {cert.includedCourses.length > 5 && (
          <button
            className="cert-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? (lang === 'tr' ? 'Daha az göster ↑' : 'Show less ↑')
              : `+${cert.includedCourses.length - 5} ${lang === 'tr' ? 'ders daha göster ↓' : 'more courses ↓'}`}
          </button>
        )}
      </div>
    </section>
  );
}

export default Blog;
