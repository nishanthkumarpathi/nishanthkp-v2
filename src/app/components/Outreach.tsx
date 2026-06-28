import { HeartHandshake, Users } from 'lucide-react';
import { outreach, type Engagement } from '../data/engagements';
import { SectionHeader } from './SectionHeader';
import { SwipeRail } from './SwipeRail';

export function Outreach() {
  if (outreach.length === 0) return null;

  return (
    <section id="outreach" className="relative py-12 sm:py-20 lg:py-28 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="05 — Giving Back"
          title={<>Community &amp; <span className="text-gradient-brand">Outreach</span></>}
          className="mb-7 sm:mb-12"
        />

        <SwipeRail
          items={outreach}
          getKey={(i) => i.id}
          gridClassName="grid grid-cols-3 gap-6"
          renderItem={(item) => <OutreachCard item={item} />}
        />
      </div>
    </section>
  );
}

function OutreachCard({ item }: { item: Engagement }) {
  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-line bg-surface hover:border-brand-bright/40 transition-all duration-300 h-full">
      <div className="relative h-44 sm:h-48 overflow-hidden bg-surface-2">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-page/80 backdrop-blur px-2.5 py-1 text-xs font-semibold text-brand-bright border border-line">
          <HeartHandshake size={13} /> {item.role ?? 'Volunteer'}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-medium text-content leading-snug mb-2">{item.title}</h3>
        {item.description && (
          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">{item.description}</p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-faint">
          {item.organization && (
            <span className="inline-flex items-center gap-1 text-muted font-medium">
              <Users size={12} /> {item.organization}
            </span>
          )}
          {item.year && <span className="font-mono">{item.year}</span>}
        </div>
      </div>
    </article>
  );
}
