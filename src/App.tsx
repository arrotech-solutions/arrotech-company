import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import BlogPost from './pages/BlogPost';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <ThemeToggle />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App; 