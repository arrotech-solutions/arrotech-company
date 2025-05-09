import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Arrotech</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Transforming businesses through innovative AI solutions.</p>
            <div className="flex space-x-4">
              <a 
                href="https://web.facebook.com/gachanjaharun/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/ArrotechAI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A107302594&keywords=arrotech%20ai&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=859e46c2-9dc4-47c4-b1c8-9791c9ca7f0f&sid=yje&spellCorrectionEnabled=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/arrotech/#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  AI Insights Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-studies" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Arrotech. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 