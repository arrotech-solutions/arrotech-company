import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiArrowRight, 
  FiCheck, 
  FiGlobe, 
  FiLayers, 
  FiShield, 
  FiTruck, 
  FiUsers, 
  FiZap,
  FiCpu,
  FiMessageSquare,
  FiGrid,
  FiTarget,
  FiRefreshCw,
  FiAward,
  FiMapPin,
  FiFileText,
  FiClock
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Products = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 'mini-hub',
      name: 'Mini-Hub',
      tagline: 'Enterprise AI-Powered Marketing & Business Automation',
      description: 'A production-grade, AI-augmented full-stack platform implementing the Model Context Protocol (MCP) for seamless integration between Large Language Models and enterprise business tools.',
      url: 'https://hub.arrotechsolutions.com/',
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      lightGradient: 'from-violet-50 to-purple-50',
      darkGradient: 'from-violet-900/20 to-purple-900/20',
      icon: <FiCpu className="w-8 h-8" />,
      features: [
        {
          icon: <FiLayers className="w-5 h-5" />,
          title: 'Multi-LLM Support',
          description: 'OpenAI, Anthropic, Gemini, Ollama & more'
        },
        {
          icon: <FiZap className="w-5 h-5" />,
          title: 'Workflow Automation',
          description: 'NLP to workflow conversion with conditional logic'
        },
        {
          icon: <FiGrid className="w-5 h-5" />,
          title: '15+ Platform Integrations',
          description: 'HubSpot, Slack, Salesforce, Teams, Asana, GA4'
        },
        {
          icon: <FiTarget className="w-5 h-5" />,
          title: 'Autonomous Agents',
          description: 'Self-executing workflows with monitoring'
        }
      ],
      stats: [
        { value: '15+', label: 'Platform Integrations' },
        { value: '6+', label: 'LLM Providers' },
        { value: '50+', label: 'API Endpoints' },
        { value: '24/7', label: 'Automation' }
      ],
      techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      id: 'wholesalehub',
      name: 'WholeSaleHub',
      tagline: 'Crowdsource Global Imports',
      description: 'The first crowdsourcing platform that lets businesses pool their import orders to reach factory minimums, share container costs, and unlock wholesale pricing on global imports.',
      url: 'http://crowdsource.arrotechsolutions.com/',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      lightGradient: 'from-emerald-50 to-teal-50',
      darkGradient: 'from-emerald-900/20 to-teal-900/20',
      icon: <FiGlobe className="w-8 h-8" />,
      features: [
        {
          icon: <FiUsers className="w-5 h-5" />,
          title: 'Crowdsourced Group Buys',
          description: 'Pool orders to hit factory MOQs together'
        },
        {
          icon: <FiShield className="w-5 h-5" />,
          title: 'Secure Escrow Payments',
          description: '100% payment protection on all transactions'
        },
        {
          icon: <FiTruck className="w-5 h-5" />,
          title: 'Shared Container Shipping',
          description: 'Save 30-50% on freight costs'
        },
        {
          icon: <FiCheck className="w-5 h-5" />,
          title: 'Verified Factories',
          description: 'Audited suppliers from 50+ countries'
        }
      ],
      stats: [
        { value: '500+', label: 'Active Group Buys' },
        { value: '$2.5M', label: 'Saved by Buyers' },
        { value: '1000+', label: 'Verified Factories' },
        { value: '50+', label: 'Countries' }
      ],
      categories: ['Electronics', 'Fashion & Apparel', 'Home & Garden', 'Health & Beauty']
    },
    {
      id: 'tscswap',
      name: 'TSC Swap',
      tagline: 'Find the Right TSC Swap Without Cold-Calling',
      description: 'A streamlined platform for Kenyan teachers to find compatible swap partners, complete TSC-compliant transfers, and follow guided steps to submit paperwork correctly.',
      url: 'https://www.tscswap.com/',
      gradient: 'from-amber-600 via-orange-600 to-red-600',
      lightGradient: 'from-amber-50 to-orange-50',
      darkGradient: 'from-amber-900/20 to-orange-900/20',
      icon: <FiRefreshCw className="w-8 h-8" />,
      features: [
        {
          icon: <FiTarget className="w-5 h-5" />,
          title: 'Smart Match Engine',
          description: 'Find compatible swaps across all 47 counties'
        },
        {
          icon: <FiFileText className="w-5 h-5" />,
          title: 'TSC-Compliant',
          description: 'Guided paperwork and policy checks'
        },
        {
          icon: <FiMapPin className="w-5 h-5" />,
          title: '47 Counties Covered',
          description: 'Nationwide coverage for teacher transfers'
        },
        {
          icon: <FiMessageSquare className="w-5 h-5" />,
          title: '24/7 Human Support',
          description: 'Always available to assist you'
        }
      ],
      stats: [
        { value: '500+', label: 'Successful Swaps' },
        { value: '7 days', label: 'Average Match Time' },
        { value: '98%', label: 'Approval Rate' },
        { value: '47', label: 'Counties Covered' }
      ],
      process: ['Create Profile', 'Find Match', 'Complete Swap']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)'
        }}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live Products
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Our{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                AI-Powered
              </span>
              <br />
              Solutions
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover our suite of production-ready platforms transforming businesses across industries
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {products.map((product) => (
                <motion.a
                  key={product.id}
                  href={`#${product.id}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {product.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              className="fill-gray-50 dark:fill-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="scroll-mt-24"
              >
                <div className={`relative rounded-3xl overflow-hidden ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Product Card */}
                  <div className={`bg-gradient-to-br ${product.lightGradient} dark:${product.darkGradient} p-1 rounded-3xl shadow-2xl`}>
                    <div className="bg-white dark:bg-gray-800 rounded-[22px] overflow-hidden">
                      {/* Header */}
                      <div className={`relative p-8 md:p-12 bg-gradient-to-r ${product.gradient}`}>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '24px 24px'
                          }} />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                              {product.icon}
                            </div>
                            <div>
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {product.name}
                              </h2>
                              <p className="text-white/80 text-lg">
                                {product.tagline}
                              </p>
                            </div>
                          </div>

                          <motion.a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Visit Platform
                            <FiArrowRight className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-12">
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-3xl">
                          {product.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                          {product.stats.map((stat, statIndex) => (
                            <motion.div
                              key={statIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={productsInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.5, delay: 0.3 + statIndex * 0.1 }}
                              className={`p-5 rounded-2xl bg-gradient-to-br ${product.lightGradient} dark:bg-gray-700/50 text-center`}
                            >
                              <div className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${product.gradient} mb-1`}>
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {product.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={productsInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.4 + featureIndex * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                            >
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                                {feature.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                  {feature.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {feature.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech Stack (for Mini-Hub) */}
                        {product.techStack && (
                          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                              Built With
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {product.techStack.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${product.gradient} text-white text-sm font-medium`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Categories (for WholeSaleHub) */}
                        {product.categories && (
                          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                              Popular Categories
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {product.categories.map((category, catIndex) => (
                                <span
                                  key={catIndex}
                                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${product.gradient} text-white text-sm font-medium`}
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Process (for TSC Swap) */}
                        {product.process && (
                          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                              Simple 3-Step Process
                            </h4>
                            <div className="flex flex-wrap items-center gap-4">
                              {product.process.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-center gap-3">
                                  <span className={`w-8 h-8 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-bold flex items-center justify-center`}>
                                    {stepIndex + 1}
                                  </span>
                                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    {step}
                                  </span>
                                  {stepIndex < product.process.length - 1 && (
                                    <FiArrowRight className="w-5 h-5 text-gray-400 hidden sm:block" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)'
          }}
        />
        
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <FiAward className="w-4 h-4" />
              Custom Solutions Available
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom AI Solution?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We specialize in building tailored AI platforms for your unique business needs. Let's discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start a Project
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  View Services
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <FiClock className="w-6 h-6" />, label: '24/7 Support' },
                { icon: <FiShield className="w-6 h-6" />, label: 'Secure & Reliable' },
                { icon: <FiZap className="w-6 h-6" />, label: 'Fast Delivery' },
                { icon: <FiUsers className="w-6 h-6" />, label: 'Expert Team' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 text-white/80"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;

