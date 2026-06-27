export interface CollaborationOrg {
  name: string;
  role: string;
  description: string;
  mentions: string[];
  icon: 'target' | 'lightbulb' | 'users';
}

export const collaborationOrgs: CollaborationOrg[] = [
  {
    name: 'FinOps Foundation',
    role: 'Active Contributor',
    description:
      'Contributing to cloud financial management best practices and helping organizations optimize cloud costs while maintaining security standards.',
    mentions: [
      'Global FinOps Community',
      'Community Forums',
      'Best Practice Documentation',
      'Knowledge Sharing',
    ],
    icon: 'target',
  },
  {
    name: 'London School of Economics (LSE)',
    role: 'Mentor',
    description:
      'Mentoring students in cybersecurity, cloud security, and data privacy, guiding them through real-world challenges and career development.',
    mentions: ['Future Security Leaders', '1:1 Mentorship', 'Career Guidance', 'Technical Mentoring'],
    icon: 'lightbulb',
  },
  {
    name: 'Bahrain Institute of Banking and Finance (BIBF)',
    role: 'Cybersecurity Trainer',
    description:
      'Delivering specialized training programs on cybersecurity, cloud security, and compliance for banking and financial sector professionals.',
    mentions: ['Banking Sector Professionals', 'Professional Training', 'Certification Programs', 'Workshops'],
    icon: 'users',
  },
];
