'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Zap size={14} className="text-primary fill-primary" />
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              {t.hero.badge}
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {t.hero.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">
              InfinityPoint
            </span>
          </h1>

          <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="#portfolio"
              className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-primary/40 flex items-center gap-2">
              {t.hero.workBtn}
              <ArrowRight
                className={`transition-transform duration-300 ${
                  language === 'ar'
                    ? 'group-hover:-translate-x-1 rotate-180'
                    : 'group-hover:translate-x-1'
                }`}
              />
            </Link>
            <Link
              href="#contact"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
              {t.hero.quoteBtn}
            </Link>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block">
          <div className="relative z-10 animate-float">
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-sm mx-auto transform rotate-[-6deg] hover:rotate-0 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center">
                  <Zap className="text-white fill-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Innovation</h3>
                  <p className="text-white/50 text-sm">Empowering Growth</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%] rounded-full" />
                </div>
                <div className="h-2 w-3/4 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 w-[65%] rounded-full" />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-move-x">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-white/60">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
