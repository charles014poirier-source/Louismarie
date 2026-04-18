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
 * - Horizontal scrolling carousel with images side by side
 * - Parallax effect (15% scroll speed)
 * - Floating golden particles
 * - Reduced motion support
 * - Continuous auto-scroll
 */
export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Artistic images for actor/singer: theatre, music, performance
  const artisticImages = [
    '/Image/IMG_3517.JPG', // Portrait principal Louis-Marie Audubert
    '/Image/LMA-137-13x18.jpg', // Portrait studio
    '/Image/IMG_5026.jpg', // Portrait artistique
    '/Image/IMG_5066.jpg', // Portrait naturel
    '/Image/Capture d\'écran 2025-01-04 à 16.14.23.png', // Capture écran
  ];

  // Duplicate images for seamless infinite scroll
  // Need at least 3 sets for smooth looping
  const duplicatedImages = [...artisticImages, ...artisticImages, ...artisticImages];

  return (
    <section
      ref={heroRef}
      className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-24 bg-black"
    >
      {/* Background with horizontal scrolling carousel */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* Horizontal scrolling container */}
          {/* Width: 300% means we have 3 complete sets of images (100% each) */}
          <div
            ref={scrollContainerRef}
            className={`flex h-full ${reducedMotion ? '' : 'animate-scroll-horizontal'}`}
            style={{
              width: '300%',
            }}
          >
            {duplicatedImages.map((image, index) => {
              // La 3ème photo (IMG_5026.jpg) a un cadrage différent
              const originalIndex = (index % artisticImages.length);
              const isThirdPosition = originalIndex === 2;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/5 md:w-1/5 h-full relative overflow-hidden"
                  style={{ flex: '0 0 20%' }}
                >
                  <Image
                    src={image}
                    alt={`Louis-Marie Audubert ${index + 1}`}
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: isThirdPosition ? '50% 20%' : 'center'
                    }}
                    sizes="20vw"
                    priority={index < 5}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              );
            })}
          </div>
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
              <CTA href="/infos" variant="outline">
                Me contacter
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
