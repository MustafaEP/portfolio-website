'use client';

import React from 'react';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiNodedotjs,
  SiPython,
  SiRedis,
  SiMongodb,
  SiTailwindcss,
  SiPrisma,
  SiGithubactions,
  SiNginx,
} from 'react-icons/si';
import { useLang } from './LangProvider';

const TECH_STACK = [
  { icon: SiTypescript,    name: 'TypeScript',     color: '#3178C6' },
  { icon: SiNodedotjs,     name: 'Node.js',        color: '#339933' },
  { icon: SiReact,         name: 'React',          color: '#61DAFB' },
  { icon: SiNextdotjs,     name: 'Next.js',        color: '#ffffff' },
  { icon: SiNestjs,        name: 'NestJS',         color: '#E0234E' },
  { icon: SiFastapi,       name: 'FastAPI',        color: '#009688' },
  { icon: SiDjango,        name: 'Django',         color: '#092E20' },
  { icon: SiPython,        name: 'Python',         color: '#3776AB' },
  { icon: SiPostgresql,    name: 'PostgreSQL',     color: '#4169E1' },
  { icon: SiMongodb,       name: 'MongoDB',        color: '#47A248' },
  { icon: SiRedis,         name: 'Redis',          color: '#FF4438' },
  { icon: SiPrisma,        name: 'Prisma',         color: '#5A67D8' },
  { icon: SiDocker,        name: 'Docker',         color: '#2496ED' },
  { icon: SiNginx,         name: 'Nginx',          color: '#009639' },
  { icon: SiGithubactions, name: 'GitHub Actions', color: '#2088FF' },
  { icon: SiTailwindcss,   name: 'Tailwind CSS',   color: '#06B6D4' },
  { icon: SiReact,         name: 'React Native',   color: '#61DAFB' },

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
