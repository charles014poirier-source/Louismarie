'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  url: string;
  category: string;
  title: string;
}

interface GalleryGridProps {
  photos: Photo[];
  filter?: boolean;
  onPhotoClick?: (photo: Photo) => void;
}

export default function GalleryGrid({ photos, filter = false, onPhotoClick }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visiblePhotos, setVisiblePhotos] = useState<Set<number>>(new Set());

  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Map<number, HTMLElement>>(new Map());

  const categories = ['All', ...Array.from(new Set(photos.map((photo) => photo.category)))];

  const filteredPhotos =
    selectedCategory === 'All' ? photos : photos.filter((photo) => photo.category === selectedCategory);

  // Create IntersectionObserver once, then observe already-mounted elements.
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const photoId = Number(entry.target.getAttribute('data-photo-id'));

          setVisiblePhotos((prev) => {
            const next = new Set(prev);
            next.add(photoId);
            return next;
          });

          observerRef.current?.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe everything that may already be rendered
    elementsRef.current.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // When the filtered list changes, observe new elements that appear.
  useEffect(() => {
    if (!observerRef.current) return;

    filteredPhotos.forEach((p) => {
      const el = elementsRef.current.get(p.id);
      if (el) observerRef.current?.observe(el);
    });
  }, [filteredPhotos]);

  const observePhoto = (photoId: number) => (element: HTMLElement | null) => {
    if (!element) {
      elementsRef.current.delete(photoId);
      return;
    }

    elementsRef.current.set(photoId, element);

    if (observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return (
    <div>
      {/* Filter */}
      {filter && (
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === category
                  ? 'border-lma-gold bg-lma-gold text-background'
                  : 'border-white/10 text-foreground/60 hover:border-lma-gold/50 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPhotos.map((photo, index) => (
          <button
            key={photo.id}
            ref={observePhoto(photo.id)}
            data-photo-id={photo.id}
            onClick={() => onPhotoClick?.(photo)}
            className={`group relative aspect-[4/5] overflow-hidden rounded-[2px] bg-lma-dark cursor-pointer text-left transition-all duration-1000 ${
              visiblePhotos.has(photo.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              // If you ever hit Cloudflare/Next image issues, uncomment:
              // unoptimized
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-bold uppercase tracking-wider text-lma-gold">{photo.category}</p>
              <p className="mt-1 text-sm text-foreground">{photo.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
