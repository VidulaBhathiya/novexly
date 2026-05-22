import { motion } from 'motion/react';
import { Code, Palette, Server, Search, Shield, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create stunning user experiences that captivate your audience and drive engagement.',
      benefits: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing and optimization',
      ],
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Build powerful, responsive websites that deliver results and exceed expectations.',
      benefits: [
        'Custom website development',
        'Mobile-responsive design',
        'Content management systems',
        'E-commerce solutions',
      ],
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=800&h=600&fit=crop',
    },
    {
      icon: Server,
      title: 'Web Hosting',
      description: 'Reliable and fast hosting solutions with enterprise-grade infrastructure.',
      benefits: [
        '99.9% uptime guarantee',
        'Daily automated backups',
        'SSL certificates included',
        'Scalable resources',
      ],
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800&h=600&fit=crop',
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your visibility and rank higher on search engines with proven strategies.',
      benefits: [
        'Keyword research and strategy',
        'On-page and technical SEO',
        'Content optimization',
        'Performance tracking and reporting',
      ],
      color: 'green',
      image: 'https://images.unsplash.com/photo-1633098096956-afdc8bcc8552?w=800&h=600&fit=crop',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly with ongoing support and updates.',
      benefits: [
        'Regular security updates',
        'Performance optimization',
        'Content updates and changes',
        'Technical support',
      ],
      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop',
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Protect your digital assets with comprehensive security solutions.',
      benefits: [
        'Vulnerability assessments',
        'Malware scanning and removal',
        'Firewall configuration',
        'SSL/TLS implementation',
      ],
      color: 'red',
      image: 'https://images.unsplash.com/photo-1727434032773-af3cd98375ba?w=800&h=600&fit=crop',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We understand your goals, target audience, and project requirements.',
    },
    {
      step: 2,
      title: 'Design & Prototype',
      description: 'Create wireframes and designs that align with your brand vision.',
    },
    {
      step: 3,
      title: 'Development',
      description: 'Build your solution using cutting-edge technology and best practices.',
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality, performance, and security.',
    },
    {
      step: 5,
      title: 'Launch & Support',
      description: 'Deploy your project and provide ongoing support and maintenance.',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500', border: 'border-green-500' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500' },
    red: { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-500' },
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to grow your business and achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className={`mb-24 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-3 ${colorMap[service.color].bg} rounded-lg px-4 py-2 mb-4`}>
                    <service.icon className="text-white" size={24} />
                    <span className="text-white font-semibold">{service.title}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className={`${colorMap[service.color].text} flex-shrink-0 mt-0.5`} size={20} />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`px-6 py-3 ${colorMap[service.color].bg} hover:opacity-90 text-white rounded-lg font-semibold transition-all flex items-center gap-2`}
                  >
                    Get Free Quote
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-2xl w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 ${colorMap[service.color].bg} opacity-20 rounded-xl group-hover:opacity-30 transition-opacity`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-2">HOW WE WORK</p>
            <h2 className="text-4xl font-bold text-white">Our Process</h2>
          </div>

          <div className="relative">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6 mb-12 last:mb-0"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent" />
                )}

                {/* Step Number */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/50">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today for a free consultation and quote
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
