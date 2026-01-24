import React from 'react';
import { Heart, Users, GraduationCap, Globe } from 'lucide-react';

export function Philanthropy() {
  const activities = [
    {
      icon: Users,
      role: 'Community Volunteer',
      organization: 'FinOps Foundation',
      period: 'December 2023 - Present',
      description:
        'Contributing to the FinOps community by sharing expertise on cloud cost optimization and security best practices. Participating in working groups focused on cloud financial management and security integration.',
      impact: 'Helping organizations optimize cloud spending while maintaining security posture',
    },
    {
      icon: GraduationCap,
      role: 'Mentor',
      organization: 'London School of Economics (LSE)',
      period: '2022 - Present',
      description:
        'Mentoring students and early-career professionals in cybersecurity, providing guidance on career development, technical skills, and industry best practices.',
      impact: 'Guided 15+ students in their cybersecurity career journey',
    },
    {
      icon: Globe,
      role: 'Community Leader',
      organization: 'null Open Security Community',
      period: '2020 - Present',
      description:
        'Active leadership role in the null open security community, organizing events, workshops, and knowledge-sharing sessions. Contributing to open-source security projects and initiatives.',
      impact: 'Organized 20+ security awareness workshops and community events',
    },
    {
      icon: Users,
      role: 'Volunteer Security Trainer',
      organization: 'Non-Profit Organizations',
      period: '2019 - Present',
      description:
        'Providing pro-bono cybersecurity training and consulting to non-profit organizations, helping them improve their security posture with limited budgets.',
      impact: 'Secured 10+ non-profit organizations against cyber threats',
    },
    {
      icon: GraduationCap,
      role: 'Open Source Contributor',
      organization: 'OWASP & Security Communities',
      period: '2018 - Present',
      description:
        'Contributing to OWASP projects, security documentation, and open-source security tools. Sharing knowledge through blog posts, tutorials, and community forums.',
      impact: 'Multiple acknowledgments from OWASP for security research contributions',
    },
  ];

  return (
    <section id="philanthropy" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Community & Philanthropy
          </h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-3xl mx-auto">
            Giving back to the community through mentorship, volunteering, and knowledge sharing
          </p>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16 text-center">
          <div className="bg-gradient-to-r from-[#2596be] to-[#1a7a9e] text-white p-4 sm:p-6 lg:p-8 rounded-lg">
            <Heart className="mx-auto mb-3 sm:mb-4 text-[#17A2B8]" size={28} />
            <p className="text-base sm:text-lg italic mb-3 sm:mb-4">
              "Security is not just a profession—it's a responsibility to protect and educate. 
              Through community involvement and mentorship, we can build a safer digital world for everyone."
            </p>
            <p className="text-sm text-white/80">— Nishanth Kumar Pathi</p>
          </div>
        </div>

        {/* Activities */}
        <div className="space-y-4 sm:space-y-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#17A2B8]/10 rounded-lg flex items-center justify-center">
                    <activity.icon className="text-[#17A2B8]" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1">{activity.role}</h3>
                      <p className="text-[#2596be] font-medium">{activity.organization}</p>
                    </div>
                    <span className="text-sm text-[#6C757D] mt-2 sm:mt-0">{activity.period}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{activity.description}</p>
                  <div className="flex items-start">
                    <span className="text-[#17A2B8] font-medium text-sm mr-2">Impact:</span>
                    <span className="text-gray-700 text-sm">{activity.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="text-center p-4 sm:p-6 bg-[#F8F9FA] rounded-lg">
            <div className="text-2xl sm:text-3xl font-light text-[#2596be] mb-1 sm:mb-2">5+</div>
            <div className="text-xs sm:text-sm text-[#6C757D]">Community Organizations</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-[#F8F9FA] rounded-lg">
            <div className="text-2xl sm:text-3xl font-light text-[#2596be] mb-1 sm:mb-2">20+</div>
            <div className="text-xs sm:text-sm text-[#6C757D]">Workshops Organized</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-[#F8F9FA] rounded-lg">
            <div className="text-2xl sm:text-3xl font-light text-[#2596be] mb-1 sm:mb-2">15+</div>
            <div className="text-xs sm:text-sm text-[#6C757D]">Students Mentored</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-[#F8F9FA] rounded-lg">
            <div className="text-2xl sm:text-3xl font-light text-[#2596be] mb-1 sm:mb-2">10+</div>
            <div className="text-xs sm:text-sm text-[#6C757D]">Non-Profits Secured</div>
          </div>
        </div>
      </div>
    </section>
  );
}
