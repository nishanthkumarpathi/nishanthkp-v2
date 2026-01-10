import React from 'react';
import { Github, Linkedin, Mail, FileText, BookOpen } from 'lucide-react';
import headshotImage from 'figma:asset/26e380590cd7ca16484b5952e77c520542462d13.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-3">
              Nishanth Kumar Pathi
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#001f3f] mb-6">
              Cyber & Cloud Security Operations Professional
            </h2>
            <p className="text-lg text-[#6C757D] mb-2">
              Advisor | Consultant | Architect | Leader
            </p>
            <p className="text-base text-gray-600 max-w-2xl mb-8">
              10+ years of experience in cybersecurity, specializing in cross-domain security solutions, 
              cloud security architecture, DevSecOps, data privacy, and security governance. Proven track 
              record in leading security transformations and delivering measurable business value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-[#17A2B8] text-white rounded-md hover:bg-[#138496] transition-colors inline-flex items-center justify-center"
              >
                <FileText size={18} className="mr-2" />
                View Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-[#001f3f] text-[#001f3f] rounded-md hover:bg-[#001f3f] hover:text-white transition-colors"
              >
                Contact Me
              </button>
              <a
                href="https://blog.nishanthkp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] transition-colors inline-flex items-center justify-center"
              >
                <BookOpen size={18} className="mr-2" />
                Blog
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://linkedin.com/in/nishanthkumarp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007BFF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/nishanthkumarp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007BFF] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:pathinishanth@gmail.com"
                className="text-gray-600 hover:text-[#007BFF] transition-colors"
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