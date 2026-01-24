import React from 'react';
import { Shield, Server, GraduationCap, Cloud, FileCheck, Mail, ArrowRight, Eye, Settings, Activity, Zap, GitBranch, Database, DollarSign, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const services = [
    {
      icon: Shield,
      title: 'Cyber Security Engineering',
      description: 'Network security, IAM, and intrusion detection systems',
    },
    {
      icon: Eye,
      title: 'Data Privacy Engineering',
      description: 'GDPR/CCPA compliance, data masking, and privacy by design',
    },
    {
      icon: Settings,
      title: 'Cloud Automation Engineering',
      description: 'IaC (Terraform/Ansible), CI/CD pipelines, and provisioning',
    },
    {
      icon: Activity,
      title: 'Site Reliability Engineering',
      description: 'SLIs/SLOs, error budgeting, and performance monitoring',
    },
    {
      icon: Zap,
      title: 'Chaos Engineering',
      description: 'Fault injection, resilience testing, and game days',
    },
    {
      icon: GitBranch,
      title: 'DevSecOps',
      description: 'SAST/DAST, container scanning, and security gates',
    },
    {
      icon: Database,
      title: 'DataSecOps',
      description: 'Data classification, DLP, and encryption at rest/transit',
    },
    {
      icon: Cloud,
      title: 'CloudNativeOps',
      description: 'Kubernetes, service mesh, and serverless security',
    },
    {
      icon: DollarSign,
      title: 'FinOps',
      description: 'Cost optimization, budget tracking, and resource tagging',
    },
  ];

  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3">
            Let's Work Together
          </h2>
          <div className="w-16 h-1 bg-[#2596be] mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ready to enhance your organization's security posture? Let's discuss how I can help.
          </p>
        </motion.div>

        {/* Professional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 sm:mb-14"
        >
          <h3 className="text-lg sm:text-xl font-medium text-center text-gray-900 mb-6">
            Professional Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#2596be]/10 to-[#2596be]/5 rounded-lg flex items-center justify-center group-hover:from-[#2596be]/20 group-hover:to-[#2596be]/10 transition-colors">
                  <service.icon className="text-[#2596be]" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">{service.title}</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LinkedIn CTA - Replaces Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 bg-[#0077B5]/10 rounded-full flex items-center justify-center mb-4">
              <Linkedin className="text-[#0077B5]" size={24} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect on LinkedIn</h3>

            <p className="text-sm text-gray-600 mb-6 max-w-sm mx-auto">
              Have a project in mind or just want to chat about cybersecurity? The best way to reach me is via direct message on LinkedIn.
            </p>

            <a
              href="https://www.linkedin.com/in/nishanthkumarpathi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white font-medium text-sm rounded-lg hover:bg-[#006097] transition-all shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30"
            >
              <span className="mr-2">DM on LinkedIn</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}