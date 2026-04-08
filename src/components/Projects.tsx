import { useState, useRef, useEffect } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className={`projects__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my passion for building great software
          </p>
        </div>

        <div className={`projects__filters ${isVisible ? 'animate-in animate-delay-1' : ''}`}>
          <button
            className={`projects__filter-btn ${filter === 'all' ? 'projects__filter-btn--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`projects__filter-btn ${filter === 'featured' ? 'projects__filter-btn--active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            ⭐ Featured
          </button>
        </div>

        <div className={`projects__grid ${isVisible ? 'animate-in animate-delay-2' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              className={`projects__card glass-card ${project.featured ? 'projects__card--featured' : ''}`}
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="projects__card-image">
                <span className="projects__card-emoji">{project.image}</span>
                <div className="projects__card-overlay">
                  <div className="projects__card-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link"
                        aria-label="View source on GitHub"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link"
                        aria-label="View live demo"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        <span>View Project</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="projects__card-content">
                {project.featured && (
                  <span className="projects__card-badge">⭐ Featured</span>
                )}
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__card-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
