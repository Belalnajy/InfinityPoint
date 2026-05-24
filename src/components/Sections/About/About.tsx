'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { val: '150+', label: t.about.delivered },
    { val: '50+', label: t.about.developers },
    { val: '99%', label: t.about.satisfaction },
  ];

  return (
    <section
      id="about"
      className="relative bg-neutral-950 text-white py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image + floating stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative">
            <div className="relative z-10 h-[480px] sm:h-[540px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <div className="text-6xl font-extrabold text-gradient-primary mb-2">
                  10+
                </div>
                <p className="text-lg text-white/90 font-medium">
                  {t.about.years}
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white/[0.08] backdrop-blur-md rounded-2xl shadow-xl shadow-black/20 border border-white/10 p-5 z-30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    100% On-Time
                  </div>
                  <div className="text-xs text-white/50">Delivery Rate</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/15 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Who We Are
            </motion.div>

            <h2 className="heading-section text-gradient-light">
              {t.about.title}{' '}
              <span className="text-gradient-primary">InfinityPoint</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              {t.about.text}
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="text-center p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-extrabold text-gradient-primary mb-1">
                    {stat.val}
                  </div>
                  <p className="text-xs text-white/50 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="mt-10 space-y-4">
              <motion.div
                whileHover={{ x: 4 }}
                className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 border-l-4 border-l-primary flex gap-4 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <Target size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t.about.mission}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {t.about.missionText}
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 border-l-4 border-l-white/30 flex gap-4 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                  <Eye size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t.about.vision}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {t.about.visionText}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
