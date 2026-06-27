import photo1 from '../../assets/1 Arab International Cyber Security Summit.jpg';
import photo2 from '../../assets/2 Digital Executive Development Program - BBK.jpg';
import photo3 from '../../assets/3 AI and ChatGPT Session.jpg';
import photo4 from '../../assets/4 Project Management and Team Building Activity - HSBC.jpg';
import photo5 from '../../assets/5 NASSCOM Delegation Visit.jpg';
import photo6 from '../../assets/6 ChatGPT Integration Workshop.jpg';
import photo7 from '../../assets/7 Personal Data Protection Workshop - Gramco.jpg';
import photo8 from '../../assets/8 ISACA Volunteer Group Photo.jpg';
import photo9 from '../../assets/9 Food Distribution as an ISACA Volunteer.jpg';
import photo10 from '../../assets/10 Food Distribution as an ISACA Volunteer for Ramadan.jpg';
import photo11 from '../../assets/11 ISACA Ghabga Event - Kahoot Quiz Winner.jpg';
import photo12 from '../../assets/12 Vulnerability and Penetration Testing Workshop.jpg';
import photo13 from '../../assets/13 AWS Technical Essentials Training.jpg';
import photo14 from '../../assets/14 AWS Solutions Architect Workshop for IGA.jpg';
import photo15 from '../../assets/15 Data Analysis with Python Workhshop.jpg';
import photo16 from '../../assets/16 Lessons Learnt from Bahrain FinTech Eco System.jpg';
import photo17 from '../../assets/17 Data Engineering Workshop on AWS Cloud.jpg';
import photo18 from '../../assets/18 AI & Robotic Process Automation Workshop.jpg';
import photo19 from '../../assets/19 IGA Graudates AWS CP Workshop.jpg';
import photo20 from '../../assets/20 Certified Ethical Hacker Program.jpg';
import photo21 from '../../assets/21 AWS Certified Cloud Practitioner Workshop.jpg';
import photo22 from '../../assets/22 Arab International Cyber Security Summit 2023.jpg';
import photo23 from '../../assets/23 Software Development with Springboot.jpg';
import photo24 from '../../assets/24 ITILv4.jpg';
import photo25 from '../../assets/25 Python Automation for Software Testing.jpg';
import photo26 from '../../assets/26 AWS DevOps Professional.jpg';
import photo27 from '../../assets/27 ISACA Cloud Auditing Forum 2024.jpg';
import photo28 from '../../assets/28 CyberX Bahrain Cyber Security Excellence Award 2024.jpg';
import photo29 from '../../assets/29 Cloud Security Tends at CyberX Summit.png';
import photo30 from '../../assets/30 AI in Action for Eskan Bank.jpg';
import photo31 from '../../assets/31 Cyber Security Awareness Session for Pilots - Gulf Air Group 2025.jpg';
import photo32 from '../../assets/32 On Job Training Program for Nasser Center for Science & Technology - Gulf Air Group 2025.jpg';
import photo33 from '../../assets/33 Data Privacy Training Program in Parternship with BIBF & IAPP.jpg';
import photo34 from '../../assets/34 Safeguarding Payments Data and Identity in Fintech Age.jpg';
import photo35 from '../../assets/35 Is AI Threat or a Reward for Risk Leaders.webp';
import photo36 from '../../assets/36 Top 50 Agentic AI Leaders KSA 2026 Award.jpg';
import photo38 from '../../assets/38 AI & Automation Security Excellence Award.jpg';

/**
 * Category of an engagement. Drives which section renders it and how it is
 * labelled. Add a new category here and to `categoryMeta` below.
 */
export type EngagementCategory =
  | 'award' // recognition / honours
  | 'speaking' // talks, keynotes, panels, awareness sessions
  | 'workshop' // training delivered
  | 'volunteer' // community service / outreach
  | 'committee' // forums, judging, organizing roles
  | 'summit'; // summits / delegations attended or represented

export interface EngagementMetric {
  label: string;
  value: string;
}

export interface Engagement {
  /** Stable identifier. */
  id: string;
  /** URL-safe identifier derived from the title; used for deep-linking. */
  slug: string;
  title: string;
  category: EngagementCategory;
  /** Display year, e.g. "2024". Used for grouping/sorting. Optional. */
  year?: string;
  /** ISO date if the exact day is known; otherwise omit. */
  date?: string;
  location?: string;
  organization?: string;
  /** Your role at the engagement, e.g. "Speaker", "Trainer". */
  role?: string;
  description?: string;
  image: string;
  /** External link (event page, slides, recording, certificate). */
  link?: string;
  metrics?: EngagementMetric[];
  /** Surface this item in highlight/teaser areas. */
  featured?: boolean;
}

