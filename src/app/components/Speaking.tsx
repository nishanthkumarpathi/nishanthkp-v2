import { motion } from 'motion/react';
import { GraduationCap, MapPin, Mic } from 'lucide-react';
import { speakingEngagements, type Engagement } from '../data/engagements';
import { SectionHeader } from './SectionHeader';
import { SwipeRail } from './SwipeRail';

const talks = speakingEngagements.filter(
  (e) => e.category === 'speaking' || e.category === 'summit',
);
const workshops = speakingEngagements.filter((e) => e.category === 'workshop');

const summaryStats = [
  { value: `${talks.length + workshops.length}+`, label: 'Sessions Delivered' },
  { value: '7', label: 'Countries' },
  { value: '200+', label: 'Professionals Trained' },
  { value: `${workshops.length}+`, label: 'Workshops' },
];

export function Speaking() {
  if (speakingEngagements.length === 0) return null;

  return (
    <section id="speaking" className="relative py-12 sm:py-20 lg:py-28 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="03 — On Stage"
          title={<>Speaking &amp; <span className="text-gradient-brand">Workshops</span></>}
          className="mb-7 sm:mb-12"
        />

        {/* Summary stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-line bg-line mb-8 sm:mb-14"
        >
          {summaryStats.map((s) => (
            <div key={s.label} className="bg-surface px-4 py-4 sm:px-5 sm:py-6 text-center">
              <div className="font-display text-2xl sm:text-4xl font-light text-content tabular-nums">{s.value}</div>
              <div className="kicker text-[0.55rem] sm:text-[0.58rem] mt-1.5 sm:mt-2 text-faint">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Talks & summits — horizontal rail on mobile/tablet, grid on desktop */}
        {talks.length > 0 && (
          <div className="mb-10 sm:mb-14">
            <h3 className="flex items-center gap-2 font-display text-lg sm:text-2xl font-light text-content mb-5 sm:mb-7">
              <Mic className="text-brand-bright" size={20} /> Talks, Keynotes &amp; Panels
            </h3>
            <SwipeRail
              items={talks}
              getKey={(t) => t.id}
              gridClassName="grid grid-cols-3 gap-6"
              renderItem={(talk, index) => <TalkCard talk={talk} index={index} />}
            />
          </div>
        )}

        {/* Workshops & training — 2-up rail on mobile, grid on desktop */}
        {workshops.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg sm:text-2xl font-light text-content mb-5 sm:mb-7">
              <GraduationCap className="text-brand-bright" size={22} /> Workshops &amp; Training Delivered
            </h3>
            <SwipeRail
              items={workshops}
              getKey={(w) => w.id}
              gridClassName="grid grid-cols-3 gap-3"
              slideClassName="flex-[0_0_88%] sm:flex-[0_0_48%]"
              renderItem={(w) => (
                <div className="flex items-start gap-3 rounded-xl p-4 border border-line bg-surface hover:border-brand-bright/40 hover:bg-surface-3 transition-colors">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand-bright flex-shrink-0">
                    <GraduationCap size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-content leading-snug">{w.title}</p>
                    {(w.organization || w.year) && (
                      <p className="text-xs text-faint mt-1 font-mono">
                        {[w.organization, w.year].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                </div>
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function TalkCard({ talk, index }: { talk: Engagement; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.07, 0.3) }}
      className="group flex flex-col h-full rounded-2xl overflow-hidden border border-line bg-surface hover:border-brand-bright/40 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-surface-2">
        <img
          src={talk.image}
          alt={talk.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
        {talk.role && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-page/80 backdrop-blur text-brand-bright text-xs font-semibold border border-line">
            {talk.role}
          </span>
        )}
        {talk.year && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brand-strong text-white text-xs font-semibold">
            {talk.year}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="font-medium text-content leading-snug mb-2">{talk.title}</h4>
        {talk.description && (
          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">{talk.description}</p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-faint">
          {talk.organization && <span className="text-muted font-medium">{talk.organization}</span>}
          {talk.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} /> {talk.location}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
