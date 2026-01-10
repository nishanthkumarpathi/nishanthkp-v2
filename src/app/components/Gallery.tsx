import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import eventSpeaker from '../../assets/event_speaker.png';
import eventPanel from '../../assets/event_panel.png';
import eventWorkshop from '../../assets/event_workshop.png';

interface Event {
  id: string;
  title: string;
  date: string;
  topics: string[];
  images: string[];
}

const events: Event[] = [
  {
    id: '1',
    title: 'Keynote: The Future of Cloud Security',
    date: 'Dec 2024',
    topics: ['Cloud Security', 'AI', 'Future Tech'],
    images: [eventSpeaker, eventPanel, eventWorkshop], // Rotating same images for demo
  },
  {
    id: '2',
    title: 'Panel: DevSecOps at Scale',
    date: 'Oct 2024',
    topics: ['DevSecOps', 'Culture', 'Automation'],
    images: [eventPanel, eventWorkshop, eventSpeaker],
  },
  {
    id: '3',
    title: 'Workshop: Chaos Engineering 101',
    date: 'Aug 2024',
    topics: ['Chaos Engineering', 'Resilience', 'Hands-on'],
    images: [eventWorkshop, eventSpeaker, eventPanel],
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">Speaking Gallery</h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highlights from conferences, workshops, and panels where I've shared insights on security and engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Carousel */}
      <div className="relative group h-48 sm:h-56 bg-gray-100">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {event.images.map((img, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 relative">
                <img
                  src={img}
                  alt={`${event.title} - ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons - Show on hover */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} className="text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Next image"
        >
          <ChevronRight size={20} className="text-gray-800" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
           <span className="text-xs font-semibold text-[#2596be] uppercase tracking-wider">{event.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mt-4">
            {event.topics.map((topic, i) => (
              <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                <Tag size={12} className="mr-1" />
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
