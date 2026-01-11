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
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">Speaking Engagements & Events</h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
            Sharing insights and expertise at international conferences, workshops, and panel discussions
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-12 pt-4 px-4 sm:px-6 lg:px-8 space-x-8 snap-x snap-mandatory scrollbar-hide">
          {events.map((event, index) => (
            <div key={event.id} className="snap-center shrink-0 w-[85vw] sm:w-[500px]">
              <EventCard event={event} index={index} />
            </div>
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
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Carousel */}
      <div className="relative group h-64 bg-gray-100">
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
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-500">
            <Calendar size={18} className="mr-3 text-gray-400" />
            <span className="text-sm font-medium">{event.date} • {event.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users size={18} className="mr-3 text-gray-400" />
            <span className="text-sm font-medium">{event.attendees}</span>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-sm font-bold text-gray-800 mb-3">Topics Presented:</p>
          <div className="flex flex-wrap gap-2">
            {event.topics.map((topic, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2596be] text-white shadow-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
