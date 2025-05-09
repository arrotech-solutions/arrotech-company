import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMessageSquare, FiSearch, FiCpu, FiArrowRight, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const services = [
    {
      id: 'ai-automation',
      icon: <FiCpu size={32} />,
      title: 'AI Automation',
      description: 'Transform your business operations with intelligent automation solutions.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Task Scheduling',
        'Performance Monitoring',
        'Intelligent Document Processing',
        'Automated Decision Making'
      ],
      benefits: [
        'Reduce operational costs by up to 60%',
        'Increase productivity by 40%',
        'Minimize human error',
        '24/7 automated operations'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'ai-chatbots',
      icon: <FiMessageSquare size={32} />,
      title: 'AI Chatbots',
      description: 'Enhance customer experience with intelligent conversational AI.',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Contextual Understanding',
        'Seamless Integration',
        'Custom Personality',
        'Analytics Dashboard'
      ],
      benefits: [
        'Handle 1000+ conversations simultaneously',
        '95% customer satisfaction rate',
        '24/7 customer support',
        'Reduced response time to seconds'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'research-assistant',
      icon: <FiSearch size={32} />,
      title: 'Research Assistant',
      description: 'Accelerate research and analysis with AI-powered assistance.',
      features: [
        'Literature Review Automation',
        'Data Analysis',
        'Pattern Recognition',
        'Citation Management',
        'Research Summarization',
        'Collaboration Tools'
      ],
      benefits: [
        '70% faster research completion',
        'Enhanced accuracy in analysis',
        'Comprehensive data processing',
        'Real-time collaboration'
      ],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Discover how our AI solutions can transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
            >
              Our Solutions
            </motion.span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              AI-Powered Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how our cutting-edge AI solutions can transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="scroll-mt-20"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="grid lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-[400px] lg:h-full overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10" />
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-20" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                        <motion.div 
                          className="flex items-center gap-4 mb-4"
                          whileHover={{ scale: 1.02 }}
                        >
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-500/25"
                          >
                            <div className="text-white">
                              {service.icon}
                            </div>
                          </motion.div>
                          <h3 className="text-3xl font-semibold text-white">
                            {service.title}
                          </h3>
                        </motion.div>
                        <p className="text-gray-200 text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <div className="space-y-8">
                        <div>
                          <motion.h4 
                            className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.span 
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-3 shadow-lg shadow-indigo-500/25"
                            >
                              <FiCpu className="w-5 h-5" />
                            </motion.span>
                            Key Features
                          </motion.h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                whileHover={{ 
                                  scale: 1.02,
                                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                                  transition: { duration: 0.2 }
                                }}
                                className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800"
                              >
                                <motion.span 
                                  className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"
                                  whileHover={{ scale: 1.5 }}
                                />
                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <motion.h4 
                            className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.span 
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-3 shadow-lg shadow-indigo-500/25"
                            >
                              <FiTrendingUp className="w-5 h-5" />
                            </motion.span>
                            Benefits
                          </motion.h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <motion.div
                                key={benefitIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                                whileHover={{ 
                                  scale: 1.02,
                                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                                  transition: { duration: 0.2 }
                                }}
                                className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800"
                              >
                                <motion.span 
                                  className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"
                                  whileHover={{ scale: 1.5 }}
                                />
                                <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                        <motion.div 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto"
                        >
                          <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35"
                          >
                            Get Started
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto"
                        >
                          <Link
                            to={`/case-studies#${service.id}`}
                            className="inline-flex items-center justify-center w-full px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-200 dark:hover:border-indigo-800"
                          >
                            View Case Study
                            <FiArrowRight className="ml-2" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-4 shadow-lg shadow-purple-500/25"
            >
              AI Solutions
            </motion.span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence with our cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Customer Service",
                description: "Enhance customer experience with intelligent AI-powered support",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
                features: [
                  "24/7 Customer Support",
                  "Natural Language Processing",
                  "Multi-language Support",
                  "Real-time Analytics"
                ]
              },
              {
                title: "AI Process Automation",
                description: "Streamline operations with intelligent automation solutions",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                features: [
                  "Workflow Automation",
                  "Task Scheduling",
                  "Performance Monitoring",
                  "Intelligent Decision Making"
                ]
              },
              {
                title: "AI Research Assistant",
                description: "Accelerate research and analysis with AI-powered assistance",
                image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
                features: [
                  "Data Analysis",
                  "Pattern Recognition",
                  "Research Summarization",
                  "Collaboration Tools"
                ]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: "rgba(139, 92, 246, 0.1)",
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10 border border-gray-100 dark:border-gray-800"
                        >
                          <motion.span 
                            className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="mt-6"
                    >
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35"
                      >
                        Learn More
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
            >
              Our Impact
            </motion.span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Transforming Businesses with AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions are making a difference for businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "5+",
                label: "AI Solutions",
                icon: <FiCpu className="w-6 h-6" />
              },
              {
                number: "10+",
                label: "Innovative Features",
                icon: <FiTrendingUp className="w-6 h-6" />
              },
              {
                number: "5+",
                label: "AI Experts",
                icon: <FiUsers className="w-6 h-6" />
              },
              {
                number: "24/7",
                label: "Dedicated Support",
                icon: <FiSearch className="w-6 h-6" />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-indigo-500/25">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
            >
              Get Started Today
            </motion.span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Schedule a consultation with our AI experts and discover how we can help you achieve your business goals
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
            <Link 
              to="/contact" 
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 text-lg font-medium"
                >
                  Schedule Consultation
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-200 dark:hover:border-indigo-800 text-lg font-medium"
                >
                  View Case Studies
              <FiArrowRight className="ml-2" />
            </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Expert Team",
                  description: "Work with certified AI specialists",
                  icon: <FiCpu className="w-6 h-6" />
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored to your business needs",
                  icon: <FiTrendingUp className="w-6 h-6" />
                },
                {
                  title: "24/7 Support",
                  description: "Always here to help you",
                  icon: <FiMessageSquare className="w-6 h-6" />
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/25">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 