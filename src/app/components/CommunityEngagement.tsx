import React from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Award } from 'lucide-react';

const stats = [
  {
    value: '3+',
    label: 'Organizations',
    subtext: 'Active collaboration with industry-leading organizations',
    icon: Users,
  },
  {
    value: '200+',
    label: 'Students Trained',
    subtext: 'Delivered comprehensive cybersecurity education',
    icon: BookOpen,
  },
  {
    value: '20+',
    label: 'Workshops',
    subtext: 'Organized hands-on training sessions and seminars',
    icon: Award,
  },
];

export function CommunityEngagement() {
  return (
    <section id="community" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
            Community Engagement & Social Impact
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Committed to giving back through education, mentorship, and knowledge sharing to build a stronger cybersecurity community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#001f3f] rounded-xl p-6 sm:p-8 lg:p-10 text-center text-white flex flex-col items-center justify-center hover:bg-[#002a52] transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2596be]/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-[#2596be]">
                <stat.icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-base sm:text-lg font-medium mb-2 sm:mb-4">{stat.label}</div>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xs">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
