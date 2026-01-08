'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const techs = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Django',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
];

const Technologies = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.tech.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">
              {t.tech.subtitle}
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-white font-semibold cursor-default hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
