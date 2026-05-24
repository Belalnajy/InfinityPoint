import type { Metadata } from 'next';
import { Outfit, Cairo } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import CustomCursor from '@/components/ui/custom-cursor';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'InfinityPoint LLC | Limitless Innovation',
  description:
    'InfinityPoint LLC is a leading software company providing innovative, scalable, and secure software solutions including Web Development, Mobile Apps, and AI.',
  keywords: [
    'Software Company',
    'Web Development',
    'Mobile Apps',
    'InfinityPoint',
    'Innovation',
  ],
  authors: [{ name: 'InfinityPoint LLC' }],
  openGraph: {
    title: 'InfinityPoint LLC | Limitless Innovation',
    description: 'Leading software company providing innovative solutions.',
    url: 'https://infinitypointllc.com',
    siteName: 'InfinityPoint LLC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cairo.variable} lg:cursor-none`}
        suppressHydrationWarning>
        <CustomCursor />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
