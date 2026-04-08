import { useRef, useState, useEffect, type FormEvent } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  HiOutlineMail, 
  HiOutlineLocationMarker, 
  HiOutlinePaperAirplane, 
  HiOutlineCheck 
} from 'react-icons/hi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
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
      icon: <HiOutlineMail size={24} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaLinkedinIn size={24} />,
      label: 'LinkedIn',
      value: 'ushandilusha',
      href: personalInfo.linkedin,
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: 'WhatsApp',
      value: '+94 71 978 8669',
      href: personalInfo.whatsapp,
    },
    {
      icon: <HiOutlineLocationMarker size={24} />,
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
                  <HiOutlinePaperAirplane size={18} style={{ transform: 'rotate(90deg)' }} />
                </>
              )}
              {formStatus === 'sending' && <span>Sending...</span>}
              {formStatus === 'sent' && (
                <>
                  <HiOutlineCheck size={18} />
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
