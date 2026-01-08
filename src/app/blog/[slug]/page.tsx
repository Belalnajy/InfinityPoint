import { blogPosts } from '@/constants/blogItems';
import Navbar from '@/components/Navbar/Navbar';
import BlogPostContent from './BlogPostContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title.en} | InfinityPoint Blog`,
    description: post.excerpt.en,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <BlogPostContent post={post} />
    </>
  );
}
