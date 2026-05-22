import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, ChevronDown } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const whatsappNumber = '94768655751';
      const messageLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.subject ? `Subject: ${formData.subject}` : null,
        `Message: ${formData.message}`,
      ].filter(Boolean);

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '0768655751',
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: '+94 76 865 5751',
      color: 'green',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@novexly.com',
      color: 'red',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Colombo, Sri Lanka',
      color: 'purple',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Project timelines vary based on complexity and requirements. A simple website typically takes 2-4 weeks, while more complex projects may take 6-12 weeks. We provide a detailed timeline during the initial consultation.',
    },
    {
      question: 'Do you provide website maintenance?',
      answer: 'Yes! We offer comprehensive maintenance packages including regular updates, security monitoring, backups, and technical support. All our clients receive lifetime warranty and 24/7 support.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is customized based on your specific needs and project scope. Contact us for a free consultation and quote. We offer competitive rates and flexible payment plans.',
    },
    {
      question: 'Do you offer SEO services?',
      answer: 'Absolutely! We provide complete SEO services including keyword research, on-page optimization, technical SEO, content strategy, and performance tracking to help your website rank higher.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Yes, we specialize in website redesigns and modernization. We can help update your existing site with modern design, improved performance, better security, and enhanced user experience.',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500' },
    red: { bg: 'bg-red-500', text: 'text-red-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500' },
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss your project and bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-900 border border-green-500 rounded-xl p-8 text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
                  <p className="text-gray-300 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
                    >
                      <div className={`w-12 h-12 rounded-lg ${colorMap[info.color].bg} flex items-center justify-center mb-4`}>
                        <info.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                      <p className="text-gray-400">{info.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8 h-64 flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="text-blue-400 mx-auto mb-3" size={48} />
                  <p className="text-gray-400">Map Location</p>
                  <p className="text-gray-300 font-semibold mt-2">Colombo, Sri Lanka</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-900 transition-colors"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`text-blue-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free consultation and quote today
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
