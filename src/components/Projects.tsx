import { useState, useRef, useEffect } from 'react';
import { projects } from '../data/portfolioData';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
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
                        <FaGithub size={20} />
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
                        <HiOutlineExternalLink size={20} />
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
