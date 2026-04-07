import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [theme,      setTheme]      = useState('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={() => setActiveLink('')}>
          <span className="logo-bracket">&lt;</span>
          Palki
          <span className="logo-accent">Sharma</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeLink === link.href ? 'active' : ''}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA and Theme Toggle */}
        <div className="navbar__actions">
          <button className="navbar__theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={() => handleNavClick('#contact')}>
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => handleNavClick('#contact')}>
          Hire Me
        </a>
      </div>
    </header>
  );
}
