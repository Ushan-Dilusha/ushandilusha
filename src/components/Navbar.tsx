import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useScrollSpy } from '../hooks/useAnimations';
import { useTheme } from '../hooks/useTheme';
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="18.36" x2="5.64" y2="16.94" />
                <line x1="18.36" y1="4.22" x2="19.78" y2="5.64" />
              </svg>
            )}
          </button>

          <a
            href={personalInfo.resumeUrl}
            className="navbar__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
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
