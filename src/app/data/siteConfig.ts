/**
 * Centralized site configuration — brand tokens, location, and external
 * links. Prefer referencing these constants over hardcoding values so the
 * portfolio stays visually consistent and easy to rebrand.
 */

export const BRAND = {
  /** Primary brand color (cyan/blue). */
  primary: '#2596be',
  /** Darker primary, used for hover/active states. */
  primaryDark: '#1a7a9e',
  /** Accent reserved for awards & recognition (amber/gold). */
  award: '#C8901F',
  awardSoft: '#FBF3E0',
  /** Deep navy used on dark stat cards. */
  navy: '#001f3f',
} as const;

export const LOCATION = 'Manama, Bahrain';

export const externalLinks = {
  website: 'https://nishanthkp.com',
  blog: 'https://blog.nishanthkp.com/',
  training: 'https://training.nishanthkp.com',
} as const;
