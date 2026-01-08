'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.contact.title}{' '}
            <span className="text-primary">{t.contact.subtitle}</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8">
            {[
              {
                icon: <MapPin />,
                title: t.contact.address,
                text: '123 Tech Square, Silicon Valley, CA',
              },
              {
                icon: <Mail />,
                title: t.contact.email,
                text: 'contact@infinitypointllc.com',
              },
              {
                icon: <Phone />,
                title: t.contact.phone,
                text: '+1 (555) 000-8888',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white text-lg font-semibold">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium ml-1">
                  {t.contact.namePlaceholder}
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/30"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium ml-1">
                  {t.contact.emailPlaceholder}
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/30"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium ml-1">
                {t.contact.messagePlaceholder}
              </label>
              <textarea
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/30 resize-none"
                placeholder={t.contact.messagePlaceholder}></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-rose-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              {t.contact.send}{' '}
              <Send
                size={20}
                className={language === 'ar' ? 'rotate-180' : ''}
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
