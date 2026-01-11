import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Globe, Award, Building2, UserCheck } from 'lucide-react';

const stats = [
  {
    value: '15+',
    label: 'Years of Professional Experience',
    icon: Calendar,
    color: 'bg-blue-500',
  },
  {
    value: '6+',
    label: 'Countries',
    icon: Globe,
    color: 'bg-pink-500',
  },
  {
    value: '30+',
    label: 'Projects Delivered',
    icon: UserCheck, // Using UserCheck as a proxy for projects/delivery
    color: 'bg-green-500',
  },
  {
    value: '15',
    label: 'Organizations as Consultant',
    icon: Building2,
    color: 'bg-orange-500',
  },
  {
    value: '20+',
    label: 'Professional Certifications',
    icon: Award,
    color: 'bg-purple-500',
  },
];

export function ProfessionalExperience() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            What I Bring to the Table
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            15+ years of driving security excellence across global organizations with measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-sm`}>
                <stat.icon size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
