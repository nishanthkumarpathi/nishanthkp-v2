import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Determine visibility - show after leaving hero slightly
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Find current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      const element = document.getElementById(sections[index]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => scrollToSection(currentSectionIndex - 1);
  const handleNext = () => scrollToSection(currentSectionIndex + 1);

  // Hide Up arrow if at first section, Hide Down arrow if at last section
  const showUp = currentSectionIndex > 0;
  const showDown = currentSectionIndex < sections.length - 1;

  // If we are at the very top (currentSectionIndex 0) and not visible yet, ensure we don't show weird state
  // But isVisible handles that.

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: 20 }}
           className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
        >
          {showUp && (
            <button
              onClick={handlePrev}
              className="p-3 bg-white text-[#2596be] rounded-full shadow-lg hover:bg-gray-50 transition-all focus:outline-none hover:scale-110 border border-gray-100"
              aria-label="Previous section"
            >
              <ChevronUp size={24} />
            </button>
          )}
          
          {showDown && (
            <button
              onClick={handleNext}
              className="p-3 bg-[#2596be] text-white rounded-full shadow-lg hover:bg-[#1a7a9e] transition-all focus:outline-none hover:scale-110"
              aria-label="Next section"
            >
              <ChevronDown size={24} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
