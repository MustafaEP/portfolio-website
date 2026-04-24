'use client';

import React from 'react';
import { useLang } from './LangProvider';

export function About() {
  const { lang, t } = useLang();
  const paragraphs = t.about.text.split('\n\n');

  const copy = lang === 'tr'
    ? {
        role: 'Backend / Full-Stack Geliştirici',
        focus: 'Ölçeklenebilir Sistemler & AI',
        degree: 'Bilgisayar Mühendisliği, Lisans',
        school: 'Bursa Teknik Üniversitesi, 2025',
        deployment: 'Kendi VPS\'im + Netlify / Vercel',
        learning: 'Turborepo',
      }
    : {
        role: 'Backend / Full-Stack Developer',
        focus: 'Scalable Systems & AI',
        degree: 'BSc, Computer Engineering',
        school: 'Bursa Technical University, 2025',
        deployment: 'Self-hosted VPS + Netlify / Vercel',
        learning: 'Turborepo',
      };

  return (
    <section className="section" id="about">
      <div className="reveal">
        <span className="section-label">{t.navbar.about}</span>
        <h2 className="section-title">{t.about.title}</h2>
      </div>

      <div className="terminal-card reveal" style={{ marginTop: '3rem', transitionDelay: '0.1s' }}>
        <div className="terminal-header">
          <span className="terminal-dot terminal-dot--red" />
          <span className="terminal-dot terminal-dot--yellow" />
          <span className="terminal-dot terminal-dot--green" />
          <span className="terminal-title">mustafa.ts</span>
        </div>
        <div className="terminal-body">
          <p><span className="tk-keyword">const</span> <span className="tk-var">mustafa</span> <span className="tk-op">=</span> {'{'}</p>
          <p className="tk-indent"><span className="tk-key">role</span><span className="tk-op">:</span> <span className="tk-str">"{copy.role}"</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">focus</span><span className="tk-op">:</span> <span className="tk-str">"{copy.focus}"</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">stack</span><span className="tk-op">:</span> {'['}<span className="tk-str">"Node.js"</span><span className="tk-op">,</span> <span className="tk-str">"TypeScript"</span><span className="tk-op">,</span> <span className="tk-str">"NestJS"</span><span className="tk-op">,</span> <span className="tk-str">"Next.js"</span><span className="tk-op">,</span> <span className="tk-str">"React"</span><span className="tk-op">,</span> <span className="tk-str">"Prisma"</span><span className="tk-op">,</span> <span className="tk-str">"Docker"</span>{']'}<span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">deployment</span><span className="tk-op">:</span> <span className="tk-str">"{copy.deployment}"</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">location</span><span className="tk-op">:</span> <span className="tk-str">"Bursa, Türkiye"</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">degree</span><span className="tk-op">:</span> <span className="tk-str">"{copy.degree}"</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">school</span><span className="tk-op">:</span> <span className="tk-str">"{copy.school}"</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">learning</span><span className="tk-op">:</span> <span className="tk-str">"{copy.learning}"</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">openToWork</span><span className="tk-op">:</span> <span className="tk-bool">true</span><span className="tk-op">,</span></p>
          <p className="tk-indent"><span className="tk-key">bio</span><span className="tk-op">:</span> {'['}</p>
          {paragraphs.map((para, idx) => (
            <p key={idx} className="tk-indent-2">
              <span className="tk-str">"{para}"</span>{idx < paragraphs.length - 1 && <span className="tk-op">,</span>}
            </p>
          ))}
          <p className="tk-indent">{']'}</p>
          <p>{'}'}<span className="tk-op">;</span></p>
          <p className="terminal-cursor">&nbsp;</p>
        </div>
      </div>
    </section>
  );
}

export default About;
