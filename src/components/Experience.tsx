import { useRef, useState, useEffect } from 'react';
import { experiences, education } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
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

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className={`experience__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Professional experience and educational background
          </p>
        </div>

        <div className="experience__grid">
          {/* Work Experience */}
          <div className={`experience__column ${isVisible ? 'animate-in animate-delay-2' : ''}`}>
            <h3 className="experience__column-title">
              <span className="experience__column-icon">💼</span>
              Work Experience
            </h3>

            <div className="experience__timeline">
              {experiences.map((exp) => (
                <div className="experience__card glass-card" key={exp.id}>
                  <div className="experience__card-header">
                    <div className="experience__card-dot" />
                    <div>
                      <h4 className="experience__card-role">{exp.role}</h4>
                      <p className="experience__card-company">{exp.company}</p>
                    </div>
                  </div>

                  <div className="experience__card-meta">
                    <span className="experience__card-period">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {exp.period}
                    </span>
                    <span className="experience__card-location">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>

                  <ul className="experience__card-list">
                    {exp.description.map((item, i) => (
                      <li key={i} className="experience__card-list-item">
                        <span className="experience__card-bullet">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="experience__card-tech">
                    {exp.tech.map((t) => (
                      <span key={t} className="experience__card-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`experience__column ${isVisible ? 'animate-in animate-delay-3' : ''}`}>
            <h3 className="experience__column-title">
              <span className="experience__column-icon">🎓</span>
              Education
            </h3>

            <div className="experience__timeline">
              {education.map((edu) => (
                <div className="experience__card glass-card" key={edu.id}>
                  <div className="experience__card-header">
                    <div className="experience__card-dot experience__card-dot--education" />
                    <div>
                      <h4 className="experience__card-role">{edu.degree}</h4>
                      <p className="experience__card-company">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="experience__card-meta">
                    <span className="experience__card-period">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {edu.period}
                    </span>
                  </div>

                  <p className="experience__card-desc">{edu.description}</p>
                </div>
              ))}

              {/* Certifications placeholder */}
              <div className="experience__card glass-card">
                <div className="experience__card-header">
                  <div className="experience__card-dot experience__card-dot--cert" />
                  <div>
                    <h4 className="experience__card-role">Continuous Learning</h4>
                    <p className="experience__card-company">Self-Development</p>
                  </div>
                </div>
                <p className="experience__card-desc">
                  Constantly expanding my skill set through online courses, workshops,
                  and hands-on practice. Believer in lifelong learning and staying
                  up-to-date with the latest technologies.
                </p>
                <div className="experience__card-tech">
                  <span className="experience__card-tech-tag">Udemy</span>
                  <span className="experience__card-tech-tag">Coursera</span>
                  <span className="experience__card-tech-tag">YouTube</span>
                  <span className="experience__card-tech-tag">Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
