interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  image?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  showImages?: boolean;
}

export default function Timeline({ items, showImages = false }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative border-l border-white/10 pl-8 transition-all hover:border-lma-gold/50"
        >
          {/* Year marker */}
          <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-lma-dark transition-colors group-hover:bg-lma-gold" />

          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
            {/* Image */}
            {showImages && item.image && (
              <div className="lg:w-48 flex-shrink-0">
                <div className="aspect-[4/3] overflow-hidden rounded-[2px] bg-lma-dark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                  {item.year}
                </span>
                {item.category && (
                  <span className="text-xs font-bold uppercase tracking-wider text-lma-gold">
                    {item.category}
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-bold text-foreground lg:text-2xl">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="mt-1 text-sm text-foreground/60">{item.subtitle}</p>
              )}

              {item.description && (
                <p className="mt-3 text-base text-foreground/80">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
