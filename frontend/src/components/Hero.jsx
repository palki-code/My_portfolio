import { useEffect, useRef } from 'react';
import './Hero.css';

const ROLES = ['Cybersecurity Enthusiast', 'Web Developer', 'Frontend Engineer', 'UI/UX Enthusiast', 'React Developer'];

export default function Hero() {
  const roleRef = useRef(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout;
    const type = () => {
      const current = ROLES[roleIndex.current];
      const el = roleRef.current;
      if (!el) return;

      if (!deleting.current) {
        el.textContent = current.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(type, deleting.current ? 55 : 90);
    };
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid overlay */}
      <div className="hero__grid" />

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for hire
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          Hi, I'm <span className="gradient-text">Palki Sharma</span>
          <br />
          <span className="hero__title--sub">I build things for the web and secure them.</span>
        </h1>

        {/* Typewriter */}
        <p className="hero__typewriter">
          <span ref={roleRef} />
          <span className="hero__cursor">|</span>
        </p>

        {/* Description */}
        <p className="hero__desc">
          Passionate computer science student with keen interest in cybersecurity and software development, dedicated to building scalable web applications
          and AI-driven solutions. Experienced with Java, C++, and modern web technologies.
        </p>

        {/* Actions */}
        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary hero__btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline hero__btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Get In Touch
          </a>
          <a href="/CVVV.pdf" download="Palki_Sharma_Resume.pdf" className="btn btn-outline hero__btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { value: '2+', label: 'Years Coding' },
            { value: '5+', label: 'Projects Built' },
            { value: '10+', label: 'Technologies' },
            
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value gradient-text">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </a>
    </section>
  );
}
