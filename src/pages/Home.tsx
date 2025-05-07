import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90" />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
          >
            Transforming Business with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Empowering businesses with intelligent solutions that drive innovation and growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a href="/contact" className="btn">
              Get Started
            </a>
            <a href="/services" className="btn-secondary">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20 bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading">Why Choose Arrotech?</h2>
            <p className="subheading">
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
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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