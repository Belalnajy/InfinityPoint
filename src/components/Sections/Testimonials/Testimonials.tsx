'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const testimonials = [
  {
    text: 'InfinityPoint transformed our legacy system into a modern, scalable platform. Their technical expertise is unmatched.',
    author: 'James Wilson',
    position: 'CTO, Global Logistics',
  },
  {
    text: 'The UI/UX design they delivered exceeded our expectations. Our user engagement increased by 40% after the launch.',
    author: 'Sophia Miller',
    position: 'Product Manager, TechFlow',
  },
  {
    text: 'Professional, responsive, and innovative. They are not just developers; they are strategic partners.',
    author: 'David Brown',
    position: 'CEO, FinSync',
  },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.testimonials.title}{' '}
            <span className="text-primary">{t.testimonials.subtitle}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative hover:bg-white/10 transition-colors duration-300">
              {/* Quote Icon */}
              <div className="text-6xl text-primary/20 font-serif leading-none absolute top-4 left-6">
                "
              </div>

              <div className="relative z-10 pointer-events-none">
                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                  {item.text}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center text-white font-bold">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.author}</h4>
                    <p className="text-primary text-sm font-medium">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
