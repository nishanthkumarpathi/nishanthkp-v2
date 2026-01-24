import React, { useState } from 'react';
import { ArrowLeft, FileText, ChevronDown, ChevronUp, ExternalLink, Image as ImageIcon, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { researchPapers } from './Publications';

interface ResearchPapersPageProps {
  onBack: () => void;
}

export function ResearchPapersPage({ onBack }: ResearchPapersPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedPaper = researchPapers[selectedIndex];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-[#2596be] hover:text-[#1a7a9e] transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Research Papers
          </h1>
          <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-[#6C757D] max-w-2xl mx-auto">
            Explore my published research papers in cybersecurity, cloud security, and DevSecOps
          </p>
        </motion.div>

        {/* Grid Layout - Papers List on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Side - Papers List */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-36">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <h2 className="font-medium text-gray-900">All Papers ({researchPapers.length})</h2>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {researchPapers.map((paper, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`w-full p-4 text-left border-b border-gray-50 transition-colors ${
                      selectedIndex === index
                        ? 'bg-[#2596be]/10 border-l-4 border-l-[#2596be]'
                        : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedIndex === index ? 'bg-[#2596be] text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <FileText size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-medium line-clamp-2 text-left ${
                          selectedIndex === index ? 'text-[#2596be]' : 'text-gray-900'
                        }`}>
                          {paper.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-[#6C757D]">{paper.publisher}</span>
                          <span className="text-xs text-[#6C757D]">•</span>
                          <span className="text-xs text-[#6C757D]">{paper.year}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Paper Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Paper Header */}
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#2596be]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="text-[#2596be]" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                      {selectedPaper.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="px-3 py-1 bg-[#2596be]/10 text-[#2596be] rounded-md font-medium">
                        {selectedPaper.type}
                      </span>
                      <span className="text-[#6C757D]">{selectedPaper.publisher}</span>
                      <span className="text-[#6C757D]">•</span>
                      <span className="text-[#6C757D]">{selectedPaper.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paper Content */}
              <div className="p-6 sm:p-8">
                {/* Abstract */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Abstract
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPaper.description}
                  </p>
                </div>

                {/* Full Content */}
                {selectedPaper.fullContent && (
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                      Summary
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedPaper.fullContent}
                    </p>
                  </div>
                )}

                {/* Images/Certificates */}
                {(selectedPaper.images || selectedPaper.certificates) && (
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Related Documents
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {selectedPaper.certificates?.map((cert, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors"
                        >
                          <Award className="text-[#2596be] mb-2" size={32} />
                          <span className="text-sm text-gray-600">{cert}</span>
                        </div>
                      ))}
                      {selectedPaper.images?.map((img, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors"
                        >
                          <ImageIcon className="text-[#2596be] mb-2" size={32} />
                          <span className="text-sm text-gray-600">{img}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={selectedPaper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-[#2596be] text-white rounded-lg hover:bg-[#1a7a9e] transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Full Paper
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
