import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { headerNavItems } from '../data/navigation';
import { scrollToId } from '../utils/scroll';

interface HeaderProps {
  onNavigateHome?: (sectionId?: string) => void;
}

export function Header({ onNavigateHome }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          setIsScrolled(window.scrollY > 20);
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're on a sub-page, navigate home first then scroll
    if (onNavigateHome) {
      onNavigateHome(id);
      return;
    }

    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-[#2596be] focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-medium text-[#2596be] hover:text-[#1a7a9e] transition-colors"
          >
            Nishanth Kumar Pathi
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {headerNavItems.map((item) => (
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#2596be] transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-[#2596be] transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#2596be]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav id="mobile-menu" className="lg:hidden pb-4 pt-2 border-t border-gray-200">
            {headerNavItems.map((item) => (
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#2596be] transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#2596be] transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}