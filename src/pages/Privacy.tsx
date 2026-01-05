import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiChevronDown,
  FiChevronUp,
  FiDatabase,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiUser
} from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';

const Privacy = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sections = [
    {
      title: 'Information We Collect',
      icon: <FiDatabase className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
      content: [
        'Personal information (name, email, company details)',
        'Usage data and analytics',
        'Device and browser information',
        'Cookies and similar technologies'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <FiUser className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-600',
      content: [
        'Provide and maintain our services',
        'Improve user experience',
        'Send important updates and notifications',
        'Analyze usage patterns and trends'
      ]
    },
    {
      title: 'Data Security',
      icon: <FiLock className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      content: [
        'Industry-standard encryption',
        'Regular security audits',
        'Access controls and authentication',
        'Secure data storage and transmission'
      ]
    },
    {
      title: 'Your Rights',
      icon: <FiShield className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-600',
      content: [
        'Access your personal data',
        'Request data correction or deletion',
        'Opt-out of marketing communications',
        'Data portability rights'
      ]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      <SEO
        title="Privacy Policy"
        description="Read Arrotech's Privacy Policy to understand how we collect, use, and safeguard your personal information."
        canonical="/privacy"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
              <FiShield className="w-4 h-4 text-violet-400" />
              <span className="text-slate-300 text-sm font-medium">Privacy Policy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Your Privacy</span>{' '}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Matters
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white">
                  <FiShield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Our Commitment to Privacy
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                At Arrotech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <div className="flex items-center text-sm text-slate-500">
                <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                Last updated: March 15, 2024
              </div>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center text-white`}>
                        {section.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {section.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${expandedSection === index ? 'rotate-180' : ''}`}>
                      {expandedSection === index ? (
                        <FiChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>
                  {expandedSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <ul className="space-y-3 pl-16">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start text-slate-400">
                            <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-violet-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mt-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Have Questions?
              </h3>
              <p className="text-slate-300 mb-6">
                If you have any questions about our Privacy Policy, please don't hesitate to contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mr-3">
                    <FiMail className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-sm">info@arrotechsolutions.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mr-3">
                    <FiPhone className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-sm">+254 711 371 265</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mr-3">
                    <FiMapPin className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
