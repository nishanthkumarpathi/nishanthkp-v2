import { motion } from 'motion/react';
import {
  Award, BookOpen, Users, Calendar, Briefcase, DollarSign,
  Globe, CheckCircle, Building2, FileBadge,
} from 'lucide-react';
import { aboutItems, type AboutItem } from '../data/about';
import { SectionHeader } from './SectionHeader';
import { useCountUp } from '../utils/useCountUp';

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
    <section id="about" className="relative py-12 sm:py-20 lg:py-28 bg-surface-2 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="01 — Track Record"
          title={<>Leadership, <span className="text-gradient-brand">by the numbers</span></>}
          className="mb-7 sm:mb-14"
        />

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-line bg-line">
          {aboutItems.map((item, index) => (
            <MetricCell key={index} item={item} index={index} />
          ))}
        </dl>
      </div>
    </section>
  );
}

function MetricCell({ item, index }: { item: AboutItem; index: number }) {
  const Icon = iconMap[item.icon];
  const { ref, display } = useCountUp(item.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.5 }}
      className={`group relative bg-surface p-4 sm:p-6 lg:p-7 flex flex-col justify-between transition-colors hover:bg-surface-3 ${
        item.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-4 sm:mb-6">
        <span className="kicker text-[0.55rem] sm:text-[0.6rem] text-faint leading-tight">{item.label}</span>
        <Icon className="text-brand-bright/70 group-hover:text-brand-bright transition-colors flex-shrink-0" size={16} strokeWidth={1.5} />
      </div>
      <div
        ref={ref}
        className={`font-display font-light tracking-tight text-content tabular-nums ${
          item.featured
            ? 'text-4xl sm:text-5xl lg:text-7xl'
            : 'text-3xl sm:text-4xl lg:text-5xl'
        }`}
      >
        {display}
      </div>
      {item.featured && (
        <span className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-brand-bright to-transparent" aria-hidden />
      )}
    </motion.div>
  );
}
