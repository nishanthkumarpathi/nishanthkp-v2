import React, { useState } from 'react';
import { FileText, Award, ExternalLink, BookOpen, GraduationCap, ChevronLeft, ChevronRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';

interface Author {
  name: string;
  profileUrl?: string;
}

interface ResearchPaper {
  title: string;
  type: string;
  publisher: string;
  description: string;
  link: string;
  year: string;
  fullContent?: string;
  certificates?: string[];
  images?: string[];
  authors: Author[];
}

// ... (Publications component code) ...

// Updated Carousel Card Rendering (inside map)
// <div className="flex items-start mb-3">...</div>
// <div className="text-sm text-gray-600 mb-2">
//   <span className="font-medium text-gray-900">Authored by:</span>{' '}
//   {paper.authors.map((author, i) => (
//     <span key={i}>
//       {author.profileUrl ? (
//         <a href={author.profileUrl} target="_blank" rel="noopener noreferrer" className="text-[#2596be] hover:underline">
//           {author.name}
//         </a>
//       ) : (
//         <span className="text-gray-700">{author.name}</span>
//       )}
//       {i < paper.authors.length - 1 ? ', ' : ''}
//     </span>
//   ))}
// </div>
// <p className="text-gray-700 text-sm mb-4 line-clamp-3">{paper.description}</p> 

// ...

// Data Population
export const researchPapers: ResearchPaper[] = [
  {
    title: 'Proactive Cybersecurity Risk Assessment and Implementation in ICS Protocols for Operational Technology',
    type: 'Research Paper',
    publisher: 'Springer Journal',
    description: 'This study introduces a proactive cybersecurity risk assessment methodology tailored for Industrial Control Systems (ICS) protocols, aiming to secure Operational Technology (OT) infrastructure against evolving threats.',
    link: 'https://doi.org/10.1007/978-981-95-2872-1_43',
    year: '2026',
    fullContent: 'Published on 5th Jan 2026. This study introduces a proactive cybersecurity risk assessment methodology tailored for Industrial Control Systems (ICS) protocols, aiming to secure Operational Technology (OT) infrastructure against evolving threats.',
    authors: [
      { name: 'B. Marimuthu' },
      { name: 'Nishanth Kumar', profileUrl: 'https://nishanthkp.com' },
      { name: 'Shinu Abhi', profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/' }
    ]
  },
  {
    title: 'Cyber Resilience for Containerized Workloads: A NIST-Based Approach to Incident Management and Recovery',
    type: 'Research Paper',
    publisher: 'Springer Journal',
    description: 'This paper proposes a robust incident management and recovery framework for containerized workloads based on NIST standards, ensuring enhanced cyber resilience in dynamic cloud-native environments.',
    link: 'https://doi.org/10.1007/978-981-95-0681-1_3',
    year: '2025',
    fullContent: 'Published on 1st Dec 2025. This paper proposes a robust incident management and recovery framework for containerized workloads based on NIST standards, ensuring enhanced cyber resilience in dynamic cloud-native environments.',
    authors: [
      { name: 'Saritha Nagaraju', profileUrl: 'https://www.linkedin.com/in/saritha82/' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      { name: 'Rashmi Agarwal', profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/' }
    ]
  },
  {
    title: 'A Framework for Automating Compliance as Code Using AWS Config and Ansible',
    type: 'Research Paper',
    publisher: 'Springer Journal',
    description: 'This research presents an automated "Compliance as Code" framework utilizing AWS Config and Ansible to streamline regulatory adherence and security governance in cloud environments.',
    link: 'https://doi.org/10.1007/978-981-96-6254-8_43',
    year: '2025',
    fullContent: 'Published on 26th Sep 2025. This research presents an automated "Compliance as Code" framework utilizing AWS Config and Ansible to streamline regulatory adherence and security governance in cloud environments.',
    authors: [
      { name: 'Lokendra Sondhiya', profileUrl: 'https://www.linkedin.com/in/lokendrasondhiya/' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      { name: 'Rashmi Agarwal', profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/' }
    ]
  },
  {
    title: 'Automated IoT Security Configuration Audit Framework in AWS Cloud for Real-Time Threat Detection',
    type: 'Research Paper',
    publisher: 'IEEE Journal',
    description: 'An automated security configuration audit framework for IoT ecosystems on AWS Cloud, designed to enable real-time threat detection and mitigation through continuous monitoring.',
    link: 'https://doi.org/10.1109/ETCC65847.2025.11108388',
    year: '2025',
    fullContent: 'Published on 12th Aug 2025. An automated security configuration audit framework for IoT ecosystems on AWS Cloud, designed to enable real-time threat detection and mitigation through continuous monitoring.',
    authors: [
      { name: 'Rahul Mohan', profileUrl: 'https://www.linkedin.com/in/rahul-mohan-909a6695/' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      { name: 'Rashmi Agarwal', profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/' }
    ]
  },
  {
    title: 'Enhancing BYOD Security: A Risk Assessment Framework for Corporate Resources',
    type: 'Research Paper',
    publisher: 'Springer Journal',
    description: 'This paper proposes a comprehensive risk assessment framework to enhance Bring Your Own Device (BYOD) security, safeguarding corporate resources while maintaining user flexibility.',
    link: 'https://doi.org/10.1007/978-981-97-6588-1_36',
    year: '2024',
    fullContent: 'Published on 23rd Oct 2024. This paper proposes a comprehensive risk assessment framework to enhance Bring Your Own Device (BYOD) security, safeguarding corporate resources while maintaining user flexibility.',
    authors: [
      { name: 'A. N. Datta', profileUrl: 'https://www.linkedin.com/in/datta-aluru-narayana-994396117/' },
      { name: 'Shinu Abhi', profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/' },
      { name: 'Nishanth Kumar', profileUrl: 'https://nishanthkp.com' }
    ]
  }
];

interface PublicationsProps {
  onViewAllPapers?: () => void;
}

export function Publications({ onViewAllPapers }: PublicationsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const patents = [
    {
      title: 'OAuth and OpenID Connect Security Framework',
      type: 'Patent Application',
      description:
        'Innovative security framework for enhancing OAuth 2.0 and OpenID Connect implementations with additional security layers and threat mitigation strategies.',
      status: 'Published',
      link: '#',
    },
  ];

  const papers: ResearchPaper[] = [
    {
      title: 'Proactive Cybersecurity Risk Assessment and Implementation in ICS Protocols for Operational Technology',
      type: 'Research Paper',
      publisher: 'Springer Journal',
      description: 'This study introduces a proactive cybersecurity risk assessment methodology tailored for Industrial Control Systems (ICS) protocols, aiming to secure Operational Technology (OT) infrastructure against evolving threats.',
      link: 'https://doi.org/10.1007/978-981-95-2872-1_43',
      year: '2026',
      fullContent: 'Published on 5th Jan 2026. This study introduces a proactive cybersecurity risk assessment methodology tailored for Industrial Control Systems (ICS) protocols, aiming to secure Operational Technology (OT) infrastructure against evolving threats.',
      authors: [
        { name: 'B. Marimuthu' },
        { name: 'Nishanth Kumar', profileUrl: 'https://nishanthkp.com' },
        { name: 'Shinu Abhi', profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/' }
      ]
    },
    {
      title: 'Cyber Resilience for Containerized Workloads: A NIST-Based Approach to Incident Management and Recovery',
      type: 'Research Paper',
      publisher: 'Springer Journal',
      description: 'This paper proposes a robust incident management and recovery framework for containerized workloads based on NIST standards, ensuring enhanced cyber resilience in dynamic cloud-native environments.',
      link: 'https://doi.org/10.1007/978-981-95-0681-1_3',
      year: '2025',
      fullContent: 'Published on 1st Dec 2025. This paper proposes a robust incident management and recovery framework for containerized workloads based on NIST standards, ensuring enhanced cyber resilience in dynamic cloud-native environments.',
      authors: [
        { name: 'Saritha Nagaraju', profileUrl: 'https://www.linkedin.com/in/saritha82/' },
        { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
        { name: 'Rashmi Agarwal', profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/' }
      ]
    },
    {
      title: 'A Framework for Automating Compliance as Code Using AWS Config and Ansible',
      type: 'Research Paper',
      publisher: 'Springer Journal',
      description: 'This research presents an automated "Compliance as Code" framework utilizing AWS Config and Ansible to streamline regulatory adherence and security governance in cloud environments.',
      link: 'https://doi.org/10.1007/978-981-96-6254-8_43',
      year: '2025',
      fullContent: 'Published on 26th Sep 2025. This research presents an automated "Compliance as Code" framework utilizing AWS Config and Ansible to streamline regulatory adherence and security governance in cloud environments.',
      authors: [
        { name: 'Lokendra Sondhiya', profileUrl: 'https://www.linkedin.com/in/lokendrasondhiya/' },
        { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
        { name: 'Rashmi Agarwal', profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/' }
      ]
    },
    {
      title: 'Automated IoT Security Configuration Audit Framework in AWS Cloud for Real-Time Threat Detection',
      type: 'Research Paper',
      publisher: 'IEEE Journal',
      description: 'An automated security configuration audit framework for IoT ecosystems on AWS Cloud, designed to enable real-time threat detection and mitigation through continuous monitoring.',
      link: 'https://doi.org/10.1109/ETCC65847.2025.11108388',
      year: '2025',
      fullContent: 'Published on 12th Aug 2025. An automated security configuration audit framework for IoT ecosystems on AWS Cloud, designed to enable real-time threat detection and mitigation through continuous monitoring.',
      authors: [
        { name: 'Rahul Mohan', profileUrl: 'https://www.linkedin.com/in/rahul-mohan-909a6695/' },
        { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
        { name: 'Rashmi Agarwal', profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/' }
      ]
    },
    {
      title: 'Enhancing BYOD Security: A Risk Assessment Framework for Corporate Resources',
      type: 'Research Paper',
      publisher: 'Springer Journal',
      description: 'This paper proposes a comprehensive risk assessment framework to enhance Bring Your Own Device (BYOD) security, safeguarding corporate resources while maintaining user flexibility.',
      link: 'https://doi.org/10.1007/978-981-97-6588-1_36',
      year: '2024',
      fullContent: 'Published on 23rd Oct 2024. This paper proposes a comprehensive risk assessment framework to enhance Bring Your Own Device (BYOD) security, safeguarding corporate resources while maintaining user flexibility.',
      authors: [
        { name: 'A. N. Datta', profileUrl: 'https://www.linkedin.com/in/datta-aluru-narayana-994396117/' },
        { name: 'Shinu Abhi', profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/' },
        { name: 'Nishanth Kumar', profileUrl: 'https://nishanthkp.com' }
      ]
    }
  ];

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="publications" className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Research & Publications
          </h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-3xl mx-auto">
            Contributing to cybersecurity knowledge through research, patents, and publications
          </p>
        </motion.div>

        {/* Patents */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-medium text-[#2596be] mb-4 sm:mb-6 flex items-center">
            <Award className="mr-2" size={20} />
            Patents
          </h3>
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#2596be]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">{patent.title}</h4>
                    <span className="inline-block px-3 py-1 bg-[#2596be]/10 text-[#2596be] text-sm rounded-md mb-3">
                      {patent.type}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md">
                    {patent.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{patent.description}</p>
                <a
                  href={patent.link}
                  className="inline-flex items-center text-[#2596be] hover:text-[#1a7a9e] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-1" />
                  View Patent Application
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers Carousel */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-medium text-[#2596be] flex items-center">
              <BookOpen className="mr-2" size={20} />
              Research Papers
            </h3>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-[#2596be] transition-colors shadow-sm"
                aria-label="Previous"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={scrollNext}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-[#2596be] transition-colors shadow-sm"
                aria-label="Next"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {papers.map((paper, index) => (
                <div
                  key={index}
                  className="flex-none w-[280px] sm:w-[300px] md:w-[340px] bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start mb-2">
                    <FileText className="text-[#2596be] mr-2 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">{paper.title}</h4>
                      <p className="text-sm text-[#6C757D]">
                        {paper.publisher} • {paper.year}
                      </p>
                    </div>
                  </div>

                  {/* Authors Section */}
                  <div className="text-xs text-gray-600 mb-3">
                    <span className="font-medium text-gray-900">Authored by:</span>{' '}
                    {paper.authors.map((author, i) => (
                      <span key={i}>
                        {author.profileUrl ? (
                          <a
                            href={author.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2596be] hover:underline"
                            onClick={(e) => e.stopPropagation()} // Prevent card click
                          >
                            {author.name}
                          </a>
                        ) : (
                          <span className="text-gray-700">{author.name}</span>
                        )}
                        {i < paper.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{paper.description}</p>
                  <button
                    onClick={onViewAllPapers}
                    className="inline-flex items-center text-[#007BFF] hover:text-[#0056b3] transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Read Full Paper
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export papers data for use in ResearchPapersPage
