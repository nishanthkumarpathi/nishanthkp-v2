import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

const orgs = [
  {
    name: 'FinOps Foundation',
    role: 'Active Contributor',
    description: 'Contributing to cloud financial management best practices and helping organizations optimize cloud costs while maintaining security standards.',
    mentions: ['Global FinOps Community', 'Community Forums', 'Best Practice Documentation', 'Knowledge Sharing'],
    icon: Target,
  },
  {
    name: 'London School of Economics (LSE)',
    role: 'Mentor',
    description: 'Mentoring students in cybersecurity, cloud security, and data privacy, guiding them through real-world challenges and career development.',
    mentions: ['Future Security Leaders', '1:1 Mentorship', 'Career Guidance', 'Technical Mentoring'],
    icon: Lightbulb,
  },
  {
    name: 'Bahrain Institute of Banking and Finance (BIBF)',
    role: 'Cybersecurity Trainer',
    description: 'Delivering specialized training programs on cybersecurity, cloud security, and compliance for banking and financial sector professionals.',
    mentions: ['Banking Sector Professionals', 'Professional Training', 'Certification Programs', 'Workshops'],
    icon: Users,
  }
];

export function OrganizationalCollaborations() {
  return (
    <section id="collaborations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4 flex items-center justify-center gap-3">
            <span className="text-[#2596be] text-4xl">♡</span> Organizational Collaborations
          </h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {orgs.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2596be]"></div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{org.name}</h3>
              <p className="text-[#2596be] font-medium text-sm mb-6">{org.role}</p>

              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                {org.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-3 text-gray-800 font-semibold text-sm">
                  <Target size={16} className="text-[#001f3f]" />
                  {org.mentions[0]}
                </div>
                <div className="flex flex-wrap gap-2">
                  {org.mentions.slice(1).map((mention, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">
                      {mention}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
