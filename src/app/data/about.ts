export interface AboutItem {
  value: string;
  label: string;
  icon: 'briefcase' | 'dollarSign' | 'globe' | 'checkCircle' | 'building2' | 'fileBadge' | 'award' | 'bookOpen' | 'users' | 'calendar';
  /** Anchor metrics get oversized, span-2 treatment on the metrics wall. */
  featured?: boolean;
}

export const aboutItems: AboutItem[] = [
  {
    value: '15+',
    label: 'Years of Experience',
    icon: 'briefcase',
    featured: true,
  },
  {
    value: '$5M+',
    label: 'Security Budget Managed',
    icon: 'dollarSign',
    featured: true,
  },
  {
    value: '1000+',
    label: 'Professionals Trained',
    icon: 'bookOpen',
    featured: true,
  },
  {
    value: '7+',
    label: 'Countries',
    icon: 'globe',
  },
  {
    value: '30+',
    label: 'Projects Delivered',
    icon: 'checkCircle',
  },
  {
    value: '22+',
    label: 'Organizations Advised',
    icon: 'building2',
  },
  {
    value: '20+',
    label: 'Certifications',
    icon: 'fileBadge',
  },
  {
    value: '20+',
    label: 'Workshops Delivered',
    icon: 'calendar',
  },
  {
    value: '11+',
    label: 'Research Papers',
    icon: 'bookOpen',
  },
  {
    value: '1',
    label: 'Patent',
    icon: 'award',
  },
];
