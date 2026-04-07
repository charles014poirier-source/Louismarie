'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    // Generate particles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 40;

    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2-6px
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10, // 10-20s
      delay: Math.random() * 5,
    }));

    setParticles(newParticles);
  }, [reducedMotion]);

  if (reducedMotion || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-lma-gold/30 animate-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}
