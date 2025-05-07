import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiZap, FiCpu, FiMessageSquare } from 'react-icons/fi';
import VideoPlayer from './VideoPlayer';

const AISolutionsVideo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      title: 'AI Customer Service Agent',
      description: 'Our intelligent customer service agent handles inquiries 24/7, providing instant responses and personalized solutions.',
      videoUrl: 'https://www.youtube.com/embed/8hly31xKli0',
      icon: <FiMessageSquare className="w-8 h-8" />,
      features: [
        'Natural Language Understanding',
        'Multi-language Support',
        'Contextual Responses',
        'Seamless Human Handoff'
      ]
    },
    {
      title: 'AI Process Automation',
      description: 'Automate complex business processes with our AI agents that learn and adapt to your workflow.',
      videoUrl: 'https://www.youtube.com/embed/7Pq-S557XQU',
      icon: <FiZap className="w-8 h-8" />,
      features: [
        'Workflow Automation',
        'Intelligent Decision Making',
        'Process Optimization',
        'Real-time Monitoring'
      ]
    },
    {
      title: 'AI Research Assistant',
      description: 'Accelerate research and data analysis with our AI-powered research assistant.',
      videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
      icon: <FiCpu className="w-8 h-8" />,
      features: [
        'Data Analysis',
        'Pattern Recognition',
        'Automated Reporting',
        'Knowledge Synthesis'
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            AI Solutions in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how our AI agents transform business operations and drive innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <VideoPlayer videoUrl={solution.videoUrl} title={solution.title} />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-400 mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Schedule a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AISolutionsVideo; 