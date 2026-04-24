'use client';

import React, { useMemo, useState } from 'react';
import { useLang } from './LangProvider';

export function Skills() {
  const { lang, t } = useLang();
  const [active, setActive] = useState(0);
  const categories = t.skills.domains;
  const current = categories[active] ?? categories[0];
  const eyebrow = lang === 'tr' ? '§ 02 - STACK' : '§ 02 - STACK';
  const title = lang === 'tr' ? 'Kullandigim' : 'Tools of the';
  const titleEm = lang === 'tr' ? 'araclar' : 'trade';
  const meta = lang === 'tr' ? '4 yillik birikim' : 'Curated over 4 years';

  const marqueeItems = useMemo(
    () => categories.flatMap((category) => category.skills).slice(0, 20),
    [categories],
  );

  return (
    <section id="skills" className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>
            {title} <em>{titleEm}</em>.
          </h2>
        </div>
        <div className="meta">{meta}</div>
      </div>

      <div className="skills-stage">
        <div className="skills-tabs">
          {categories.map((category, index) => (
            <button
              key={category.category}
              className={`skills-tab ${index === active ? 'on' : ''}`}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
            >
              {category.category}
              <span className="count">{String(category.skills.length).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        <div className="skills-panel">
          {current.skills.map((skill) => (
            <span key={skill} className="skill-chip">
              <span className="dot" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="marquee" style={{ marginTop: 'auto' }}>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {marqueeItems.map((item, index) => (
                <React.Fragment key={`${item}-${index}-${copy}`}>
                  <span>{item}</span>
                  <span className="star">✦</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
