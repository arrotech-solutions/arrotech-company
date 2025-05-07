import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiDatabase, FiMessageSquare, FiSettings, FiRobot, FiSearch } from 'react-icons/fi';
import AISolutionsVideo from '../components/AISolutionsVideo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
      icon: <FiRobot size={32} />,
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover how our AI solutions can transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-20"
              >
                <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="text-indigo-600 dark:text-indigo-400 mb-6">{service.icon}</div>
                  <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{service.description}</p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={`https://source.unsplash.com/800x600/?${service.id.replace('-', ' ')}`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Video Section */}
      <AISolutionsVideo />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Schedule a consultation with our AI experts today
            </p>
            <a href="/contact" className="btn">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 