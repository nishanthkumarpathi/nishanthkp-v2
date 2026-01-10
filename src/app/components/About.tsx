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

  return (
    <section id="about" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">What I Bring to the Table</h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto"></div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#2596be]/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-[#2596be]" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Expertise */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 className="text-2xl font-medium text-[#2596be] mb-6">Core Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreExpertise.map((skill, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#2596be] mr-2 mt-1">▪</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}