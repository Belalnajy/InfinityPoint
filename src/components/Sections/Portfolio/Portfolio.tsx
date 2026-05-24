'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

const INITIAL_COUNT = 6;

const Portfolio = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Full Stack', 'Frontend'];
  const categoryKeys: Record<string, string> = {
    All: t.portfolio.categories.all,
    'Full Stack': t.portfolio.categories.fullStack,
    Frontend: t.portfolio.categories.frontend,
  };

  const filtered =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <section
      id="portfolio"
      className="relative bg-neutral-950 text-white py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Recent Work
          </motion.div>

          <h2 className="heading-section text-gradient-light">
            {t.portfolio.title}{' '}
            <span className="text-gradient-primary">
              {t.portfolio.subtitle}
            </span>
          </h2>
          <p className="mt-5 text-lg text-neutral-400 max-w-2xl mx-auto">
            {t.portfolio.desc}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white/[0.06] text-neutral-400 hover:bg-white/[0.1] border border-white/10'
              }`}
            >
              {categoryKeys[cat]}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      <ArrowUpRight
                        size={16}
                        className="text-white"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/[0.05] text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/[0.05] text-primary/60">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-14"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/[0.08] border border-white/15 text-white text-sm font-semibold hover:bg-primary hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/30 cursor-pointer"
            >
              {showAll ? t.portfolio.showLess : t.portfolio.showMore}
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
