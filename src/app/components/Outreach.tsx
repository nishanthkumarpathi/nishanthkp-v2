import { motion } from 'motion/react';
import { HeartHandshake, Users } from 'lucide-react';
import { outreach } from '../data/engagements';

export function Outreach() {
  if (outreach.length === 0) return null;

  return (
    <section id="outreach" className="py-12 sm:py-16 lg:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
            Community &amp; Outreach
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
            Giving back through volunteering, community forums, and service initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {outreach.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.1, 0.3) }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur text-[#2596be] text-xs font-semibold rounded-full shadow-sm">
                  <HeartHandshake size={13} /> {item.role ?? 'Volunteer'}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                )}
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6C757D]">
                  {item.organization && (
                    <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                      <Users size={12} /> {item.organization}
                    </span>
                  )}
                  {item.year && <span>{item.year}</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
