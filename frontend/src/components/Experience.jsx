import './Experience.css';

const experiences = [
  {
    company: 'CSE Pathshala',
    role: 'Training: C++ Programming OOPs & DSA',
    period: 'June 2025 - July 2025',
    desc: 'Completed 35+ hours of intensive live training on core and advanced concepts of C++ programming. Gained hands-on experience with OOPs and implemented essential data structures like arrays, linked lists, trees, and graphs.',
  },
  {
    company: 'Lovely Professional University',
    role: 'B.Tech in Computer Science & Engineering',
    period: 'Aug 2023 - Present',
    desc: 'Presently pursuing a Bachelor of Technology degree. Secured a CGPA of 7.',
  },
  {
    company: 'Spring Dale Sen Sec School',
    role: 'Intermediate (12th Grade)',
    period: 'Apr 2021 - Mar 2022',
    desc: 'Completed intermediate education with 94.5%.',
  },
  {
    company: 'Spring Dale Sen Sec School',
    role: 'Matriculation (10th Grade)',
    period: 'Apr 2019 - Mar 2020',
    desc: 'Completed matriculation education with 80%.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience__header">
          <span className="section-tag">✦ Journey</span>
          <h2 className="section-title">Experience & <span>Education</span></h2>
          <p className="section-subtitle">
            A timeline of my professional growth and academic background in the world of technology.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__dot" />
              <div className="experience__content glass-card">
                <div className="experience__meta">
                  <span className="experience__period">{exp.period}</span>
                  <h3 className="experience__role">{exp.role}</h3>
                  <h4 className="experience__company">{exp.company}</h4>
                </div>
                <p className="experience__desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
