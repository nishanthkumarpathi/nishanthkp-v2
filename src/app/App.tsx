import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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

  if (showGallery) {
    return (
      <div className="font-[Roboto,sans-serif]">
        <Header />
        <GalleryPage onBack={() => setShowGallery(false)} />
        <Footer />
        <BackToTop />
      </div>
    );
  }

  if (showResearchPapers) {
    return (
      <div className="font-[Roboto,sans-serif]">
        <Header />
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
        <Publications onViewAllPapers={() => setShowResearchPapers(true)} />
        <Gallery onViewFullGallery={() => setShowGallery(true)} />
        <CollaborationsAndCommunity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ScrollToNext />
    </div>
  );
}
