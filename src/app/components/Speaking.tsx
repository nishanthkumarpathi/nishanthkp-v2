import { motion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';
import { speakingEngagements, type Engagement } from '../data/engagements';

const talks = speakingEngagements.filter(
  (e) => e.category === 'speaking' || e.category === 'summit',
);
const workshops = speakingEngagements.filter((e) => e.category === 'workshop');

export function Speaking() {
  if (speakingEngagements.length === 0) return null;

  return (
    <section id="speaking" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
            Speaking &amp; Workshops
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Talks & summits */}
        {talks.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talks.map((talk, index) => (
                <TalkCard key={talk.id} talk={talk} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Workshops & training */}
        {workshops.length > 0 && (
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
              <GraduationCap className="text-[#2596be]" size={22} /> Workshops &amp; Training Delivered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {workshops.map((w, index) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.04, 0.3) }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-[#2596be]/30 hover:shadow-sm transition-all"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#2596be]/10 text-[#2596be] flex-shrink-0">
                    <GraduationCap size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 leading-snug">{w.title}</p>
                    {(w.organization || w.year) && (
                      <p className="text-xs text-[#6C757D] mt-1">
                        {[w.organization, w.year].filter(Boolean).join(' • ')}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TalkCard({ talk, index }: { talk: Engagement; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.08, 0.3) }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img
          src={talk.image}
          alt={talk.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {talk.role && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur text-[#2596be] text-xs font-semibold rounded-full shadow-sm">
            {talk.role}
          </span>
        )}
        {talk.year && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#2596be] text-white text-xs font-semibold rounded-full shadow-sm">
            {talk.year}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-base font-semibold text-gray-900 leading-snug mb-2">{talk.title}</h4>
        {talk.description && (
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {talk.description}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6C757D]">
          {talk.organization && (
            <span className="font-medium text-gray-700">{talk.organization}</span>
          )}
          {talk.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} /> {talk.location}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
