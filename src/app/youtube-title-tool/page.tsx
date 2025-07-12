import type { Metadata } from 'next';
import YouTubeTitleToolClient from './YouTubeTitleToolClient'; // Import our new client component

export const metadata: Metadata = {
  title: 'AI YouTube Title Optimizer | Jay Tech Viralkit',
  description: 'Craft irresistible, click-worthy YouTube titles that are optimized for higher CTR and search ranking. Get more views with our AI tool.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['youtube title optimizer', 'youtube seo', 'video titles', 'creator tool', 'youtube marketing'],
};

export default function YouTubeTitleToolPage() {
  return <YouTubeTitleToolClient />;
}