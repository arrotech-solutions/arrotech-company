import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiCalendar, FiUser } from 'react-icons/fi';

const Whitepapers = () => {
  const whitepapers = [
    {
      title: "The Future of AI in Enterprise",
      description: "A comprehensive analysis of how artificial intelligence is transforming enterprise operations and decision-making processes.",
      author: "Dr. James Wilson",
      date: "February 2024",
      category: "Enterprise AI",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      title: "Machine Learning in Healthcare",
      description: "Exploring the applications and impact of machine learning in modern healthcare systems and patient care.",
      author: "Dr. Maria Garcia",
      date: "January 2024",
      category: "Healthcare AI",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    },
    {
      title: "AI Ethics and Governance",
      description: "A framework for implementing ethical AI practices and governance structures in organizations.",
      author: "Prof. Robert Chen",
      date: "December 2023",
      category: "AI Ethics",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Whitepapers</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              In-depth research and analysis on the latest developments in artificial intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {paper.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {paper.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FiUser className="mr-2" />
                      {paper.author}
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" />
                      {paper.date}
                    </div>
                  </div>
                  <a
                    href={paper.downloadUrl}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download Whitepaper
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need Custom Research?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Contact our research team for custom whitepapers and industry analysis
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FiFileText className="mr-2" />
              Request Custom Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whitepapers; 