import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShield, FiLock, FiUser, FiDatabase, FiChevronDown, FiChevronUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';

const Privacy = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      title: "Information We Collect",
      icon: <FiDatabase className="w-6 h-6" />,
      content: [
        "Personal information (name, email, company details)",
        "Usage data and analytics",
        "Device and browser information",
        "Cookies and similar technologies"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <FiUser className="w-6 h-6" />,
      content: [
        "Provide and maintain our services",
        "Improve user experience",
        "Send important updates and notifications",
        "Analyze usage patterns and trends"
      ]
    },
    {
      title: "Data Security",
      icon: <FiLock className="w-6 h-6" />,
      content: [
        "Industry-standard encryption",
        "Regular security audits",
        "Access controls and authentication",
        "Secure data storage and transmission"
      ]
    },
    {
      title: "Your Rights",
      icon: <FiShield className="w-6 h-6" />,
      content: [
        "Access your personal data",
        "Request data correction or deletion",
        "Opt-out of marketing communications",
        "Data portability rights"
      ]
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-pattern"></div>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6"
              >
                Privacy Policy
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and safeguard your data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={contentRef} className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-4">
                    <FiShield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Our Commitment to Privacy
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  At Arrotech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Last updated: March 15, 2024
                </div>
              </motion.div>

              {/* Policy Sections */}
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
                  >
                    <button
                      onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-4">
                          {section.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {section.title}
                        </h3>
                      </div>
                      {expandedSection === index ? (
                        <FiChevronUp className="w-6 h-6 text-gray-500" />
                      ) : (
                        <FiChevronDown className="w-6 h-6 text-gray-500" />
                      )}
                    </button>
                    {expandedSection === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-6"
                      >
                        <ul className="space-y-3">
                          {section.content.map((item, i) => (
                            <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
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
                className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 mt-12 shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Have Questions?
                </h3>
                <p className="text-indigo-100 mb-6">
                  If you have any questions about our Privacy Policy, please don't hesitate to contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center text-white">
                    <FiMail className="w-6 h-6 mr-3" />
                    <span>arrotechdesign@gmail.com</span>
                  </div>
                  <div className="flex items-center text-white">
                    <FiPhone className="w-6 h-6 mr-3" />
                    <span>+254 711 371 265</span>
                  </div>
                  <div className="flex items-center text-white">
                    <FiMapPin className="w-6 h-6 mr-3" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
};

export default Privacy; 