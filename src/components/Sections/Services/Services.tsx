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

const Services = () => {
  const { t } = useLanguage();

  const icons = [
    <Globe size={32} className="text-white" />,
    <Smartphone size={32} className="text-white" />,
    <Palette size={32} className="text-white" />,
    <Cloud size={32} className="text-white" />,
    <Database size={32} className="text-white" />,
    <Lightbulb size={32} className="text-white" />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {t.services.title}{' '}
            <span className="text-primary">{t.services.subtitle}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.desc}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-3xl transition-colors duration-300" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {icons[index]}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
