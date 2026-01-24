import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Define the order of sections
const sections = [
  'hero',
  'publications',
  'gallery',
  'collaborations',
  'community',
  'contact',
];

export function ScrollToNext() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Determine current section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSectionIndex(i);
          break;
        }
      }

      // Hide when at the last section (contact)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        const scrolledPastContact = window.scrollY + window.innerHeight > contactTop + 200;
        setIsVisible(!scrolledPastContact);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextIndex = currentSectionIndex + 1;
    if (nextIndex < sections.length) {
      const element = document.getElementById(sections[nextIndex]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isLastSection = currentSectionIndex >= sections.length - 1;

  return (
    <AnimatePresence>
      {isVisible && !isLastSection && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToNext}
          className="fixed bottom-4 right-4 z-50 p-2 bg-[#2596be] text-white rounded-lg shadow-md hover:bg-[#1a7a9e] hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:ring-offset-2"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
