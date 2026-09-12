import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, ChevronsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { scrollToId } from '../utils/scroll';
import { sectionOrder as sections } from '../data/navigation';
import { useIsDesktop } from '../utils/useMediaQuery';

export function SectionNavigation() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsVisible(window.scrollY > 100);
      const midpoint = window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= midpoint) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };
    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) scrollToId(sections[index]);
  };

  const handlePrev = () => scrollToSection(currentSectionIndex - 1);
  const handleNext = () => scrollToSection(currentSectionIndex + 1);
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const showUp = currentSectionIndex > 0;
  const showDown = currentSectionIndex < sections.length - 1;
  const showJumpToTop = currentSectionIndex > 0;

  const btn =
    'w-11 h-11 flex items-center justify-center rounded-full border border-line bg-surface/80 backdrop-blur text-muted shadow-lg hover:text-content hover:border-brand-bright/50 transition-all hover:scale-105';

  // Mobile: compact bottom-right control that avoids covering wide card content.
  if (!isDesktop) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={showDown ? handleNext : handleScrollToTop}
            className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-strong/90 text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105"
            aria-label={showDown ? 'Next section' : 'Back to top'}
          >
            {showDown ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronsUp size={20} />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    );
  }

  // Desktop: full control with progress dots.
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-8 right-8 z-40 flex flex-col items-center gap-2.5"
        >
          <div className="flex flex-col items-center gap-1.5 mb-2">
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => scrollToSection(i)}
                aria-label={`Go to section ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === currentSectionIndex
                    ? 'h-4 w-1.5 bg-brand-bright'
                    : 'h-1.5 w-1.5 bg-line-strong hover:bg-brand-bright/60'
                }`}
              />
            ))}
          </div>

          {showUp && (
            <button onClick={handlePrev} className={btn} aria-label="Previous section">
              <ChevronUp size={22} />
            </button>
          )}
          {showDown && (
            <button
              onClick={handleNext}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-brand-strong text-white shadow-lg shadow-brand/30 hover:bg-brand-deep transition-all hover:scale-105"
              aria-label="Next section"
            >
              <ChevronDown size={22} />
            </button>
          )}
          {showJumpToTop && (
            <button onClick={handleScrollToTop} className={btn} aria-label="Back to top">
              <ChevronsUp size={22} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
