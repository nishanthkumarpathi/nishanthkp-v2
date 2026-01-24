import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Gallery } from './components/Gallery';
import { CollaborationsAndCommunity } from './components/CollaborationsAndCommunity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResearchPapersPage } from './components/ResearchPapersPage';
import { GalleryPage } from './components/GalleryPage';
import { BackToTop } from './components/BackToTop';
import { ScrollToNext } from './components/ScrollToNext';

export default function App() {
  const [showResearchPapers, setShowResearchPapers] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  // Handle scrolling to section after navigation
  React.useEffect(() => {
    if (pendingSection && !showGallery && !showResearchPapers) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(pendingSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingSection(null);
      }, 100);
    }
  }, [pendingSection, showGallery, showResearchPapers]);

  const handleNavigateHome = (sectionId?: string) => {
    setShowGallery(false);
    setShowResearchPapers(false);
    if (sectionId) {
      setPendingSection(sectionId);
    }
  };

  if (showGallery) {
    return (
      <div className="font-[Roboto,sans-serif]">
        <Header onNavigateHome={handleNavigateHome} />
        <GalleryPage onBack={() => setShowGallery(false)} />
        <Footer />
        <BackToTop />
      </div>
    );
  }

  if (showResearchPapers) {
    return (
      <div className="font-[Roboto,sans-serif]">
        <Header onNavigateHome={handleNavigateHome} />
        <ResearchPapersPage onBack={() => setShowResearchPapers(false)} />
        <Footer />
        <BackToTop />
      </div>
    );
  }

  return (
    <div className="font-[Roboto,sans-serif]">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery onViewFullGallery={() => setShowGallery(true)} />
        <Publications onViewAllPapers={() => setShowResearchPapers(true)} />
        <CollaborationsAndCommunity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ScrollToNext />
    </div>
  );
}
