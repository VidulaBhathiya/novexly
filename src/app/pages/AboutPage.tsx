import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Clock, TrendingUp, Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

export function AboutPage() {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    years: 0,
    support: 0,
  });

  const targetValues = {
    projects: 500,
    satisfaction: 98,
    years: 5,
    support: 24,
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        projects: Math.min(prev.projects + Math.ceil(targetValues.projects / steps), targetValues.projects),
        satisfaction: Math.min(prev.satisfaction + Math.ceil(targetValues.satisfaction / steps), targetValues.satisfaction),
        years: Math.min(prev.years + Math.ceil(targetValues.years / steps), targetValues.years),
        support: Math.min(prev.support + Math.ceil(targetValues.support / steps), targetValues.support),
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Client-First',
      description: 'Your success is our priority. We listen, understand, and deliver exactly what you need.',
      color: 'red',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex challenges.',
      color: 'yellow',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honesty, transparency, and ethical practices guide everything we do.',
      color: 'green',
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Fast turnaround times without compromising on quality or attention to detail.',
      color: 'purple',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared goals.',
      color: 'orange',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' },
    red: { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-500' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500', border: 'border-green-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500' },
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
              About Novexly
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted digital partner in Sri Lanka
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-2"
            >
              <p className="text-blue-400 font-semibold mb-2">WHO WE ARE</p>
              <h2 className="text-4xl font-bold text-white mb-6">A Full-Stack Team Built for Modern Business</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Novexly is a full-stack digital company focused on building fast, secure, and mobile-first websites
                that help businesses grow with confidence. We combine design, development, and support into one
                streamlined process so every project feels clear, efficient, and reliable.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From custom web development to long-term maintenance, we work with a quality-first mindset and a
                commitment to unlimited revisions, lifetime warranty, and 24/7 customer support for peace of mind.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 lg:self-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[170px]"
              >
                <Target className="text-blue-400 mb-4" size={28} />
                <h3 className="text-white font-semibold text-lg mb-2">Full-Stack Development</h3>
                <p className="text-gray-400">End-to-end development for modern business websites and applications.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[170px]"
              >
                <Zap className="text-yellow-400 mb-4" size={28} />
                <h3 className="text-white font-semibold text-lg mb-2">Fast & Secure</h3>
                <p className="text-gray-400">Optimized performance and strong protection built into every project.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[170px]"
              >
                <Eye className="text-cyan-400 mb-4" size={28} />
                <h3 className="text-white font-semibold text-lg mb-2">Mobile-First Responsive</h3>
                <p className="text-gray-400">Layouts that look sharp and work smoothly on every screen size.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[170px]"
              >
                <Shield className="text-green-400 mb-4" size={28} />
                <h3 className="text-white font-semibold text-lg mb-2">Unlimited Revisions</h3>
                <p className="text-gray-400">We refine the work until it feels right for your brand and goals.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[170px]"
              >
                <Clock className="text-orange-400 mb-4" size={28} />
                <h3 className="text-white font-semibold text-lg mb-2">Lifetime Warranty</h3>
                <p className="text-gray-400">Long-term reliability backed by ongoing care and support.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[170px]"
              >
                <Users className="text-purple-400 mb-4" size={28} />
                <h3 className="text-white font-semibold text-lg mb-2">24/7 Customer Support</h3>
                <p className="text-gray-400">Help whenever you need it, day or night.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 font-semibold mb-2">OUR STORY</p>
              <h2 className="text-4xl font-bold text-white mb-6">Building Digital Excellence Since 2021</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Novexly was founded with a simple mission: to help businesses succeed online through exceptional
                full-stack web development and digital solutions. Based in Colombo, Sri Lanka, we've grown from a
                small team of passionate developers into a full-service digital agency trusted by clients worldwide.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our journey has been driven by innovation, dedication, and a commitment to delivering results that
                matter. We combine creative design, secure architecture, and mobile-first development to build
                websites and applications that look great, load fast, and drive real business growth.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're proud to support businesses with unlimited revisions, lifetime warranty, and 24/7
                customer support while we continue to push the boundaries of what's possible in web development.
              </p>
            </div>

            <div className="space-y-6">
              {/* Mission Card */}
              <div className="bg-slate-800 border-l-4 border-blue-500 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-blue-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                  and deliver measurable results. We're committed to excellence in every project we undertake.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-slate-800 border-l-4 border-purple-500 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading digital agency in Sri Lanka and a trusted partner for businesses worldwide,
                  recognized for our innovation, quality, and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all"
            >
              <TrendingUp className="text-blue-400 mx-auto mb-4" size={40} />
              <div className="text-5xl font-bold text-white mb-2">{counters.projects}+</div>
              <div className="text-gray-400">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all"
            >
              <Award className="text-purple-400 mx-auto mb-4" size={40} />
              <div className="text-5xl font-bold text-white mb-2">{counters.satisfaction}%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all"
            >
              <Clock className="text-green-400 mx-auto mb-4" size={40} />
              <div className="text-5xl font-bold text-white mb-2">{counters.years}+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all"
            >
              <Users className="text-orange-400 mx-auto mb-4" size={40} />
              <div className="text-5xl font-bold text-white mb-2">{counters.support}/7</div>
              <div className="text-gray-400">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-2">CORE VALUES</p>
            <h2 className="text-4xl font-bold text-white">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-lg ${colorMap[value.color].bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
