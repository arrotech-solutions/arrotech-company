import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFileText, FiAlertCircle, FiCheckCircle, FiXCircle, FiChevronDown, FiChevronUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';

const Terms = () => {
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
      title: "Acceptance of Terms",
      icon: <FiCheckCircle className="w-6 h-6" />,
      content: [
        "By accessing and using our services, you agree to be bound by these Terms of Service",
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to provide accurate and complete information"
      ]
    },
    {
      title: "Service Usage",
      icon: <FiFileText className="w-6 h-6" />,
      content: [
        "Our services are provided 'as is' and 'as available'",
        "We reserve the right to modify or discontinue services at any time",
        "You agree to use our services in compliance with all applicable laws",
        "You are responsible for all activities that occur under your account"
      ]
    },
    {
      title: "Prohibited Activities",
      icon: <FiXCircle className="w-6 h-6" />,
      content: [
        "Unauthorized access to our systems or networks",
        "Use of our services for illegal purposes",
        "Distribution of harmful code or malware",
        "Attempting to reverse engineer our services"
      ]
    },
    {
      title: "Intellectual Property",
      icon: <FiAlertCircle className="w-6 h-6" />,
      content: [
        "All content and materials are protected by intellectual property rights",
        "You may not copy, modify, or distribute our content without permission",
        "You retain rights to your own content",
        "You grant us license to use your content for service provision"
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
                Terms of Service
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
                Our Terms & Conditions
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms.
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
                    <FiFileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Agreement to Terms
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and Arrotech regarding your use of our services. By accessing or using our services, you agree to be bound by these terms.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Last updated: March 15, 2024
                </div>
              </motion.div>

              {/* Terms Sections */}
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
                  Need Clarification?
                </h3>
                <p className="text-indigo-100 mb-6">
                  If you have any questions about our Terms of Service, please don't hesitate to contact us:
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

export default Terms; 