import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
  className = ''
}: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-r from-indigo-600 to-purple-600 ${className}`}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>
          <p className="text-xl mb-8 text-white opacity-90">
            {description}
          </p>
          <Link
            to={buttonLink}
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 