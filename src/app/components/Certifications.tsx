import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: 'Certified Information Privacy Manager (CIPM)',
      issuer: 'IAPP',
      year: '2023',
      category: 'Privacy',
    },
    {
      name: 'Certified Information Privacy Technologist (CIPT)',
      issuer: 'IAPP',
      year: '2023',
      category: 'Privacy',
    },
    {
      name: 'Certified Information Systems Auditor (CISA)',
      issuer: 'ISACA',
      year: '2022',
      category: 'Audit & Governance',
    },
    {
      name: 'Certified Information Security Manager (CISM)',
      issuer: 'ISACA',
      year: '2021',
      category: 'Security Management',
    },
    {
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      year: '2022',
      category: 'Cloud Security',
    },
    {
      name: 'AWS Certified Security – Specialty',
      issuer: 'Amazon Web Services',
      year: '2021',
      category: 'Cloud Security',
    },
    {
      name: 'Microsoft Certified: Azure Security Engineer Associate',
      issuer: 'Microsoft',
      year: '2021',
      category: 'Cloud Security',
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      year: '2019',
      category: 'Penetration Testing',
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2018',
      category: 'Security Fundamentals',
    },
    {
      name: 'ISO 27001 Lead Implementer',
      issuer: 'PECB',
      year: '2020',
      category: 'Compliance',
    },
  ];

  const categories = Array.from(new Set(certifications.map(cert => cert.category)));

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise across cybersecurity, 
            cloud security, privacy, and compliance domains
          </p>
        </div>

        {/* Certifications by Category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl sm:text-2xl font-medium text-[#2596be] mb-4 sm:mb-6 flex items-center">
                <Award className="mr-2" size={20} />
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {certifications
                  .filter(cert => cert.category === category)
                  .map((cert, index) => (
                    <div
                      key={index}
                      className="bg-[#F8F9FA] p-4 sm:p-6 rounded-lg border-l-4 border-[#2596be] hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <CheckCircle className="text-[#2596be] mr-2 flex-shrink-0 mt-1" size={20} />
                        <h4 className="font-medium text-gray-900">{cert.name}</h4>
                      </div>
                      <div className="text-sm text-[#6C757D] ml-7">
                        <p className="mb-1">{cert.issuer}</p>
                        <p className="text-xs">{cert.year}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-[#2596be] to-[#1a7a9e] text-white p-4 sm:p-6 lg:p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1 sm:mb-2">{certifications.length}+</div>
              <div className="text-xs sm:text-sm text-white/80">Professional Certifications</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1 sm:mb-2">{categories.length}</div>
              <div className="text-xs sm:text-sm text-white/80">Security Domains</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
