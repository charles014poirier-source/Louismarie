'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import profile from '@/data/profile';

export default function InfosPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Infos & Contact"
        description="Actualités et contact professionnel"
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Infos', href: '/infos' }]}
      />

      {/* Contact */}
      <Section>
        <div className="py-16 lg:py-24">
          <div className="mb-16 flex justify-center">
            <div className="relative aspect-square w-64 overflow-hidden rounded-full border-4 border-lma-gold/20 lg:w-80">
              <Image
                src="/Image/Portrait sourire.jpg"
                alt="Louis-Marie Audubert"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, 320px"
                priority
              />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                Contact professionnel
              </h2>

              <p className="mt-6 max-w-lg text-base text-foreground/80 lg:text-lg">
                Pour toute demande professionnelle (cinéma, théâtre, musique, presse), merci d&apos;utiliser le formulaire ci-contre ou contacter directement par email.
              </p>

              <div className="mt-12 space-y-6">
                {/* Email */}
                <div>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-lma-gold">
                    Email direct
                  </h3>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="text-lg text-foreground transition-colors hover:text-lma-gold lg:text-xl"
                  >
                    {profile.contact.email}
                  </a>
                </div>

                {/* Socials */}
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lma-gold">
                    Réseaux sociaux
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {profile.contact.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 px-6 py-2 text-xs font-bold uppercase tracking-wider text-foreground/60 transition-all hover:border-lma-gold hover:text-lma-gold"
                      >
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h3 className="mb-6 font-display text-2xl font-bold text-foreground lg:text-3xl">
                Envoyer un message
              </h3>

              {formSubmitted ? (
                <div className="rounded-[2px] border border-lma-gold/30 bg-lma-gold/10 p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-lma-gold" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="mt-4 font-display text-xl font-bold text-foreground">
                    Message envoyé !
                  </h4>
                  <p className="mt-2 text-foreground/80">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-[2px] border border-white/10 bg-lma-dark px-4 py-3 text-foreground transition-colors focus:border-lma-gold focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-[2px] border border-white/10 bg-lma-dark px-4 py-3 text-foreground transition-colors focus:border-lma-gold focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full rounded-[2px] border border-white/10 bg-lma-dark px-4 py-3 text-foreground transition-colors focus:border-lma-gold focus:outline-none resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-lma-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-background transition-all hover:bg-lma-gold/90"
                  >
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* News */}
      <Section>
        <div className="py-16 lg:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Actualités
          </h2>

          <div className="mt-12 space-y-6">
            {profile.news.map((news) => (
              <div
                key={news.id}
                className="rounded-[2px] border border-white/5 p-6 transition-colors hover:border-lma-gold/30"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Badge variant="outline">{news.type}</Badge>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground lg:text-2xl">
                      {news.title}
                    </h3>
                    <p className="mt-2 text-base text-foreground/80">{news.description}</p>
                  </div>
                  <div className="text-sm text-foreground/60 sm:text-right">
                    {new Date(news.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
