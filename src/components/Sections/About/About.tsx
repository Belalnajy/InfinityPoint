'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Stats Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="relative z-10 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <div className="text-5xl font-bold mb-2">10+</div>
                <p className="text-lg text-white/80">{t.about.years}</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {t.about.title}{' '}
              <span className="text-primary relative inline-block">
                InfinityPoint
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none">
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.about.text}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { val: '150+', label: t.about.delivered },
                { val: '50+', label: t.about.developers },
                { val: '99%', label: t.about.satisfaction },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600 mb-1">
                    {stat.val}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">{t.about.mission}</h3>
                <p className="text-gray-600">{t.about.missionText}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-gray-900">
                <h3 className="text-xl font-bold mb-2">{t.about.vision}</h3>
                <p className="text-gray-600">{t.about.visionText}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
