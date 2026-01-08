'use client';

import styles from './post.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BlogPost } from '@/constants/blogItems';

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const { language, t } = useLanguage();

  return (
    <article className={styles.postPage}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={18} /> {t.blog.back}
          </Link>

          <div className={styles.hero}>
            <span className={styles.category}>{post.category[language]}</span>
            <h1>{post.title[language]}</h1>
            <div className={styles.meta}>
              <span>
                <Calendar size={16} /> {post.date}
              </span>
              <span>
                <User size={16} /> {post.author}
              </span>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img src={post.image} alt={post.title[language]} />
          </div>

          <div className={styles.content}>
            <p>{post.content[language]}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
