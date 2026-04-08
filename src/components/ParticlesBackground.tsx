import { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function ParticlesBackground({ theme }: { theme: 'light' | 'dark' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);
  const particlesRef = useRef<Particle[]>([]);

  // Update theme ref when theme changes
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Adjust particle positions proportionally to prevent disappearing
      if (oldWidth > 0 && oldHeight > 0 && particlesRef.current.length > 0) {
        particlesRef.current.forEach(p => {
          p.x = (p.x / oldWidth) * canvas.width;
          p.y = (p.y / oldHeight) * canvas.height;
        });
      } else if (particlesRef.current.length === 0) {
        createParticles();
      }
    };

    const createParticles = () => {
      const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 80);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTheme = themeRef.current;
      const particles = particlesRef.current;

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme === 'dark' 
          ? `rgba(108, 99, 255, ${p.opacity})` 
          : `rgba(108, 99, 255, ${p.opacity * 0.6})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const connectionOpacity = currentTheme === 'dark' ? 0.08 : 0.05;
            ctx.strokeStyle = `rgba(108, 99, 255, ${connectionOpacity * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    if (particlesRef.current.length === 0) {
      createParticles();
    }
    drawParticles();

    const handleResize = () => {
      resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only run on mount

  return <canvas ref={canvasRef} className="particles-canvas" />;
}
