'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl py-3 shadow-2xl shadow-black/40 border-b border-white/10'
          : 'bg-black/40 backdrop-blur-md py-4 border-b border-white/5'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-14">
        <Link
          href="#home"
          className="z-50 relative flex items-center group"
          aria-label="InfinityPoint Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="InfinityPoint Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_14px_rgba(227,6,19,0.4)]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors text-sm font-semibold relative group py-2">
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-rose-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-semibold border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 hover:border-white/40">
              <Globe size={16} />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <Link href="#contact" className="btn-primary">
              {t.nav.cta}
            </Link>
          </div>
        </div>

        <button
          className="lg:hidden text-white z-50 p-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-10 lg:hidden">
              <ul className="flex flex-col items-center gap-7">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-extrabold text-white hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-5">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors font-semibold text-lg border border-white/20 px-5 py-2.5 rounded-full">
                  <Globe size={20} />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary !px-10 !py-4 !text-lg">
                  {t.nav.cta}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
