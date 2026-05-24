'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: t.contact.address,
      text: '123 Tech Square, Silicon Valley, CA',
    },
    {
      icon: <Mail size={20} />,
      title: t.contact.email,
      text: 'contact@infinitypointllc.com',
    },
    {
      icon: <Phone size={20} />,
      title: t.contact.phone,
      text: '+1 (555) 000-8888',
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            Let&apos;s Connect
          </motion.div>

          <h2 className="heading-section text-gradient-light">
            {t.contact.title}{' '}
            <span className="text-gradient-primary">
              {t.contact.subtitle}
            </span>
          </h2>
          <p className="mt-5 text-lg text-neutral-400 max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="flex items-start gap-5 bg-white/[0.04] border border-white/10 hover:border-primary/30 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.06]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-rose-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white/50 text-[10px] font-semibold uppercase tracking-[0.15em] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white text-lg font-bold">{item.text}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              whileHover={{ x: 6 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-primary/15 to-rose-600/10 border border-primary/20 backdrop-blur-md"
            >
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                Ready to start your next project? We typically respond within 24 hours.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                Start a conversation
                <ArrowRight size={14} className={language === 'ar' ? 'rotate-180' : ''} />
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-7"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  {t.contact.namePlaceholder}
                </label>
                <input
                  type="text"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20 text-sm"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  {t.contact.emailPlaceholder}
                </label>
                <input
                  type="email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20 text-sm"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.15em]">
                {t.contact.messagePlaceholder}
              </label>
              <textarea
                rows={6}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20 resize-none text-sm"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-rose-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-sm group"
            >
              {t.contact.send}
              <Send
                size={16}
                className={`transition-transform group-hover:translate-x-1 ${
                  language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
