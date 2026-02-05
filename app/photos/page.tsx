'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import GalleryGrid from '@/components/GalleryGrid';
import Lightbox from '@/components/Lightbox';
import profile from '@/data/profile';

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof profile.photos)[0] | null>(null);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = profile.photos.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex < profile.photos.length - 1) {
      setSelectedPhoto(profile.photos[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (!selectedPhoto) return;
    const currentIndex = profile.photos.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex > 0) {
      setSelectedPhoto(profile.photos[currentIndex - 1]);
    }
  };

  return (
    <>
      <PageHeader
        title="Photos"
        description="Portraits, plateaux et scènes"
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Photos', href: '/photos' }]}
      />

      <Section>
        <div className="py-16 lg:py-24">
          <GalleryGrid
            photos={profile.photos.filter(photo => photo.category !== 'Presse')}
            filter={true}
            onPhotoClick={setSelectedPhoto}
          />
        </div>
      </Section>

      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          photos={profile.photos}
          onClose={() => setSelectedPhoto(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
}
