import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Users, Calendar } from 'lucide-react';

export function About() {
  const stats = [
    { value: '15+', label: 'Years of Professional Experience', highlighted: true },
    { value: '$5M+', label: 'Cyber Security & Governance Budget', highlighted: true },
    { value: '6+', label: 'Countries', highlighted: false },
    { value: '30+', label: 'Projects Delivered', highlighted: false },
    { value: '15+', label: 'Organizations as Consultant', highlighted: false },
    { value: '20+', label: 'Professional Certifications', highlighted: false },
  ];

  const additionalStats = [
    { value: '1', label: 'Patent', icon: Award },
    { value: '6+', label: 'Published Research Papers', icon: BookOpen },
    { value: '10+', label: 'Students Mentored', icon: GraduationCap },
    { value: '3+', label: 'Organizations', subtext: 'Active collaboration with industry-leading organizations', icon: Users },
    { value: '200+', label: 'Students Trained', subtext: 'Delivered comprehensive cybersecurity education', icon: BookOpen },
    { value: '20+', label: 'Workshops', subtext: 'Organized hands-on training sessions and seminars', icon: Calendar },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
            What I Bring to the Table
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto mb-8 sm:mb-10 rounded-full"></div>
          
          {/* Main Stats Bar */}
          <div className="bg-[#0B1C3E] text-white py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl shadow-xl mb-8 sm:mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className={`text-3xl sm:text-4xl font-bold ${stat.highlighted ? 'text-[#2596be]' : 'text-white'}`}>
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-300 mt-2 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {additionalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#001f3f] rounded-xl p-4 sm:p-5 text-center text-white flex flex-col items-center justify-center hover:bg-[#002a52] transition-colors min-h-[120px] sm:min-h-[140px]"
              >
                <div className="mb-2 sm:mb-3 text-[#2596be]">
                  <stat.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs font-medium text-gray-300">{stat.label}</div>
                {stat.subtext && (
                  <p className="text-[8px] sm:text-[10px] text-gray-400 mt-1 leading-tight">{stat.subtext}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
