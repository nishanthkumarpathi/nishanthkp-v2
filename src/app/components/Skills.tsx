import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Security Tools & Technologies',
      skills: [
        'Splunk',
        'AWS GuardDuty',
        'Azure Sentinel',
        'Qualys',
        'Nessus',
        'Burp Suite',
        'Metasploit',
        'Wireshark',
        'Nmap',
        'OWASP ZAP',
        'FortiGate',
        'Palo Alto Networks',
      ],
    },
    {
      category: 'Cloud Platforms & Services',
      skills: [
        'AWS (EC2, S3, IAM, CloudTrail, Config)',
        'Microsoft Azure',
        'Azure Active Directory',
        'AWS Security Hub',
        'Azure Security Center',
        'CloudFormation',
        'Azure Resource Manager',
      ],
    },
    {
      category: 'DevSecOps & Automation',
      skills: [
        'Jenkins',
        'GitLab CI/CD',
        'GitHub Actions',
        'Terraform',
        'Ansible',
        'Docker',
        'Kubernetes',
        'Python',
        'Bash',
        'PowerShell',
      ],
    },
    {
      category: 'Security Frameworks & Standards',
      skills: [
        'ISO 27001/27002',
        'NIST Cybersecurity Framework',
        'CIS Controls',
        'OWASP Top 10',
        'GDPR',
        'PCI DSS',
        'HIPAA',
        'SOC 2',
        'Cloud Security Alliance (CSA)',
      ],
    },
    {
      category: 'Identity & Access Management',
      skills: [
        'Active Directory',
        'Azure AD',
        'OAuth 2.0',
        'OpenID Connect',
        'SAML',
        'Multi-Factor Authentication (MFA)',
        'Privileged Access Management (PAM)',
        'Identity Governance',
      ],
    },
    {
      category: 'Security Operations',
      skills: [
        'Incident Response',
        'Threat Hunting',
        'Security Monitoring',
        'Log Analysis',
        'Forensic Investigation',
        'Vulnerability Management',
        'Security Architecture Review',
        'Risk Assessment',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-3xl mx-auto">
            Comprehensive expertise across security tools, cloud platforms, automation frameworks, 
            and industry standards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#F8F9FA] p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-[#2596be] mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-700 rounded-md border border-gray-200 hover:border-[#007BFF] hover:text-[#007BFF] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}