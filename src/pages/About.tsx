import { motion } from 'framer-motion';
import { FiAward, FiCpu, FiShield, FiStar, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    {
      icon: <FiCpu className="w-6 h-6" />,
      value: '5+',
      label: 'AI Solutions',
      description: 'Production-ready platforms'
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      value: '5+',
      label: 'AI Experts',
      description: 'Dedicated team members'
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      value: '50+',
      label: 'Projects',
      description: 'Successfully delivered'
    },
  ];

  const values = [
    {
      icon: <FiStar className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions.',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We continuously push boundaries and explore new possibilities in AI technology.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of ethics and transparency in our work.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve great results.',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
              <FiUsers className="w-4 h-4 text-violet-400" />
              <span className="text-slate-300 text-sm font-medium">Our Story</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">About</span>{' '}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Arrotech
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of AI solutions for businesses worldwide. We bridge the gap between cutting-edge technology and real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <FiTarget className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Our Mission</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Empowering Businesses with <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">AI</span>
              </h2>

              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                At Arrotech, we are committed to empowering businesses with cutting-edge AI solutions that drive growth, efficiency, and innovation. Our mission is to make advanced artificial intelligence accessible and beneficial for organizations of all sizes.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                We believe in creating sustainable, ethical, and impactful AI solutions that solve real-world problems and create lasting value for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 text-center hover:border-slate-700 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-violet-500/20">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-300 font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-500">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <FiStar className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Drives</span> Us
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our core values guide everything we do, from innovation to client relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-blue-600/20 to-cyan-600/20" />
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Shape the Future Together
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Ready to transform your business with cutting-edge AI solutions?
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-blue-500 transition-all shadow-lg shadow-violet-500/25"
                >
                  Get in Touch
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
