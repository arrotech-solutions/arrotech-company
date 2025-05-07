import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={ref} className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-400 mt-1">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-400">contact@arrotech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-400 mt-1">
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-400 mt-1">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Address</h3>
                      <p className="text-gray-400">
                        123 AI Street
                        <br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-white">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-400 mt-1">
                      <FiClock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Monday - Friday</h3>
                      <p className="text-gray-400">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-indigo-400 mt-1">
                      <FiClock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Saturday - Sunday</h3>
                      <p className="text-gray-400">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 