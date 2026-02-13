'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import EmbedPlayer from '@/components/EmbedPlayer';
import Timeline from '@/components/Timeline';
import Badge from '@/components/Badge';
import ScrollReveal from '@/components/ScrollReveal';
import profile from '@/data/profile';

export default function CinemaPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredFilmography = filter === 'all'
    ? profile.cinema.filmography
    : profile.cinema.filmography.filter((film) => film.type === filter);

  const types = ['all', ...Array.from(new Set(profile.cinema.filmography.map((film) => film.type)))];

  return (
    <>
      <PageHeader
        title="Cinéma"
        description="Filmographie et showreel"
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Cinéma', href: '/cinema' }]}
      />

      {/* Showreel */}
      <Section>
        <div className="py-16 lg:py-24">
          <ScrollReveal>
            <div className="mb-8">
              <Badge variant="gold">Showreel</Badge>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                {profile.cinema.showreel.title}
              </h2>
            </div>

            <EmbedPlayer
              type="vimeo"
              videoId={profile.cinema.showreel.videoId}
              title={profile.cinema.showreel.title}
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Filmography */}
      <Section>
        <div className="py-16 lg:py-24">
          <ScrollReveal delay={100}>
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                  Filmographie
                </h2>
                <p className="mt-4 max-w-xl text-base text-foreground/60 lg:text-lg">
                  Une sélection de films et séries télévisées.
                </p>
              </div>

              {/* Filter */}
              <div className="flex flex-wrap gap-3">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`rounded-full border px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                      filter === type
                        ? 'border-lma-gold bg-lma-gold text-background'
                        : 'border-white/10 text-foreground/60 hover:border-lma-gold/50 hover:text-foreground'
                    }`}
                  >
                    {type === 'all' ? 'Tout' : type === 'film' ? 'Films' : 'Séries'}
                  </button>
                ))}
              </div>
            </div>

            <Timeline
              items={filteredFilmography.map((film) => ({
                year: film.year,
                title: film.title,
                subtitle: `Rôle: ${film.role} • Réal: ${film.director}`,
                description: `${film.category} • ${film.production}`,
                category: film.type,
                image: film.image,
              }))}
              showImages={true}
            />
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
