import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useAnimations';
import { useTheme } from '../hooks/useTheme';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaStackOverflow, 
  FaMedium, 
  FaFacebookF, 
  FaWhatsapp 
} from 'react-icons/fa6';
import { HiOutlineMail, HiArrowRight, HiOutlineDocumentDownload } from 'react-icons/hi';
import ParticlesBackground from './ParticlesBackground';
import './Hero.css';

export default function Hero() {
  const { theme } = useTheme();
  const typedText = useTypewriter(
    ['Software Engineer', 'Technical Support Agent', 'Clean Code Advocate', 'Enterprise Application Developer', 'Java & Spring Boot Specialist', 'React & TypeScript Developer', 'MERN Stack Experienced', 'Cloud Deployment Troubleshooter', 'Full-Stack Engineer', 'SLIIT IT Graduate', 'Software Architecture Enthusiast', 'Complex Problem Solver'],
    80,
    40,
    2000
  );

  return (
    <section className="hero" id="home">
      <ParticlesBackground theme={theme} />

      {/* Ambient glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__greeting animate-in">
            <span className="hero__wave">👋</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero__name animate-in animate-delay-1">
            {personalInfo.name}
          </h1>

          <div className="hero__role animate-in animate-delay-2">
            <span className="hero__role-static">{personalInfo.title}</span>
            <span className="hero__role-divider">|</span>
            <span className="hero__role-typed">
              {typedText}
              <span className="hero__cursor">|</span>
            </span>
          </div>

          <p className="hero__tagline animate-in animate-delay-3">
            {personalInfo.tagline}
          </p>

          <div className="hero__actions animate-in animate-delay-4">
            <a href="#projects" className="hero__btn hero__btn--primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>View My Work</span>
              <HiArrowRight size={18} />
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>Get in Touch</span>
            </a>
            <a href={personalInfo.resumeUrl} className="hero__btn hero__btn--secondary" target="_blank" rel="noopener noreferrer">
              <span>Resume</span>
              <HiOutlineDocumentDownload size={18} />
            </a>
          </div>

          <div className="hero__social animate-in animate-delay-5">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href={personalInfo.stackoverflow} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Stack Overflow">
              <FaStackOverflow size={20} />
            </a>
            <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Medium">
              <FaMedium size={20} />
            </a>
            <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Email">
              <HiOutlineMail size={20} />
            </a>
          </div>
        </div>

        {/* Decorative code snippet */}
        <div className="hero__code animate-in animate-delay-3">
          <div className="hero__code-header">
            <span className="hero__code-dot hero__code-dot--red" />
            <span className="hero__code-dot hero__code-dot--yellow" />
            <span className="hero__code-dot hero__code-dot--green" />
            <span className="hero__code-filename">developer.ts</span>
          </div>
          <div className="hero__code-body">
            <pre>
              <code>
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = {'{'}{'\n'}
                {'  '}<span className="code-property">name</span>: <span className="code-string">"Ushan Dilusha"</span>,{'\n'}
                {'  '}<span className="code-property">role</span>: <span className="code-string">"Assoc. SE"</span>,{'\n'}
                {'  '}<span className="code-property">skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"TS"</span>, <span className="code-string">"Node"</span>],{'\n'}
                {'  '}<span className="code-property">passion</span>: <span className="code-string">"Building things"</span>,{'\n'}
                {'  '}<span className="code-property">available</span>: <span className="code-boolean">true</span>,{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
