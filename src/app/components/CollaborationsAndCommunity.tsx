import { Target, Lightbulb, Users, Handshake } from 'lucide-react';
import { collaborationOrgs, type CollaborationOrg } from '../data/collaborations';
import { SectionHeader } from './SectionHeader';
import { SwipeRail } from './SwipeRail';

const iconMap = {
  target: Target,
  lightbulb: Lightbulb,
  users: Users,
};

export function CollaborationsAndCommunity() {
  return (
    <section id="collaborations-community" className="relative py-14 sm:py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="06 — Partnerships"
          title={<>Collaborations &amp; <span className="text-gradient-brand">Community</span></>}
          intro="Building partnerships through education, mentorship, and knowledge sharing."
          className="mb-10 sm:mb-14"
        />

        <SwipeRail
          items={collaborationOrgs}
          getKey={(_, i) => String(i)}
          gridClassName="grid grid-cols-3 gap-6"
          renderItem={(org) => <CollabCard org={org} />}
        />
      </div>
    </section>
  );
}

function CollabCard({ org }: { org: CollaborationOrg }) {
  const OrgIcon = iconMap[org.icon];
  return (
    <div className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7 hover:border-brand-bright/40 transition-colors overflow-hidden h-full">
      <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-bright to-transparent" aria-hidden />
      <Handshake className="text-brand-bright/60 mb-4" size={22} />
      <h4 className="font-display text-lg sm:text-xl font-light text-content mb-1">{org.name}</h4>
      <p className="text-brand-bright text-sm font-medium mb-5">{org.role}</p>
      <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{org.description}</p>

      <div>
        <div className="flex items-center gap-2 mb-3 text-content font-medium text-sm">
          <OrgIcon size={15} className="text-brand-bright" />
          {org.mentions[0]}
        </div>
        <div className="flex flex-wrap gap-2">
          {org.mentions.slice(1).map((mention, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-surface-2 text-muted text-xs border border-line"
            >
              {mention}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
