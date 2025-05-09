import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg transform rotate-3 shadow-lg" />
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg transform -rotate-3 shadow-lg" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Arro
              </span>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 -mt-1">
                tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 relative group ${
                  location.pathname === link.href ? 'text-indigo-600 dark:text-white' : ''
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 ${
                  resources.some(r => location.pathname === r.href) ? 'text-indigo-600 dark:text-white' : ''
                }`}
              >
                Resources
                <FiChevronDown className={`ml-1 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                  >
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        to={resource.href}
                        className={`block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 ${
                          location.pathname === resource.href ? 'bg-gray-50 dark:bg-gray-700' : ''
                        }`}
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 py-2 ${
                      location.pathname === link.href ? 'text-indigo-600 dark:text-white' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Resources Section */}
                <div className="py-2">
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">Resources</div>
                  <div className="pl-4 space-y-2">
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        to={resource.href}
                        className={`block text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 ${
                          location.pathname === resource.href ? 'text-indigo-600 dark:text-white' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  icon
                  fullWidth
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 