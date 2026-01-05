import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMessageCircle,
  FiPlay,
  FiSearch,
  FiSettings,
  FiTarget,
  FiTrendingUp,
  FiZap
} from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const services = [
    {
      id: 'ai-automation',
      icon: <FiCpu className="w-7 h-7" />,
      title: 'AI Automation',
      subtitle: 'Intelligent Process Optimization',
      description: 'Transform repetitive tasks into automated workflows. Our AI learns your processes and optimizes them for maximum efficiency.',
      gradient: 'from-cyan-500 to-blue-600',
      stats: { value: '60%', label: 'Cost Reduction' },
      capabilities: ['Workflow Automation', 'Smart Scheduling', 'Predictive Analytics', 'Document Processing']
    },
    {
      id: 'ai-chatbots',
      icon: <FiMessageCircle className="w-7 h-7" />,
      title: 'Conversational AI',
      subtitle: 'Human-Like Interactions',
      description: 'Deploy intelligent chatbots that understand context, sentiment, and intent. Available 24/7 across all channels.',
      gradient: 'from-violet-500 to-purple-600',
      stats: { value: '95%', label: 'Satisfaction Rate' },
      capabilities: ['Natural Language', 'Multi-Channel', 'Context Memory', 'Real-time Analytics']
    },
    {
      id: 'research-assistant',
      icon: <FiSearch className="w-7 h-7" />,
      title: 'Research Intelligence',
      subtitle: 'AI-Powered Discovery',
      description: 'Accelerate research with AI that analyzes data, identifies patterns, and generates actionable insights.',
      gradient: 'from-amber-500 to-orange-600',
      stats: { value: '70%', label: 'Faster Research' },
      capabilities: ['Data Mining', 'Pattern Recognition', 'Auto-Summarization', 'Trend Analysis']
    },
    {
      id: 'custom-solutions',
      icon: <FiCode className="w-7 h-7" />,
      title: 'Custom AI Development',
      subtitle: 'Tailored Solutions',
      description: 'Build bespoke AI solutions designed specifically for your unique business challenges and goals.',
      gradient: 'from-emerald-500 to-teal-600',
      stats: { value: '100%', label: 'Custom Built' },
      capabilities: ['API Integration', 'Model Training', 'Edge Deployment', 'Continuous Learning']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your current processes, identify pain points, and map out opportunities for AI integration.',
      icon: <FiTarget className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our team architects a custom AI solution tailored to your specific requirements and infrastructure.',
      icon: <FiLayers className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build, train, and fine-tune AI models using your data while maintaining security and compliance.',
      icon: <FiSettings className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Seamless integration into your existing systems with comprehensive training and ongoing support.',
      icon: <FiZap className="w-6 h-6" />
    }
  ];

  const techStack = [
    'OpenAI GPT-4', 'Claude', 'LangChain', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker', 'AWS'
  ];

  return (
    <div className="pt-20 bg-slate-950 min-h-screen">
      <SEO
        title="Our Services"
        description="Discover how Arrotech's AI services—Automation, Conversational AI, and Research Intelligence—can transform your business efficiency."
        canonical="/services"
      />
      {/* Hero Section - Dark Futuristic */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden pt-16 md:pt-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-slate-300 text-sm font-medium">AI-Powered Solutions</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Build the Future</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  with Intelligent AI
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                We design and deploy custom AI solutions that automate, optimize, and transform your business operations.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25"
                  >
                    Start Your Project
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    <FiPlay className="w-5 h-5" />
                    View Our Products
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16"
            >
              <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Technologies We Use</p>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-slate-300 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
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

      {/* Services Section - Bento Grid */}
      <section ref={servicesRef} className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Build</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              End-to-end AI solutions designed for real business impact
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative scroll-mt-24"
              >
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-500 overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon & Stats Row */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.stats.value}
                      </div>
                      <div className="text-slate-500 text-sm">{service.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">
                      {service.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Capabilities */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.capabilities.map((cap, capIndex) => (
                        <div key={capIndex} className="flex items-center gap-2 text-slate-300 text-sm">
                          <FiCheck className={`w-4 h-4 flex-shrink-0 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} style={{ color: 'inherit' }} />
                          <span className="text-slate-400">{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                    >
                      Learn More <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-[100px]`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section ref={processRef} className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <FiDatabase className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-500">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-slate-800 absolute top-4 right-4 group-hover:text-slate-700 transition-colors">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/20">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Delivered', icon: <FiTrendingUp /> },
              { value: '98%', label: 'Client Satisfaction', icon: <FiCheck /> },
              { value: '24/7', label: 'Support Available', icon: <FiMessageCircle /> },
              { value: '5+', label: 'Years Experience', icon: <FiCpu /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-600/20" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let's discuss how AI can solve your specific challenges and drive measurable results.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
                >
                  Schedule a Consultation
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Explore Products
                </Link>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
              {['Enterprise Ready', 'SOC 2 Compliant', 'GDPR Ready', '99.9% Uptime'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-slate-400">
                  <FiCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
