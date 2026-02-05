import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className = '', id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`border-b border-white/5 ${className}`}>
      <div className={`${fullWidth ? '' : 'mx-auto max-w-7xl px-6 lg:px-8'}`}>
        {children}
      </div>
    </section>
  );
}
