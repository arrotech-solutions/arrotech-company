import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsResourcesOpen(false);
    if (isResourcesOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isResourcesOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-900/20'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src="/logo.png"
              alt="Arrotech Logo"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${location.pathname === link.href
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-300 ${location.pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsResourcesOpen(!isResourcesOpen);
                }}
                className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${resources.some(r => location.pathname === r.href)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                Resources
                <FiChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-800 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        to={resource.href}
                        className={`block px-4 py-3 text-sm transition-all duration-300 ${location.pathname === resource.href
                            ? 'bg-slate-800 text-white'
                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
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

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              Get Started
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
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
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                {navigation.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.href
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Resources Section */}
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">Resources</div>
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      to={resource.href}
                      className={`block px-4 py-3 rounded-lg text-sm transition-all duration-300 ${location.pathname === resource.href
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-violet-500 hover:to-blue-500 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
