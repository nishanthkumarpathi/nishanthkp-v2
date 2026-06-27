import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';
import { collaborationOrgs } from '../data/collaborations';

const iconMap = {
  target: Target,
  lightbulb: Lightbulb,
  users: Users,
};

export function CollaborationsAndCommunity() {
  return (
    <section id="collaborations-community" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
            Collaborations & Community
          </h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Building partnerships and giving back through education, mentorship, and knowledge sharing
          </p>
        </motion.div>

        {/* Organizational Collaborations */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 flex items-center gap-2"
          >
            <span className="text-[#2596be] text-2xl">♡</span> Organizational Collaborations
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {collaborationOrgs.map((org, index) => {
              const OrgIcon = iconMap[org.icon];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#2596be]"></div>

                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{org.name}</h4>
                <p className="text-[#2596be] font-medium text-sm mb-6">{org.role}</p>

                <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                  {org.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3 text-gray-800 font-semibold text-sm">
                    <OrgIcon size={16} className="text-[#001f3f]" />
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
