import { Linkedin, Github } from 'lucide-react';
import { footerQuickLinks, externalFooterLinks } from '../data/navigation';
import { XIcon, YouTubeIcon } from './icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/nishanthkumarpathi', 
      label: 'LinkedIn' 
    },
    {
      icon: XIcon,
      href: 'https://x.com/nishanthkumarp',
      label: 'X (Twitter)'
    },
    {
      icon: Github,
      href: 'https://github.com/nishanthkumarpathi',
      label: 'GitHub'
    },
    {
      icon: YouTubeIcon,
      href: 'https://www.youtube.com/nishanthkumarpathi',
      label: 'YouTube'
    },
  ];

  return (
    <footer className="bg-[#2596be] text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-2">Nishanth Kumar Pathi</h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Cyber & Cloud Security Operations Professional.<br />
              Advisor | Consultant | Architect | Leader
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-medium mb-3">Quick Links</h4>
            <ul className="space-y-1">
              {footerQuickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base font-medium mb-3">Connect</h4>
            <p className="text-white/80 text-xs sm:text-sm mb-3">Manama, Bahrain</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/70 gap-3">
            <p>© {currentYear} Nishanth Kumar Pathi. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {externalFooterLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}