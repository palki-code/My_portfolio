import { useState, useEffect } from 'react';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card glass-card">
      <div className="project-card__image-container">
        <img src={project.image} alt={project.title} className="project-card__image" />
        <div className="project-card__overlay">
          <div className="project-card__links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link-icon" title="View Source">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link-icon" title="Live Demo">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="project-card__content">
        <div className="project-card__tech">
          {project.tech.map(t => <span key={t} className="project-card__tech-tag">{t}</span>)}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
      </div>
    </div>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API error:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))].slice(0, 8);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-tag">✦ My Portfolio</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            A selection of my best work, ranging from full-stack platforms to creative UI experiments.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects__filters">
          {allTech.map(t => (
            <button 
              key={t} 
              className={`projects__filter-btn ${filter === t ? 'active' : ''}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {loading && (
          <div className="projects__grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="project-card-skeleton" />
            ))}
          </div>
        )}

        {error && (
          <div className="projects__error">
            <p>Failed to load projects. Make sure the backend server is running on port 5000.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="projects__grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
