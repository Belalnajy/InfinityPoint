'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Database,
  Lightbulb,
  Code2,
  Rocket,
  Users,
  HeadphonesIcon,
  Shield,
  BarChart3,
} from 'lucide-react';

const serviceIcons = [Globe, Smartphone, Palette, Cloud, Database, Lightbulb];
const offerIcons = [Code2, Rocket, Users, HeadphonesIcon, Shield, BarChart3];

const Services = () => {
  const { t, language } = useLanguage();

  return (
    <section
      data-cursor-lg
      id="services"
      className="relative bg-neutral-950 text-white py-28 overflow-hidden">
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
          className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {language === 'ar' ? 'ماذا نقدم' : 'What We Do'}
          </motion.div>

          <h2 className="heading-section text-gradient-light">
            {t.services.title}{' '}
            <span className="text-gradient-primary">{t.services.subtitle}</span>
          </h2>
          <p className="text-neutral-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {language === 'ar'
              ? 'من الفكرة إلى الإطلاق وما بعده — نقدم حلولاً شاملة ومصممة خصيصاً لتسريع نمو أعمالك.'
              : 'From concept to deployment and beyond — comprehensive solutions tailored to accelerate your business growth.'}
          </p>
        </motion.div>

        {/* Services Grid - What we specialize in */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[2px] bg-primary rounded-full" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
              {language === 'ar' ? 'تخصصاتنا' : 'Our Expertise'}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.map(
              (service: { title: string; desc: string }, index: number) => {
                const Icon = serviceIcons[index] || Lightbulb;

                return (
                  <motion.div
                    key={`service-${index}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/25 transition-all duration-500 overflow-hidden">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] bg-primary/0 group-hover:bg-primary/10 transition-all duration-700" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] group-hover:bg-primary group-hover:border-primary flex items-center justify-center mb-6 transition-all duration-300">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                          className="text-white/60 group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Why Choose Us Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[2px] bg-primary rounded-full" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
              {t.whatWeOffer.badge}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.whatWeOffer.items.map(
              (item: { title: string; desc: string }, index: number) => {
                const Icon = offerIcons[index] || Code2;

                return (
                  <motion.div
                    key={`offer-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-2xl p-7 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-500">
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                        <Icon
                          size={22}
                          className="text-primary"
                          strokeWidth={1.8}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
