'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: t.portfolio.categories.web,
      description:
        'A full-featured online store with complex inventory management.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'HealthTrack App',
      category: t.portfolio.categories.mobile,
      description:
        'Fitness tracking application with real-time biometric data sync.',
      image:
        'https://images.unsplash.com/photo-1576091160550-217359f41f48?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'FinTech Dashboard',
      category: t.portfolio.categories.design,
      description:
        'Clean and intuitive interface for complex financial data visualization.',
      image:
        'https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {t.portfolio.title}{' '}
            <span className="text-primary">{t.portfolio.subtitle}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.portfolio.desc}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 self-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
