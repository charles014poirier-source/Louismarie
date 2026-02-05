'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import profile from '@/data/profile';

const navigation = [
  { name: 'Photos', href: '/photos' },
  { name: 'Cinéma', href: '/cinema' },
  { name: 'Théâtre', href: '/theatre' },
  { name: 'Musique', href: '/musique' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className={`font-display text-xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-transparent hover:text-lma-gold/50' : 'text-foreground hover:text-lma-gold'
            }`}
          >
            {profile.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-lma-gold' : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex">
            <Link
              href="/infos"
              className="rounded-full border border-lma-gold/30 px-6 py-2 text-sm font-bold uppercase tracking-wider text-lma-gold transition-all hover:border-lma-gold hover:bg-lma-gold hover:text-background"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-24 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex flex-col gap-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-display font-bold uppercase tracking-tight transition-colors ${
                      isActive ? 'text-lma-gold' : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/infos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold uppercase tracking-tight text-lma-gold"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
