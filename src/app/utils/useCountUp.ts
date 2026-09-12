import { useEffect, useRef, useState } from 'react';

/**
 * Splits a metric string like "$5M+" or "1000+" into a numeric part to animate
 * and the surrounding prefix/suffix to render verbatim.
 */
function parseMetric(value: string) {
  const match = value.match(/([^\d]*)(\d[\d,]*)(.*)/);
  if (!match) return { prefix: '', number: null as number | null, suffix: value };
  const [, prefix, digits, suffix] = match;
  return { prefix, number: Number(digits.replace(/,/g, '')), suffix };
}

/**
 * Count-up animation that triggers once when the element scrolls into view.
 * Respects `prefers-reduced-motion`. Returns a ref to attach and the current
 * display string.
 */
export function useCountUp(value: string, duration = 1400) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { prefix, number, suffix } = parseMetric(value);
  const [display, setDisplay] = useState(number === null ? value : `${prefix}0${suffix}`);
  const started = useRef(false);

  useEffect(() => {
    if (number === null) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              const current = Math.round(eased * number);
              setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, number, prefix, suffix, duration]);

  return { ref, display };
}
