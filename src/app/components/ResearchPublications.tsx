import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const stats = [
  {
    value: '1',
    label: 'Patent',
    icon: Award,
  },
  {
    value: '6+',
    label: 'Published Research Papers',
    icon: BookOpen,
  },
  {
    value: '10+',
    label: 'Students Mentored',
    icon: GraduationCap,
  },
];

export function ResearchPublications() {
  return (
    <section id="research" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
            Research, Publications & Mentorship
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Contributing to cybersecurity knowledge through research, patents, publications, and mentoring the next generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#001f3f] rounded-xl p-6 sm:p-8 lg:p-10 text-center text-white flex flex-col items-center justify-center hover:bg-[#002a52] transition-colors min-h-[160px] sm:min-h-[180px] lg:min-h-[220px]"
            >
              <div className="mb-3 sm:mb-4 text-[#2596be]">
                <stat.icon size={24} strokeWidth={1.5} className="sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
