export interface NavItem {
  label: string;
  id: string;
  href?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export const headerNavItems: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Awards', id: 'awards' },
  { label: 'Speaking', id: 'speaking' },
  { label: 'Publications', id: 'publications' },
  { label: 'Community', id: 'outreach' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Blog', id: 'blog', href: 'https://blog.nishanthkp.com/' },
  { label: 'Contact', id: 'contact' },
];

export const footerQuickLinks: FooterLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Awards', href: '#awards' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Publications', href: '#publications' },
  { label: 'Community', href: '#outreach' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const externalFooterLinks: ExternalLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Blog', href: 'https://blog.nishanthkp.com' },
  { label: 'Training', href: 'https://training.nishanthkp.com' },
  { label: 'Website', href: 'https://nishanthkp.com' },
];

/**
 * In-page section order, top → bottom. Single source of truth for the
 * floating prev/next `SectionNavigation` so it can never drift out of sync
 * with the actual page layout. Excludes external links (e.g. Blog).
 */
export const sectionOrder: string[] = [
  'hero',
  'about',
  'awards',
  'speaking',
  'publications',
  'outreach',
  'collaborations-community',
  'gallery',
  'contact',
];
