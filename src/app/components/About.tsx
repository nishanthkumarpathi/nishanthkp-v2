import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Users, Calendar, Briefcase, DollarSign, Globe, CheckCircle, Building2, FileBadge } from 'lucide-react';

export function About() {
  const items = [
    {
      value: '15+',
      label: 'Years of Experience',
      subtext: 'Deep expertise in cybersecurity, governance, and cloud engineering global markets.',
      icon: Briefcase,
      className: 'md:col-span-2 bg-[#2596be] text-white',
      iconColor: 'text-white'
    },
    {
      value: '$5M+',
      label: 'Security Budget',
      subtext: 'Managed significant budgets for enterprise security tools and compliance.',
      icon: DollarSign,
      className: 'md:col-span-2 bg-[#0B1C3E] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '6+',
      label: 'Countries',
      subtext: 'Global work experience across diverse cultural landscapes.',
      icon: Globe,
      className: 'bg-[#001f3f] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '30+',
      label: 'Projects Delivered',
      subtext: 'Led and delivered complex security and infrastructure projects.',
      icon: CheckCircle,
      className: 'bg-[#001f3f] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '22+',
      label: 'Org Consultant',
      subtext: 'Consulted for finance, tech, and government sectors.',
      icon: Building2,
      className: 'bg-[#002a52] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '20+',
      label: 'Certifications',
      subtext: 'Continuously upskilling with CISSP, CISM, and more.',
      icon: FileBadge,
      className: 'bg-[#002a52] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '1',
      label: 'Patent',
      subtext: 'Innovated unique solutions in cybersecurity (Pending/Granted).',
      icon: Award,
      className: 'bg-[#003566] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '5+',
      label: 'Research Papers',
      subtext: 'Contributing to the security community with research.',
      icon: BookOpen,
      className: 'bg-[#003566] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '3+',
      label: 'Org Collabs',
      subtext: 'Active collaboration with industry leaders.',
      icon: Users,
      className: 'md:col-span-2 bg-[#003566] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '200+',
      label: 'Students Trained',
      subtext: 'Delivered comprehensive cybersecurity education programs.',
      icon: BookOpen,
      className: 'md:col-span-2 bg-[#0B1C3E] text-white',
      iconColor: 'text-[#2596be]'
    },
    {
      value: '20+',
      label: 'Workshops',
      subtext: 'Organized and conducted hands-on technical seminars.',
      icon: Calendar,
      className: 'md:col-span-2 bg-[#0B1C3E] text-white',
      iconColor: 'text-[#2596be]'
    },
  ];

  return (
    <section id="about" className="py-8 bg-gray-50 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2">
              What I Bring to the Table
            </h2>
            <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 auto-rows-min">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300 shadow-md hover:shadow-lg ${item.className}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="p-1.5 rounded-md bg-white/10 backdrop-blur-sm">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1 tracking-tight">{item.value}</div>
                  <div className="text-sm font-medium opacity-90 leading-tight mb-1">{item.label}</div>
                  <p className="text-[10px] sm:text-xs opacity-75 leading-relaxed font-light line-clamp-2">
                    {item.subtext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
