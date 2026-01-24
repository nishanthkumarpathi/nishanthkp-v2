import React from 'react';
import { Github, Linkedin, Mail, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import headshotImage from '../../assets/nishanth_headshot.png';

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
    <section id="hero" className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden relative pt-20 pb-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0" />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12 w-full">

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-base sm:text-lg font-medium text-[#2596be] mb-2 tracking-wide">
                Hello, I'm
              </h2>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tight leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#1a7a9e]">
                Nishanth
              </span>{' '}
              <span className="text-gray-900 text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                Kumar Pathi
              </span>
            </motion.h1>

            {/* Areas of Specialization - Enhanced Design */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start max-w-2xl">
                {specializations.map((area, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-white to-blue-50/50 border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium rounded-full shadow-sm hover:shadow-md hover:border-[#2596be]/50 hover:from-blue-50/70 hover:to-blue-100/50 transition-all duration-200 cursor-default"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* International Experience - Global Map Highlight */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6 relative z-20">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block text-center lg:text-left">International Experience</span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  {[
                    'Algeria', 'Bahrain', 'India',
                    'Qatar', 'Saudi Arabia', 'Singapore', 'UAE'
                  ].map((country) => (
                    <span key={country} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm text-[#0B1C3E] shadow-sm hover:border-[#2596be]/30 hover:bg-blue-50/30 transition-colors">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2596be] text-white font-medium text-sm rounded-lg hover:bg-[#1a7a9e] transition-colors shadow-lg shadow-blue-900/10 flex items-center justify-center"
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
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-700 font-medium text-sm rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center shadow-sm"
              >
                <BookOpen size={16} className="mr-2 text-[#2596be]" />
                Blog
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <SocialLink href="https://www.linkedin.com/in/nishanthkumarpathi" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://x.com/nishanthkumarp" icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              } label="X (Twitter)" />
              <SocialLink href="https://github.com/nishanthkumarpathi" icon={<Github size={18} />} label="GitHub" />
              <SocialLink href="https://www.youtube.com/nishanthkumarpathi" icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              } label="YouTube" />
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
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full p-2 bg-white shadow-2xl relative z-10 border border-gray-100">
                <img
                  src={headshotImage}
                  alt="Nishanth Kumar Pathi"
                  className="w-full h-full rounded-full object-cover object-top shadow-inner"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats Bar - Now part of the flow, not absolute */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-[#0B1C3E] text-sm sm:text-base lg:text-lg font-semibold mb-2 tracking-wide">What I Bring to the Table</h3>
          <div className="w-12 sm:w-16 h-1 bg-[#2596be] mx-auto mb-3 sm:mb-4 rounded-full"></div>
          <div className="bg-[#0B1C3E] text-white py-4 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-center text-center">

              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#2596be]">15+</span>
                <span className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">Years of Professional Experience</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#2596be]">$5M+</span>
                <span className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">Cyber Security & Governance Budget</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold">6+</span>
                <span className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">Countries</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold">30+</span>
                <span className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">Projects Delivered</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold">15+</span>
                <span className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">Organizations as Consultant</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold">20+</span>
                <span className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">Professional Certifications</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.button
        onClick={() => scrollToSection('publications')}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[#2596be] hover:text-[#1a7a9e] transition-colors focus:outline-none"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="sm:w-10 sm:h-10" />
        </motion.div>
      </motion.button>
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