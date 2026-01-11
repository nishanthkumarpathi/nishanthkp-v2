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
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Community Engagement & Social Impact
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Committed to giving back through education, mentorship, and knowledge sharing to build a stronger cybersecurity community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#001f3f] rounded-xl p-10 text-center text-white flex flex-col items-center justify-center hover:bg-[#002a52] transition-colors"
            >
              <div className="w-12 h-12 bg-[#2596be]/20 rounded-full flex items-center justify-center mb-6 text-[#2596be]">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-medium mb-4">{stat.label}</div>
              <p className="text-gray-300 text-sm max-w-xs">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
