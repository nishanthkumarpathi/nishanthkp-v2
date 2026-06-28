import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  engagements,
  categoryMeta,
  type EngagementCategory,
} from '../data/engagements';

interface GalleryPageProps {
  onBack: () => void;
}

type Filter = 'all' | EngagementCategory;

const categoryOrder: EngagementCategory[] = [
  'award',
  'speaking',
  'summit',
  'workshop',
  'volunteer',
  'committee',
];
const presentCategories = categoryOrder.filter((c) =>
  engagements.some((e) => e.category === c),
);

export function GalleryPage({ onBack }: GalleryPageProps) {
  const [filter, setFilter] = useState<Filter>('all');
  const [index, setIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const items = useMemo(
    () => (filter === 'all' ? engagements : engagements.filter((e) => e.category === filter)),
    [filter],
  );

  const current = index !== null ? items[index] : null;

  const close = useCallback(() => setIndex(null), []);
  const showPrev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const showNext = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, close, showPrev, showNext]);

  const selectFilter = (f: Filter) => {
    setFilter(f);
    setIndex(null);
  };

  return (
    <div className="min-h-screen bg-page pt-20">
      {/* Sub-header */}
      <div className="bg-page/80 backdrop-blur-md border-b border-line sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-brand-bright hover:text-content transition-colors font-medium text-sm"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="kicker block mb-4">Visual Archive</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-content">Gallery</h1>
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <FilterChip label="All" active={filter === 'all'} onClick={() => selectFilter('all')} />
          {presentCategories.map((c) => (
            <FilterChip
              key={c}
              label={categoryMeta[c].plural}
              active={filter === c}
              onClick={() => selectFilter(c)}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.3) }}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View larger: ${item.title}`}
                className="group relative block w-full text-left rounded-xl overflow-hidden border border-line bg-surface hover:border-brand-bright/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-page/80 backdrop-blur text-brand-bright text-[10px] font-semibold border border-line">
                    {categoryMeta[item.category].label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-page/90 via-page/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-content font-medium text-xs sm:text-sm leading-tight">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono">
              {(index ?? 0) + 1} / {items.length}
            </div>

            <button
              ref={closeButtonRef}
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close image viewer"
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors rounded p-1"
            >
              <X size={30} />
            </button>

            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <motion.div
              key={current.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.image}
                alt={current.title}
                decoding="async"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <span className="inline-block mb-2 px-2.5 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold">
                  {categoryMeta[current.category].label}
                </span>
                <h3 className="text-white text-lg font-medium">{current.title}</h3>
                <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-white/70">
                  {current.role && <span>{current.role}</span>}
                  {current.organization && <span>{current.organization}</span>}
                  {current.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {current.location}
                    </span>
                  )}
                  {current.year && <span className="font-mono">{current.year}</span>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
        active
          ? 'bg-brand-strong text-white border-brand'
          : 'bg-surface text-muted border-line hover:border-brand-bright hover:text-content'
      }`}
    >
      {label}
    </button>
  );
}
