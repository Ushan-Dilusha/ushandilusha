import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useScrollSpy } from '../hooks/useAnimations';
import { useTheme } from '../hooks/useTheme';
import { HiOutlineMoon, HiOutlineSun, HiOutlineExternalLink } from 'react-icons/hi';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container container">
        <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">{personalInfo.name.split(' ')[0]}</span>
          <span className="navbar__logo-slash"> /</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </a>

        <ul className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <HiOutlineMoon size={20} />
            ) : (
              <HiOutlineSun size={20} />
            )}
          </button>

          <a
            href={personalInfo.resumeUrl}
            className="navbar__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <HiOutlineExternalLink size={14} />
          </a>
        </div>

        <button
          className={`navbar__menu-toggle ${isMobileMenuOpen ? 'navbar__menu-toggle--active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
