import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiExternalLink,
  FiGlobe,
  FiLayers,
  FiRefreshCw,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiZap
} from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CTASection = lazy(() => import('../components/CTASection'));

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const liveProducts = [
    {
      name: 'Mini-Hub',
      tagline: 'AI-Powered Business Automation',
      description: 'Enterprise platform with Model Context Protocol (MCP) for seamless LLM integration with 15+ business tools.',
      url: 'https://hub.arrotechsolutions.com/',
      gradient: 'from-violet-500 to-indigo-600',
      icon: <FiCpu className="w-6 h-6" />,
      stats: ['15+ Integrations', '6+ LLM Providers', '24/7 Automation']
    },
    {
      name: 'WholeSaleHub',
      tagline: 'Crowdsource Global Imports',
      description: 'Pool orders with businesses worldwide to hit factory MOQs and save 30-50% on shipping costs.',
      url: 'http://crowdsource.arrotechsolutions.com/',
      gradient: 'from-emerald-500 to-teal-600',
      icon: <FiGlobe className="w-6 h-6" />,
      stats: ['500+ Group Buys', '1000+ Factories', '50+ Countries']
    },
    {
      name: 'TSC Swap',
      tagline: 'Teacher Transfer Platform',
      description: 'Smart matching engine for Kenyan teachers to find compatible TSC swaps across all 47 counties.',
      url: 'https://www.tscswap.com/',
      gradient: 'from-amber-500 to-orange-600',
      icon: <FiRefreshCw className="w-6 h-6" />,
      stats: ['500+ Swaps', '98% Approval', '47 Counties']
    }
  ];

  const features = [
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: 'Advanced AI Solutions',
      description: 'Cutting-edge artificial intelligence tailored to your business needs.',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with enterprise-grade security for critical operations.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Scalable Growth',
      description: 'Drive growth and efficiency with intelligent automation solutions.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Expert Support',
      description: 'Dedicated team of AI experts to support your transformation.',
      gradient: 'from-amber-500 to-orange-600'
    },
  ];

  const stats = [
    { number: '95%', label: 'Client Satisfaction', icon: <FiStar /> },
    { number: '50+', label: 'Projects Delivered', icon: <FiLayers /> },
    { number: '60%', label: 'Cost Reduction', icon: <FiTrendingUp /> },
    { number: '24/7', label: 'Support Available', icon: <FiZap /> },
  ];

  const pricingPlans = [
    {
      name: 'Discovery',
      price: 'KES 350,000',
      description: 'Perfect for businesses exploring AI opportunities',
      features: [
        'Comprehensive business analysis',
        'AI opportunity assessment',
        'Technical feasibility study',
        'ROI projection & business case',
        'Implementation roadmap',
      ],
      popular: false
    },
    {
      name: 'Implementation',
      price: 'KES 1,500,000',
      description: 'Ideal for businesses ready to deploy AI',
      features: [
        'Custom AI solution development',
        'Full system integration',
        'Staff training program',
        '6 months premium support',
        'Performance optimization',
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'KES 3,500,000',
      description: 'Comprehensive AI transformation',
      features: [
        'Multi-department AI integration',
        'Advanced analytics dashboard',
        'Dedicated support team',
        '12 months maintenance',
        'Continuous optimization',
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <SEO
        title="Home"
        description="Arrotech transforms businesses with cutting-edge AI solutions. Explore our AI-powered platforms like Mini-Hub and WholeSaleHub."
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[180px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-slate-300 text-sm font-medium">Building the Future of AI</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Business with AI
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                We design and deploy intelligent AI solutions that automate, optimize, and transform your business operations.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-violet-500 hover:to-blue-500 transition-all shadow-lg shadow-violet-500/25"
                  >
                    Start Your Project
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
                  >
                    View Products
                  </Link>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-8">
                {['Enterprise Ready', 'SOC 2 Compliant', 'GDPR Ready', '99.9% Uptime'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-slate-500">
                    <FiCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <FiZap className="w-4 h-4 text-violet-400" />
              <span className="text-violet-400 text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive AI <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              End-to-end AI capabilities designed for real business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Products Section */}
      <section ref={productsRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Live Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our AI-Powered <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Production-ready solutions transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveProducts.map((product, index) => (
              <motion.a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-500"
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
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300"
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
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors"
            >
              View All Products
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 relative">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-500 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <FiStar className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your AI <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Flexible pricing designed for Kenyan businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${plan.popular
                  ? 'border-violet-500 shadow-lg shadow-violet-500/20'
                  : 'border-slate-800'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-slate-300 text-sm">
                      <FiCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-slate-400 mb-4">
              Need a custom solution? We offer flexible payment plans.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors"
            >
              Discuss Custom Pricing
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <Suspense fallback={<div className="py-24" />}>
        <CTASection
          title="Ready to Transform Your Business?"
          description="Join the growing number of businesses leveraging AI to drive innovation and growth"
          buttonText="Start Your AI Journey Today"
          buttonLink="/contact"
        />
      </Suspense>
    </div>
  );
};

export default Home;
