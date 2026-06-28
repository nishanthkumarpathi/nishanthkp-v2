import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { engagements, categoryMeta } from '../data/engagements';
import { SectionHeader } from './SectionHeader';

interface GalleryProps {
  onViewFullGallery?: () => void;
}

export function Gallery({ onViewFullGallery }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="relative py-12 sm:py-20 lg:py-28 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-7 sm:mb-12">
          <SectionHeader
            kicker="08 — Archive"
            title="In the Field"
            align="left"
          />
          <div className="hidden sm:flex gap-2 flex-shrink-0">
            <button
              onClick={scrollPrev}
              className="p-2.5 rounded-full border border-line text-muted hover:text-content hover:border-brand-bright transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="p-2.5 rounded-full border border-line text-muted hover:text-content hover:border-brand-bright transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {engagements.map((item, index) => (
              <div
                key={item.id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-line bg-surface h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-page/80 backdrop-blur text-brand-bright text-[10px] font-semibold border border-line">
                      {categoryMeta[item.category].label}
                    </span>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-sm font-medium text-content leading-snug">{item.title}</h3>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {onViewFullGallery && (
          <div className="text-center mt-10">
            <button
              onClick={onViewFullGallery}
              className="group inline-flex items-center px-6 py-3 rounded-lg border border-line-strong text-content font-medium text-sm hover:bg-surface transition-colors"
            >
              View the full gallery
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
