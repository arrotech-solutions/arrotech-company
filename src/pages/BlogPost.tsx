import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, Calendar, Share2, Copy, Check, ChevronRight } from 'lucide-react';
import { BlogPost } from '../data/blogData';
import { apiService } from '../api/blog';
import SEO from '../components/SEO';

/* ── Simple Markdown to HTML ───────────────────────────── */
const renderMarkdown = (md: string): string => {
  return md
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4" id="$1">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-5">$1</h1>')
    // Bold & Italic
    .replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-violet-500 pl-4 py-1 my-4 text-slate-600 dark:text-slate-400 italic bg-violet-50/50 rounded-r-lg pr-4">$1</blockquote>')
    // Unordered lists
    .replace(/^- (.*$)/gim, '<li class="ml-6 mb-1.5 text-slate-700 dark:text-slate-300 list-disc">$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-1.5 text-slate-700 dark:text-slate-300 list-decimal">$1</li>')
    // Table rows
    .replace(/^\|(.+)\|$/gim, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => /^[\s-:]+$/.test(c))) return '';
      const cellTags = cells.map(c => `<td class="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800">${c.trim()}</td>`).join('');
      return `<tr class="hover:bg-slate-50 dark:bg-slate-950 transition-colors">${cellTags}</tr>`;
    })
    // Emojis in checkmarks
    .replace(/^- ✅ (.*$)/gim, '<li class="ml-6 mb-1.5 text-green-700 list-none flex items-center gap-2">✅ $1</li>')
    .replace(/^- ❌ (.*$)/gim, '<li class="ml-6 mb-1.5 text-red-600 list-none flex items-center gap-2">❌ $1</li>')
    // Code blocks
    .replace(/```([\s\S]*?)```/gim, '<pre class="bg-slate-900 text-slate-100 rounded-xl p-5 my-6 overflow-x-auto text-sm leading-relaxed font-mono"><code>$1</code></pre>')
    .replace(/`(.*?)`/gim, '<code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 text-violet-600 rounded text-sm font-mono">$1</code>')
    // Links
    .replace(/\[([^\]]*)\]\(([^)]*)\)/gim, '<a href="$2" class="text-violet-600 underline underline-offset-2 hover:text-violet-700 transition-colors" target="_blank" rel="noopener">$1</a>')
    // Paragraphs (lines not already tagged)
    .replace(/^(?!<[hlupbtoar])(.+)$/gim, '<p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">$1</p>');
};

