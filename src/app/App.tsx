import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Publications } from './components/Publications';
import { Philanthropy } from './components/Philanthropy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-[Roboto,sans-serif]">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Publications />
        <Philanthropy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}