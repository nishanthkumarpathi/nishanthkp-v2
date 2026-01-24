import React from 'react';
import { Briefcase, Calendar, DollarSign } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Cyber Security Consultant and Trainer',
      company: 'Bahrain Institute of Banking & Finance (BIBF)',
      location: 'Manama, Bahrain',
      period: 'February 2020 - Present',
      responsibilities: [
        'Deliver comprehensive cybersecurity training programs covering network security, cloud security, DevSecOps, and data privacy',
        'Consult with financial institutions on security architecture, compliance frameworks (ISO 27001, PCI DSS), and risk management',
        'Successfully saved clients $32,000 in ISO 27001 implementation costs through optimized processes',
        'Conduct security assessments, penetration testing, and vulnerability assessments for banking sector clients',
        'Develop and deliver customized training curricula for professional development programs',
      ],
      achievements: [
        'Cost Savings: $32,000 in ISO 27001 implementation',
      ],
    },
    {
      title: 'Freelance Security Consultant',
      company: 'Independent',
      location: 'India, UAE, Bahrain, Saudi Arabia',
      period: '2018 - 2020',
      responsibilities: [
        'Provided security consulting services including network design, cloud security architecture, and security assessments',
        'Implemented DevSecOps practices and CI/CD pipeline security for multiple clients',
        'Conducted training workshops on cybersecurity awareness and technical security topics',
        'Achieved $100,000 reduction in educational and operational costs for clients through strategic recommendations',
        'Developed security policies, procedures, and incident response plans',
      ],
      achievements: [
        'Cost Reduction: $100,000 in educational and operational expenses',
        'Incident Resolution: Saved potential losses through rapid response',
      ],
    },
    {
      title: 'Network Security Engineer',
      company: 'Technology Solutions Provider',
      location: 'India',
      period: '2015 - 2018',
      responsibilities: [
        'Designed and implemented network security solutions including firewalls, VPNs, and intrusion detection systems',
        'Managed security operations center (SOC) activities including monitoring, incident response, and threat analysis',
        'Performed regular security audits, vulnerability assessments, and penetration testing',
        'Collaborated with development teams to integrate security into application development lifecycle',
        'Maintained security documentation and compliance reporting for ISO 27001 and other standards',
      ],
    },
    {
      title: 'Systems Administrator & Web Developer',
      company: 'Various Organizations',
      location: 'India',
      period: '2012 - 2015',
      responsibilities: [
        'Managed IT infrastructure including servers, networks, and security systems',
        'Developed and maintained secure web applications with focus on security best practices',
        'Implemented backup and disaster recovery solutions',
        'Provided technical support and troubleshooting for security-related issues',
        'Assisted in security awareness training for end users',
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-3xl mx-auto">
            Over a decade of progressive experience in cybersecurity across multiple industries and geographies
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center text-[#2596be] mb-1">
                    <Briefcase size={18} className="mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="text-[#6C757D] text-sm mb-2">{exp.location}</div>
                </div>
                <div className="flex items-center text-[#6C757D] mt-2 lg:mt-0">
                  <Calendar size={18} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-[#6C757D] mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-[#17A2B8] mr-2 mt-1">▪</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.achievements && (
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-[#2596be] mb-2 flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700 text-sm">
                        <span className="font-medium text-[#17A2B8]">✓</span> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}