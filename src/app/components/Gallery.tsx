import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Calendar, Users } from 'lucide-react';
import { motion } from 'motion/react';
import eventSpeaker from '../../assets/event_speaker.png';
import eventPanel from '../../assets/event_panel.png';
import eventWorkshop from '../../assets/event_workshop.png';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: string;
  topics: string[];
  images: string[];
}

// Generate 45 dummy events for testing horizontal scroll
const baseEvents: Event[] = [
  {
    id: '1',
    title: 'Cloud Security Best Practices Summit',
    date: 'November 2024',
    location: 'Dubai, UAE',
    attendees: '200+ Security Professionals',
    topics: ['Multi-Cloud Security', 'Zero Trust Architecture', 'Cloud Posture Management'],
    images: [eventSpeaker, eventPanel, eventWorkshop],
  },
  {
    id: '2',
    title: 'DevSecOps & Cloud Native Security Workshop',
    date: 'September 2024',
    location: 'Riyadh, Saudi Arabia',
    attendees: '150+ Developers & DevOps Engineers',
    topics: ['DevSecOps Pipeline Security', 'Container Security', 'Kubernetes Security'],
    images: [eventWorkshop, eventSpeaker, eventPanel],
  },
  {
    id: '3',
    title: 'Cybersecurity Leadership Panel',
    date: 'August 2024',
    location: 'London, UK',
    attendees: '100+ C-Level Executives',
    topics: ['Governance Risk Compliance', 'AI in Security', 'Boardroom Strategy'],
    images: [eventPanel, eventWorkshop, eventSpeaker],
  },
];

const events: Event[] = Array.from({ length: 15 }).flatMap((_, i) =>
  baseEvents.map((event, j) => ({
    ...event,
    id: `${i}-${j}`,
    title: `${event.title} ${i > 0 ? `(Vol. ${i + 1})` : ''}`, // Differentiate titles slightly
  }))
);

export function Gallery() {
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">Speaking Engagements & Events</h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
            Sharing insights and expertise at international conferences, workshops, and panel discussions
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
              {events.map((event, index) => (
                <div key={event.id} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)] min-w-0">
                  <EventCard event={event} index={index} />
                </div>
              ))}
            </div>
          </div>
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
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Carousel */}
      <div className="relative group h-48 sm:h-56 md:h-64 bg-gray-100">
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
        
        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 text-gray-800"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 text-gray-800"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-xs font-bold text-[#2596be] uppercase tracking-wider mb-3">{event.date}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h3>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {event.topics.map((topic, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-[#2596be] border border-blue-200">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
