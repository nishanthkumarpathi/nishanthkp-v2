import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { galleryPhotos, type Photo } from '../data/galleryPhotos';

interface GalleryProps {
  onViewFullGallery?: () => void;
}

export function Gallery({ onViewFullGallery }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">Gallery</h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
            A visual journey through awards, summits, workshops, and community moments
          </p>
        </motion.div>

        {/* Carousel Container with Navigation */}
        <div className="relative px-8 sm:px-12 md:px-16 lg:px-20">
          {/* Left Navigation Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-lg border-2 border-gray-300 transition-all hover:border-[#2596be]"
            aria-label="Previous event"
          >
            <ChevronLeft size={28} className="text-gray-800" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-lg border-2 border-gray-300 transition-all hover:border-[#2596be]"
            aria-label="Next event"
          >
            <ChevronRight size={28} className="text-gray-800" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {galleryPhotos.map((photo, index) => (
                <div key={photo.id} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)] min-w-0">
                  <PhotoCard photo={photo} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Gallery Link */}
        {onViewFullGallery && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={onViewFullGallery}
              className="inline-flex items-center text-[#2596be] hover:text-[#1a7a9e] transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              View Full Gallery Here
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Photo */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gray-100">
        <img
          src={photo.src}
          alt={photo.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-gray-900 leading-tight">{photo.title}</h3>
      </div>
    </motion.div>
  );
}
