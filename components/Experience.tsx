'use client';

import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNestjs,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiNginx,
  SiLinux,
  SiGit,
  SiSocketdotio,
  SiGooglegemini,
} from 'react-icons/si';
import { useLang } from './LangProvider';

const TECH_STACK = [
  // Languages
  { icon: SiTypescript,    name: 'TypeScript',     color: '#3178C6' },
  { icon: SiJavascript,    name: 'JavaScript',     color: '#F7DF1E' },
  { icon: SiPython,        name: 'Python',         color: '#3776AB' },
  // Backend (primary)
  { icon: SiNestjs,        name: 'NestJS',         color: '#E0234E' },
  { icon: SiFastapi,       name: 'FastAPI',        color: '#009688' },
  { icon: SiDjango,        name: 'Django',         color: '#092E20' },
  { icon: SiNodedotjs,     name: 'Node.js',        color: '#339933' },
  { icon: SiExpress,       name: 'Express',        color: '#ffffff' },
  // Frontend
  { icon: SiReact,         name: 'React',          color: '#61DAFB' },
  { icon: SiReact,         name: 'React Native',   color: '#61DAFB' },
  { icon: SiNextdotjs,     name: 'Next.js',        color: '#ffffff' },
  { icon: SiTailwindcss,   name: 'Tailwind CSS',   color: '#06B6D4' },
  { icon: SiMui,           name: 'Material-UI',    color: '#007FFF' },
  // Databases & ORM
  { icon: SiPostgresql,    name: 'PostgreSQL',     color: '#4169E1' },
  { icon: SiPrisma,        name: 'Prisma',         color: '#5A67D8' },
  { icon: SiMongodb,       name: 'MongoDB',        color: '#47A248' },
  // AI
  { icon: SiGooglegemini,  name: 'Gemini API',     color: '#8E75B2' },
  // Tools & Infra
  { icon: SiGit,           name: 'Git',            color: '#F05032' },
  { icon: SiDocker,        name: 'Docker',         color: '#2496ED' },
  { icon: SiNginx,         name: 'Nginx',          color: '#009639' },
  { icon: SiLinux,         name: 'Linux VPS',      color: '#FCC624' },
  { icon: SiSocketdotio,   name: 'Socket.IO',      color: '#ffffff' },
];

export function Experience() {
  const { lang, t } = useLang();

  return (
    <section className="section" id="experience">
      <div className="reveal">
        <span className="section-label">{t.navbar.experience}</span>
        <h2 className="section-title">{t.experience.title}</h2>
      </div>

      <div className="tech-section">
        <div className="timeline">
          {t.experience.items.map((item, index) => (
            <div
              className="timeline-item reveal"
              key={index}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="timeline-date">{item.period}</div>
              <div className="timeline-title">{item.role}</div>
              <div className="timeline-company">
                {item.company} • {item.location}
              </div>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3
          className="section-title reveal"
          style={{ fontSize: '1.5rem', marginTop: '4rem', marginBottom: '0.5rem' }}
        >
          {lang === 'tr' ? 'Teknoloji' : 'Technology'}{' '}
          <span className="gradient-text">Arsenal</span>
        </h3>

        <div className="tech-grid">
          {TECH_STACK.map(({ icon: Icon, name, color }, idx) => (
            <div
              className="tech-item reveal"
              key={name}
              style={{ transitionDelay: `${0.05 * idx}s` }}
            >
              <div className="tech-icon-wrap">
                <Icon size={32} color={color} />
              </div>
              <div className="tech-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
