import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href: string;
  category?: string;
}

export default function Card({ title, subtitle, description, image, href, category }: CardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-[2px] border border-white/5 transition-all hover:border-lma-gold/30"
    >
      {/* Image */}
      {image && (
        <div className="aspect-[4/3] overflow-hidden bg-lma-dark">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {category && (
          <span className="mb-3 text-xs font-bold uppercase tracking-wider text-lma-gold">
            {category}
          </span>
        )}

        <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-lma-gold lg:text-2xl">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm text-foreground/60">{subtitle}</p>
        )}

        {description && (
          <p className="mt-4 flex-1 text-base text-foreground/80">{description}</p>
        )}

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/60 transition-colors group-hover:text-lma-gold">
          En savoir plus
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
