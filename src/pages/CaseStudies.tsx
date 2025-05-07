import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      company: "Global E-commerce Platform",
      challenge: "Handling 1M+ customer inquiries monthly with limited support staff",
      solution: "Implemented AI chatbot system with natural language processing",
      results: [
        "85% reduction in response time",
        "60% decrease in support costs",
        "95% customer satisfaction rate"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      title: "Predictive Analytics for Supply Chain",
      company: "International Retail Chain",
      challenge: "Optimizing inventory management across 500+ locations",
      solution: "Deployed machine learning models for demand forecasting",
      results: [
        "40% reduction in stockouts",
        "25% decrease in excess inventory",
        "$15M annual cost savings"
      ],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
    },
    {
      title: "AI Research Assistant Implementation",
      company: "Leading Research Institution",
      challenge: "Accelerating research paper analysis and data processing",
      solution: "Custom AI research assistant with advanced NLP capabilities",
      results: [
        "70% faster research paper analysis",
        "50% increase in research output",
        "Enhanced collaboration across departments"
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Real-world examples of how our AI solutions have transformed businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">{study.title}</h2>
                    <p className="text-indigo-200">{study.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h3>
                    <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <FiArrowRight className="mr-2 text-indigo-600" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FiTrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">95%</h3>
              <p className="text-gray-600 dark:text-gray-300">Client Satisfaction Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <FiUsers className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">200+</h3>
              <p className="text-gray-600 dark:text-gray-300">Successful Implementations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <FiDollarSign className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$50M+</h3>
              <p className="text-gray-600 dark:text-gray-300">Client Cost Savings</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 