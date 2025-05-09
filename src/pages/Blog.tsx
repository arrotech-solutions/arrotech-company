import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiUser, FiClock, FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    'All',
    'AI & Machine Learning',
    'Data Science',
    'Business Intelligence',
    'Cloud Computing',
    'Cybersecurity'
  ];

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare',
      excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and patient care.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
      category: 'AI & Machine Learning',
      author: 'Dr. Sarah Chen',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Big Data Analytics: A Game Changer',
      excerpt: 'Understanding the impact of big data analytics on business decision-making and strategy.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
      category: 'Data Science',
      author: 'Michael Rodriguez',
      date: 'March 12, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices',
      excerpt: 'Essential security measures for protecting your cloud infrastructure and data.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
      category: 'Cloud Computing',
      author: 'Emma Thompson',
      date: 'March 10, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Machine Learning in Finance',
      excerpt: 'How machine learning is transforming financial services and risk management.',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80&auto=format&fit=crop',
      category: 'AI & Machine Learning',
      author: 'David Kim',
      date: 'March 8, 2024',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'The latest trends and challenges in cybersecurity for the coming year.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop',
      category: 'Cybersecurity',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Business Intelligence Tools',
      excerpt: 'A comprehensive guide to modern BI tools and their applications.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
      category: 'Business Intelligence',
      author: 'James Wilson',
      date: 'March 3, 2024',
      readTime: '7 min read'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className="pt-20">
      {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">AI Insights Blog</h1>
            <p className="text-xl text-indigo-100 mb-8">
                Stay informed about the latest developments in AI, machine learning, and technology
            </p>
          </motion.div>
        </div>
      </section>

        {/* Main Content */}
        <section ref={contentRef} className="py-20">
        <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Search and Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-12 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Search Bar */}
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === (category === 'All' ? null : category)
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                    <div className="relative h-48 overflow-hidden">
                  <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-full">
                          {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center mr-4">
                          <FiUser className="mr-1" />
                          {post.author}
                    </div>
                    <div className="flex items-center">
                          <FiCalendar className="mr-1" />
                          {post.date}
                    </div>
                  </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <FiClock className="mr-1" />
                          {post.readTime}
                        </span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                </div>
              </motion.article>
            ))}
          </div>

              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  size="sm"
                  icon
                >
                  Load More
                </Button>
              </div>
          </div>
        </div>
      </section>
    </div>
    </LazyMotion>
  );
};

export default Blog; 