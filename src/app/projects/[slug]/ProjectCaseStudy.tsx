'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Building2,
  Factory,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import type { ProjectDetail } from '@/data/projects';
import { projectsData } from '@/data/projects';

export default function ProjectCaseStudy({
  project,
}: {
  project: ProjectDetail;
}) {
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject =
    projectsData[
      (currentIndex - 1 + projectsData.length) % projectsData.length
    ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ====== HERO — full bleed ====== */}
      <section className="relative h-[100svh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 z-20">
          <div className="flex items-center justify-between px-8 md:px-14 py-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium group"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Back to Portfolio
              </Link>
            </motion.div>

            {project.live && project.live !== '#' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={14} />
                  Live Project
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Hero content — bottom left */}
        <div className="relative z-10 w-full px-8 md:px-14 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm font-medium">
                <Building2 size={14} className="text-primary" />
                {project.client}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm font-medium">
                <Factory size={14} className="text-primary" />
                {project.industry}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-5">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== KEY METRICS — full width strip ====== */}
      <section className="border-y border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {project.keyPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 md:px-14 py-10 md:py-14 group hover:bg-white/[0.02] transition-colors"
            >
              <p className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {point.value}
              </p>
              <p className="text-sm text-white/35 font-medium uppercase tracking-wider">
                {point.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== CONTENT SECTIONS ====== */}
      <section className="py-20 md:py-28">
        <div className="px-8 md:px-14 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 md:gap-28">
            {/* Left — Sticky sidebar with meta */}
            <div className="lg:sticky lg:top-28 lg:self-start space-y-10">
              {/* Tech Stack */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/25 font-bold mb-5">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 hover:text-white hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live link */}
              {project.live && project.live !== '#' && (
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/25 font-bold mb-4">
                    Live Project
                  </p>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-semibold group"
                  >
                    {project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </div>
              )}

              {/* Category */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/25 font-bold mb-4">
                  Category
                </p>
                <p className="text-white/70 text-sm font-semibold">
                  {project.category}
                </p>
              </div>
            </div>

            {/* Right — Main content */}
            <div className="space-y-20">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Building2 size={18} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    Client Overview
                  </h2>
                </div>
                <p className="text-white/55 text-lg md:text-xl leading-[1.9]">
                  {project.overview}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <AlertTriangle size={18} className="text-amber-400" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    Challenge
                  </h2>
                </div>
                <p className="text-white/55 text-lg md:text-xl leading-[1.9]">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    Solution
                  </h2>
                </div>
                <p className="text-white/55 text-lg md:text-xl leading-[1.9]">
                  {project.solution}
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Lightbulb size={18} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    Key Highlights
                  </h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {project.keyPoints.map((kp, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-colors"
                    >
                      <p className="text-primary font-bold text-lg mb-1">
                        {kp.value}
                      </p>
                      <p className="text-white/40 text-sm">{kp.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== NEXT / PREV ====== */}
      <section className="border-t border-white/[0.06]">
        <div className="grid md:grid-cols-2">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex items-center px-8 md:px-14 py-12 md:py-16 border-b md:border-b-0 md:border-r border-white/[0.06] hover:bg-white/[0.015] transition-colors"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-bold mb-2 flex items-center gap-2">
                <ArrowLeft size={12} />
                Previous
              </p>
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {prevProject.title}
              </h3>
              <p className="text-sm text-white/30 mt-1">{prevProject.category}</p>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-end text-right px-8 md:px-14 py-12 md:py-16 hover:bg-white/[0.015] transition-colors"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-bold mb-2 flex items-center justify-end gap-2">
                Next
                <ArrowRight size={12} />
              </p>
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-sm text-white/30 mt-1">{nextProject.category}</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-28 border-t border-white/[0.06]">
        <div className="px-8 md:px-14 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Ready to build something{' '}
              <span className="text-gradient-primary">amazing</span>?
            </h2>
            <p className="text-white/35 mb-10 text-lg">
              Let&apos;s bring your vision to life with the same quality and
              dedication.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/#contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link
                href="/#portfolio"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-white/15 text-white hover:bg-white/[0.06] transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="px-8 md:px-14 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="InfinityPoint Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} InfinityPoint LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
