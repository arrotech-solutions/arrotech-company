import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-8 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 z-50 border border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
    </motion.button>
  );
};

export default ThemeToggle; 