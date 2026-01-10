import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Globe } from 'lucide-react';
import headshotImage from '../../assets/nishanth_headshot.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const countries = [
    'Algeria',
    'Abu Dhabi',
    'Bahrain',
    'Dubai',
    'Egypt',
    'India',
    'Morocco',
    'Qatar',
    'Saudi Arabia',
    'Singapore',
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Professional Headshot */}
          <div className="flex-shrink-0">
            <img
              src={headshotImage}
              alt="Nishanth Kumar Pathi"
              className="w-64 h-64 rounded-full object-cover object-left shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Nishanth Kumar Pathi
            </h1>

            {/* Areas of Specialization */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 text-center lg:text-left">
                Areas of Specialization
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-3xl">
                {[
                  'Cyber Security Engineering',
                  'Data Privacy Engineering',
                  'Cloud Automation Engineering',
                  'Site Reliability Engineering',
                  'Chaos Engineering',
                  'DevSecOps',
                  'DataSecOps',
                  'CloudNativeOps',
                  'FinOps'
                ].map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[#2596be] to-[#1a7a9e] text-white text-sm rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* International Experience */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-medium text-[#2596be] mb-4 flex items-center">
                <Globe className="mr-2" size={20} />
                International Experience
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                I have had the privilege of working with organizations and clients across multiple countries, 
                bringing diverse perspectives and cross-cultural expertise to security solutions:
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((country, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F8F9FA] text-gray-700 text-sm rounded-md border border-gray-200"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-[#2596be] text-[#2596be] rounded-md hover:bg-[#2596be] hover:text-white transition-colors"
              >
                Contact Me
              </button>
              <a
                href="https://blog.nishanthkp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#2596be] text-white rounded-md hover:bg-[#1a7a9e] transition-colors inline-flex items-center justify-center"
              >
                <BookOpen size={18} className="mr-2" />
                Blog
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/nishanthkumarpathi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#2596be] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/nishanthkumarp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#2596be] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/nishanthkumarpathi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#2596be] transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.youtube.com/nishanthkumarpathi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#2596be] transition-colors"
                aria-label="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="mailto:pathinishanth@gmail.com"
                className="text-gray-600 hover:text-[#2596be] transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}