import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Globe } from 'lucide-react';

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
    // In production, this would integrate with Firebase Firestore
    // For now, simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pathinishanth@gmail.com',
      link: 'mailto:pathinishanth@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Manama, Bahrain',
      link: null,
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'nishanthkp.com',
      link: 'https://nishanthkp.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#001f3f] mx-auto"></div>
          <p className="mt-6 text-lg text-[#6C757D] max-w-2xl mx-auto">
            Interested in consulting services, training programs, or collaboration opportunities? 
            I'd love to hear from you. Let's discuss how I can help secure your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-[#001f3f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-[#001f3f]" size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[#6C757D] mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-900 hover:text-[#007BFF] transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Professional Services</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <span className="text-[#17A2B8] mr-2">▪</span>
                  <span>Cybersecurity Consulting & Advisory</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#17A2B8] mr-2">▪</span>
                  <span>Security Architecture & Assessment</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#17A2B8] mr-2">▪</span>
                  <span>Professional Training & Workshops</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#17A2B8] mr-2">▪</span>
                  <span>Cloud Security Implementation</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#17A2B8] mr-2">▪</span>
                  <span>Compliance & Governance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Availability</h4>
              <p className="text-gray-700 mb-2">
                Available for consulting projects and training programs
              </p>
              <p className="text-[#6C757D] text-sm">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  placeholder="What can I help you with?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#17A2B8] text-white rounded-md hover:bg-[#138496] transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}