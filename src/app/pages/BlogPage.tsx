import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Shield, Code, Palette, Server, TrendingUp, Calendar, Clock, ArrowRight } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const categories = ['All', 'SEO', 'Web Design', 'Security', 'Development', 'Mobile', 'Marketing'];
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    {
      title: 'How SEO Can Grow Your Business in 2026',
      category: 'SEO',
      excerpt: 'Discover the latest SEO strategies that can help your business rank higher and attract more customers in the evolving digital landscape.',
      icon: Search,
      color: 'bg-blue-500',
      date: '2026-05-20',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1633098096956-afdc8bcc8552?w=600&h=400&fit=crop',
    },
    {
      title: 'Why Mobile Responsive Design is Essential',
      category: 'Web Design',
      excerpt: 'Learn why having a mobile-responsive website is crucial for modern businesses and how it impacts user experience and conversion rates.',
      icon: Code,
      color: 'bg-purple-500',
      date: '2026-05-18',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=600&h=400&fit=crop',
    },
    {
      title: 'Website Security Best Practices for Businesses',
      category: 'Security',
      excerpt: 'Protect your business and customers with these essential security measures and best practices for your website infrastructure.',
      icon: Shield,
      color: 'bg-green-500',
      date: '2026-05-15',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&h=400&fit=crop',
    },
    {
      title: 'The Future of Web Development: Trends to Watch',
      category: 'Development',
      excerpt: 'Explore the emerging trends shaping the future of web development and how they will impact your digital strategy.',
      icon: Code,
      color: 'bg-orange-500',
      date: '2026-05-12',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&h=400&fit=crop',
    },
    {
      title: 'Building High-Performance Web Applications',
      category: 'Development',
      excerpt: 'Learn the techniques and best practices for creating lightning-fast web applications that deliver exceptional user experiences.',
      icon: TrendingUp,
      color: 'bg-red-500',
      date: '2026-05-10',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&h=400&fit=crop',
    },
    {
      title: 'UI/UX Design Principles That Convert',
      category: 'Web Design',
      excerpt: 'Discover the fundamental design principles that create engaging user experiences and drive business conversions.',
      icon: Palette,
      color: 'bg-pink-500',
      date: '2026-05-08',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    },
  ];

  const popularPosts = [
    { title: 'How SEO Can Grow Your Business in 2026', icon: Search, color: 'bg-blue-500' },
    { title: 'Why Mobile Responsive Design is Essential', icon: Code, color: 'bg-purple-500' },
    { title: 'Website Security Best Practices', icon: Shield, color: 'bg-green-500' },
    { title: 'The Future of Web Development', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tips, and news about web development, design, and digital marketing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900 sticky top-20 z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                      <div className={`absolute top-4 left-4 ${article.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{article.excerpt}</p>
                      <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1">
                        Read More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Posts */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="text-blue-400" size={24} />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div
                      key={index}
                      className="flex gap-3 cursor-pointer group"
                    >
                      <div className={`w-12 h-12 rounded-lg ${post.color} flex items-center justify-center flex-shrink-0`}>
                        <post.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-slate-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Need Help with Your Project?</h3>
                <p className="text-blue-100 mb-4">Get a free consultation and quote today</p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-semibold transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
