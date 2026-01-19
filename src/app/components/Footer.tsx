import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/nishanthkumarpathi', 
      label: 'LinkedIn' 
    },
    { 
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: 'https://x.com/nishanthkumarp', 
      label: 'X (Twitter)' 
    },
    { 
      icon: Github, 
      href: 'https://github.com/nishanthkumarpathi', 
      label: 'GitHub' 
    },
    { 
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      href: 'https://www.youtube.com/nishanthkumarpathi', 
      label: 'YouTube' 
    },
  ];

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#2596be] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-medium mb-4">Nishanth Kumar Pathi</h3>
            <p className="text-white/70 text-sm">
              Cyber & Cloud Security Operations Professional
            </p>
            <p className="text-white/70 text-sm mt-2">
              Advisor | Consultant | Architect | Leader
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="space-y-2 mb-4">
              <p className="text-white/70 text-sm">Manama, Bahrain</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>© {currentYear} Nishanth Kumar Pathi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="https://blog.nishanthkp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Blog
              </a>
              <a href="https://training.nishanthkp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Training
              </a>
              <a href="https://nishanthkp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}