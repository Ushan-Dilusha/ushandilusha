import { useState, useRef, useEffect } from 'react';
import { skills } from '../data/portfolioData';
import type { Skill } from '../data/portfolioData';
import { 
  HiOutlineSparkles, 
  HiOutlineColorSwatch, 
  HiOutlineServer, 
  HiOutlineTerminal 
} from 'react-icons/hi';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'all'>('all');
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { key: 'all' as const, label: 'All', icon: HiOutlineSparkles },
    { key: 'frontend' as const, label: 'Frontend', icon: HiOutlineColorSwatch },
    { key: 'backend' as const, label: 'Backend', icon: HiOutlineServer },
    { key: 'tools' as const, label: 'DevOps & Tools', icon: HiOutlineTerminal },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className={`skills__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className={`skills__categories ${isVisible ? 'animate-in animate-delay-2' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`skills__category-btn ${activeCategory === cat.key ? 'skills__category-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span className="skills__category-icon"><cat.icon /></span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className={`skills__grid ${isVisible ? 'animate-in animate-delay-3' : ''}`}>
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index, isVisible }: { skill: Skill; index: number; isVisible: boolean }) {
  return (
    <div
      className="skills__card glass-card"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="skills__card-header">
        <span className="skills__card-icon">
          <skill.icon />
        </span>
        <span className="skills__card-name">{skill.name}</span>
      </div>
      <div className="skills__progress-bar">
        <div
          className="skills__progress-fill"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
      <span className="skills__level">{skill.level}%</span>
    </div>
  );
}
