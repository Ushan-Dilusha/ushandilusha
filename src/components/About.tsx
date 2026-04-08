import { useRef, useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  HiOutlineLocationMarker, 
  HiOutlineBriefcase, 
  HiOutlineMail, 
  HiOutlineLightBulb 
} from 'react-icons/hi';
import './About.css';

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Code Passion' },
  ];

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className={`about__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting <span className="gradient-text">Digital Solutions</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className={`about__image-wrapper ${isVisible ? 'animate-in animate-delay-2' : ''}`}>
            <div className="about__image-frame">
              <div className="about__avatar">
                <div className="about__avatar-inner">
                  <img src={personalInfo.avatar} alt={personalInfo.name} className="about__avatar-img" />
                </div>
                <div className="about__avatar-ring" />
                <div className="about__avatar-ring about__avatar-ring--2" />
              </div>
            </div>
            <div className="about__image-decoration" />
          </div>

          <div className={`about__content ${isVisible ? 'animate-in animate-delay-3' : ''}`}>
            <p className="about__bio">{personalInfo.bio}</p>
            <p className="about__bio about__bio--secondary">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code
              that solves real-world problems.
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-icon"><HiOutlineLocationMarker /></span>
                <div>
                  <span className="about__info-label">Location</span>
                  <span className="about__info-value">{personalInfo.location}</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon"><HiOutlineBriefcase /></span>
                <div>
                  <span className="about__info-label">Role</span>
                  <span className="about__info-value">{personalInfo.title}</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon"><HiOutlineMail /></span>
                <div>
                  <span className="about__info-label">Email</span>
                  <span className="about__info-value">{personalInfo.email}</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon"><HiOutlineLightBulb /></span>
                <div>
                  <span className="about__info-label">Focus</span>
                  <span className="about__info-value">Full-Stack Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`about__stats ${isVisible ? 'animate-in animate-delay-4' : ''}`}>
          {stats.map((stat, index) => (
            <div className="about__stat" key={index}>
              <span className="about__stat-value gradient-text">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
