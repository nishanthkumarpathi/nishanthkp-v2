import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Publications } from './components/Publications';
import { Gallery } from './components/Gallery';
import { OrganizationalCollaborations } from './components/OrganizationalCollaborations';
import { CommunityEngagement } from './components/CommunityEngagement';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResearchPapersPage } from './components/ResearchPapersPage';

export default function App() {
  const [showResearchPapers, setShowResearchPapers] = useState(false);

  if (showResearchPapers) {
    return (
      <div className="font-[Roboto,sans-serif]">
        <Header />
        <ResearchPapersPage onBack={() => setShowResearchPapers(false)} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-[Roboto,sans-serif]">
      <Header />
      <main>
        <Hero />
        <ProfessionalExperience />
        <Publications onViewAllPapers={() => setShowResearchPapers(true)} />
        <Gallery />
        <OrganizationalCollaborations />
        <CommunityEngagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}