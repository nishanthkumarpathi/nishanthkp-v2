import { Linkedin, Github, MapPin } from 'lucide-react';
import { footerQuickLinks, externalFooterLinks } from '../data/navigation';
import { LOCATION } from '../data/siteConfig';
import { XIcon, YouTubeIcon } from './icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nishanthkumarpathi', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/nishanthkumarp', label: 'X (Twitter)' },
    { icon: Github, href: 'https://github.com/nishanthkumarpathi', label: 'GitHub' },
    { icon: YouTubeIcon, href: 'https://www.youtube.com/nishanthkumarpathi', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-page border-t border-line overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xl font-medium text-content mb-3">
              Nishanth Kumar Pathi<span className="text-brand-bright">.</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Cyber &amp; Cloud Security Operations Professional.
              <br />
              Advisor · Consultant · Architect · Leader
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="kicker text-[0.62rem] mb-4">Navigate</h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted hover:text-brand-bright transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="kicker text-[0.62rem] mb-4">More</h4>
            <ul className="space-y-2">
              {externalFooterLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted hover:text-brand-bright transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="kicker text-[0.62rem] mb-4">Connect</h4>
            <p className="inline-flex items-center gap-1.5 text-muted text-sm mb-4">
              <MapPin size={14} className="text-brand-bright" /> {LOCATION}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-brand-bright hover:border-brand-bright/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-faint">
          <p>© {currentYear} Nishanth Kumar Pathi. All rights reserved.</p>
          <p className="font-mono">Built with intent · Manama, Bahrain</p>
        </div>
      </div>
    </footer>
  );
}
