'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import EmbedPlayer from '@/components/EmbedPlayer';
import Badge from '@/components/Badge';
import ScrollReveal from '@/components/ScrollReveal';
import profile from '@/data/profile';

export default function MusiquePage() {
  return (
    <>
      <PageHeader
        title="Musique"
        description="Compositions, clips et discographie"
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Musique', href: '/musique' }]}
      />

      {/* Hero Section */}
      <Section>
        <div className="relative py-32 lg:py-48">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Images/pexels-antonh-145707.jpg"
              alt="Louis-Marie Audubert - Musique"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
              Louis-Marie Audubert
            </h1>
            <p className="mt-6 text-xl text-foreground/80 lg:text-2xl">
              Compositeur & Interprète
            </p>
            <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
              Découvrez un univers musical entre pop électro, jazz et influences classiques
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#discographie"
                className="rounded-full bg-lma-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-all hover:bg-lma-gold/90 sm:text-base"
              >
                Écouter la discographie
              </a>
              <a
                href="#clips"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-lma-gold hover:text-lma-gold sm:text-base"
              >
                Voir les clips
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Discography */}
      <Section>
        <div id="discographie" className="py-16 lg:py-24">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Discographie
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {profile.music.discography.map((release, index) => (
                <ScrollReveal key={release.id} delay={100 * index}>
                  <div
                    className="group rounded-[2px] border border-white/5 p-6 transition-all hover:border-lma-gold/30"
                  >
                    <Badge variant="outline">{release.type}</Badge>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-lma-gold">
                      {release.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      {release.date} • {release.genre}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Videos */}
      <Section>
        <div id="clips" className="py-16 lg:py-24">
          <ScrollReveal delay={200}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Clips & Lives
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {profile.music.videos.map((video, index) => (
                <ScrollReveal key={video.id} delay={250 + index * 100}>
                  <div>
                    <EmbedPlayer
                      type="youtube"
                      videoId={video.videoId}
                      title={video.title}
                    />
                    <div className="mt-4">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {video.title}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/60">{video.date}</p>
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
