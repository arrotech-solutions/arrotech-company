import { motion } from 'framer-motion';
import { FiClock, FiUser } from 'react-icons/fi';

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI in Business: 2024 Trends",
      excerpt: "Discover how artificial intelligence is reshaping business operations and creating new opportunities for growth and innovation.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      title: "Machine Learning: From Theory to Practice",
      excerpt: "A comprehensive guide to implementing machine learning solutions in your organization, with real-world case studies and best practices.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      title: "AI Ethics: Building Responsible AI Systems",
      excerpt: "Exploring the ethical considerations in AI development and how to ensure your AI solutions are fair, transparent, and beneficial to society.",
      author: "Dr. Emily Watson",
      date: "March 5, 2024",
      category: "AI Ethics",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Insights Blog</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in artificial intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FiUser className="mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-2" />
                      {article.date}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with AI Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest articles, case studies, and AI trends
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 