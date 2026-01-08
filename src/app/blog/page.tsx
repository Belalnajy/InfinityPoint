import Navbar from '@/components/Navbar/Navbar';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog | InfinityPoint LLC',
  description:
    'Insights and articles from InfinityPoint LLC on software development, AI, and technology trends.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogList />
    </>
  );
}
