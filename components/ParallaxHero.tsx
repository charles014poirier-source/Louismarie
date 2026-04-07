'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '@/components/CTA';
import FloatingParticles from '@/components/FloatingParticles';

/**
 * ParallaxHero - Hero section with parallax scrolling and floating particles
 *
 * Features:
 * - Parallax effect (15% scroll speed)
 * - Floating golden particles
 * - Reduced motion support
 * - Image fallback
 * - Responsive particle count
 */
export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [imageError, setImageError] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  const parallaxOffset = reducedMotion ? 0 : scrollY * 0.15;

  return (
    <section
      ref={heroRef}
      className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {!imageError ? (
            <Image
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=90"
              alt="Louis-Marie Audubert"
              fill
              className="object-cover object-center"
              priority
              quality={90}
              sizes="100vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-lma-dark via-lma-dark/95 to-black" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Floating particles */}
        <FloatingParticles />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-lma-gold mb-6 font-display text-lg lg:text-xl animate-fade-in-up">
              Bienvenue sur le site de Louis-Marie Audubert
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-light text-white/90 lg:text-xl leading-relaxed animate-fade-in-up animation-delay-200">
              Artiste pluridisciplinaire, Louis-Marie Audubert explore les frontières entre théâtre, cinéma et musique. Formé au Conservatoire National Supérieur d'Art Dramatique, il développe un travail de recherche oscillant entre texte contemporain et création musicale.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-400">
              <CTA href="/cinema" variant="primary">
                Voir la bande-démo
              </CTA>
              <CTA href="/photos" variant="outline">
                Galerie photo
              </CTA>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
