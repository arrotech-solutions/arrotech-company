import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMessageSquare, FiSearch, FiCpu, FiArrowRight } from 'react-icons/fi';
import AISolutionsVideo from '../components/AISolutionsVideo';
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
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
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
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692'
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
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8'
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
      <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="scroll-mt-20"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-[300px] md:h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-xl">
                          <div className="text-indigo-600 dark:text-indigo-400">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                                <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Benefits
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                        >
                          Get Started
                          <FiArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Video Section */}
      <AISolutionsVideo />

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Schedule a consultation with our AI experts today
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg"
            >
              Contact Us
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 