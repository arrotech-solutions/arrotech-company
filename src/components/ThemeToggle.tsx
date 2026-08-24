import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

function readIsDark(): boolean {
    if (typeof document === 'undefined') return false;
    if (document.documentElement.classList.contains('dark')) return true;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(readIsDark);

    useEffect(() => {
        const sync = () => setIsDark(document.documentElement.classList.contains('dark'));
        const observer = new MutationObserver(sync);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        
        // Initial setup on mount
        if (isDark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            localStorage.setItem('theme', next ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', next);
            return next;
        });
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-24 right-8 p-3 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white rounded-full shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300 z-50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Dark Mode"
        >
            {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
        </motion.button>
    );
};

export default ThemeToggle; 