'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Handshake } from 'lucide-react';

const partners = [
  {
    name: 'وزارة الاتصالات وتكنولوجيا المعلومات',
    nameEn: 'Ministry of Communications and Information Technology',
    logo: '/comm.png',
  },
];

const Partners = () => {
  const { t } = useLanguage();

  return (
    <section
      id="partners"
      className="relative bg-neutral-950 text-white py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/6 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[150px] pointer-events-none" />

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
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.partners.badge}
          </motion.div>
          <h2 className="heading-section text-gradient-light">
            {t.partners.title}{' '}
            <span className="text-gradient-primary">{t.partners.subtitle}</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {t.partners.desc}
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-500 flex flex-col items-center gap-6 min-w-[280px] max-w-[400px]">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Logo Container */}
                <div className="relative w-full flex items-center justify-center py-4">
                  <div className="relative p-6 rounded-2xl bg-white/[0.95] shadow-lg shadow-white/5 group-hover:shadow-primary/10 transition-all duration-500">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={partner.nameEn}
                      className="h-20 md:h-24 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Partner Name */}
                <div className="relative text-center space-y-2">
                  <h3 className="text-white font-bold text-lg md:text-xl">
                    {partner.nameEn}
                  </h3>
                  <p className="text-neutral-400 text-sm font-medium font-cairo" dir="rtl">
                    {partner.name}
                  </p>
                </div>

                {/* Decorative icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Handshake size={20} className="text-primary/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent max-w-3xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Partners;
