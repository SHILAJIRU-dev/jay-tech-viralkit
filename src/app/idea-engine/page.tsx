import type { Metadata } from 'next';
import IdeaEngineClient from './IdeaEngineClient'; // Import our new client component

export const metadata: Metadata = {
  title: 'AI Content Idea Generator | Jay Tech Viralkit',
  description: 'Never run out of content ideas again. Get unlimited, unique ideas for your niche for TikTok, YouTube, and blogs, powered by AI.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['content ideas', 'idea generator', 'ai content', 'video ideas', 'viral ideas'],
};

export default function IdeaEnginePage() {
  return <IdeaEngineClient />;
}