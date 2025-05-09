import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CaseStudies = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
              <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-indigo-100 mb-8">
                Coming Soon: Real-world examples of how our AI solutions transform businesses
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our First Success Stories Coming Soon
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We're working on exciting projects that will showcase the power of our AI solutions. Stay tuned for real-world examples of how we're helping businesses transform their operations.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35"
              >
                Be Our First Success Story
              </a>
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
};

export default CaseStudies; 