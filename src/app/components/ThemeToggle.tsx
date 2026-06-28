import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * Dark/light switch. Renders a stable placeholder until mounted so the markup
 * matches what next-themes resolves on the client (avoids hydration mismatch).
 */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-content hover:border-line-strong transition-colors ${className}`}
    >
      {mounted && (
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon size={17} /> : <Sun size={17} />}
        </motion.span>
      )}
    </button>
  );
}
