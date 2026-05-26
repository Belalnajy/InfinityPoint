'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, ArrowRight, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const BACKEND_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || 'https://your-backend.com';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMsg(language === 'ar' ? 'حدث خطأ. حاول مرة أخرى.' : 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: t.contact.address,
      text: language === 'ar' ? '696 شارع جمال عبد الناصر، لوران، الإسكندرية، مصر' : '696 Loran Gamal Abd El Nasser St, Alexandria, Egypt',
    },
    {
      icon: <Mail size={20} />,
      title: t.contact.email,
      text: 'info@infinitypoint.cloud',
      href: 'mailto:info@infinitypoint.cloud',
    },
    {
      icon: <Phone size={20} />,
      title: t.contact.phone,
      text: '+201101062200',
      href: 'tel:+201101062200',
    },
    {
      icon: <Phone size={20} />,
      title: language === 'ar' ? 'هاتف 2' : 'Phone 2',
      text: '+201201369949',
      href: 'tel:+201201369949',
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
            {contactInfo.map((item, index) => {
              const content = (
                <motion.div
                  key={index}
                  whileHover={{ x: language === 'ar' ? -6 : 6 }}
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
              );
              return item.href ? (
                <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}

            {/* CTA card */}
            <motion.div
              whileHover={{ x: 6 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-primary/15 to-rose-600/10 border border-primary/20 backdrop-blur-md"
            >
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                {language === 'ar' ? 'جاهز لبدء مشروعك القادم؟ نرد عادة خلال 24 ساعة.' : 'Ready to start your next project? We typically respond within 24 hours.'}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                {language === 'ar' ? 'ابدأ محادثة' : 'Start a conversation'}
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
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  {t.contact.namePlaceholder}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20 resize-none text-sm"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
              >
                <CheckCircle2 size={18} />
                {language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!'}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                <XCircle size={18} />
                {errorMsg}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-primary to-rose-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-sm group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                </>
              ) : (
                <>
                  {t.contact.send}
                  <Send
                    size={16}
                    className={`transition-transform group-hover:translate-x-1 ${
                      language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`}
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
