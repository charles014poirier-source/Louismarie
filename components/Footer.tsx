import Link from 'next/link';
import profile from '@/data/profile';

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Main CTA */}
        <div className="mb-16 text-center">
          <a
            href={`mailto:${profile.contact.email}`}
            className="font-display text-4xl font-bold text-foreground underline decoration-1 underline-offset-4 transition-all hover:opacity-60 hover:decoration-2 lg:text-6xl"
          >
            {profile.contact.email}
          </a>
        </div>

        {/* Social Links */}
        <div className="mb-16 flex flex-wrap justify-center gap-8">
          {profile.contact.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-lma-gold"
            >
              {social.platform}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Ghost Brand Mark - Centré et réduit */}
      <div className="pointer-events-none overflow-hidden flex justify-center">
        <h1 className="font-display text-[8vw] font-bold text-foreground/[0.02] leading-none">
          LOUIS-MARIE
        </h1>
      </div>
    </footer>
  );
}
