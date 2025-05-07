import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiShield, FiTrendingUp, FiUsers, FiPlay, FiArrowRight } from 'react-icons/fi';
import VideoPlayer from '../components/VideoPlayer';
import { Link } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-showcase');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <FiCpu size={32} />,
      title: 'Advanced AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions tailored to your business needs.',
    },
    {
      icon: <FiShield size={32} />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for your critical operations.',
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Business Growth',
      description: 'Drive growth and efficiency with our intelligent automation solutions.',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Expert Support',
      description: 'Dedicated team of AI experts to support your business transformation.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Business with AI
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Unlock the power of artificial intelligence to drive innovation, efficiency, and growth in your organization.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link 
                  to="/contact" 
                  className="btn btn-primary group"
                >
                  Get Started
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={scrollToVideo}
                  className="btn btn-secondary group"
                >
                  Watch Demo
                  <FiPlay className="ml-2 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
              <motion.div 
                className="mt-12 flex items-center justify-center lg:justify-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex -space-x-4">
                  {[
                    'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
                    'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
                    'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
                  ].map((avatar, i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-100 dark:bg-gray-700"
                    >
                      <img
                        src={avatar}
                        alt={`User ${i + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=User${i + 1}&background=random`;
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">1000+</span> companies trust us
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Animation/Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-lg mx-auto relative">
                    {/* AI Brain Network Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 relative">
                        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-ping"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping animation-delay-1000"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-pink-500/30 animate-ping animation-delay-2000"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-4xl">🤖</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Floating Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                        style={{
                          top: `${Math.random() * 80}%`,
                          left: `${Math.random() * 80}%`,
                        }}
                      >
                        <span className="text-2xl">
                          {['📊', '🔍', '💡', '⚡', '🎯', '🚀'][i]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="video-showcase" className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              The Future of Business is Here
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how AI is revolutionizing industries and creating new opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <VideoPlayer 
                videoUrl="https://www.youtube.com/embed/3qHkcs3kG44"
                title="AI Business Transformation"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                AI-Powered Business Transformation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover how leading companies are leveraging AI to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3 mt-1">
                    <FiTrendingUp className="w-4 h-4" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Increase operational efficiency by up to 40% through intelligent automation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3 mt-1">
                    <FiUsers className="w-4 h-4" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Enhance customer experience with 24/7 AI-powered support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3 mt-1">
                    <FiCpu className="w-4 h-4" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Make data-driven decisions with advanced analytics and insights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3 mt-1">
                    <FiShield className="w-4 h-4" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Strengthen security and compliance with AI-powered monitoring
                  </span>
                </li>
              </ul>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Explore Our Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose Arrotech?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We combine cutting-edge AI technology with deep industry expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the AI revolution and stay ahead of the competition
            </p>
            <a href="/contact" className="btn bg-white text-indigo-600 hover:bg-gray-100">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 