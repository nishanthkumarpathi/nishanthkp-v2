import { motion } from 'motion/react';
import { Award, BookOpen, Users, Calendar, Briefcase, DollarSign, Globe, CheckCircle, Building2, FileBadge } from 'lucide-react';
import { aboutItems } from '../data/about';

const iconMap = {
  briefcase: Briefcase,
  dollarSign: DollarSign,
  globe: Globe,
  checkCircle: CheckCircle,
  building2: Building2,
  fileBadge: FileBadge,
  award: Award,
  bookOpen: BookOpen,
  users: Users,
  calendar: Calendar,
};

export function About() {
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
            {aboutItems.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
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
                    <Icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={1.5} />
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
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
