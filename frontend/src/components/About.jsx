import './About.css';

const highlights = [
  { icon: '🎓', title: 'Education', desc: 'B.Tech in CSE' },
  { icon: '💼', title: 'Achievements', desc: '3-Star HackerRank (Java), 100+ LeetCode' },
  { icon: '🌍', title: 'Location', desc: 'Punjab / Remote' },
  { icon: '🚀', title: 'Focus', desc: 'Cybersecurity & Full Stack Apps' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">


        {/* Left - Avatar Card */}
        <div className="about__avatar-col">
          <div className="about__avatar-card glass-card">
            <div className="about__avatar-ring">
              <div className="about__avatar">
                <img src="https://media.licdn.com/dms/image/v2/D5635AQF2D5gTKcSrLQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1728126060731?e=1775192400&v=beta&t=hHIMgYpEv-QRAUPxjAzDR38LDk9tIjzmdoT49xyrFF0" alt="Palki Sharma" />
              </div>
            </div>
            <div className="about__avatar-info">
              <h3>Palki Sharma</h3>
              <p>Cybersecurity Enthusiast | Software Developer</p>
            </div>
            <div className="about__socials">
              <a href="https://github.com/palki-code" target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/palki-sharma-0b1a83284" target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            {/* Status */}
            <div className="about__status">
              <span className="about__status-dot" />
              Open to opportunities
            </div>
          </div>

          {/* Highlight cards */}
          <div className="about__highlights">
            {highlights.map(h => (
              <div key={h.title} className="about__highlight glass-card">
                <span className="about__highlight-icon">{h.icon}</span>
                <div>
                  <p className="about__highlight-title">{h.title}</p>
                  <p className="about__highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Bio */}
        <div className="about__bio-col">
          <span className="section-tag">✦ About Me</span>
          <h2 className="section-title">
            Turning ideas into<br /><span>digital experiences</span>
          </h2>

          <div className="about__bio-text">
            <p>
              I'm a passionate cybersecurity and software developer currently pursuing a <strong>B.Tech in Computer Science</strong> at Lovely Professional University.
              I specialize in the JavaScript and Java ecosystems — from crafting
              beautiful, responsive interfaces in React to designing efficient REST APIs with Node.js and Express.
            </p>
            <p>
              My programming journey involves rigorous training in Data Structures and Algorithms with C++ and comprehensive certifications 
              like Google's 'The Bits and Bytes of Computer Networks'. I enjoy solving complex problems, as evidenced by my 5-star HackerRank
              badge in Java and a 100-day LeetCode badge.
            </p>
            <p>
              When I'm not coding, you'll find me exploring open-source projects, learning new tools,
              or experimenting with new AI integrations like the Gemini API. I'm always looking for exciting new opportunities to
              build something amazing.
            </p>
          </div>

          <div className="about__values">
            {['Clean Code', 'Performance First', 'User-Centric Design', 'Continuous Learning', 'Team Collaboration', 'Agile Mindset'].map(v => (
              <span key={v} className="about__value-tag">{v}</span>
            ))}
          </div>

          <div className="about__actions">
            <a href="#contact" className="btn btn-primary">Let's Work Together</a>
            <a href="#projects" className="btn btn-outline">See My Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
