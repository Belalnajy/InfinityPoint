'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

function useCountUp(target: number, inView: boolean, duration = 2) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return controls.stop;
  }, [target, inView, duration]);

  return value;
}

const stats = [
  { labelEn: 'Projects', labelAr: 'مشروع', value: 20, suffix: '+' },
  { labelEn: 'Clients', labelAr: 'عميل', value: 15, suffix: '+' },
  { labelEn: 'Team Members', labelAr: 'عضو فريق', value: 10, suffix: '+' },
  { labelEn: 'Countries', labelAr: 'دول', value: 4, suffix: '+' },
  {
    labelEn: 'Industries',
    labelAr: 'قطاع صناعي',
    value: 8,
    suffix: '+',
  },
  {
    labelEn: 'Client Satisfaction',
    labelAr: 'رضا العملاء',
    value: 99,
    suffix: '%',
  },
];

const Numbers = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-neutral-950 py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            <span className="text-gradient-primary">InfinityPoint</span>{' '}
            {language === 'ar' ? 'بالأرقام' : 'Numbers'}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              stat={stat}
              index={i}
              inView={isInView}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function StatCard({
  stat,
  index,
  inView,
  language,
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
  language: string;
}) {
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10 transition-colors duration-300 hover:bg-white/[0.08] hover:border-white/20"
    >
      <p className="text-sm font-semibold text-white/40 mb-4 tracking-wide">
        {language === 'ar' ? stat.labelAr : stat.labelEn}
      </p>
      <p className="text-5xl md:text-7xl font-bold text-white tracking-tighter tabular-nums">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </p>
    </motion.div>
  );
}

export default Numbers;