/* ── Extract headings for ToC ──────────────────────────── */
const extractHeadings = (content: string): { id: string; text: string; level: number }[] => {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{1,3}) (.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    headings.push({
      id: match[2].trim(),
      text: match[2].trim(),
      level: match[1].length,
    });
  }
  return headings;
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // arrotech-company route uses :id instead of :slug in App.tsx
  const slug = id;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readProgress, setReadProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  // Fetch post
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await apiService.getBlogPost(slug || '');
        if (res?.post) {
          const p = res.post;
          setPost({
            id: p.id,
            slug: p.slug,
            title: p.title,
            description: p.description,
            content: p.content,
            cover_image: p.cover_image,
            author: p.author_name,
            author_avatar: p.author_avatar,
            date: p.published_at ? new Date(p.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
            readTime: p.read_time,
            tags: p.tags || [],
            category: p.category,
            category_color: p.category_color,
            is_featured: p.is_featured,
            views_count: p.views_count,
          });
        } else {
          throw new Error('Not found');
        }
      } catch (err) {
        console.error('Failed to fetch post:', err);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  // Related posts
  useEffect(() => {
    // TODO: Fetch related posts from API
    setRelatedPosts([]);
  }, [post]);

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadProgress(Math.min(100, progress));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headings = useMemo(() => post ? extractHeadings(post.content) : [], [post]);
  const htmlContent = useMemo(() => post ? renderMarkdown(post.content) : '', [post]);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const handleShareTwitter = useCallback(() => {
    if (post) window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  }, [post]);

  const handleShareLinkedIn = useCallback(() => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  }, []);

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="animate-pulse space-y-6 max-w-3xl w-full px-4">
          <div className="bg-slate-200 h-8 w-64 rounded-lg" />
          <div className="bg-slate-200 h-12 w-full rounded-lg" />
          <div className="bg-slate-200 h-80 w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  // Not found
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Post not found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-slate-900 dark:text-white rounded-xl font-medium text-sm hover:bg-violet-700 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} — Arrotech Solutions`}
        description={post.description}
        ogType="article"
        publishedTime={post.date}
        canonical={`/blog/${post.slug}`}
      />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/50">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-violet-600 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-16">
        {/* ── Hero Header ── */}
        <header className="relative bg-gradient-to-br from-slate-100 via-violet-100 to-blue-100 dark:from-slate-900 dark:via-violet-900 dark:to-blue-900 overflow-hidden">
          {/* Cover image background */}
          {post.cover_image && (
            <div className="absolute inset-0">
              <img src={post.cover_image} alt="" className="w-full h-full object-cover opacity-20 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
            </div>
          )}

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-violet-300 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            {/* Category + Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {post.category && (
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold text-slate-900 dark:text-white"
                  style={{ backgroundColor: `${post.category_color || '#7C3AED'}cc` }}
                >
                  {post.category}
                </span>
              )}
              {post.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-xs text-violet-300 border border-violet-500/30 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {post.description}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-medium">{post.author}</p>
                  <p className="text-xs text-slate-400">Author</p>
                </div>
              </div>
              <span className="w-px h-6 bg-slate-700" />
              <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
              {post.views_count && (
                <span className="flex items-center gap-1.5"><Eye size={14} />{post.views_count.toLocaleString()} views</span>
              )}
            </div>
          </div>
        </header>

        {/* ── Main Content Area ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Article body */}
            <article className="max-w-none w-full overflow-hidden">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <details className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700/80 p-4 open:shadow-lg transition-all duration-300">
                  <summary className="flex items-center justify-between font-semibold text-slate-900 dark:text-white cursor-pointer list-none">
                    <span>Table of Contents</span>
                    <ChevronRight size={16} className="transition-transform group-open:rotate-90 text-slate-400" />
                  </summary>
                  <nav className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
                    {headings.length > 0 ? headings.map((h, idx) => (
                      <a
                        key={idx}
                        href={`#${h.id}`}
                        className={`block text-sm py-1.5 text-slate-600 dark:text-slate-400 hover:text-violet-600 ${h.level > 1 ? 'pl-4' : ''}`}
                      >
                        {h.text}
                      </a>
                    )) : <p className="text-sm text-slate-400 italic">No headings found in this article.</p>}
                  </nav>
                </details>
              </div>

              <div
                className="prose-custom bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-sm w-full"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Share bar */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Share2 size={18} className="text-slate-500 dark:text-slate-400" />
                  <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Share this article</span>
                </div>
                <div className="flex-1 hidden sm:block" />
                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar pb-1">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
                  >
                    {copied ? <><Check size={12} className="text-green-500" /> Copied!</> : <><Copy size={12} /> Copy Link</>}
                  </button>
                  <button
                    onClick={handleShareTwitter}
                    className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
                  >
                    𝕏 / Twitter
                  </button>
                  <button
                    onClick={handleShareLinkedIn}
                    className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
                  >
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* Author card */}
              <div className="mt-8 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-lg">{post.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Building the future of artificial intelligence and digital solutions at Arrotech.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar — Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-20">
                {headings.length > 0 && (
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">On this page</h4>
                    <nav className="space-y-1">
                      {headings.map((h, idx) => (
                        <a
                          key={idx}
                          href={`#${h.id}`}
                          className={`block text-sm py-1.5 transition-colors hover:text-violet-600 ${h.level === 1 ? 'font-medium text-slate-800 dark:text-slate-100' :
                            h.level === 2 ? 'pl-3 text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-700 hover:border-violet-500' :
                              'pl-6 text-slate-500 dark:text-slate-400 text-xs'
                            }`}
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* CTA card */}
                <div className="mt-6 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2">Transform your business</h4>
                  <p className="text-sm text-violet-200 mb-4 leading-relaxed">
                    Discover how our custom software solutions can accelerate your growth.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 text-violet-700 rounded-lg text-sm font-semibold hover:bg-violet-50 transition-colors"
                  >
                    Get in touch <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Related Posts ── */}
        {relatedPosts.length > 0 && (
          <section className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700/80 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(rp => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {rp.cover_image && (
                      <div className="h-40 overflow-hidden">
                        <img src={rp.cover_image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-violet-700 transition-colors line-clamp-2">{rp.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{rp.description}</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                        <Clock size={11} />{rp.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA Banner ── */}
        <section className="bg-gradient-to-r from-violet-600 via-violet-700 to-blue-700 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to accelerate your growth?</h2>
            <p className="text-violet-200 mb-8 max-w-lg mx-auto">
              Join other leading businesses utilizing Arrotech Solutions for their software needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-white dark:bg-slate-900 text-violet-700 rounded-xl font-semibold hover:bg-violet-50 transition-all hover:shadow-lg"
              >
                Contact Sales
              </Link>
              <Link
                to="/services"
                className="px-8 py-3.5 border border-white/30 text-slate-900 dark:text-white rounded-xl font-medium hover:bg-white dark:bg-slate-900/10 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPostPage;
