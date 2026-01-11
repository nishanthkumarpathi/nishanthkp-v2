import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Publications } from './components/Publications';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-[Roboto,sans-serif]">
      <Header />
      <main>
        <Hero />
        <Publications />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}