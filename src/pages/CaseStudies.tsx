import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'Global E-commerce Platform',
      description: 'How we helped a leading e-commerce platform reduce response times by 80% using AI chatbots.',
      results: [
        '80% reduction in response time',
        '60% increase in customer satisfaction',
        '40% reduction in support costs'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Automated Data Analysis Implementation',
      company: 'Financial Services Provider',
      description: 'Implementing AI-driven data analysis to streamline financial reporting and risk assessment.',
      results: [
        '90% faster report generation',
        '75% reduction in manual errors',
        '50% increase in analysis accuracy'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'AI Research Assistant Deployment',
      company: 'Healthcare Research Institute',
      description: 'Deploying AI research assistants to accelerate medical research and drug discovery.',
      results: [
        '70% faster research analysis',
        '85% improvement in pattern recognition',
        '60% reduction in research costs'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
            <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Discover how our AI solutions have transformed businesses across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-4">{study.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Let's discuss how our AI solutions can help you achieve similar results
            </p>
            <Link to="/contact" className="btn bg-white text-indigo-600 hover:bg-gray-100">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 