'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  Code2,
  Rocket,
  Users,
  HeadphonesIcon,
  Shield,
  BarChart3,
} from 'lucide-react';

const iconMap = [Code2, Rocket, Users, HeadphonesIcon, Shield, BarChart3];

const WhatWeOffer = () => {
  const { t } = useLanguage();

  return (
    <section
      id="what-we-offer"
      className="relative bg-neutral-950 text-white py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.whatWeOffer.badge}
          </motion.div>

          <h2 className="heading-section text-gradient-light">
            {t.whatWeOffer.title}{' '}
            <span className="text-gradient-primary">
              {t.whatWeOffer.subtitle}
            </span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {t.whatWeOffer.desc}
          </p>
        </motion.div>

        {/* Offer Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.whatWeOffer.items.map(
            (item: { title: string; desc: string }, index: number) => {
              const Icon = iconMap[index] || Code2;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl p-7 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-500"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <Icon
                        size={22}
                        className="text-primary"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
