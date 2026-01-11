import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import headshotImage from '../../assets/nishanth_headshot.png';

import { WorldMap } from './WorldMap';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const specializations = [
    'Cyber Security Engineering',
    'Data Privacy Engineering',
    'Cloud Automation Engineering',
    'Site Reliability Engineering',
    'Chaos Engineering',
    'DevSecOps',
    'DataSecOps',
    'CloudNativeOps',
    'FinOps'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  } as const;

  return (
    <section id="hero" className="h-screen max-h-[1080px] min-h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden relative pt-16 lg:pt-0">
      {/* Background Map - Cyber/Tech Aesthetic */}
      <WorldMap className="absolute inset-0 w-full h-full opacity-60" />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-lg font-medium text-[#2596be] mb-2 tracking-wide">
                Hello, I'm
              </h2>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight"
            >
              Nishanth <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#1a7a9e]">
                Kumar Pathi
              </span>
            </motion.h1>

            {/* Areas of Specialization - Enhanced Design */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start max-w-2xl">
                {specializations.map((area, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-1.5 bg-gradient-to-r from-white to-blue-50/50 border border-gray-200 text-gray-700 text-sm font-medium rounded-full shadow-sm hover:shadow-md hover:border-[#2596be]/50 hover:from-blue-50/70 hover:to-blue-100/50 transition-all duration-200 cursor-default"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* International Experience - Global Map Highlight */}
            <motion.div variants={itemVariants} className="mb-8 relative z-20">
              <div className="flex items-center gap-3 inline-flex">
                <div className="relative">
                  <Globe size={18} className="text-[#2596be]" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-white"></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">International Experience</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Algeria', 'Bahrain', 'Egypt', 'India', 'Morocco',
                      'Qatar', 'Saudi Arabia', 'Singapore', 'UAE (Dubai & Abu Dhabi)'
                    ].map((country) => (
                      <span key={country} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-[#0B1C3E] shadow-sm hover:border-[#2596be]/30 hover:bg-blue-50/30 transition-colors">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-[#2596be] text-white font-medium text-sm rounded-lg hover:bg-[#1a7a9e] transition-colors shadow-lg shadow-blue-900/10 flex items-center justify-center"
              >
                Let's Talk
                <ArrowRight size={16} className="ml-2" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://blog.nishanthkp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-gray-700 font-medium text-sm rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center shadow-sm"
              >
                <BookOpen size={16} className="mr-2 text-[#2596be]" />
                Blog
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-4">
              <SocialLink href="https://www.linkedin.com/in/nishanthkumarpathi" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://x.com/nishanthkumarp" icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              } label="X (Twitter)" />
              <SocialLink href="https://github.com/nishanthkumarpathi" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://www.youtube.com/nishanthkumarpathi" icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              } label="YouTube" />
              <SocialLink href="mailto:pathinishanth@gmail.com" icon={<Mail size={20} />} label="Email" />
            </motion.div>
          </motion.div>

          {/* Professional Headshot */}
          <motion.div
            className="flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#2596be] rounded-full opacity-10 blur-2xl transform translate-x-4 translate-y-4"></div>
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-white shadow-2xl relative z-10 border border-gray-100">
                <img
                  src={headshotImage}
                  alt="Nishanth Kumar Pathi"
                  className="w-full h-full rounded-full object-cover object-top shadow-inner"
                />
              </div>

              {/* Floating aesthetic elements */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-2 -left-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 hidden sm:block z-20"
              >
                <span className="text-xs font-bold text-[#2596be]">10+ Countries</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0B1C3E] text-white py-6 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center text-center">

            <div className="flex flex-col items-center border-r border-gray-700/50 last:border-0">
              <span className="text-3xl font-bold text-[#2596be]">10+</span>
              <span className="text-xs text-gray-300 mt-1">Years Leading Security</span>
            </div>

            <div className="flex flex-col items-center border-r border-gray-700/50 last:border-0">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-xs text-gray-300 mt-1">Countries</span>
            </div>

            <div className="flex flex-col items-center border-r border-gray-700/50 last:border-0">
              <span className="text-3xl font-bold text-[#2596be]">$132K+</span>
              <span className="text-xs text-gray-300 mt-1">Cost Savings Delivered</span>
            </div>

            <div className="flex flex-col items-center border-r border-gray-700/50 last:border-0">
              <span className="text-3xl font-bold">50+</span>
              <span className="text-xs text-gray-300 mt-1">Enterprise Projects</span>
            </div>

            <div className="flex flex-col items-center border-r border-gray-700/50 last:border-0">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-xs text-gray-300 mt-1">Professional Certifications</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">7</span>
              <span className="text-xs text-gray-300 mt-1">Security Domains</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      whileHover={{ y: -3, color: '#2596be' }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 transition-colors p-2 hover:bg-blue-50/50 rounded-full"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}