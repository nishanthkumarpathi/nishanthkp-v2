import { motion } from 'motion/react';
import { Trophy, MapPin, ExternalLink } from 'lucide-react';
import { awards } from '../data/engagements';

export function Awards() {
  if (awards.length === 0) return null;

  return (
    <section id="awards" className="py-12 sm:py-16 lg:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
            Awards &amp; Recognition
          </h2>
          <div className="w-24 h-1 bg-[#C8901F] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
            Honours recognizing impact and contributions to the cybersecurity community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <motion.article
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.1, 0.3) }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#C8901F]/20 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C8901F]"></div>

              {/* Photo */}
              <div className="relative h-52 bg-gray-100">
                <img
                  src={award.image}
                  alt={award.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#FBF3E0] text-[#C8901F] flex-shrink-0">
                    <Trophy size={18} />
                  </span>
                  {award.year && (
                    <span className="px-2.5 py-1 bg-[#FBF3E0] text-[#C8901F] text-xs font-semibold rounded-full">
                      {award.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                  {award.title}
                </h3>

                {award.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {award.description}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6C757D]">
                  {award.organization && (
                    <span className="font-medium text-gray-700">{award.organization}</span>
                  )}
                  {award.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {award.location}
                    </span>
                  )}
                </div>

                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm font-medium text-[#C8901F] hover:underline"
                  >
                    <ExternalLink size={14} className="mr-1" /> Learn more
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
