'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  url: string;
  category: string;
  title: string;
}

interface LightboxProps {
  photo: Photo | null;
  photos: Photo[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({ photo, photos, onClose, onNext, onPrevious }: LightboxProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll
  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photo]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-foreground transition-colors hover:text-lma-gold"
        aria-label="Close"
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-foreground transition-colors hover:text-lma-gold disabled:opacity-20 disabled:hover:text-foreground"
        aria-label="Previous photo"
      >
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        disabled={currentIndex === photos.length - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-foreground transition-colors hover:text-lma-gold disabled:opacity-20 disabled:hover:text-foreground"
        aria-label="Next photo"
      >
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Image */}
      <div className="relative h-full w-full max-w-7xl p-12">
        <div className="relative h-full w-full">
          <Image
            src={photo.url}
            alt={photo.title}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>

        {/* Caption */}
        <div className="absolute bottom-12 left-12 right-12">
          <p className="text-xs font-bold uppercase tracking-wider text-lma-gold">
            {photo.category}
          </p>
          <p className="mt-1 text-lg text-foreground">{photo.title}</p>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute top-6 left-6 text-xs font-bold uppercase tracking-wider text-foreground/60">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
}
