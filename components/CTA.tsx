import Link from 'next/link';

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function CTA({ href, children, variant = 'primary', className = '' }: CTAProps) {
  const variants = {
    primary: 'bg-lma-gold text-background hover:bg-lma-gold/90',
    secondary: 'bg-foreground text-background hover:bg-foreground/90',
    outline: 'border-2 border-white/60 text-white hover:border-white hover:bg-white/10 hover:text-white',
  };

  if (variant === 'outline') {
    return (
      <Link
        href={href}
        className={`inline-block rounded-full border px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
