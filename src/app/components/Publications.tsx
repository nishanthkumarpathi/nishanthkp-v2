import React, { useState } from 'react';
import { FileText, Award, ExternalLink, BookOpen, GraduationCap, ChevronLeft, ChevronRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';

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
}

interface PublicationsProps {
  onViewAllPapers?: () => void;
}

export function Publications({ onViewAllPapers }: PublicationsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const stats = [
    {
      value: '1',
      label: 'Patent',
      icon: Award,
    },
    {
      value: '6+',
      label: 'Published Research Papers',
      icon: BookOpen,
    },
    {
      value: '10+',
      label: 'Students Mentored',
      icon: GraduationCap,
    },
  ];

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
      title: 'Securing a SaaS Application on AWS: Best Practices and Implementation',
      type: 'Research Paper',
      publisher: 'Springer',
      description:
        'Comprehensive research on security architecture patterns for SaaS applications deployed on AWS, covering IAM, data encryption, network security, and compliance frameworks.',
      link: '#',
      year: '2023',
      fullContent: 'This research paper explores comprehensive security architecture patterns for Software as a Service (SaaS) applications deployed on Amazon Web Services (AWS). The study covers Identity and Access Management (IAM), data encryption strategies, network security configurations, and compliance frameworks. Key findings include best practices for implementing least-privilege access, encryption at rest and in transit, VPC security configurations, and achieving SOC 2 compliance.',
    },
    {
      title: 'DevSecOps Integration in Cloud-Native Applications',
      type: 'Technical Paper',
      publisher: 'IEEE',
      description:
        'Analysis of security integration practices in CI/CD pipelines for cloud-native applications, with focus on automated security testing and continuous compliance.',
      link: '#',
      year: '2022',
      fullContent: 'This technical paper analyzes security integration practices in Continuous Integration/Continuous Deployment (CI/CD) pipelines for cloud-native applications. The research focuses on automated security testing methodologies including SAST, DAST, and SCA tools, as well as continuous compliance monitoring. The paper provides practical implementation strategies for integrating security gates into DevOps workflows without impacting deployment velocity.',
    },
    {
      title: 'Zero Trust Architecture for Enterprise Networks',
      type: 'Research Paper',
      publisher: 'ACM',
      description:
        'Framework for implementing Zero Trust security model in enterprise environments, addressing identity verification, micro-segmentation, and continuous monitoring.',
      link: '#',
      year: '2022',
      fullContent: 'This research presents a comprehensive framework for implementing Zero Trust Architecture (ZTA) in enterprise network environments. The paper addresses key pillars including identity verification, device authentication, micro-segmentation strategies, and continuous monitoring techniques. Case studies demonstrate successful ZTA implementations across various industry verticals.',
    },
    {
      title: 'Machine Learning for Threat Detection in Cloud Environments',
      type: 'Research Paper',
      publisher: 'Springer',
      description:
        'Application of machine learning algorithms for real-time threat detection and anomaly identification in cloud infrastructure.',
      link: '#',
      year: '2021',
      fullContent: 'This paper explores the application of machine learning algorithms for real-time threat detection and anomaly identification in cloud infrastructure. The research evaluates various ML models including supervised learning for known threat detection and unsupervised learning for zero-day threat identification. Performance benchmarks demonstrate significant improvements in detection accuracy and response time.',
    },
    {
      title: 'Container Security Best Practices for Kubernetes',
      type: 'Technical Paper',
      publisher: 'CNCF',
      description:
        'Comprehensive guide to securing containerized applications in Kubernetes environments, covering image security, runtime protection, and network policies.',
      link: '#',
      year: '2021',
      fullContent: 'This technical guide provides comprehensive security best practices for containerized applications running in Kubernetes environments. Topics covered include container image security scanning, runtime protection mechanisms, network policy implementation, secrets management, and RBAC configuration. The paper includes practical examples and configuration templates.',
    },
    {
      title: 'API Security in Microservices Architecture',
      type: 'Research Paper',
      publisher: 'IEEE',
      description:
        'Security patterns and practices for protecting APIs in distributed microservices systems, including authentication, rate limiting, and threat mitigation.',
      link: '#',
      year: '2020',
      fullContent: 'This research paper examines security patterns and practices for protecting Application Programming Interfaces (APIs) in distributed microservices architectures. The study covers authentication mechanisms (OAuth 2.0, JWT), rate limiting strategies, input validation, and common threat mitigation techniques. Implementation examples demonstrate security controls for RESTful and GraphQL APIs.',
    },
  ];

  const acknowledgments = [
    {
      title: 'OWASP Security Research Acknowledgment',
      organization: 'OWASP Foundation',
      description:
        'Recognized for contributions to OWASP security research and documentation, particularly in the areas of API security and secure coding practices.',
      year: '2022',
    },
    {
      title: 'Cloud Security Alliance Contributor',
      organization: 'CSA',
      description:
        'Contributed to Cloud Security Alliance best practices documentation and guidance on cloud security posture management.',
      year: '2021',
    },
  ];

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="publications" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Research, Publications & Mentorship
          </h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-3xl mx-auto">
            Contributing to cybersecurity knowledge through research, patents, publications, and mentoring the next generation
          </p>
        </motion.div>

        {/* Stats Section - Made smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#001f3f] rounded-xl p-6 text-center text-white flex flex-col items-center justify-center hover:bg-[#002a52] transition-colors min-h-[140px]"
            >
              <div className="mb-3 text-[#2596be]">
                <stat.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Patents */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-[#2596be] mb-6 flex items-center">
            <Award className="mr-2" size={24} />
            Patents
          </h3>
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#2596be]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-gray-900 mb-2">{patent.title}</h4>
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
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-medium text-[#2596be] flex items-center">
              <BookOpen className="mr-2" size={24} />
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
            <div className="flex gap-6">
              {papers.map((paper, index) => (
                <div
                  key={index}
                  className="flex-none w-[340px] bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start mb-3">
                    <FileText className="text-[#2596be] mr-2 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">{paper.title}</h4>
                      <p className="text-sm text-[#6C757D]">
                        {paper.publisher} • {paper.year}
                      </p>
                    </div>
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

        {/* Acknowledgments */}
        <div>
          <h3 className="text-2xl font-medium text-[#2596be] mb-6 flex items-center">
            <Award className="mr-2" size={24} />
            Industry Acknowledgments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acknowledgments.map((ack, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#2596be]/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="text-[#2596be]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{ack.title}</h4>
                    <p className="text-sm text-[#6C757D]">
                      {ack.organization} • {ack.year}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{ack.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Export papers data for use in ResearchPapersPage
export const researchPapers: ResearchPaper[] = [
  {
    title: 'Securing a SaaS Application on AWS: Best Practices and Implementation',
    type: 'Research Paper',
    publisher: 'Springer',
    description:
      'Comprehensive research on security architecture patterns for SaaS applications deployed on AWS, covering IAM, data encryption, network security, and compliance frameworks.',
    link: '#',
    year: '2023',
    fullContent: 'This research paper explores comprehensive security architecture patterns for Software as a Service (SaaS) applications deployed on Amazon Web Services (AWS). The study covers Identity and Access Management (IAM), data encryption strategies, network security configurations, and compliance frameworks. Key findings include best practices for implementing least-privilege access, encryption at rest and in transit, VPC security configurations, and achieving SOC 2 compliance.',
  },
  {
    title: 'DevSecOps Integration in Cloud-Native Applications',
    type: 'Technical Paper',
    publisher: 'IEEE',
    description:
      'Analysis of security integration practices in CI/CD pipelines for cloud-native applications, with focus on automated security testing and continuous compliance.',
    link: '#',
    year: '2022',
    fullContent: 'This technical paper analyzes security integration practices in Continuous Integration/Continuous Deployment (CI/CD) pipelines for cloud-native applications. The research focuses on automated security testing methodologies including SAST, DAST, and SCA tools, as well as continuous compliance monitoring. The paper provides practical implementation strategies for integrating security gates into DevOps workflows without impacting deployment velocity.',
  },
  {
    title: 'Zero Trust Architecture for Enterprise Networks',
    type: 'Research Paper',
    publisher: 'ACM',
    description:
      'Framework for implementing Zero Trust security model in enterprise environments, addressing identity verification, micro-segmentation, and continuous monitoring.',
    link: '#',
    year: '2022',
    fullContent: 'This research presents a comprehensive framework for implementing Zero Trust Architecture (ZTA) in enterprise network environments. The paper addresses key pillars including identity verification, device authentication, micro-segmentation strategies, and continuous monitoring techniques. Case studies demonstrate successful ZTA implementations across various industry verticals.',
  },
  {
    title: 'Machine Learning for Threat Detection in Cloud Environments',
    type: 'Research Paper',
    publisher: 'Springer',
    description:
      'Application of machine learning algorithms for real-time threat detection and anomaly identification in cloud infrastructure.',
    link: '#',
    year: '2021',
    fullContent: 'This paper explores the application of machine learning algorithms for real-time threat detection and anomaly identification in cloud infrastructure. The research evaluates various ML models including supervised learning for known threat detection and unsupervised learning for zero-day threat identification. Performance benchmarks demonstrate significant improvements in detection accuracy and response time.',
  },
  {
    title: 'Container Security Best Practices for Kubernetes',
    type: 'Technical Paper',
    publisher: 'CNCF',
    description:
      'Comprehensive guide to securing containerized applications in Kubernetes environments, covering image security, runtime protection, and network policies.',
    link: '#',
    year: '2021',
    fullContent: 'This technical guide provides comprehensive security best practices for containerized applications running in Kubernetes environments. Topics covered include container image security scanning, runtime protection mechanisms, network policy implementation, secrets management, and RBAC configuration. The paper includes practical examples and configuration templates.',
  },
  {
    title: 'API Security in Microservices Architecture',
    type: 'Research Paper',
    publisher: 'IEEE',
    description:
      'Security patterns and practices for protecting APIs in distributed microservices systems, including authentication, rate limiting, and threat mitigation.',
    link: '#',
    year: '2020',
    fullContent: 'This research paper examines security patterns and practices for protecting Application Programming Interfaces (APIs) in distributed microservices architectures. The study covers authentication mechanisms (OAuth 2.0, JWT), rate limiting strategies, input validation, and common threat mitigation techniques. Implementation examples demonstrate security controls for RESTful and GraphQL APIs.',
  },
];
