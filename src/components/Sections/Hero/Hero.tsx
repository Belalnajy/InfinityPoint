'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import { useLanguage } from '@/context/LanguageContext';

const SPLINE_SCENE =
  'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

export default function Hero() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100svh] overflow-hidden bg-black text-white pt-[var(--nav-height)]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <Spotlight size={500} />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-var(--nav-height))] min-h-[calc(100svh-var(--nav-height))] w-full max-w-[1500px] flex-col items-center gap-8 px-6 py-10 md:flex-row md:gap-4 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`relative z-10 flex w-full flex-col justify-center md:w-[45%] md:flex-shrink-0 ${
            isRtl ? 'md:order-2 md:text-right' : 'md:order-1'
          }`}>
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 text-primary" />
            {t.hero.badge}
          </span>

          <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold leading-[1.05] tracking-tight text-transparent sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title}{' '}
            <span className="text-gradient-primary">InfinityPoint</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div
            className={`mt-9 flex flex-wrap gap-3 ${
              isRtl ? 'md:justify-end' : ''
            }`}>
            <Link href="#portfolio" className="btn-primary group">
              {t.hero.workBtn}
              <ArrowRight
                className={`h-4 w-4 transition-transform ${
                  isRtl
                    ? 'rotate-180 group-hover:-translate-x-1'
                    : 'group-hover:translate-x-1'
                }`}
              />
            </Link>
            <Link href="#contact" className="btn-secondary">
              <Sparkles className="h-4 w-4" />
              {t.hero.quoteBtn}
            </Link>
          </div>

          <div
            className={`mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7 ${
              isRtl ? 'md:justify-end' : ''
            }`}>
            {[
              { val: '150+', label: t.about.delivered },
              { val: '50+', label: t.about.developers },
              { val: '99%', label: t.about.satisfaction },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-gradient-primary md:text-4xl">
                  {stat.val}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className={`relative h-[55vh] w-full flex-1 sm:h-[60vh] md:h-[78vh] ${
            isRtl ? 'md:order-1' : 'md:order-2'
          }`}
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 85% at center, #000 65%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 75% 85% at center, #000 65%, transparent 100%)',
          }}>
          <SplineScene
            scene={SPLINE_SCENE}
            className="absolute inset-0 h-full w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
