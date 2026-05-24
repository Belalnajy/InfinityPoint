'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'InfinityPoint transformed our legacy system into a modern, scalable platform. Their technical expertise is unmatched.',
    author: 'James Wilson',
    position: 'CTO, Global Logistics',
    rating: 5,
  },
  {
    text: 'The UI/UX design they delivered exceeded our expectations. Our user engagement increased by 40% after the launch.',
    author: 'Sophia Miller',
    position: 'Product Manager, TechFlow',
    rating: 5,
  },
  {
    text: 'Professional, responsive, and innovative. They are not just developers; they are strategic partners.',
    author: 'David Brown',
    position: 'CEO, FinSync',
    rating: 5,
  },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);
  const handlePrev = () =>
    setActiveIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="relative bg-neutral-950 text-white py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
            Client Success Stories
          </motion.div>
          <h2 className="heading-section text-gradient-light">
            {t.testimonials.title}{' '}
            <span className="text-gradient-primary">
              {t.testimonials.subtitle}
            </span>
          </h2>
        </motion.div>

        {/* Featured Testimonial — Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/10 text-center"
              >
                <Quote
                  size={56}
                  className="text-primary/20 absolute top-6 left-8"
                />
                <Quote
                  size={56}
                  className="text-primary/20 absolute bottom-6 right-8 rotate-180"
                />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-amber-400 fill-amber-400"
                      />
                    )
                  )}
                </div>

                <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-primary/30">
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-lg">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-primary text-sm font-semibold">
                      {testimonials[activeIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white/70" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      i === activeIndex
                        ? 'bg-primary w-6'
                        : 'bg-white/25 hover:bg-white/40 w-2.5'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact cards row */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveIndex(index)}
              className={`relative p-5 rounded-2xl backdrop-blur-md border transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? 'bg-white/[0.08] border-primary/40 shadow-lg shadow-primary/10'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/20 flex-shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.author}</h4>
                  <p className="text-primary/80 text-xs font-medium">
                    {item.position}
                  </p>
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
