import { useState, useEffect } from 'react';
import './Skills.css';

const CATEGORY_ICONS = {
  languages: '📝',
  frameworks: '⚙️',
  'tools & platforms': '🛠️',
  'soft skills': '🤝',
};

const CATEGORY_COLORS = {
  languages: { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)', text: '#a78bfa' },
  frameworks:  { bg: 'rgba(6,182,212,0.12)',  border: 'rgba(6,182,212,0.3)',  text: '#22d3ee' },
  'tools & platforms': { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', text: '#fbbf24' },
  'soft skills':   { bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', text: '#34d399' },
};

export default function Skills() {
  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/skills')
      .then(r => r.json())
      .then(d => setSkills(d.data))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="skills__bg-orb" />
      <div className="container">
        <div className="skills__header">
          <span className="section-tag">✦ My Skills</span>
          <h2 className="section-title">Technologies I <span>work with</span></h2>
          <p className="section-subtitle">
            A curated set of technologies I use daily to build full-stack applications from idea to deployment.
          </p>
        </div>

        {error && (
          <p className="skills__error">⚠️ Could not load skills from API. Make sure the backend is running.</p>
        )}

        {!skills && !error && (
          <div className="skills__loading">
            {[...Array(5)].map((_, i) => <div key={i} className="skills__skeleton" />)}
          </div>
        )}

        {skills && (
          <div className="skills__categories">
            {Object.entries(skills).map(([cat, items]) => {
              const color = CATEGORY_COLORS[cat] || CATEGORY_COLORS.tools;
              return (
                <div key={cat} className="skills__category glass-card">
                  <div className="skills__cat-header">
                    <span className="skills__cat-icon">{CATEGORY_ICONS[cat] || '💡'}</span>
                    <h3 className="skills__cat-name">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
                    <span className="skills__cat-count" style={{ color: color.text }}>{items.length}</span>
                  </div>
                  <div className="skills__tags">
                    {items.map(skill => (
                      <span
                        key={skill}
                        className="skills__tag"
                        style={{ background: color.bg, borderColor: color.border, color: color.text }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
