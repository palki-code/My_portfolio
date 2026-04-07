import './Certifications.css';

const certifications = [
  {
    title: 'C++ Programming: OOPs and DSA',
    issuer: 'CSE Pathshala',
    date: 'Aug 2025',
    link: 'mailto:support@csepathshala.com?subject=Certificate%20Verification&body=Please%20verify%20certificate%20number%20CP-20250607-ICPP-093', 
  },
  {
    title: 'The Bits and Bytes of Computer Networks',
    issuer: 'Google on Coursera',
    date: 'Sept 2024',
    link: 'https://coursera.org/verify/ZSRDDZBFOTCZ',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Nov 2023',
    link: 'https://www.freecodecamp.org/certification/fcc5c196846-ff42-4d65-bd54-351037b98f4f/responsive-web-design',
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="certifications__header">
          <span className="section-tag">✦ Continuous Learning</span>
          <h2 className="section-title">My <span>Certifications</span></h2>
          <p className="section-subtitle">
            Professional milestones and completed coursework.
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="certifications__card glass-card" style={{ display: 'flex' }}>
              <div className="certifications__icon">🏆</div>
              <div className="certifications__content">
                <h3 className="certifications__title">{cert.title}</h3>
                <p className="certifications__issuer">{cert.issuer}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <p className="certifications__date" style={{ margin: 0 }}>{cert.date}</p>
                  <span className="certifications__link-text" style={{ fontSize: '0.8rem', color: 'var(--accent-1)', fontWeight: '600' }}>Verify ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
