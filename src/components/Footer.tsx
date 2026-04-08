import { personalInfo } from '../data/portfolioData';
import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaMedium,
  FaFacebookF,
  FaWhatsapp
} from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-name">{personalInfo.name.split(' ')[0]}</span>
              <span className="footer__logo-slash"> /</span>
              <span className="footer__logo-bracket">&gt;</span>
            </a>
            <p className="footer__tagline">
              Crafting exceptional digital experiences through clean code and modern innovation.
            </p>
          </div>

          <div className="footer__social">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
            <a href={personalInfo.stackoverflow} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Stack Overflow">
              <FaStackOverflow size={18} />
            </a>
            <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Medium">
              <FaMedium size={18} />
            </a>
            <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer__social-link" aria-label="Email">
              <HiOutlineMail size={18} />
            </a>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {personalInfo.name}.
          </p>
          <p className="footer__tech">
            Built with React + TypeScript + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
