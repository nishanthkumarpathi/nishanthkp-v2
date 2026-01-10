import React from 'react';
import { Shield, Globe, Award, Code, Users, Cloud } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Shield,
      title: 'Security Architecture',
      description: 'Expert in designing comprehensive security frameworks across network, cloud, and application layers',
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'AWS & Azure security specialist with certifications in cloud architecture and security',
    },
    {
      icon: Code,
      title: 'DevSecOps',
      description: 'Integrating security into CI/CD pipelines with automation and security-first approach',
    },
    {
      icon: Award,
      title: 'Data Privacy & Compliance',
      description: 'CIPM & CIPT certified with expertise in GDPR, ISO 27001, and privacy frameworks',
    },
    {
      icon: Users,
      title: 'Leadership & Training',
      description: 'Leading security teams and delivering professional training across multiple domains',
    },
    {
      icon: Globe,
      title: 'International Experience',
      description: 'Worked across India, Bahrain, UAE, and Saudi Arabia with multicultural teams',
    },
  ];

  const coreExpertise = [
    'Network & Application Security',
    'Identity & Access Management (IAM)',
    'Security Operations Center (SOC)',
    'Cloud Posture Management',
    'DevSecOps & CI/CD Security',
    'Data Loss Prevention (DLP)',
    'Security Information & Event Management (SIEM)',
    'Vulnerability Assessment & Penetration Testing',
    'Incident Response & Forensics',
    'Security Governance, Risk & Compliance (GRC)',
    'Zero Trust Architecture',
    'Container & Kubernetes Security',
  ];

  const countries = [
    'India',
    'Bahrain',
    'United Arab Emirates',
    'Saudi Arabia',
  ];

  return (
    <section id="about" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#001f3f] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am a seasoned cybersecurity professional with over 10 years of experience architecting and 
            implementing comprehensive security solutions across diverse industries. My expertise spans 
            network security, cloud security, DevSecOps, identity and access management, data privacy, 
            and security governance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Throughout my career, I have successfully led security transformations that delivered significant 
            business value, including cost savings of over $132,000 in ISO 27001 implementation, $100,000 
            reduction in educational costs, and rapid incident resolution saving potential losses. I combine 
            deep technical expertise with strategic thinking to align security initiatives with business objectives.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a certified professional (CIPM, CIPT, CISA, CISM, AWS Solutions Architect), published researcher, 
            and active community contributor, I am passionate about advancing the field of cybersecurity through 
            innovation, education, and mentorship.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#001f3f]/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-[#001f3f]" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Expertise */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 className="text-2xl font-medium text-[#001f3f] mb-6">Core Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreExpertise.map((skill, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#17A2B8] mr-2 mt-1">▪</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* International Experience */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-medium text-[#001f3f] mb-6 flex items-center">
            <Globe className="mr-2" size={24} />
            International Experience
          </h3>
          <p className="text-gray-700 mb-4">
            I have had the privilege of working with organizations and clients across multiple countries, 
            bringing diverse perspectives and cross-cultural expertise to security solutions:
          </p>
          <div className="flex flex-wrap gap-3">
            {countries.map((country, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#F8F9FA] text-gray-700 rounded-md border border-gray-200"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}