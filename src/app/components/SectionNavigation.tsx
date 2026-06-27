import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, ChevronsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { scrollToId } from '../utils/scroll';

// Define the order of sections - must match App.tsx structure
const sections = [
  'hero',
  'about',
  'gallery',
  'publications',
  'collaborations-community',
  'contact',
];

export function SectionNavigation() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      // Show after leaving the hero area
      setIsVisible(window.scrollY > 100);

      // Find current section using viewport-relative positions so the
      // detection is independent of any positioned ancestors.
      const midpoint = window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= midpoint) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    // Throttle scroll handling to one update per animation frame.
    const handleScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      scrollToId(sections[index]);
    }
  };

  const handlePrev = () => scrollToSection(currentSectionIndex - 1);
  const handleNext = () => scrollToSection(currentSectionIndex + 1);
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hide Up arrow at the first section, hide Down arrow at the last section
  const showUp = currentSectionIndex > 0;
  const showDown = currentSectionIndex < sections.length - 1;
  // Offer an instant jump to the very top once past the first section
  const showJumpToTop = currentSectionIndex > 0;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3"
        >
          {showUp && (
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center bg-white text-[#2596be] rounded-full shadow-lg hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:ring-offset-2 hover:scale-110 border border-gray-100"
              aria-label="Previous section"
            >
              <ChevronUp size={24} />
            </button>
          )}

          {showDown && (
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-[#2596be] text-white rounded-full shadow-lg hover:bg-[#1a7a9e] transition-all focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:ring-offset-2 hover:scale-110"
              aria-label="Next section"
            >
              <ChevronDown size={24} />
            </button>
          )}

          {showJumpToTop && (
            <button
              onClick={handleScrollToTop}
              className="w-12 h-12 flex items-center justify-center bg-white text-[#2596be] rounded-full shadow-lg hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:ring-offset-2 hover:scale-110 border border-gray-100"
              aria-label="Back to top"
            >
              <ChevronsUp size={24} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
