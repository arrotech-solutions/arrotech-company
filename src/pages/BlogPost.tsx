import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate, useParams } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Healthcare',
    excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and patient care.',
    content: `Artificial intelligence is revolutionizing healthcare in unprecedented ways. From diagnostic tools to treatment planning, AI is becoming an integral part of modern healthcare delivery.

    One of the most significant impacts of AI in healthcare is its ability to analyze vast amounts of medical data quickly and accurately. Machine learning algorithms can identify patterns and make predictions that would be impossible for human doctors to process in a reasonable timeframe.

    Key areas where AI is making a difference:

    1. Medical Imaging Analysis
    AI algorithms can analyze medical images with remarkable accuracy, helping radiologists detect abnormalities and make more accurate diagnoses.

    2. Predictive Analytics
    By analyzing patient data, AI can predict potential health issues before they become serious, enabling preventive care.

    3. Personalized Medicine
    AI helps create personalized treatment plans based on a patient's unique genetic makeup and medical history.

    4. Administrative Efficiency
    AI streamlines administrative tasks, reducing paperwork and allowing healthcare providers to focus more on patient care.`,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Big Data Analytics: A Game Changer',
    excerpt: 'Understanding the impact of big data analytics on business decision-making and strategy.',
    content: `In today's digital age, big data analytics has emerged as a transformative force in business decision-making. The ability to process and analyze vast amounts of data has opened new possibilities for organizations across industries.

    The Power of Big Data Analytics:

    1. Enhanced Decision Making
    Organizations can now make data-driven decisions based on real-time insights and predictive analytics.

    2. Customer Insights
    Big data analytics enables businesses to understand customer behavior patterns, preferences, and needs at an unprecedented level.

    3. Operational Efficiency
    By analyzing operational data, companies can identify bottlenecks, optimize processes, and reduce costs.

    4. Risk Management
    Advanced analytics helps in identifying potential risks and fraud patterns, enabling proactive risk management.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    category: 'Data Science',
    author: 'Michael Rodriguez',
    date: 'March 12, 2024',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Cloud Security Best Practices',
    excerpt: 'Essential security measures for protecting your cloud infrastructure and data.',
    content: `As organizations increasingly migrate to cloud environments, ensuring robust security measures has become more critical than ever.

    Essential Cloud Security Measures:

    1. Identity and Access Management (IAM)
    Implement strong authentication mechanisms and role-based access control.

    2. Data Encryption
    Encrypt data both in transit and at rest using strong encryption algorithms.

    3. Network Security
    Implement proper network segmentation, use firewalls, and monitor network traffic.

    4. Regular Security Audits
    Conduct regular security assessments and penetration testing.`,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
    category: 'Cloud Computing',
    author: 'Emma Thompson',
    date: 'March 10, 2024',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Machine Learning in Finance',
    excerpt: 'How machine learning is transforming financial services and risk management.',
    content: `Machine learning is transforming the financial services industry, revolutionizing how institutions operate and serve their customers.

    Key Applications of ML in Finance:

    1. Risk Assessment and Credit Scoring
    Machine learning algorithms can analyze vast amounts of data to assess credit risk more accurately.

    2. Fraud Detection
    ML systems can detect unusual patterns and potential fraud in real-time.

    3. Algorithmic Trading
    Machine learning enables more sophisticated trading strategies by analyzing market data.

    4. Customer Service and Personalization
    AI-powered chatbots and recommendation systems provide personalized financial advice.`,
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80&auto=format&fit=crop',
    category: 'AI & Machine Learning',
    author: 'David Kim',
    date: 'March 8, 2024',
    readTime: '5 min read'
  },
  {
    id: 5,
    title: 'Cybersecurity Trends 2024',
    excerpt: 'The latest trends and challenges in cybersecurity for the coming year.',
    content: `The cybersecurity landscape continues to evolve rapidly, with new threats and challenges emerging alongside technological advancements.

    Emerging Cybersecurity Trends:

    1. AI-Powered Security
    Artificial intelligence is being increasingly used to detect and respond to threats in real-time.

    2. Zero Trust Architecture
    The zero trust model is becoming the standard for modern security frameworks.

    3. Cloud Security
    As cloud adoption grows, securing cloud environments becomes more critical.

    4. Supply Chain Security
    Organizations are focusing more on securing their supply chains and third-party relationships.`,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop',
    category: 'Cybersecurity',
    author: 'Lisa Wang',
    date: 'March 5, 2024',
    readTime: '4 min read'
  },
  {
    id: 6,
    title: 'Business Intelligence Tools',
    excerpt: 'A comprehensive guide to modern BI tools and their applications.',
    content: `Modern business intelligence (BI) tools have revolutionized how organizations analyze and utilize their data.

    Key Features of Modern BI Tools:

    1. Data Visualization
    Advanced visualization capabilities help users understand complex data through interactive charts and dashboards.

    2. Real-time Analytics
    Modern BI tools provide real-time insights, allowing organizations to make timely decisions.

    3. Self-service BI
    User-friendly interfaces enable non-technical users to create reports and analyze data.

    4. Advanced Analytics
    Integration with machine learning provides deeper insights and forecasting.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    category: 'Business Intelligence',
    author: 'James Wilson',
    date: 'March 3, 2024',
    readTime: '7 min read'
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!post) {
    return (
      <div className="bg-slate-950 min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-blue-500 transition-all"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white mb-8 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/20 border border-violet-600/30 text-violet-400 text-sm font-medium mb-6">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-lg prose-invert max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Related Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={contentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5 }}
                      className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all"
                    >
                      <div className="relative h-48">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <Link
                          to={`/blog/${relatedPost.id}`}
                          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                        >
                          Read More
                          <FiArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
