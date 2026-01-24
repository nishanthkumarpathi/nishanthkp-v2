import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Shield, Globe, Users } from 'lucide-react';

export function Impact() {
  const achievements = [
    {
      icon: <DollarSign size={32} className="text-white" />,
      color: "bg-green-500",
      value: "$132,000+",
      label: "Total Cost Savings",
      description: "Delivered through strategic security implementations and optimizations"
    },
    {
      icon: <Shield size={32} className="text-white" />,
      color: "bg-blue-500",
      value: "50+",
      label: "Enterprise Projects",
      description: "Successfully architected and delivered across multiple industries"
    },
    {
      icon: <Globe size={32} className="text-white" />,
      color: "bg-purple-500",
      value: "10+",
      label: "Countries",
      description: "Led security initiatives across Middle East, Asia, and North Africa"
    },
    {
      icon: <Users size={32} className="text-white" />,
      color: "bg-orange-500",
      value: "100+",
      label: "Professionals Trained",
      description: "Delivered cybersecurity training to banking and enterprise professionals"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6"
          >
            Leadership Impact & <span className="font-semibold">Achievements</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-[#0B1C3E] mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Driving measurable business value through strategic security leadership, technical excellence, and innovative solutions across global enterprises
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all border border-gray-100"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-gray-200`}>
                {item.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.value}</h3>
              <p className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">{item.label}</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
