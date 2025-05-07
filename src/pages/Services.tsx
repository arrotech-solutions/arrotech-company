import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiDatabase, FiMessageSquare, FiSettings } from 'react-icons/fi';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FiCpu size={32} />,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions designed to meet your specific business needs.',
      features: [
        'Machine Learning Models',
        'Deep Learning Systems',
        'Neural Networks',
        'AI Strategy Consulting',
      ],
    },
    {
      icon: <FiDatabase size={32} />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: [
        'Predictive Analytics',
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
      ],
    },
    {
      icon: <FiMessageSquare size={32} />,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that enhance customer service and streamline operations.',
      features: [
        'Natural Language Processing',
        '24/7 Customer Support',
        'Multi-language Support',
        'Custom Integration',
      ],
    },
    {
      icon: <FiSettings size={32} />,
      title: 'Business Automation',
      description: 'Automate repetitive tasks and optimize workflows with AI-powered solutions.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Task Scheduling',
        'Performance Monitoring',
      ],
    },
  ];

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
            <h1 className="text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our AI solutions can transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="text-indigo-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-300">
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