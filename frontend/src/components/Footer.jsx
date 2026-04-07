import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__info">
          <div className="footer__logo">
            <span className="logo-bracket">&lt;</span>
            Palki
            <span className="logo-accent">Sharma</span>
            <span className="logo-bracket"> /&gt;</span>
          </div>
          <p className="footer__text">
            Built with passion using React, Node.js, and Express.
            Designed to showcase modern web development capabilities.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__link-group">
            <h4>Sitemap</h4>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__link-group">
            <h4>Socials</h4>
            <a href="https://github.com/palki-code" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/palki-sharma-0b1a83284" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">HackerRank</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {currentYear} Palki Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
