'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import Badge from '@/components/Badge';
import ScrollReveal from '@/components/ScrollReveal';
import profile from '@/data/profile';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-0hXH3EXo88Q?w=1600&q=90"
            alt="Louis-Marie Audubert"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Content with semi-transparent card */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-lma-gold mb-6 font-display text-lg lg:text-xl">
                Bienvenue sur le site de Louis-Marie Audubert
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-light text-white/90 lg:text-xl leading-relaxed">
                Artiste pluridisciplinaire, Louis-Marie Audubert explore les frontières entre théâtre, cinéma et musique. Formé au Conservatoire National Supérieur d'Art Dramatique, il développe un travail de recherche oscillant entre texte contemporain et création musicale.
              </p>

              <div className="mt-12 flex flex-wrap gap-4 justify-center">
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
                    src="/Image/portrait bio.jpg"
                    alt="Louis-Marie Audubert"
                    fill
                    className="object-cover"
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
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80"
                  alt="Cinéma"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                  src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80"
                  alt="Théâtre"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80"
                  alt="Musique"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
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
