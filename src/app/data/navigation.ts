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
  { label: 'Gallery', id: 'gallery' },
  { label: 'Publications', id: 'publications' },
  { label: 'Collaborations', id: 'collaborations-community' },
  { label: 'Blog', id: 'blog', href: 'https://blog.nishanthkp.com/' },
  { label: 'Contact', id: 'contact' },
];

export const footerQuickLinks: FooterLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Publications', href: '#publications' },
  { label: 'Collaborations', href: '#collaborations-community' },
  { label: 'Contact', href: '#contact' },
];

export const externalFooterLinks: ExternalLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Blog', href: 'https://blog.nishanthkp.com' },
  { label: 'Training', href: 'https://training.nishanthkp.com' },
  { label: 'Website', href: 'https://nishanthkp.com' },
];
