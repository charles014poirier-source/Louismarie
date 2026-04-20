'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate-in'
  | 'blur-in'
  | 'scale-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: AnimationType;
  duration?: number;
}

const animationClasses: Record<
  AnimationType,
  { from: string; to: string }
> = {
  'fade-up': {
    from: 'opacity-0 translate-y-12',
    to: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    from: 'opacity-0 -translate-y-12',
    to: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    from: 'opacity-0 translate-x-12',
    to: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    from: 'opacity-0 -translate-x-12',
    to: 'opacity-100 translate-x-0',
  },
  'zoom-in': {
    from: 'opacity-0 scale-95',
    to: 'opacity-100 scale-100',
  },
  'zoom-out': {
    from: 'opacity-0 scale-110',
    to: 'opacity-100 scale-100',
  },
  'rotate-in': {
    from: 'opacity-0 rotate-3 scale-95',
    to: 'opacity-100 rotate-0 scale-100',
  },
  'blur-in': {
    from: 'opacity-0 blur-md translate-y-8',
    to: 'opacity-100 blur-0 translate-y-0',
  },
  'scale-up': {
    from: 'opacity-0 scale-75',
    to: 'opacity-100 scale-100',
  },
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  animation = 'fade-up',
  duration = 1000,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const classes = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        `transition-all duration-[${duration}ms] ease-out`,
        isVisible ? classes.to : classes.from,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
