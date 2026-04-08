import { useRef, useState, useEffect, type FormEvent } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
        </svg>
      ),
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'ushandilusha',
      href: personalInfo.linkedin,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '+94 71 978 8669',
      href: personalInfo.whatsapp,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      {/* Background decoration */}
      <div className="contact__bg-orb contact__bg-orb--1" />
      <div className="contact__bg-orb contact__bg-orb--2" />

      <div className="container">
        <div className={`contact__header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact methods */}
          <div className={`contact__methods ${isVisible ? 'animate-in animate-delay-2' : ''}`}>
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact__method glass-card"
              >
                <div className="contact__method-icon">{method.icon}</div>
                <div>
                  <span className="contact__method-label">{method.label}</span>
                  <span className="contact__method-value">{method.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form
            className={`contact__form glass-card ${isVisible ? 'animate-in animate-delay-3' : ''}`}
            onSubmit={handleSubmit}
            id="contact-form"
          >
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__form-label">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="contact__form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-email" className="contact__form-label">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  className="contact__form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-subject" className="contact__form-label">Subject</label>
              <input
                type="text"
                id="contact-subject"
                className="contact__form-input"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__form-label">Message</label>
              <textarea
                id="contact-message"
                className="contact__form-input contact__form-textarea"
                placeholder="Tell me about your project or idea..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className={`contact__form-submit ${formStatus !== 'idle' ? 'contact__form-submit--' + formStatus : ''}`}
              disabled={formStatus !== 'idle'}
              id="contact-submit"
            >
              {formStatus === 'idle' && (
                <>
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
              {formStatus === 'sending' && <span>Sending...</span>}
              {formStatus === 'sent' && (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Message Sent!</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
