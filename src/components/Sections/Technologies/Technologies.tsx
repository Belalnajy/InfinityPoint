'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import OrbitingSkills from '@/components/ui/orbiting-skills';

const Technologies = () => {
  const { t } = useLanguage();

  return (
    <section
      id="technologies"
      className="relative bg-neutral-950 text-white py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Full-Stack Expertise
          </motion.div>
          <h2 className="heading-section text-gradient-light">
            {t.tech.title}{' '}
            <span className="text-gradient-primary">{t.tech.subtitle}</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From frontend frameworks to backend systems, DevOps pipelines to database architecture
            — we bring deep expertise across the entire modern tech stack.
          </p>
        </motion.div>

        {/* Skills Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <OrbitingSkills />
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
