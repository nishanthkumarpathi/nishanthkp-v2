export interface AboutItem {
  value: string;
  label: string;
  subtext: string;
  icon: 'briefcase' | 'dollarSign' | 'globe' | 'checkCircle' | 'building2' | 'fileBadge' | 'award' | 'bookOpen' | 'users' | 'calendar';
  className: string;
  iconColor: string;
}

export const aboutItems: AboutItem[] = [
  {
    value: '15+',
    label: 'Years of Experience',
    subtext: 'Deep expertise in cybersecurity, governance, and cloud engineering global markets.',
    icon: 'briefcase',
    className: 'md:col-span-2 bg-[#2596be] text-white',
    iconColor: 'text-white',
  },
  {
    value: '$5M+',
    label: 'Security Budget',
    subtext: 'Managed significant budgets for enterprise security tools and compliance.',
    icon: 'dollarSign',
    className: 'md:col-span-2 bg-[#0B1C3E] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '6+',
    label: 'Countries',
    subtext: 'Global work experience across diverse cultural landscapes.',
    icon: 'globe',
    className: 'bg-[#001f3f] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '30+',
    label: 'Projects Delivered',
    subtext: 'Led and delivered complex security and infrastructure projects.',
    icon: 'checkCircle',
    className: 'bg-[#001f3f] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '22+',
    label: 'Org Consultant',
    subtext: 'Consulted for finance, tech, and government sectors.',
    icon: 'building2',
    className: 'bg-[#002a52] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '20+',
    label: 'Certifications',
    subtext: 'Continuously upskilling with CISSP, CISM, and more.',
    icon: 'fileBadge',
    className: 'bg-[#002a52] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '1',
    label: 'Patent',
    subtext: 'Innovated unique solutions in cybersecurity (Pending/Granted).',
    icon: 'award',
    className: 'bg-[#003566] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '5+',
    label: 'Research Papers',
    subtext: 'Contributing to the security community with research.',
    icon: 'bookOpen',
    className: 'bg-[#003566] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '3+',
    label: 'Org Collabs',
    subtext: 'Active collaboration with industry leaders.',
    icon: 'users',
    className: 'md:col-span-2 bg-[#003566] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '200+',
    label: 'Students Trained',
    subtext: 'Delivered comprehensive cybersecurity education programs.',
    icon: 'bookOpen',
    className: 'md:col-span-2 bg-[#0B1C3E] text-white',
    iconColor: 'text-[#2596be]',
  },
  {
    value: '20+',
    label: 'Workshops',
    subtext: 'Organized and conducted hands-on technical seminars.',
    icon: 'calendar',
    className: 'md:col-span-2 bg-[#0B1C3E] text-white',
    iconColor: 'text-[#2596be]',
  },
];
