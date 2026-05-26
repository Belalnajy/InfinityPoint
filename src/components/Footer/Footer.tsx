'use client';

import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const navLinks = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const services = language === 'ar'
    ? ['تطوير الويب', 'تطبيقات الجوال', 'تصميم واجهة المستخدم', 'حلول السحاب', 'الذكاء الاصطناعي', 'الاستشارات التقنية']
    : ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'AI & Data Science', 'Consulting'];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Decorative blurs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="InfinityPoint Logo"
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {language === 'ar'
                ? 'تمكين الشركات من خلال حلول برمجية متطورة. من الويب إلى الهاتف المحمول، نبني مستقبل التكنولوجيا.'
                : 'Empowering businesses with cutting-edge software solutions. From web to mobile, we build the future of technology.'}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/infinitypointllc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="https://wa.me/201101062200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-[270deg]' : ''}`} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              {language === 'ar' ? 'خدماتنا' : 'Services'}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-neutral-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-[270deg]' : ''}`} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm leading-relaxed">
                  {language === 'ar'
                    ? '696 شارع جمال عبد الناصر، لوران، الإسكندرية، مصر'
                    : '696 Loran Gamal Abd El Nasser St, Alexandria, Egypt'}
                </span>
              </li>
              <li>
                <a href="mailto:info@infinitypoint.cloud" className="flex items-center gap-3 text-neutral-400 text-sm hover:text-white transition-colors">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  info@infinitypoint.cloud
                </a>
              </li>
              <li>
                <a href="tel:+201101062200" className="flex items-center gap-3 text-neutral-400 text-sm hover:text-white transition-colors">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  +201101062200
                </a>
              </li>
              <li>
                <a href="tel:+201201369949" className="flex items-center gap-3 text-neutral-400 text-sm hover:text-white transition-colors">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  +201201369949
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} InfinityPoint LLC. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-1 text-xs text-neutral-600">
              <span>{language === 'ar' ? 'صنع بـ' : 'Made with'}</span>
              <span className="text-primary animate-pulse">❤</span>
              <span>{language === 'ar' ? 'في الإسكندرية' : 'in Alexandria'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
