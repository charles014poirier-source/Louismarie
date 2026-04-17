'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import Badge from '@/components/Badge';
import ScrollReveal from '@/components/ScrollReveal';
import ParallaxHero from '@/components/ParallaxHero';
import profile from '@/data/profile';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero />

      {/* Bio Section */}
      <Section className="bg-background relative z-20">
        <div className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            {/* Bio */}
            <ScrollReveal>
              <div className="grid gap-12 lg:grid-cols-[1fr,300px] lg:gap-16 items-start">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                    Biographie
                  </h2>

                  <p className="mt-6 text-base leading-relaxed text-foreground/80 lg:text-lg">
                    Artiste pluridisciplinaire, Louis-Marie Audubert explore les frontières entre théâtre, cinéma et musique. Formé au Conservatoire National Supérieur d'Art Dramatique, il développe un travail de recherche oscillant entre texte contemporain et création musicale.
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-foreground/80 lg:text-lg">
                    Au cinéma, il a travaillé avec des réalisateurs tels que François Ozon, Xavier Dolan et Mia Hansen-Love. Sur scène, il collabore régulièrement avec de nombreux metteurs en scène contemporains et crée ses propres spectacles.
                  </p>
                </div>

                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-white/10 shadow-2xl order-first lg:order-last mx-auto lg:mx-0 w-full max-w-[280px]">
                  <Image
                    src="/Image/IMG_5026.jpg"
                    alt="Louis-Marie Audubert"
                    fill
                    className="object-cover object-center-top"
                    sizes="(max-width: 1024px) 280px, 300px"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Key Info */}
      <Section>
        <div className="py-16 lg:py-24">
          <ScrollReveal delay={100}>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Informations clés
            </h3>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* Formation */}
              <ScrollReveal delay={200}>
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lma-gold">
                    Formation
                  </h4>
                  <p className="text-base text-foreground/80">{profile.bio.keyInfo.formation}</p>
                </div>
              </ScrollReveal>

              {/* Langues */}
              <ScrollReveal delay={300}>
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lma-gold">
                    Langues
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.bio.keyInfo.langues.map((lang, index) => (
                      <Badge key={index} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Instruments */}
              <ScrollReveal delay={400}>
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lma-gold">
                    Instruments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.bio.keyInfo.instruments.map((instrument, index) => (
                      <Badge key={index} variant="default">
                        {instrument}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Chant & Danse */}
              <ScrollReveal delay={500}>
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lma-gold">
                    Chant & Danse
                  </h4>
                  <p className="text-base text-foreground/80">
                    {profile.bio.keyInfo.chant}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.bio.keyInfo.danse.map((style, index) => (
                      <Badge key={index} variant="default">
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Categories Section */}
      <Section className="text-center">
        <div className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl mb-16">
            <ScrollReveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl mb-4">
                Explorer son travail
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-foreground/60">
                Découvrez la polyvalence artistique à travers ses projets cinématographiques, théâtraux et musicaux.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto px-4">
            {/* Cinema */}
            <ScrollReveal delay={100}>
              <Link
                href="/cinema"
                className="group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30 hover:shadow-2xl hover:shadow-lma-gold/10 block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
                  alt="Cinéma"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-3 rounded-full bg-lma-gold/20 p-2.5 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-lma-gold/30">
                    <svg className="h-6 w-6 text-lma-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground transition-colors group-hover:text-lma-gold sm:text-4xl">
                    Cinéma
                  </h3>
                  <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                    Filmographie & Showreel
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lma-gold group-hover:gap-3 transition-all sm:text-sm">
                    Voir les films
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Theatre */}
            <ScrollReveal delay={200}>
              <Link
                href="/theatre"
                className="group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30 hover:shadow-2xl hover:shadow-lma-gold/10 block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80"
                  alt="Théâtre"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-3 rounded-full bg-lma-gold/20 p-2.5 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-lma-gold/30">
                    <svg className="h-6 w-6 text-lma-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground transition-colors group-hover:text-lma-gold sm:text-4xl">
                    Théâtre
                  </h3>
                  <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                    Productions & Mises en scène
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lma-gold group-hover:gap-3 transition-all sm:text-sm">
                    Voir les pièces
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Musique */}
            <ScrollReveal delay={300}>
              <Link
                href="/musique"
                className="group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30 hover:shadow-2xl hover:shadow-lma-gold/10 block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80"
                  alt="Musique"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-3 rounded-full bg-lma-gold/20 p-2.5 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-lma-gold/30">
                    <svg className="h-6 w-6 text-lma-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground transition-colors group-hover:text-lma-gold sm:text-4xl">
                    Musique
                  </h3>
                  <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                    Compositions & Albums
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lma-gold group-hover:gap-3 transition-all sm:text-sm">
                    Écouter les titres
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Monsieur Louis Chroniques - Facebook Section */}
      <Section className="bg-gradient-to-b from-lma-dark/50 to-transparent">
        <div className="py-16 lg:py-24">
          <ScrollReveal delay={100}>
            <div className="mx-auto max-w-4xl text-center">
              {/* Facebook Icon */}
              <div className="mb-8 flex justify-center">
                <div className="rounded-full bg-lma-gold/20 p-6 backdrop-blur-sm">
                  <svg className="h-12 w-12 text-lma-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>

              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                Monsieur Louis Chroniques
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 lg:text-xl">
                Découvrez les chroniques, anecdotes et coulisses de l'artiste sur sa page Facebook dédiée.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://www.facebook.com/people/Monsieur-Louis-Chroniques/61562643643993/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-lma-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-all hover:bg-lma-gold/90 hover:scale-105"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Suivre sur Facebook
                </a>
              </div>

              {/* Features */}
              <div className="mt-16 grid gap-8 lg:grid-cols-3">
                <ScrollReveal delay={200}>
                  <div className="rounded-[2px] border border-white/5 bg-lma-dark/50 p-6 backdrop-blur-sm transition-colors hover:border-lma-gold/30">
                    <div className="mb-4 text-lma-gold">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Chroniques exclusives
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      Des articles et réflexions sur le théâtre, le cinéma et la musique
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="rounded-[2px] border border-white/5 bg-lma-dark/50 p-6 backdrop-blur-sm transition-colors hover:border-lma-gold/30">
                    <div className="mb-4 text-lma-gold">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Coulisses & anecdotes
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      Les histoires derrières les projets et moments de vie d'artiste
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="rounded-[2px] border border-white/5 bg-lma-dark/50 p-6 backdrop-blur-sm transition-colors hover:border-lma-gold/30">
                    <div className="mb-4 text-lma-gold">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Contenu visuel
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      Photos, vidéos et contenus multimédias en exclusivité
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Photo Teaser */}
      <Section>
        <div className="py-24 lg:py-32">
          <ScrollReveal delay={100}>
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Galerie photo
                </h2>
                <p className="mt-4 max-w-xl text-lg text-foreground/60">
                  Une sélection de portraits, plateaux et performances scéniques.
                </p>
              </div>
              <CTA href="/photos" variant="outline" className="whitespace-nowrap text-xs px-6 py-2.5 sm:text-sm sm:px-8 sm:py-3">
                Voir toutes les photos
              </CTA>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {profile.photos.slice(0, 6).map((photo, index) => (
                <ScrollReveal key={photo.id} delay={150 + index * 100}>
                  <div
                    className="group relative aspect-[4/5] overflow-hidden rounded-[2px] bg-lma-dark"
                  >
                    <Image
                      src={photo.url}
                      alt={photo.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-lma-gold">
                        {photo.category}
                      </p>
                      <p className="mt-1 text-sm text-foreground">{photo.title}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
