'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import Badge from '@/components/Badge';
import profile from '@/data/profile';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lma-gold mb-6">
                Bienvenue sur le site de Louis-Marie Audubert
              </p>

              <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
                {profile.name}
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
          <div className="mx-auto max-w-4xl">
            {/* Bio */}
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                Biographie
              </h2>

              <p className="mt-6 text-lg text-foreground/70 lg:text-xl">
                {profile.bio.short}
              </p>

              <div className="mt-8 space-y-4">
                {profile.bio.long.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-foreground/80 lg:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Info */}
      <Section>
        <div className="py-16 lg:py-24">
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
            Informations clés
          </h3>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Formation */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lma-gold">
                Formation
              </h4>
              <p className="text-base text-foreground/80">{profile.bio.keyInfo.formation}</p>
            </div>

            {/* Langues */}
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

            {/* Instruments */}
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

            {/* Chant & Danse */}
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
          </div>
        </div>
      </Section>

      {/* Categories Section */}
      <Section>
        <div className="py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cinema */}
            <Link
              href="/cinema"
              className="group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30"
            >
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80"
                alt="Cinéma"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="font-display text-4xl font-bold text-foreground transition-colors group-hover:text-lma-gold">
                  Cinéma
                </h3>
                <span className="mt-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
                  Découvrir
                </span>
              </div>
            </Link>

            {/* Theatre */}
            <Link
              href="/theatre"
              className="group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30"
            >
              <Image
                src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80"
                alt="Théâtre"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="font-display text-4xl font-bold text-foreground transition-colors group-hover:text-lma-gold">
                  Théâtre
                </h3>
                <span className="mt-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
                  Découvrir
                </span>
              </div>
            </Link>

            {/* Musique */}
            <Link
              href="/musique"
              className="group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30"
            >
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80"
                alt="Musique"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="font-display text-4xl font-bold text-foreground transition-colors group-hover:text-lma-gold">
                  Musique
                </h3>
                <span className="mt-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
                  Découvrir
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      {/* Photo Teaser */}
      <Section>
        <div className="py-24 lg:py-32">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                Galerie photo
              </h2>
              <p className="mt-4 max-w-xl text-lg text-foreground/60">
                Une sélection de portraits, plateaux et performances scéniques.
              </p>
            </div>
            <CTA href="/photos" variant="outline">
              Voir toutes les photos
            </CTA>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {profile.photos.slice(0, 6).map((photo) => (
              <div
                key={photo.id}
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
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
