import React, { useState } from 'react';
import { ArrowLeft, FileText, ChevronDown, ChevronUp, ExternalLink, Image as ImageIcon, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { researchPapers } from './Publications';

interface ResearchPapersPageProps {
  onBack: () => void;
}

export function ResearchPapersPage({ onBack }: ResearchPapersPageProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Research Papers
          </h1>
          <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
            Explore my published research papers in cybersecurity, cloud security, and DevSecOps
          </p>
        </motion.div>

        {/* Papers List */}
        <div className="space-y-4">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Card Header - Always Visible */}
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className="w-12 h-12 bg-[#2596be]/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <FileText className="text-[#2596be]" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {paper.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="px-2 py-0.5 bg-[#2596be]/10 text-[#2596be] rounded-md">
                          {paper.type}
                        </span>
                        <span className="text-[#6C757D]">{paper.publisher}</span>
                        <span className="text-[#6C757D]">•</span>
                        <span className="text-[#6C757D]">{paper.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedIndex === index ? (
                      <ChevronUp className="text-gray-400" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={24} />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      {/* Abstract */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                          Abstract
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {paper.description}
                        </p>
                      </div>

                      {/* Full Content */}
                      {paper.fullContent && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                            Summary
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {paper.fullContent}
                          </p>
                        </div>
                      )}

                      {/* Images/Certificates Placeholder */}
                      {(paper.images || paper.certificates) && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                            Related Documents
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {paper.certificates?.map((cert, i) => (
                              <div
                                key={i}
                                className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center text-center"
                              >
                                <Award className="text-[#2596be] mb-2" size={32} />
                                <span className="text-sm text-gray-600">{cert}</span>
                              </div>
                            ))}
                            {paper.images?.map((img, i) => (
                              <div
                                key={i}
                                className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center text-center"
                              >
                                <ImageIcon className="text-[#2596be] mb-2" size={32} />
                                <span className="text-sm text-gray-600">{img}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-[#2596be] text-white rounded-lg hover:bg-[#1a7a9e] transition-colors text-sm font-medium"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Full Paper
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Note about photos/certificates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-white rounded-xl border border-gray-200 text-center"
        >
          <ImageIcon className="text-[#2596be] mx-auto mb-3" size={32} />
          <p className="text-gray-600">
            Additional photos and certificates related to research can be added to each paper's detail section.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
