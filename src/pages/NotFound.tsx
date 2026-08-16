import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] bg-slate-950 flex flex-col items-center justify-center text-center px-4">
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist." 
      />
      <h1 className="text-9xl font-black bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
      <p className="text-slate-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform"
      >
        <FiHome className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
