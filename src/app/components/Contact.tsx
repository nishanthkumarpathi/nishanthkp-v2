import { Shield, Cloud, ArrowRight, Eye, Settings, Activity, Zap, GitBranch, Database, DollarSign, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { contactServices } from '../data/contactServices';
import { SectionHeader } from './SectionHeader';

const iconMap = {
  shield: Shield,
  eye: Eye,
  settings: Settings,
  activity: Activity,
  zap: Zap,
  gitBranch: GitBranch,
  database: Database,
  cloud: Cloud,
  dollarSign: DollarSign,
};

export function Contact() {
  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28 bg-surface-2 overflow-hidden">
      <div className="glow-brand absolute bottom-0 left-1/2 -translate-x-1/2 h-[40vh] w-[60vw] rounded-full opacity-60" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="07 — Let's Build"
          title={<>Let's Work <span className="text-gradient-brand">Together</span></>}
          intro="Ready to strengthen your organization's security posture? Here's where I can help."
          className="mb-10 sm:mb-14"
        />

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {contactServices.map((service, index) => {
              const ServiceIcon = iconMap[service.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.04, 0.3) }}
                  className="group rounded-xl border border-line bg-surface p-4 sm:p-5 hover:border-brand-bright/40 hover:bg-surface-3 transition-all text-center"
                >
                  <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-brand-soft flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ServiceIcon className="text-brand-bright" size={20} />
                  </div>
                  <h4 className="font-medium text-content text-xs sm:text-sm mb-1">{service.title}</h4>
                  <p className="text-[10px] sm:text-xs text-faint leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="relative rounded-3xl border border-line bg-surface p-8 sm:p-10 flex flex-col items-center text-center overflow-hidden">
            <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
            <div className="relative">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#0077B5]/15 flex items-center justify-center">
                <Linkedin className="text-[#0a8fd6]" size={26} />
              </div>
              <h3 className="font-display text-2xl font-light text-content mb-2">Connect on LinkedIn</h3>
              <p className="text-sm text-muted mb-7 max-w-sm mx-auto leading-relaxed">
                Have a project in mind or want to talk cybersecurity? The fastest way to reach me is a direct message on LinkedIn.
              </p>
              <a
                href="https://www.linkedin.com/in/nishanthkumarpathi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-7 py-3.5 rounded-lg bg-[#0077B5] text-white font-medium text-sm hover:bg-[#006097] transition-colors shadow-lg shadow-[#0077B5]/20"
              >
                <span className="mr-2">DM on LinkedIn</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
