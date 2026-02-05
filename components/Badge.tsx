interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'outline';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-lma-dark text-foreground',
    gold: 'bg-lma-gold/20 text-lma-gold',
    outline: 'border border-lma-gold/30 text-lma-gold',
  };

  return (
    <span
      className={`inline-block rounded-[2px] px-3 py-1 text-xs font-bold uppercase tracking-wider ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
