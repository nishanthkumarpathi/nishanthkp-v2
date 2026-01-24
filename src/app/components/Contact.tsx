import React, { useState } from 'react';
import { Mail, MapPin, Send, Globe, Shield, Server, GraduationCap, Cloud, FileCheck, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Strategic advisory and risk assessment',
    },
    {
      icon: Server,
      title: 'Security Architecture',
      description: 'Design & implementation of secure systems',
    },
    {
      icon: GraduationCap,
      title: 'Training & Workshops',
      description: 'Professional development programs',
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'AWS, Azure & GCP security solutions',
    },
    {
      icon: FileCheck,
      title: 'Compliance & Governance',
      description: 'ISO 27001, SOC 2, GDPR compliance',
    },
    {
      icon: Mail,
      title: 'Data Privacy',
      description: 'Privacy engineering & DPIA assessments',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-[#2596be] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to enhance your organization's security posture? Let's discuss how I can help.
          </p>
        </motion.div>

        {/* Professional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-medium text-center text-gray-900 mb-8">
            Professional Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#2596be]/10 to-[#2596be]/5 rounded-xl flex items-center justify-center group-hover:from-[#2596be]/20 group-hover:to-[#2596be]/10 transition-colors">
                  <service.icon className="text-[#2596be]" size={22} />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{service.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Location Card */}
            <div className="bg-[#0B1C3E] text-white p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2596be]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-[#2596be]" size={20} />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium">Manama, Bahrain</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#2596be]/20 rounded-lg flex items-center justify-center">
                  <Globe className="text-[#2596be]" size={20} />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 text-sm">Website</p>
                  <a href="https://nishanthkp.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#2596be] transition-colors">
                    nishanthkp.com
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#2596be] to-[#1a7a9e] p-6 rounded-2xl text-white">
              <h4 className="font-semibold mb-2">Ready to get started?</h4>
              <p className="text-white/80 text-sm mb-4">
                Fill out the form and let's discuss your security needs.
              </p>
              <div className="flex items-center text-sm font-medium">
                <ArrowRight size={16} className="mr-1" />
                Free initial consultation
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:border-transparent focus:bg-white transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:border-transparent focus:bg-white transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:border-transparent focus:bg-white transition-all"
                    placeholder="What can I help you with?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2596be] focus:border-transparent focus:bg-white transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#2596be] text-white rounded-xl hover:bg-[#1a7a9e] transition-all duration-300 flex items-center justify-center font-medium shadow-lg shadow-[#2596be]/20 hover:shadow-xl hover:shadow-[#2596be]/30"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center flex items-center justify-center"
                  >
                    <CheckCircle size={18} className="mr-2" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}