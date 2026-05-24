'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Database,
  Lightbulb,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const serviceIcons = [Globe, Smartphone, Palette, Cloud, Database, Lightbulb];
const serviceColors = [
  'from-blue-500/20 to-blue-600/5 border-blue-500/15 text-blue-400',
  'from-violet-500/20 to-violet-600/5 border-violet-500/15 text-violet-400',
  'from-pink-500/20 to-pink-600/5 border-pink-500/15 text-pink-400',
  'from-cyan-500/20 to-cyan-600/5 border-cyan-500/15 text-cyan-400',
  'from-amber-500/20 to-amber-600/5 border-amber-500/15 text-amber-400',
  'from-emerald-500/20 to-emerald-600/5 border-emerald-500/15 text-emerald-400',
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative bg-neutral-950 text-white py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">{t.services.title} </span>
            <span className="text-gradient-primary">{t.services.subtitle}</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-500 max-w-xl mx-auto">
            {t.services.desc}
          </p>
        </motion.div>

        {/* Bento Grid — 2 large top + 4 below */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] || Lightbulb;
            const colorClass = serviceColors[index];
            const isLarge = index < 2; // First two are larger

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className={`group relative rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/15 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:bg-white/[0.05] ${
                  isLarge ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-primary/10" />

                {/* Number watermark */}
                <div className="absolute top-6 right-8 text-[80px] font-black text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} border flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
