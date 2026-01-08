export type BlogPost = {
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string; ar: string };
  date: string;
  author: string;
  image: string;
  category: { en: string; ar: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-ai-development',
    title: {
      en: 'The Future of AI Development in 2026',
      ar: 'مستقبل تطوير الذكاء الاصطناعي في عام 2026',
    },
    excerpt: {
      en: 'Exploring how generative AI is reshaping the software engineering landscape.',
      ar: 'استكشاف كيف يعيد الذكاء الاصطناعي التوليدي تشكيل مشهد هندسة البرمجيات.',
    },
    content: {
      en: 'Full content for AI development...',
      ar: 'المحتوى الكامل لتطوير الذكاء الاصطناعي...',
    },
    date: '2026-01-05',
    author: 'Sarah Chen',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop',
    category: { en: 'AI & Data', ar: 'الذكاء الاصطناعي' },
  },
  {
    slug: 'scaling-next-js-applications',
    title: {
      en: 'Scaling Next.js Applications for Enterprise',
      ar: 'توسيع تطبيقات Next.js للمؤسسات الكبيرة',
    },
    excerpt: {
      en: 'Best practices for handling millions of users with App Router and Edge Functions.',
      ar: 'أفضل الممارسات للتعامل مع ملايين المستخدمين باستخدام App Router ووظائف Edge.',
    },
    content: {
      en: 'Full content for Next.js scaling...',
      ar: 'المحتوى الكامل لتوسيع Next.js...',
    },
    date: '2026-01-02',
    author: 'Michael Ross',
    image:
      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop',
    category: { en: 'Web Development', ar: 'تطوير الويب' },
  },
  {
    slug: 'mastering-ui-animations',
    title: {
      en: 'Mastering UI Animations with Framer Motion',
      ar: 'احتراف تحريك واجهات المستخدم باستخدام Framer Motion',
    },
    excerpt: {
      en: 'How smooth transitions can significantly improve user retention and satisfaction.',
      ar: 'كيف يمكن للانتقالات السلسة أن تحسن بشكل كبير من رضا المستخدمين وبقائهم.',
    },
    content: {
      en: 'Full content for UI animations...',
      ar: 'المحتوى الكامل لتحريك واجهات المستخدم...',
    },
    date: '2025-12-28',
    author: 'Elena Rodriguez',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
    category: { en: 'Design', ar: 'التصميم' },
  },
];
