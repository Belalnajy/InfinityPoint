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

const Services = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative bg-neutral-950 text-white py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/3 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            What We Do
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">{t.services.title} </span>
            <span className="text-gradient-primary">{t.services.subtitle}</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-500 max-w-xl mx-auto">
            {t.services.desc}
          </p>
        </motion.div>

        {/* Simple 3×2 grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] || Lightbulb;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/25 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] bg-primary/0 group-hover:bg-primary/10 transition-all duration-700" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] group-hover:bg-primary group-hover:border-primary flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-white/60 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
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
