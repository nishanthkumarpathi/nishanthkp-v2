import { motion } from 'motion/react';
import { Trophy, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { awards, type Engagement } from '../data/engagements';
import { SectionHeader } from './SectionHeader';
import { SwipeRail } from './SwipeRail';

export function Awards() {
  if (awards.length === 0) return null;

  const [spotlight, ...rest] = awards;

  return (
    <section id="awards" className="relative py-12 sm:py-20 lg:py-28 bg-page overflow-hidden">
      {/* Warm award glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[40vh] w-[70vw] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--award-soft), transparent)' }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="02 — Recognition"
          title={<>Awards &amp; <span className="font-display italic text-award">Honours</span></>}
          intro="Industry recognition for impact and contributions to the cybersecurity community."
          className="mb-7 sm:mb-12"
        />

        {/* Spotlight award */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-award/30 bg-surface mb-6"
          style={{ boxShadow: '0 20px 60px -30px var(--award-soft)' }}
        >
          <div className="relative h-36 sm:h-64 md:h-auto overflow-hidden">
            <img
              src={spotlight.image}
              alt={spotlight.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/20 md:to-surface" />
          </div>

          <div className="relative p-5 sm:p-10 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-award-soft px-3 py-1 mb-3 sm:mb-5 text-xs font-semibold text-award">
              <Sparkles size={13} /> Featured Recognition
            </span>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-award-soft text-award">
                <Trophy size={18} />
              </span>
              {spotlight.year && (
                <span className="font-mono text-sm text-award">{spotlight.year}</span>
              )}
            </div>
            <h3 className="font-display text-xl sm:text-3xl font-light text-content leading-tight mb-2 sm:mb-3">
              {spotlight.title}
            </h3>
            {spotlight.description && (
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-4 sm:mb-5 line-clamp-3 sm:line-clamp-none">{spotlight.description}</p>
            )}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-faint">
              {spotlight.organization && (
                <span className="font-medium text-content">{spotlight.organization}</span>
              )}
              {spotlight.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin size={13} /> {spotlight.location}
                </span>
              )}
            </div>
            {spotlight.link && (
              <a
                href={spotlight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-sm font-medium text-award hover:underline"
              >
                <ExternalLink size={14} className="mr-1.5" /> Learn more
              </a>
            )}
          </div>
        </motion.article>

        {/* Remaining awards — rail on mobile/tablet, grid on desktop */}
        {rest.length > 0 && (
          <SwipeRail
            items={rest}
            getKey={(a) => a.id}
            gridClassName="grid grid-cols-2 gap-6"
            slideClassName="flex-[0_0_90%] sm:flex-[0_0_60%]"
            renderItem={(award) => <SecondaryAward award={award} />}
          />
        )}
      </div>
    </section>
  );
}

function SecondaryAward({ award }: { award: Engagement }) {
  return (
    <article className="group relative flex gap-4 sm:gap-5 rounded-2xl overflow-hidden border border-line bg-surface p-4 sm:p-5 hover:border-award/40 transition-colors h-full">
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 rounded-xl overflow-hidden bg-surface-2">
        <img
          src={award.image}
          alt={award.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="min-w-0 flex flex-col">
        <div className="flex items-center gap-2 mb-1.5">
          <Trophy size={14} className="text-award flex-shrink-0" />
          {award.year && <span className="font-mono text-xs text-award">{award.year}</span>}
        </div>
        <h3 className="font-medium text-content leading-snug mb-1.5">{award.title}</h3>
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-faint">
          {award.organization && <span className="text-muted">{award.organization}</span>}
          {award.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={11} /> {award.location}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
