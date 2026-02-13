'use client';

import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import Badge from '@/components/Badge';
import ScrollReveal from '@/components/ScrollReveal';
import profile from '@/data/profile';

export default function TheatrePage() {
  return (
    <>
      <PageHeader
        title="Théâtre"
        description="Mises en scène et productions"
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Théâtre', href: '/theatre' }]}
      />

      {/* Highlights */}
      <Section>
        <div className="py-16 lg:py-24">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              En avant
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {profile.theatre.highlights.map((highlight, index) => (
                <ScrollReveal key={highlight.id} delay={100 * index}>
                  <div
                    className="group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30"
                  >
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <Badge variant="gold">{highlight.period}</Badge>
                      <h3 className="mt-4 font-display text-2xl font-bold text-foreground group-hover:text-lma-gold lg:text-3xl">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/60">
                        {highlight.role} • {highlight.director}
                      </p>
                      <p className="mt-1 text-xs text-foreground/40">
                        {highlight.venue}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Productions List */}
      <Section>
        <div className="py-16 lg:py-24">
          <ScrollReveal delay={200}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Productions
            </h2>

            <div className="mt-12 space-y-6">
              {profile.theatre.productions.map((production, index) => (
                <ScrollReveal key={production.id} delay={250 + index * 50}>
                  <div
                    className="border-l border-white/10 pl-6 transition-colors hover:border-lma-gold/50"
                  >
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-4">
                      <span className="font-display text-xl font-bold text-foreground lg:text-2xl">
                        {production.year}
                      </span>
                      {production.type && (
                        <span className="text-xs font-bold uppercase tracking-wider text-lma-gold">
                          {production.type}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-foreground lg:text-2xl">
                      {production.title}
                    </h3>

                    {production.role && (
                      <p className="mt-1 text-sm text-foreground/60">
                        Rôle: {production.role}
                      </p>
                    )}

                    {production.director && (
                      <p className="mt-1 text-sm text-foreground/60">
                        Mise en scène: {production.director}
                      </p>
                    )}

                    {production.venue && (
                      <p className="mt-1 text-sm text-foreground/80">
                        {production.venue}
                      </p>
                    )}

                    {production.company && (
                      <p className="text-sm text-foreground/60">
                        {production.company}
                      </p>
                    )}
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
