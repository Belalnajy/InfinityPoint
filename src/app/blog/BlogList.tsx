'use client';

import styles from './blog.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { blogPosts } from '@/constants/blogItems';

export default function BlogList() {
  const { language, t } = useLanguage();

  return (
    <section className={styles.blogPage}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1>
            {t.blog.title}{' '}
            <span className="text-primary">{t.blog.subtitle}</span>
          </h1>
          <p>{t.blog.desc}</p>
        </motion.div>

        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <div className={styles.imageBox}>
                <img src={post.image} alt={post.title[language]} />
                <span className={styles.category}>
                  {post.category[language]}
                </span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span>
                    <User size={14} /> {post.author}
                  </span>
                </div>
                <h2>{post.title[language]}</h2>
                <p>{post.excerpt[language]}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  {t.blog.readMore} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
