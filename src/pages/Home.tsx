import { domAnimation, LazyMotion, motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { FiArrowRight, FiAward, FiCheck, FiCpu, FiExternalLink, FiGlobe, FiRefreshCw, FiShield, FiStar, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

// Lazy load components
const CTASection = lazy(() => import('../components/CTASection'));

const Home = () => {
  // Separate useInView hooks for each section
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showcaseRef, showcaseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const liveProducts = [
    {
      name: 'Mini-Hub',
      tagline: 'AI-Powered Business Automation',
      description: 'Enterprise platform with Model Context Protocol (MCP) for seamless LLM integration with 15+ business tools.',
      url: 'https://hub.arrotechsolutions.com/',
      gradient: 'from-violet-600 to-indigo-600',
      icon: <FiCpu className="w-6 h-6" />,
      stats: ['15+ Integrations', '6+ LLM Providers', '24/7 Automation']
    },
    {
      name: 'WholeSaleHub',
      tagline: 'Crowdsource Global Imports',
      description: 'Pool orders with businesses worldwide to hit factory MOQs and save 30-50% on shipping costs.',
      url: 'http://crowdsource.arrotechsolutions.com/',
      gradient: 'from-emerald-600 to-teal-600',
      icon: <FiGlobe className="w-6 h-6" />,
      stats: ['500+ Group Buys', '1000+ Factories', '50+ Countries']
    },
    {
      name: 'TSC Swap',
      tagline: 'Teacher Transfer Platform',
      description: 'Smart matching engine for Kenyan teachers to find compatible TSC swaps across all 47 counties.',
      url: 'https://www.tscswap.com/',
      gradient: 'from-amber-600 to-orange-600',
      icon: <FiRefreshCw className="w-6 h-6" />,
      stats: ['500+ Swaps', '98% Approval', '47 Counties']
    }
  ];

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
    <LazyMotion features={domAnimation}>
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
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
                >
                  Welcome to Arrotech
                </motion.span>
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
                  <Button 
                    href="/contact" 
                    variant="primary"
                    icon
                  >
                    Get Started
                  </Button>
                  <Button 
                    href="/contact"
                    variant="secondary"
                    icon
                  >
                    Book a Meeting
                  </Button>
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

        {/* Features Section */}
        <section ref={featuresRef} className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3 }}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
              >
                Why Choose Us
              </motion.span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how our AI solutions can transform your business operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/25">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Products Section */}
        <section ref={productsRef} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          </div>

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={productsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-violet-500/25"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live Products
              </motion.span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our AI-Powered Platforms
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Production-ready solutions transforming businesses across industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {liveProducts.map((product, index) => (
                <motion.a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={productsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient Header */}
                  <div className={`p-6 bg-gradient-to-r ${product.gradient}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                          {product.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{product.name}</h3>
                          <p className="text-white/80 text-sm">{product.tagline}</p>
                        </div>
                      </div>
                      <FiExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-2">
                      {product.stats.map((stat, statIndex) => (
                        <span
                          key={statIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.gradient} text-white`}
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link
                to="/products"
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-semibold group"
              >
                View All Products
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Content Showcase Section */}
        <section ref={showcaseRef} className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={showcaseInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3 }}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-4 shadow-lg shadow-purple-500/25"
              >
                AI in Action
              </motion.span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                The Future of Business is Here
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how AI is revolutionizing industries and creating new opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={showcaseInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="AI Business Transformation"
                    className="w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">AI-Powered Business Transformation</h3>
                    <p className="text-gray-200">Discover how leading companies are leveraging AI to drive innovation and growth</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={showcaseInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                      <FiTrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Operational Efficiency
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Increase efficiency by up to 40% through intelligent automation and process optimization
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                      <FiUsers className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Enhanced Customer Experience
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Provide 24/7 AI-powered support and personalized experiences for your customers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/25">
                      <FiCpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Data-Driven Insights
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Make informed decisions with advanced analytics and real-time insights
                      </p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/services"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-semibold group"
                >
                  Explore Our Solutions
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "95%",
                  label: "Client Satisfaction",
                  icon: <FiStar className="w-6 h-6" />
                },
                {
                  number: "10+",
                  label: "Projects Completed",
                  icon: <FiAward className="w-6 h-6" />
                },
                {
                  number: "60%",
                  label: "Cost Reduction",
                  icon: <FiTrendingUp className="w-6 h-6" />
                },
                {
                  number: "24/7",
                  label: "Support Available",
                  icon: <FiCheck className="w-6 h-6" />
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-indigo-500/25">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
              >
                Our Pricing
              </motion.span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Choose Your AI Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Flexible pricing designed for Kenyan businesses of all sizes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Discovery",
                  price: "KES 350,000",
                  description: "Perfect for businesses exploring AI opportunities",
                  features: [
                    "Comprehensive business analysis",
                    "AI opportunity assessment",
                    "Technical feasibility study",
                    "ROI projection & business case",
                    "Detailed implementation roadmap",
                    "Executive presentation"
                  ],
                  popular: false
                },
                {
                  name: "Implementation",
                  price: "KES 1,500,000",
                  description: "Ideal for businesses ready to deploy AI solutions",
                  features: [
                    "Custom AI solution development",
                    "Full system integration",
                    "Comprehensive staff training",
                    "6 months premium support",
                    "Performance monitoring & optimization"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "KES 3,500,000",
                  description: "Comprehensive AI transformation for large organizations",
                  features: [
                    "Multi-department AI integration",
                    "Advanced analytics dashboard",
                    "Dedicated support team",
                    "12 months maintenance & updates",
                    "Ongoing optimization & scaling"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-500' 
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button
                      href="/contact"
                      variant={plan.popular ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Book a Meeting
                    </Button>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Need a custom solution? We offer flexible payment plans and can work within your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Book a Meeting
                </Button>
                <Button href="/contact" variant="outline">
                  Discuss Custom Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <CTASection
            title="Ready to Transform Your Business?"
            description="Join the growing number of businesses leveraging AI to drive innovation and growth"
            buttonText="Start Your AI Journey Today"
            buttonLink="/contact"
          />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default Home; 