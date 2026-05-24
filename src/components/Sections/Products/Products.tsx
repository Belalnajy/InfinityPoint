'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  logo: string;
  link: string;
  color: string;
  features: string[];
};

const products: Product[] = [
  {
    id: 'indstrz',
    name: 'Indstrz',
    tagline: 'Digital Industrial Platform',
    description:
      'A comprehensive AI-powered platform designed to empower Egyptian manufacturers to reach global markets through smart RFQ processing, industrial matchmaking, and digital transformation.',
    image: '/projects/indstrz.png',
    logo: '/projects/logos/indstrz-logo.png',
    link: 'https://indstrz.com/ar',
    color: '#e30613',
    features: [
      'AI-Powered Factory Matching',
      'Smart RFQ Processing',
      'Real-Time Communication',
      'Factory Verification Profiles',
      'Global Market Access',
      'Supply Chain Optimization',
    ],
  },
];

const Products = () => {
  const { t } = useLanguage();
  const [activeProduct, setActiveProduct] = useState(0);
  const product = products[activeProduct];

  return (
    <section
      id="products"
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[250px] pointer-events-none opacity-15 transition-colors duration-1000"
        style={{ backgroundColor: product.color }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.products.badge}
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">{t.products.title} </span>
            <span className="text-gradient-primary">{t.products.subtitle}</span>
          </h2>
          <p className="text-neutral-500 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            {t.products.desc}
          </p>
        </motion.div>

        {/* Product Tabs (for future multi-product) */}
        {products.length > 1 && (
          <div className="flex justify-center gap-2 mb-16">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeProduct === i
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white/[0.06] text-neutral-400 hover:bg-white/[0.1] border border-white/10'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}

        {/* Product Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Product Hero Image */}
            <div className="relative rounded-3xl overflow-hidden mb-12 group">
              <div className="aspect-[16/8] md:aspect-[16/7] overflow-hidden bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Bottom content on image */}
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-12">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.logo}
                      alt={`${product.name} logo`}
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert mb-4"
                    />
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                      {product.tagline}
                    </p>
                  </div>
                  <Link
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl"
                  >
                    Visit Platform
                    <ExternalLink size={15} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Description + Features */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left: Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                  {product.description}
                </p>
                <Link
                  href={`/projects/${product.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                >
                  View Full Case Study
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>

              {/* Right: Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-white/15 transition-colors"
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="text-sm text-white/70 font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;
