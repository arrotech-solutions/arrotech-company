import { motion } from 'framer-motion';
import { FiArrowUp, FiFacebook, FiInstagram, FiMail, FiMapPin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/Logo/icon-orange.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    products: [
      { name: 'Arrotech Hub', href: 'https://hub.arrotechsolutions.com/', external: true },
    ],
    services: [
      { name: 'AI Automation', href: '/services#ai-automation' },
      { name: 'Conversational AI', href: '/services#ai-chatbots' },
      { name: 'Research Intelligence', href: '/services#research-assistant' },
      { name: 'Custom Development', href: '/services#custom-solutions' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: <FiFacebook className="w-5 h-5" />, href: 'https://www.facebook.com/gachanjaharun', label: 'Facebook' },
    { icon: <FiTwitter className="w-5 h-5" />, href: 'https://twitter.com/ArrotechAI', label: 'Twitter' },
    { icon: <FiInstagram className="w-5 h-5" />, href: 'https://instagram.com/arrotech', label: 'Instagram' },
    { icon: <FaTiktok className="w-4 h-4" />, href: 'https://tiktok.com/@arrotech_ai', label: 'TikTok' },
    { icon: <FiYoutube className="w-5 h-5" />, href: 'https://youtube.com/@arrotech_ai', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group py-1">
              <img src={logoIcon} alt="Arrotech Logo" className="h-[36px] w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]" />
              <span className="text-[22px] font-black bg-gradient-to-r from-slate-900 to-violet-600 dark:from-white dark:to-violet-400 bg-clip-text text-transparent tracking-tighter">ARROTECH</span>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm leading-relaxed">
              Building intelligent AI solutions that transform businesses. We bridge the gap between cutting-edge technology and real-world impact.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@arrotechsolutions.com" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-violet-600 transition-colors group-hover:text-white">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@arrotechsolutions.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-gradient-to-r hover:from-violet-600 hover:to-blue-600 hover:text-white dark:hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Arrotech Solutions. All rights reserved.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-violet-600 hover:to-blue-600 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-white transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5 group-hover:text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