/**
 * Presentation metadata per category. Components read this so labels and
 * groupings stay consistent everywhere.
 */
export const categoryMeta: Record<
  EngagementCategory,
  { label: string; plural: string }
> = {
  award: { label: 'Award', plural: 'Awards' },
  speaking: { label: 'Speaking', plural: 'Speaking Engagements' },
  workshop: { label: 'Workshop', plural: 'Workshops & Training' },
  volunteer: { label: 'Volunteering', plural: 'Volunteering' },
  committee: { label: 'Committee', plural: 'Committees & Forums' },
  summit: { label: 'Summit', plural: 'Summits' },
};

/** Convert a title into a stable, URL-safe slug. */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Single source of truth for awards, speaking engagements, workshops, and
 * outreach. APPEND new items here — `slug` is generated automatically and
 * every section (Awards, Speaking, Outreach, Gallery) is a filtered view of
 * this array, so new entries show up everywhere without extra wiring.
 *
 * Note: descriptions, roles, dates, and locations below were inferred from
 * the original photo titles and are safe to edit/enrich over time.
 */
const engagementsSource: Omit<Engagement, 'slug'>[] = [
  {
    id: '36',
    title: 'Top 50 Agentic AI Leaders KSA 2026 Award',
    category: 'award',
    year: '2026',
    location: 'Saudi Arabia',
    organization: 'Middle East KSA Agentic AI Forum',
    role: 'Recipient',
    description:
      'Recognized among the Top 50 Agentic AI Leaders in KSA for leadership and contributions in AI.',
    image: photo36,
    featured: true,
  },
  {
    id: '38',
    title: 'AI & Automation Security Excellence Award',
    category: 'award',
    year: '2026',
    location: 'Dubai, UAE',
    organization: 'MENA Cyber Security Conference - 4th Edition',
    role: 'Recipient',
    description:
      'Honoured with the AI & Automation Security Excellence Award for outstanding work in securing AI and automation.',
    image: photo38,
    featured: true,
  },
  {
    id: '28',
    title: 'CyberX Bahrain Cyber Security Excellence Award 2024',
    category: 'award',
    year: '2024',
    organization: 'CyberX',
    location: 'Bahrain',
    role: 'Recipient',
    description:
      'Recognized at CyberX Bahrain for excellence and impactful contributions to the cybersecurity community.',
    image: photo28,
    featured: true,
  },
  {
    id: '1',
    title: 'Arab International Cyber Security Summit',
    category: 'summit',
    organization: 'Arab International Cyber Security Summit',
    location: 'Bahrain',
    role: 'Speaker',
    description:
      'Shared perspectives on cybersecurity trends and resilience at a leading regional summit.',
    image: photo1,
    featured: true,
  },
  {
    id: '22',
    title: 'Arab International Cyber Security Summit 2023',
    category: 'summit',
    year: '2023',
    organization: 'Arab International Cyber Security Summit',
    location: 'Bahrain',
    role: 'Speaker',
    description:
      'Returned to the Arab International Cyber Security Summit to discuss emerging threats and defensive strategy.',
    image: photo22,
  },
  {
    id: '5',
    title: 'NASSCOM Delegation Visit',
    category: 'summit',
    organization: 'NASSCOM',
    role: 'Delegate',
    description: 'Participated in a NASSCOM delegation focused on technology collaboration.',
    image: photo5,
  },
  {
    id: '34',
    title: 'Cyber Defense 2.0: Safeguarding Payments, Data, and Identity in the Fintech Age',
    category: 'speaking',
    year: '2026',
    location: 'Bahrain',
    organization: 'FinTech Revolution Summit - 15th Edition',
    role: 'Panelist',
    description:
      'Panel discussion on Cyber Defense 2.0 — safeguarding payments, data, and identity in the fintech age.',
    image: photo34,
    featured: true,
  },
  {
    id: '35',
    title: 'Is AI a Threat or a Reward for Risk Leaders?',
    category: 'speaking',
    year: '2026',
    location: 'Riyadh, Saudi Arabia',
    organization: '4th Annual GPRC Summit',
    role: 'Panelist',
    description:
      'Panel exploring whether AI is a threat or a reward for risk leaders.',
    image: photo35,
    featured: true,
  },
  {
    id: '16',
    title: 'Lessons Learnt from Bahrain FinTech Eco System',
    category: 'speaking',
    location: 'Bahrain',
    role: 'Speaker',
    description: 'Presented lessons learned from building and securing the Bahrain FinTech ecosystem.',
    image: photo16,
  },
  {
    id: '29',
    title: 'Cloud Security Trends at CyberX Summit',
    category: 'speaking',
    organization: 'CyberX',
    location: 'Bahrain',
    role: 'Speaker',
    description: 'Delivered a session on the latest cloud security trends at the CyberX Summit.',
    image: photo29,
  },
  {
    id: '30',
    title: 'AI in Action for Eskan Bank',
    category: 'speaking',
    organization: 'Eskan Bank',
    role: 'Speaker',
    description: 'Showcased practical applications of AI for the banking sector at Eskan Bank.',
    image: photo30,
  },
  {
    id: '3',
    title: 'AI and ChatGPT Session',
    category: 'speaking',
    role: 'Speaker',
    description: 'An introductory session on AI and ChatGPT and their real-world applications.',
    image: photo3,
  },
  {
    id: '31',
    title: 'Cyber Security Awareness Session for Pilots - Gulf Air Group',
    category: 'speaking',
    year: '2025',
    organization: 'Gulf Air Group',
    location: 'Bahrain',
    role: 'Speaker',
    description: 'Delivered a tailored cybersecurity awareness session for pilots at Gulf Air Group.',
    image: photo31,
  },
  {
    id: '2',
    title: 'Digital Executive Development Program - BBK',
    category: 'workshop',
    organization: 'BBK',
    role: 'Trainer',
    description: 'Facilitated a digital executive development program for BBK leadership.',
    image: photo2,
  },
  {
    id: '4',
    title: 'Project Management and Team Building Activity - HSBC',
    category: 'workshop',
    organization: 'HSBC',
    role: 'Facilitator',
    description: 'Led a project management and team-building activity for HSBC teams.',
    image: photo4,
  },
  {
    id: '6',
    title: 'ChatGPT Integration Workshop',
    category: 'workshop',
    role: 'Trainer',
    description: 'Hands-on workshop on integrating ChatGPT into everyday workflows.',
    image: photo6,
  },
  {
    id: '7',
    title: 'Personal Data Protection Workshop - Gramco',
    category: 'workshop',
    organization: 'Gramco',
    role: 'Trainer',
    description: 'Workshop on personal data protection principles and compliance for Gramco.',
    image: photo7,
  },
  {
    id: '12',
    title: 'Vulnerability and Penetration Testing Workshop',
    category: 'workshop',
    role: 'Trainer',
    description: 'Practical workshop covering vulnerability assessment and penetration testing.',
    image: photo12,
  },
  {
    id: '13',
    title: 'AWS Technical Essentials Training',
    category: 'workshop',
    role: 'Trainer',
    description: 'Delivered AWS Technical Essentials training to upskill participants on the cloud.',
    image: photo13,
  },
  {
    id: '14',
    title: 'AWS Solutions Architect Workshop for IGA',
    category: 'workshop',
    organization: 'IGA',
    role: 'Trainer',
    description: 'AWS Solutions Architect workshop for the Information & eGovernment Authority (IGA).',
    image: photo14,
  },
  {
    id: '15',
    title: 'Data Analysis with Python Workshop',
    category: 'workshop',
    role: 'Trainer',
    description: 'Introductory workshop on data analysis using Python.',
    image: photo15,
  },
  {
    id: '17',
    title: 'Data Engineering Workshop on AWS Cloud',
    category: 'workshop',
    role: 'Trainer',
    description: 'Workshop on building data engineering pipelines on the AWS Cloud.',
    image: photo17,
  },
  {
    id: '18',
    title: 'AI & Robotic Process Automation Workshop',
    category: 'workshop',
    role: 'Trainer',
    description: 'Workshop exploring AI and Robotic Process Automation (RPA) in practice.',
    image: photo18,
  },
  {
    id: '19',
    title: 'IGA Graduates AWS CP Workshop',
    category: 'workshop',
    organization: 'IGA',
    role: 'Trainer',
    description: 'AWS Cloud Practitioner workshop for IGA graduates.',
    image: photo19,
  },
  {
    id: '20',
    title: 'Certified Ethical Hacker Program',
    category: 'workshop',
    role: 'Trainer',
    description: 'Delivered a Certified Ethical Hacker (CEH) training program.',
    image: photo20,
  },
  {
    id: '21',
    title: 'AWS Certified Cloud Practitioner Workshop',
    category: 'workshop',
    role: 'Trainer',
    description: 'Workshop preparing participants for the AWS Certified Cloud Practitioner exam.',
    image: photo21,
  },
  {
    id: '23',
    title: 'Software Development with Spring Boot',
    category: 'workshop',
    role: 'Trainer',
    description: 'Workshop on building applications with Spring Boot.',
    image: photo23,
  },
  {
    id: '24',
    title: 'ITIL v4 Training',
    category: 'workshop',
    role: 'Trainer',
    description: 'ITIL v4 training covering modern IT service management practices.',
    image: photo24,
  },
  {
    id: '25',
    title: 'Python Automation for Software Testing',
    category: 'workshop',
    role: 'Trainer',
    description: 'Workshop on automating software testing workflows with Python.',
    image: photo25,
  },
  {
    id: '26',
    title: 'AWS DevOps Professional Training',
    category: 'workshop',
    role: 'Trainer',
    description: 'Advanced training toward the AWS DevOps Engineer Professional certification.',
    image: photo26,
  },
  {
    id: '32',
    title: 'On-Job Training Program for Nasser Center for Science & Technology - Gulf Air Group',
    category: 'workshop',
    year: '2025',
    organization: 'Gulf Air Group',
    role: 'Trainer',
    description:
      'On-the-job training program delivered in collaboration with the Nasser Center for Science & Technology.',
    image: photo32,
  },
  {
    id: '33',
    title: 'Data Privacy Training Program in Partnership with BIBF & IAPP',
    category: 'workshop',
    organization: 'BIBF & IAPP',
    role: 'Trainer',
    description:
      'Data privacy training program delivered in partnership with BIBF and the IAPP.',
    image: photo33,
  },
  {
    id: '8',
    title: 'ISACA Volunteer Group Photo',
    category: 'volunteer',
    organization: 'ISACA',
    role: 'Volunteer',
    description: 'Volunteering with the ISACA community chapter.',
    image: photo8,
  },
  {
    id: '9',
    title: 'Food Distribution as an ISACA Volunteer',
    category: 'volunteer',
    organization: 'ISACA',
    role: 'Volunteer',
    description: 'Community food distribution drive as an ISACA volunteer.',
    image: photo9,
  },
  {
    id: '10',
    title: 'Food Distribution as an ISACA Volunteer for Ramadan',
    category: 'volunteer',
    organization: 'ISACA',
    role: 'Volunteer',
    description: 'Ramadan food distribution drive supporting the community as an ISACA volunteer.',
    image: photo10,
  },
  {
    id: '11',
    title: 'ISACA Ghabga Event - Kahoot Quiz Winner',
    category: 'volunteer',
    organization: 'ISACA',
    role: 'Participant',
    description: 'Community Ghabga gathering with the ISACA chapter.',
    image: photo11,
  },
  {
    id: '27',
    title: 'ISACA Cloud Auditing Forum 2024',
    category: 'committee',
    year: '2024',
    organization: 'ISACA',
    role: 'Contributor',
    description: 'Contributed to the ISACA Cloud Auditing Forum.',
    image: photo27,
  },
];

/** All engagements with generated slugs. */
export const engagements: Engagement[] = engagementsSource.map((e) => ({
  ...e,
  slug: slugify(e.title),
}));

/** Return all engagements in one of the given categories. */
export function getEngagementsByCategory(
  ...categories: EngagementCategory[]
): Engagement[] {
  return engagements.filter((e) => categories.includes(e.category));
}

/** Sort helper: by year descending, undated items last, stable otherwise. */
function byYearDesc(a: Engagement, b: Engagement): number {
  const ay = a.year ?? '';
  const by = b.year ?? '';
  if (ay && by) return by.localeCompare(ay);
  if (ay) return -1;
  if (by) return 1;
  return 0;
}

/** Awards & recognition. */
export const awards: Engagement[] = getEngagementsByCategory('award').sort(byYearDesc);

/** Speaking engagements, summits, and workshops/training delivered. */
export const speakingEngagements: Engagement[] = getEngagementsByCategory(
  'speaking',
  'summit',
  'workshop',
).sort(byYearDesc);

/** Community work — volunteering and committee/forum roles. */
export const outreach: Engagement[] = getEngagementsByCategory(
  'volunteer',
  'committee',
).sort(byYearDesc);
