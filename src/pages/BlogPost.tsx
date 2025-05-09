import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiUser, FiClock, FiArrowLeft } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

// This would typically come from an API or database
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
    AI streamlines administrative tasks, reducing paperwork and allowing healthcare providers to focus more on patient care.

    The future of AI in healthcare looks promising, with ongoing research and development leading to even more sophisticated applications. However, it's important to note that AI is meant to augment, not replace, human healthcare providers. The combination of AI technology and human expertise will lead to the best outcomes for patients.`,
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
    Organizations can now make data-driven decisions based on real-time insights and predictive analytics. This leads to more accurate forecasting and better strategic planning.

    2. Customer Insights
    Big data analytics enables businesses to understand customer behavior patterns, preferences, and needs at an unprecedented level. This knowledge helps in creating more personalized experiences and targeted marketing strategies.

    3. Operational Efficiency
    By analyzing operational data, companies can identify bottlenecks, optimize processes, and reduce costs. This leads to improved efficiency and productivity across the organization.

    4. Risk Management
    Advanced analytics helps in identifying potential risks and fraud patterns, enabling proactive risk management and better security measures.

    The Future of Big Data Analytics:
    As technology continues to evolve, we can expect even more sophisticated analytics tools and techniques. The integration of AI and machine learning with big data analytics will further enhance its capabilities and applications.

    Organizations that embrace big data analytics will have a significant competitive advantage in their respective markets. The key to success lies in having the right tools, skills, and strategies to effectively leverage this powerful technology.`,
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
    content: `As organizations increasingly migrate to cloud environments, ensuring robust security measures has become more critical than ever. Cloud security requires a comprehensive approach that addresses various aspects of data protection and access control.

    Essential Cloud Security Measures:

    1. Identity and Access Management (IAM)
    Implement strong authentication mechanisms and role-based access control. Use multi-factor authentication (MFA) and regularly review access permissions to ensure the principle of least privilege.

    2. Data Encryption
    Encrypt data both in transit and at rest. Use strong encryption algorithms and manage encryption keys securely. Consider implementing end-to-end encryption for sensitive data.

    3. Network Security
    Implement proper network segmentation, use firewalls, and monitor network traffic for suspicious activities. Consider using a Virtual Private Cloud (VPC) for additional isolation.

    4. Regular Security Audits
    Conduct regular security assessments and penetration testing. Monitor logs and implement automated alerts for suspicious activities.

    Best Practices for Cloud Security:

    1. Regular Updates and Patching
    Keep all systems and applications up to date with the latest security patches. Implement automated update mechanisms where possible.

    2. Backup and Disaster Recovery
    Maintain regular backups and test recovery procedures. Implement a comprehensive disaster recovery plan.

    3. Security Training
    Provide regular security awareness training to employees. Ensure they understand their role in maintaining cloud security.

    4. Compliance and Governance
    Stay informed about relevant regulations and compliance requirements. Implement necessary controls and maintain proper documentation.

    The Future of Cloud Security:
    As cloud technology evolves, security measures must adapt accordingly. Emerging technologies like AI and machine learning are being increasingly used to enhance cloud security through automated threat detection and response.`,
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
    content: `Machine learning is transforming the financial services industry, revolutionizing how institutions operate and serve their customers. From risk assessment to fraud detection, ML applications are becoming increasingly sophisticated and essential.

    Key Applications of ML in Finance:

    1. Risk Assessment and Credit Scoring
    Machine learning algorithms can analyze vast amounts of data to assess credit risk more accurately than traditional methods. They can identify patterns and predict default probabilities with higher precision.

    2. Fraud Detection
    ML systems can detect unusual patterns and potential fraud in real-time, significantly reducing financial losses and protecting customers.

    3. Algorithmic Trading
    Machine learning enables more sophisticated trading strategies by analyzing market data and identifying profitable opportunities.

    4. Customer Service and Personalization
    AI-powered chatbots and recommendation systems provide personalized financial advice and improve customer experience.

    Challenges and Considerations:

    1. Data Quality and Privacy
    Ensuring data quality and maintaining privacy while using sensitive financial information is crucial.

    2. Regulatory Compliance
    Financial institutions must ensure their ML systems comply with relevant regulations and standards.

    3. Model Transparency
    Understanding and explaining ML model decisions is essential for regulatory compliance and customer trust.

    The Future of ML in Finance:
    As technology advances, we can expect more sophisticated applications of machine learning in finance. The integration of AI with blockchain and other emerging technologies will further transform the industry.`,
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
    content: `The cybersecurity landscape continues to evolve rapidly, with new threats and challenges emerging alongside technological advancements. Understanding these trends is crucial for organizations to maintain robust security postures.

    Emerging Cybersecurity Trends:

    1. AI-Powered Security
    Artificial intelligence is being increasingly used to detect and respond to threats in real-time. AI systems can analyze patterns and identify potential security breaches more effectively than traditional methods.

    2. Zero Trust Architecture
    The zero trust model, which assumes no user or device is inherently trustworthy, is becoming the standard for modern security frameworks.

    3. Cloud Security
    As cloud adoption grows, securing cloud environments becomes more critical. Organizations are implementing more sophisticated cloud security measures.

    4. Supply Chain Security
    With increasing supply chain attacks, organizations are focusing more on securing their supply chains and third-party relationships.

    Key Challenges and Solutions:

    1. Skills Gap
    The cybersecurity skills gap continues to be a significant challenge. Organizations are investing in training and automation to address this issue.

    2. Regulatory Compliance
    Staying compliant with evolving regulations while maintaining security is a constant challenge.

    3. Remote Work Security
    The shift to remote work has created new security challenges that organizations must address.

    Future Outlook:
    As technology continues to evolve, so will cybersecurity threats and solutions. Organizations must stay vigilant and adapt their security strategies accordingly.`,
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
    content: `Modern business intelligence (BI) tools have revolutionized how organizations analyze and utilize their data. These tools provide powerful capabilities for data visualization, reporting, and analytics, enabling better decision-making across all levels of an organization.

    Key Features of Modern BI Tools:

    1. Data Visualization
    Advanced visualization capabilities help users understand complex data through interactive charts, graphs, and dashboards.

    2. Real-time Analytics
    Modern BI tools provide real-time insights, allowing organizations to make timely decisions based on current data.

    3. Self-service BI
    User-friendly interfaces enable non-technical users to create reports and analyze data without IT assistance.

    4. Advanced Analytics
    Integration with machine learning and predictive analytics capabilities provides deeper insights and forecasting.

    Popular BI Tools and Their Applications:

    1. Tableau
    Known for its powerful visualization capabilities and user-friendly interface.

    2. Power BI
    Microsoft's solution offering strong integration with other Microsoft products.

    3. QlikView
    Provides associative analytics and powerful data discovery features.

    4. Looker
    Offers strong data modeling capabilities and modern interface.

    Best Practices for BI Implementation:

    1. Data Quality
    Ensure data accuracy and consistency across all sources.

    2. User Training
    Provide adequate training to help users make the most of BI tools.

    3. Regular Updates
    Keep tools updated with the latest features and security patches.

    4. Integration
    Ensure proper integration with existing systems and data sources.

    The Future of BI:
    As technology advances, BI tools will become more sophisticated, with enhanced AI capabilities and better integration with other business systems.`,
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

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')} variant="primary">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="pt-20 bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Button
                onClick={() => navigate('/blog')}
                variant="outline"
                size="sm"
                className="mb-8 text-white border-white hover:bg-white/10"
              >
                <FiArrowLeft className="mr-2" />
                Back to Blog
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-indigo-100">
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  {post.readTime}
                </div>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section ref={contentRef} className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                </div>
              </div>

              {/* Related Posts Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Related Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts
                    .filter(p => p.id !== post.id && p.category === post.category)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <motion.div
                        key={relatedPost.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={contentInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="relative h-48">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {relatedPost.excerpt}
                          </p>
                          <Button
                            onClick={() => navigate(`/blog/${relatedPost.id}`)}
                            variant="outline"
                            size="sm"
                          >
                            Read More
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
};

export default BlogPost; 