import { motion } from 'framer-motion';
import { FiFileText, FiAlertCircle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Terms = () => {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Terms of Service constitute a legally binding agreement between you and Arrotech regarding your use of our services. By accessing or using our services, you agree to be bound by these terms.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Last updated: March 15, 2024
              </p>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-indigo-600 mr-4">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 mt-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Email: legal@arrotech.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Phone: +1 (555) 123-4567
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Address: 123 AI Street, Tech City, TC 12345
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms; 