import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiDownload, FiCalendar } from 'react-icons/fi';

const Whitepapers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whitepapers = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      description: 'A comprehensive guide to implementing AI solutions in modern enterprises',
      date: 'March 2024',
      category: 'AI Strategy',
      downloadUrl: '#',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'AI Ethics and Governance',
      description: 'Best practices for implementing ethical AI systems in your organization',
      date: 'February 2024',
      category: 'AI Ethics',
      downloadUrl: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Machine Learning Implementation Guide',
      description: 'Step-by-step guide to deploying machine learning models in production',
      date: 'January 2024',
      category: 'Machine Learning',
      downloadUrl: '#',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
            <h1 className="text-5xl font-bold mb-6">Whitepapers</h1>
            <p className="text-xl text-indigo-100 mb-8">
              In-depth research and insights on AI technology and its business applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {paper.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <FiCalendar className="mr-1" />
                      <span className="text-sm">{paper.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {paper.description}
                  </p>
                  <a
                    href={paper.downloadUrl}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <FiDownload className="mr-2" />
                    Download Whitepaper
                  </a>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Want to Learn More?</h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Contact us for custom research and insights tailored to your business needs
            </p>
            <Link to="/contact" className="btn bg-white text-indigo-600 hover:bg-gray-100">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Whitepapers; 