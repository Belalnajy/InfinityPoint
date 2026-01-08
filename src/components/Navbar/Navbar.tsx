'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        {/* Logo */}
        <Link href="/" className="z-50 relative">
          <img
            src="/logo.png"
            alt="InfinityPoint Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium relative group">
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm font-medium border border-white/20 px-3 py-1.5 rounded-full hover:bg-white/5">
              <Globe size={16} />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95">
              {t.nav.cta}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 lg:hidden">
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-white hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors font-medium text-lg">
                  <Globe size={20} />
                  <span>{language === 'en' ? 'Arabic' : 'English'}</span>
                </button>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/30">
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
