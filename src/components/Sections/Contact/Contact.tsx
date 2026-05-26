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
      phoneNumber: '201101062200',
    },
    {
      icon: <Phone size={20} />,
      title: language === 'ar' ? 'هاتف 2' : 'Phone 2',
      text: '+201201369949',
      phoneNumber: '201201369949',
    },
  ];

  const [activePhone, setActivePhone] = useState<string | null>(null);

  return (
    <section
      id="contact"
      data-cursor-lg
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

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => {
              const isPhone = 'phoneNumber' in item && item.phoneNumber;
              const content = (
                <motion.div
                  key={index}
                  whileHover={{ x: language === 'ar' ? -6 : 6 }}
                  className="relative flex items-start gap-5 bg-white/[0.04] border border-white/10 hover:border-primary/30 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.06] cursor-pointer"
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

                  {/* WhatsApp / Call popup */}
                  {isPhone && activePhone === item.phoneNumber && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className={`absolute top-full mt-2 ${language === 'ar' ? 'right-0' : 'left-0'} z-50 flex gap-2 p-2 rounded-xl bg-neutral-900/95 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50`}
                    >
                      <a
                        href={`https://wa.me/${item.phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-sm font-semibold"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp
                      </a>
                      <a
                        href={`tel:+${item.phoneNumber}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all text-sm font-semibold"
                      >
                        <Phone size={16} />
                        {language === 'ar' ? 'اتصال' : 'Call'}
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              );

              if (isPhone) {
                return (
                  <div
                    key={index}
                    className="relative"
                    onClick={() => setActivePhone(activePhone === item.phoneNumber ? null : (item.phoneNumber ?? null))}
                    onMouseLeave={() => setActivePhone(null)}
                  >
                    {content}
                  </div>
                );
              }

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
            className="flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-7"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
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

            <div className="flex-1 flex flex-col space-y-2 mb-5">
              <label className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.15em]">
                {t.contact.messagePlaceholder}
              </label>
              <textarea
                rows={6}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="flex-1 min-h-[140px] w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20 resize-none text-sm"
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
