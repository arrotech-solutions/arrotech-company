import { motion } from 'framer-motion';
import { FiShield, FiLock, FiUser, FiDatabase } from 'react-icons/fi';

const Privacy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and protect your information.
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
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Arrotech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Last updated: March 15, 2024
              </p>
            </motion.div>

            {/* Policy Sections */}
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
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Email: privacy@arrotech.com
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

export default Privacy; 