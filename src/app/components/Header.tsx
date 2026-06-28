import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { headerNavItems, sectionOrder } from '../data/navigation';
import { scrollToId } from '../utils/scroll';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onNavigateHome?: (sectionId?: string) => void;
}

export function Header({ onNavigateHome }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 20);
      // Scrollspy: last section whose top has crossed the viewport midpoint.
      const midpoint = window.innerHeight * 0.4;
      for (let i = sectionOrder.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionOrder[i]);
        if (el && el.getBoundingClientRect().top <= midpoint) {
          setActiveId(sectionOrder[i]);
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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome(id);
      return;
    }
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-page/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-surface focus:text-brand-bright focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display text-lg sm:text-xl font-medium text-content hover:text-brand-bright transition-colors"
          >
            Nishanth<span className="text-brand-bright">.</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {headerNavItems.map((item) =>
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm font-medium text-muted hover:text-content transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    !onNavigateHome && activeId === item.id
                      ? 'text-content'
                      : 'text-muted hover:text-content'
                  }`}
                >
                  {item.label}
                  {!onNavigateHome && activeId === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-bright"
                    />
                  )}
                </button>
              ),
            )}
            <ThemeToggle className="ml-2" />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="text-content"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav id="mobile-menu" className="lg:hidden pb-4 pt-2 border-t border-line">
            {headerNavItems.map((item) =>
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left py-2.5 text-muted hover:text-content transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2.5 font-medium transition-colors ${
                    !onNavigateHome && activeId === item.id ? 'text-brand-bright' : 'text-muted hover:text-content'
                  }`}
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>
        )}
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-brand-bright to-brand"
        style={{ scaleX: progress }}
        aria-hidden
      />
    </header>
  );
}
