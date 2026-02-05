import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
  children?: ReactNode;
}

export default function PageHeader({ title, description, breadcrumb, children }: PageHeaderProps) {
  return (
    <header className="border-b border-white/5 pt-32 pb-16 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="mb-8 flex items-center gap-2 text-xs">
            {breadcrumb.map((item, index) => (
              <div key={item.href} className="flex items-center gap-2">
                <a
                  href={item.href}
                  className="font-bold uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-lma-gold"
                >
                  {item.label}
                </a>
                {index < breadcrumb.length - 1 && (
                  <span className="text-foreground/20">/</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-display text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-6 max-w-2xl text-xl font-light text-foreground/60 lg:text-2xl">
            {description}
          </p>
        )}

        {/* Children */}
        {children}
      </div>
    </header>
  );
}
