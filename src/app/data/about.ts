export interface AboutItem {
  value: string;
  label: string;
  subtext: string;
  icon: 'briefcase' | 'dollarSign' | 'globe' | 'checkCircle' | 'building2' | 'fileBadge' | 'award' | 'bookOpen' | 'users' | 'calendar';
  /** Anchor metrics get oversized, span-2 treatment on the metrics wall. */
  featured?: boolean;
}

export const aboutItems: AboutItem[] = [
  {
    value: '15+',
    label: 'Years of Experience',
    subtext: 'Deep expertise in cybersecurity, governance, and cloud engineering across global markets.',
    icon: 'briefcase',
    featured: true,
  },
  {
    value: '$5M+',
    label: 'Security Budget Managed',
    subtext: 'Owned significant budgets for enterprise security tooling and compliance.',
    icon: 'dollarSign',
    featured: true,
  },
  {
    value: '200+',
    label: 'Professionals Trained',
    subtext: 'Delivered comprehensive cybersecurity and cloud education programs.',
    icon: 'bookOpen',
    featured: true,
  },
  {
    value: '6+',
    label: 'Countries',
    subtext: 'Global work experience across diverse cultural landscapes.',
    icon: 'globe',
  },
  {
    value: '30+',
    label: 'Projects Delivered',
    subtext: 'Led and delivered complex security and infrastructure programs.',
    icon: 'checkCircle',
  },
  {
    value: '22+',
    label: 'Organizations Advised',
    subtext: 'Consulted for finance, tech, and government sectors.',
    icon: 'building2',
  },
  {
    value: '20+',
    label: 'Certifications',
    subtext: 'Continuously upskilling — CISSP, CISM, and more.',
    icon: 'fileBadge',
  },
  {
    value: '20+',
    label: 'Workshops Delivered',
    subtext: 'Organized and led hands-on technical seminars.',
    icon: 'calendar',
  },
  {
    value: '5+',
    label: 'Research Papers',
    subtext: 'Contributing to the security community through research.',
    icon: 'bookOpen',
  },
  {
    value: '1',
    label: 'Patent',
    subtext: 'Innovated a unique solution in cybersecurity (filed).',
    icon: 'award',
  },
];
