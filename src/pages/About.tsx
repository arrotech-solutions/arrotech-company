import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiTarget, FiAward } from 'react-icons/fi';

// Import team member images
import harunImage from '../assets/team/harun.jpeg';
import kevinImage from '../assets/team/kevin.jpeg';
import veerImage from '../assets/team/veer.jpeg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Harun Gachanja',
      role: 'Chief Executive Officer',
      description: 'Leading the vision and strategy of Arrotech, driving innovation and growth.',
      image: harunImage,
    },
    {
      name: 'Kevin Njoroge',
      role: 'Head of Engineering',
      description: 'Overseeing technical excellence and innovation in our AI solutions.',
      image: kevinImage,
    },
    {
      name: 'Veer Imbwaga',
      role: 'Chief Marketing Officer',
      description: 'Driving our market presence and strategic communications.',
      image: veerImage,
    },
  ];

  const stats = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      value: '50+',
      label: 'Clients Served',
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      value: '95%',
      label: 'Success Rate',
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      value: '10+',
      label: 'Years Experience',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">About Arrotech</h1>
            <p className="text-xl text-gray-300 mb-8">
              We are a team of passionate AI experts dedicated to transforming businesses through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At Arrotech, we are committed to empowering businesses with cutting-edge AI solutions that drive growth, efficiency, and innovation. Our mission is to make advanced artificial intelligence accessible and beneficial for organizations of all sizes.
              </p>
              <p className="text-gray-300">
                We believe in creating sustainable, ethical, and impactful AI solutions that solve real-world problems and create lasting value for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700"
                >
                  <div className="text-indigo-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref} className="py-20 bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Our Leadership Team</h2>
            <p className="text-xl text-gray-300">
              Meet the experts behind our innovative AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700"
              >
                <div className="relative h-96">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-indigo-400 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Join Us in Shaping the Future</h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Let's work together to transform your business with AI
            </p>
            <a href="/contact" className="btn bg-white text-indigo-600 hover:bg-gray-100">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 