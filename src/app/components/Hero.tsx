import React, { useEffect, useState } from 'react';
import { Github, Linkedin, BookOpen, ArrowRight, ChevronDown, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import headshotImage from '../../assets/nishanth_headshot.png';
import { heroSpecializations, heroCountries, heroRoles, heroCredentials } from '../data/hero';
import { XIcon, YouTubeIcon } from './icons';
import { scrollToId } from '../utils/scroll';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % heroRoles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-page"
    >
      {/* Atmosphere: fine grid + grain + brand glow */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="bg-grain absolute inset-0 opacity-[0.035] mix-blend-overlay" aria-hidden />
      <div className="glow-brand absolute -top-40 right-[-10%] h-[60vh] w-[60vh] rounded-full" aria-hidden />
      <div className="glow-brand absolute bottom-[-20%] left-[-10%] h-[45vh] w-[45vh] rounded-full opacity-70" aria-hidden />

      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={item} className="kicker block mb-5">
              Cyber &amp; Cloud Security Leadership
            </motion.span>

            <motion.h1
              variants={item}
              className="font-display font-light tracking-tight leading-[0.95] mb-4"
            >
              <span className="block text-gradient-brand text-5xl sm:text-7xl lg:text-8xl">
                Nishanth
              </span>
              <span className="block text-content text-3xl sm:text-5xl lg:text-6xl mt-1">
                Kumar Pathi
              </span>
            </motion.h1>

            {/* Rotating role line */}
            <motion.div variants={item} className="h-8 sm:h-9 mb-5 flex items-center justify-center lg:justify-start">
              <span className="text-faint mr-2 text-base sm:text-lg" aria-hidden>
                —
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="text-base sm:text-xl font-medium text-muted"
                >
                  {heroRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Credibility strip */}
            <motion.div variants={item} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7">
              {heroCredentials.map((c, i) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 backdrop-blur px-3 py-1.5 text-[11px] sm:text-xs font-medium text-content"
                >
                  {i === 0 && <Award size={13} className="text-award" />}
                  {c}
                </span>
              ))}
            </motion.div>

            {/* Specializations */}
            <motion.div variants={item} className="mb-7">
              <span className="kicker text-[0.62rem] block mb-3 text-faint">Specializations</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                {heroSpecializations.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-[10px] sm:text-xs font-medium rounded-md border border-line text-muted hover:border-brand-bright/50 hover:text-content transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* International experience */}
            <motion.div variants={item} className="mb-8">
              <span className="kicker text-[0.62rem] block mb-3 text-faint">International Experience</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                {heroCountries.map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 rounded-md bg-surface-2 text-[10px] sm:text-xs text-content/90"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-7">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToId('contact')}
                className="group inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-brand-strong text-white font-medium text-sm shadow-lg shadow-brand/20 hover:bg-brand-deep transition-colors"
              >
                Let's Talk
                <ArrowRight size={17} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://blog.nishanthkp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-line-strong text-content font-medium text-sm hover:bg-surface transition-colors"
              >
                <BookOpen size={17} className="mr-2 text-brand-bright" />
                Read the Blog
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex justify-center lg:justify-start gap-2">
              <SocialLink href="https://www.linkedin.com/in/nishanthkumarpathi" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://x.com/nishanthkumarp" icon={<XIcon size={17} />} label="X (Twitter)" />
              <SocialLink href="https://github.com/nishanthkumarpathi" icon={<Github size={18} />} label="GitHub" />
              <SocialLink href="https://www.youtube.com/nishanthkumarpathi" icon={<YouTubeIcon size={17} />} label="YouTube" />
            </motion.div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            className="flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="glow-brand absolute inset-0 scale-125" aria-hidden />
              {/* Rotating accent ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-dashed border-brand-bright/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                aria-hidden
              />
              <div className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] rounded-full p-1.5 bg-gradient-to-br from-brand-bright/40 via-line to-transparent">
                <div className="w-full h-full rounded-full p-1.5 bg-surface">
                  <img
                    src={headshotImage}
                    alt="Nishanth Kumar Pathi"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToId('about')}
          className="mx-auto mt-10 lg:mt-14 flex flex-col items-center text-muted hover:text-content transition-colors"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <span className="kicker text-[0.6rem] mb-2 text-faint">Leadership by the numbers</span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={26} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      whileHover={{ y: -3 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-full text-muted hover:text-brand-bright hover:bg-surface transition-colors"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
