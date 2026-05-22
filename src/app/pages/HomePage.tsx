import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Palette, Server, Search, Shield, Wrench, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';
import logoText from '../../imports/image-1.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that engage and convert visitors into customers.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Custom websites built with cutting-edge technology, fully responsive and optimized for performance.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Server,
      title: 'Web Hosting',
      description: 'Reliable, fast, and secure hosting solutions with 99.9% uptime guarantee and 24/7 support.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your online visibility with professional SEO strategies that drive organic traffic and rankings.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly with regular updates, backups, and technical support.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Enterprise-grade security measures to protect your website and customer data from threats.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const technologies = [
    { name: 'Next.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Laravel', icon: '🔴' },
    { name: 'Artificial Intelligence', icon: '🤖' },
    { name: 'AWS', icon: '☁️' },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      country: 'USA',
      flag: '🇺🇸',
      review: 'Outstanding work! The team at Novexly delivered a beautiful website that exceeded our expectations. Their attention to detail and professionalism is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
    },
    {
      name: 'Sarah Johnson',
      country: 'UK',
      flag: '🇬🇧',
      review: 'Incredible service from start to finish. They understood our vision perfectly and created a website that truly represents our brand. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    },
    {
      name: 'Kasun Perera',
      country: 'Sri Lanka',
      flag: '🇱🇰',
      review: 'Best web development agency in Sri Lanka! Professional, responsive, and delivered on time. Our business has grown significantly since launching the new site.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
    },
    {
      name: 'Emma Wilson',
      country: 'Australia',
      flag: '🇦🇺',
      review: 'The team is amazing! They provided exceptional support throughout the project and continue to help with maintenance. Worth every penny.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=100&h=100&fit=crop',
    },
    {
      name: 'Michael Chen',
      country: 'Singapore',
      flag: '🇸🇬',
      review: 'Professional, creative, and reliable. Novexly transformed our online presence with a modern, fast website. Our conversion rate has doubled!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1676989880361-091e12efc056?w=100&h=100&fit=crop',
    },
  ];

  const blogs = [
    {
      title: 'How SEO Can Grow Your Business in 2026',
      category: 'SEO',
      excerpt: 'Discover the latest SEO strategies that can help your business rank higher and attract more customers.',
      color: 'bg-blue-500',
      icon: Search,
    },
    {
      title: 'Why Mobile Responsive Design is Essential',
      category: 'Web Design',
      excerpt: 'Learn why having a mobile-responsive website is crucial for modern businesses and user experience.',
      color: 'bg-purple-500',
      icon: Code,
    },
    {
      title: 'Website Security Best Practices for Businesses',
      category: 'Security',
      excerpt: 'Protect your business and customers with these essential security measures for your website.',
      color: 'bg-green-500',
      icon: Shield,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                Web Agency · Colombo, Sri Lanka
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Building Digital Excellence with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  novexly
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Professional Web Development | SEO | Mobile Solutions in Sri Lanka
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We deliver mobile responsive websites with unlimited revisions, lifetime warranty, 24/7 support, and enterprise-grade security. Your digital success is our mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700"
                >
                  View Services
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <img
                    src={logoText}
                    alt="Novexly"
                    className="w-full max-w-md mx-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">WHO WE ARE</p>
            <h2 className="text-4xl font-bold text-white mb-4">Your Professional Digital Partner in Sri Lanka</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
              Novexly is a premier web development agency based in Colombo, Sri Lanka. We specialize in creating stunning,
              high-performance websites and digital solutions that drive business growth. Our team of expert developers,
              designers, and digital strategists work together to deliver exceptional results that exceed expectations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              With a focus on innovation, quality, and customer satisfaction, we've successfully delivered over 500 projects
              for clients worldwide. From startups to enterprises, we provide comprehensive digital solutions including web
              development, mobile apps, SEO, and ongoing support to ensure your online success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Code, title: 'Expert Development', description: 'Cutting-edge technology and best practices' },
              { icon: Palette, title: 'Creative Design', description: 'Beautiful, user-centered interfaces' },
              { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security measures' },
              { icon: CheckCircle, title: 'Quality Assured', description: 'Rigorous testing and support' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <item.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">OUR PROFESSIONAL SERVICES</p>
            <h2 className="text-4xl font-bold text-white">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 group"
                >
                  Get Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <p className="text-blue-400 font-semibold mb-2">TECHNOLOGIES WE MASTER</p>
            <h2 className="text-4xl font-bold text-white">Our Tech Stack</h2>
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 bg-slate-800 border border-slate-700 rounded-lg px-8 py-4 flex items-center gap-3 hover:border-blue-500/50 transition-all"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-white font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">WHY OUR CLIENTS LOVE US</p>
            <h2 className="text-4xl font-bold text-white">Client Testimonials</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].review}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-400 text-sm flex items-center gap-2">
                    <span>{testimonials[currentTestimonial].flag}</span>
                    {testimonials[currentTestimonial].country}
                  </div>
                </div>
              </div>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="text-white" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-blue-500 w-8' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">LATEST INSIGHTS</p>
            <h2 className="text-4xl font-bold text-white">From Our Blog</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group"
                onClick={() => onNavigate('blog')}
              >
                <div className={`${blog.color} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <blog.icon className="text-white" size={64} />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('blog')}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700"
            >
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss your project and create a digital solution that drives results.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </section>
    </div>
  );
}
