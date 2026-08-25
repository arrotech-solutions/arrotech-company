import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  HelpCircle,
  X,
  MessageSquare,
  Sparkles,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import AIAssistant from './AIAssistant';

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  color: string;
  onClick: () => void;
  badge?: string;
}

const FloatingActionMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard shortcut to open menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + / to toggle menu
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        setShowAssistant(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const menuItems: MenuItem[] = [
    {
      id: 'assistant',
      icon: <Bot className="w-5 h-5" />,
      label: 'AI Assistant',
      description: 'Get help with anything',
      color: 'from-violet-500 to-blue-600',
      onClick: () => {
        setIsOpen(false);
        setShowAssistant(true);
      },
      badge: 'AI',
    },
    {
      id: 'whatsapp-support',
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp Support',
      description: 'Chat with our support team',
      color: 'from-green-500 to-emerald-600',
      onClick: () => {
        setIsOpen(false);
        window.open('https://wa.me/254797568564', '_blank');
      },
    }
  ];

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[60]" ref={menuRef}>
        {/* Backdrop when open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-slate-900/20 dark:bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Menu Items - Fan/Wheel Animation */}
        <div className={`absolute bottom-16 right-0 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden w-[calc(100vw-32px)] sm:w-80 shrink-0 right-0 origin-bottom-right">
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-violet-600 via-violet-500 to-blue-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Help & Resources</h3>
                    <p className="text-xs text-white/70">What do you need?</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2 space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200 group"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-xs font-medium rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-100 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Press <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded text-xs font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded text-xs font-mono">/</kbd> to toggle
              </p>
            </div>
          </div>
        </div>

        {/* Main FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${isOpen
            ? 'bg-slate-700 rotate-45'
            : 'bg-gradient-to-br from-violet-600 via-violet-500 to-blue-600'
            }`}
          aria-label="Help & Resources"
        >
          {/* Animated rings */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-violet-500 to-blue-600 animate-ping opacity-20" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 animate-pulse opacity-30" />
            </>
          )}

          {/* Icon */}
          <div className={`relative transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <div className="relative">
                <MessageSquare className="w-6 h-6 text-white" />
                <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
              </div>
            )}
          </div>
        </button>
      </div>

      {/* AI Assistant Panel */}
      {showAssistant && (
        <AIAssistant onClose={() => setShowAssistant(false)} />
      )}
    </>
  );
};

export default FloatingActionMenu;
