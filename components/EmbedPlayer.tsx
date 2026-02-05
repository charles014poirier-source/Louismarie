interface EmbedPlayerProps {
  type: 'youtube' | 'vimeo' | 'spotify' | 'soundcloud';
  videoId?: string;
  url?: string;
  title?: string;
}

export default function EmbedPlayer({ type, videoId, url, title }: EmbedPlayerProps) {
  if (type === 'youtube' && videoId) {
    return (
      <div className="aspect-video overflow-hidden rounded-[2px]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  if (type === 'vimeo' && videoId) {
    return (
      <div className="aspect-video overflow-hidden rounded-[2px]">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          title={title || 'Vimeo video player'}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  if (type === 'spotify' && url) {
    return (
      <div className="rounded-[2px]">
        <iframe
          src={url}
          title={title || 'Spotify player'}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="h-[352px] w-full rounded-[2px] border-0"
        />
      </div>
    );
  }

  if (type === 'soundcloud' && url) {
    return (
      <div className="rounded-[2px]">
        <iframe
          src={url}
          title={title || 'SoundCloud player'}
          className="h-[166px] w-full rounded-[2px] border-0"
        />
      </div>
    );
  }

  return null;
}
