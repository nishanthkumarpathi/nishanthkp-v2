import React from 'react';
import { FileText, Award, ExternalLink, BookOpen } from 'lucide-react';

export function Publications() {
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

  const papers = [
    {
      title: 'Securing a SaaS Application on AWS: Best Practices and Implementation',
      type: 'Research Paper',
      publisher: 'Springer',
      description:
        'Comprehensive research on security architecture patterns for SaaS applications deployed on AWS, covering IAM, data encryption, network security, and compliance frameworks.',
      link: '#',
      year: '2023',
    },
    {
      title: 'DevSecOps Integration in Cloud-Native Applications',
      type: 'Technical Paper',
      publisher: 'IEEE',
      description:
        'Analysis of security integration practices in CI/CD pipelines for cloud-native applications, with focus on automated security testing and continuous compliance.',
      link: '#',
      year: '2022',
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

  return (
    <section id="publications" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Publications & Research
          </h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-3xl mx-auto">
            Contributing to the cybersecurity community through research, patents, and technical publications
          </p>
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

        {/* Research Papers */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-[#2596be] mb-6 flex items-center">
            <BookOpen className="mr-2" size={24} />
            Research Papers
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {papers.map((paper, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start mb-3">
                  <FileText className="text-[#2596be] mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{paper.title}</h4>
                    <p className="text-sm text-[#6C757D]">
                      {paper.publisher} • {paper.year}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{paper.description}</p>
                <a
                  href={paper.link}
                  className="inline-flex items-center text-[#007BFF] hover:text-[#0056b3] transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} className="mr-1" />
                  Read Full Paper
                </a>
              </div>
            ))}
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
