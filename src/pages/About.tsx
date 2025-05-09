import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiTarget, FiAward, FiStar, FiTrendingUp, FiShield, FiCpu } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <FiCpu className="w-8 h-8" />,
      value: '5+',
      label: 'AI Solutions',
      description: 'Innovative AI solutions ready to transform businesses'
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      value: '5+',
      label: 'AI Experts',
      description: 'Passionate team of technology innovators'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      value: '10+',
      label: 'Innovative Features',
      description: 'Cutting-edge features to drive business growth'
    },
  ];

  const values = [
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We continuously push boundaries and explore new possibilities in AI technology.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of ethics and transparency in our work.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve great results.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4 backdrop-blur-sm"
            >
              Our Story
            </motion.span>
            <h1 className="text-5xl font-bold mb-6">About Arrotech</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Pioneering the future of AI solutions for businesses worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
              >
                Our Mission
              </motion.span>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Empowering Businesses with AI</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Arrotech, we are committed to empowering businesses with cutting-edge AI solutions that drive growth, efficiency, and innovation. Our mission is to make advanced artificial intelligence accessible and beneficial for organizations of all sizes.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in creating sustainable, ethical, and impactful AI solutions that solve real-world problems and create lasting value for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-indigo-500/25">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-4 shadow-lg shadow-purple-500/25"
            >
              Our Values
            </motion.span>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">What Drives Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values guide everything we do, from innovation to client relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/25">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-4 shadow-lg shadow-indigo-500/25"
            >
              Join Us
            </motion.span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's Shape the Future Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to transform your business with cutting-edge AI solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35"
              >
                Get in Touch
              </a>
              <a 
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-200 dark:hover:border-indigo-800"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 