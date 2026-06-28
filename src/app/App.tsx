import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Awards } from './components/Awards';
import { Speaking } from './components/Speaking';
import { Outreach } from './components/Outreach';
import { Gallery } from './components/Gallery';
import { CollaborationsAndCommunity } from './components/CollaborationsAndCommunity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResearchPapersPage } from './components/ResearchPapersPage';
import { GalleryPage } from './components/GalleryPage';
import { SectionNavigation } from './components/SectionNavigation';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  React.useEffect(() => {
    const state = location.state as { sectionId?: string } | null;
    if (isHomeRoute && state?.sectionId) {
      setTimeout(() => {
        const element = document.getElementById(state.sectionId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        navigate('/', { replace: true, state: null });
      }, 100);
    }
  }, [isHomeRoute, location.state, navigate]);

  const handleNavigateHome = (sectionId?: string) => {
    navigate('/', { state: { sectionId: sectionId ?? 'hero' } });
  };

  return (
    <div className="font-sans text-content bg-page min-h-screen">
      <ScrollToTop />
      <Header onNavigateHome={!isHomeRoute ? handleNavigateHome : undefined} />
      <Routes>
        <Route
          path="/"
          element={
            <main id="main-content">
              <Hero />
              <About />
              <Awards />
              <Speaking />
              <Publications
                onViewAllPapers={() => navigate('/research-papers')}
                onViewPaper={(slug) => navigate(`/research-papers/${slug}`)}
              />
              <Outreach />
              <CollaborationsAndCommunity />
              <Gallery onViewFullGallery={() => navigate('/gallery')} />
              <Contact />
            </main>
          }
        />
        <Route path="/gallery" element={<GalleryPage onBack={() => navigate('/')} />} />
        <Route path="/research-papers" element={<ResearchPapersPage onBack={() => navigate('/')} />} />
        <Route path="/research-papers/:slug" element={<ResearchPapersPage onBack={() => navigate('/')} />} />
      </Routes>
      <Footer />
      {isHomeRoute && <SectionNavigation />}
    </div>
  );
}
