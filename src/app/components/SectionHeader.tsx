import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Monospace eyebrow label, e.g. "02 — Recognition". */
  kicker: string;
  /** Main heading; supports inline markup for accent words. */
  title: ReactNode;
  /** Optional supporting paragraph. */
  intro?: ReactNode;
  /** Center (default) or left align. */
  align?: 'center' | 'left';
  className?: string;
}

/**
 * Consistent section header used across every section so the page has one
 * intentional typographic rhythm: mono kicker → display heading → intro.
 */
export function SectionHeader({
  kicker,
  title,
  intro,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignment} ${className}`}
    >
      <span className="kicker mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-brand-bright/60" aria-hidden />
        {kicker}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-content leading-[1.05] tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base sm:text-lg text-muted font-light leading-relaxed ${align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}`}>
          {intro}
        </p>
      )}
    </motion.div>
  );
}
