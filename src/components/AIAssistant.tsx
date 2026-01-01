import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend, FiCpu, FiZap, FiUser } from 'react-icons/fi';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Arro, your AI assistant. 👋 How can I help you today? Ask me about our AI solutions, services, or products!",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickReplies = [
    "What services do you offer?",
    "Tell me about Mini-Hub",
    "How can AI help my business?",
    "I want to get started",
  ];

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Services related
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offer')) {
      return "We offer cutting-edge AI solutions including:\n\n🤖 **AI Automation** - Streamline workflows and eliminate repetitive tasks\n\n💬 **Conversational AI** - Intelligent chatbots and virtual assistants\n\n🔬 **Research Intelligence** - AI-powered data analysis and insights\n\n⚡ **Custom Development** - Tailored AI solutions for your unique needs\n\nWould you like to learn more about any specific service?";
    }

    // Mini-Hub
    if (lowerMessage.includes('mini-hub') || lowerMessage.includes('minihub') || lowerMessage.includes('hub')) {
      return "**Mini-Hub** is our flagship AI-powered marketing & business automation platform! 🚀\n\n✨ Features:\n• Multi-LLM integration (OpenAI, Claude, Gemini)\n• 15+ platform integrations (Slack, HubSpot, GA4)\n• Natural language workflow automation\n• Autonomous AI agents\n\nVisit: hub.arrotechsolutions.com";
    }

    // WholeSaleHub / Crowdsource
    if (lowerMessage.includes('wholesale') || lowerMessage.includes('crowdsource') || lowerMessage.includes('marketplace')) {
      return "**WholeSaleHub** is our AI-driven B2B wholesale marketplace! 🏪\n\n📦 Features:\n• Smart supplier matching\n• AI-powered price optimization\n• Bulk ordering automation\n• Real-time inventory tracking\n\nVisit: crowdsource.arrotechsolutions.com";
    }

    // TSC Swap
    if (lowerMessage.includes('tsc') || lowerMessage.includes('swap') || lowerMessage.includes('exchange')) {
      return "**TSC Swap** is our innovative transfer certificate exchange platform! 🔄\n\n📜 Features:\n• Secure certificate trading\n• Automated verification\n• Smart matching system\n• Transparent transactions\n\nVisit: tscswap.com";
    }

    // Products
    if (lowerMessage.includes('product') || lowerMessage.includes('solution')) {
      return "We have three amazing live products:\n\n🔹 **Mini-Hub** - AI-powered marketing automation\n🔹 **WholeSaleHub** - B2B wholesale marketplace\n🔹 **TSC Swap** - Transfer certificate exchange\n\nWhich one would you like to know more about?";
    }

    // AI/Business help
    if (lowerMessage.includes('ai help') || lowerMessage.includes('business') || lowerMessage.includes('benefit')) {
      return "AI can transform your business in many ways:\n\n📈 **Increase Efficiency** - Automate 30%+ of repetitive tasks\n\n💡 **Better Decisions** - Data-driven insights in real-time\n\n🎯 **Customer Experience** - 24/7 intelligent support\n\n💰 **Cost Savings** - Reduce operational costs significantly\n\nWant me to schedule a consultation to discuss your specific needs?";
    }

    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Our pricing is customized based on your specific needs! 💼\n\nWe offer:\n• Flexible subscription plans\n• Enterprise licensing\n• Custom project pricing\n\nContact us at info@arrotechsolutions.com or visit our Contact page for a personalized quote!";
    }

    // Get started / Contact
    if (lowerMessage.includes('start') || lowerMessage.includes('contact') || lowerMessage.includes('get in touch') || lowerMessage.includes('demo')) {
      return "Awesome! Let's get you started! 🎉\n\nYou can:\n📧 Email: info@arrotechsolutions.com\n📝 Visit our Contact page\n📅 Schedule a free consultation\n\nOur team typically responds within 24 hours. We'd love to discuss how AI can transform your business!";
    }

    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 Great to meet you! I'm Arro, your AI assistant.\n\nI can help you learn about:\n• Our AI services and solutions\n• Our live products (Mini-Hub, WholeSaleHub, TSC Swap)\n• How AI can benefit your business\n\nWhat would you like to explore?";
    }

    // Thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! 😊 It's my pleasure to help!\n\nIs there anything else you'd like to know about Arrotech Solutions?";
    }

    // Default response
    return "That's a great question! 🤔\n\nI'm best at answering questions about:\n• Our AI services and capabilities\n• Mini-Hub, WholeSaleHub, and TSC Swap\n• How AI can help your business\n• Getting started with Arrotech\n\nFor specific inquiries, our team at info@arrotechsolutions.com would love to help!";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = generateResponse(messageText);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/30 flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        aria-label="Open AI Assistant"
      >
        <FiMessageCircle className="w-6 h-6" />
        
        {/* Pulse effect */}
        <span className="absolute w-full h-full rounded-full bg-violet-500 animate-ping opacity-30" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] max-h-[80vh] bg-slate-900 rounded-2xl shadow-2xl shadow-black/50 border border-slate-700/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-b border-slate-700/50 p-4">
              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FiCpu className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white flex items-center gap-2">
                      Arro
                      <span className="px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-r from-violet-500 to-blue-500 rounded text-white">AI</span>
                    </h3>
                    <p className="text-xs text-slate-400">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    message.sender === 'assistant' 
                      ? 'bg-gradient-to-br from-violet-500 to-blue-600' 
                      : 'bg-slate-700'
                  }`}>
                    {message.sender === 'assistant' ? (
                      <FiZap className="w-4 h-4 text-white" />
                    ) : (
                      <FiUser className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                  
                  {/* Message bubble */}
                  <div className={`max-w-[80%] ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-2xl rounded-tr-md' 
                      : 'bg-slate-800 text-slate-200 rounded-2xl rounded-tl-md'
                  } px-4 py-3 text-sm`}>
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ 
                      __html: message.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                        .replace(/\n/g, '<br />') 
                    }} />
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                    <FiZap className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSendMessage(reply)}
                      className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all"
                  aria-label="Send message"
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-center">
                Powered by Arrotech AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;

