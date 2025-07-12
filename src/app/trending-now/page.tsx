import type { Metadata } from 'next';
import TrendTrackerClient from './TrendTrackerClient'; // Import our new client component

export const metadata: Metadata = {
 title: 'Live Trend Tracker for Creators | Jay Tech Viralkit',
  description: 'Discover what\'s trending right now. Track the hottest topics, keywords, and aesthetics before they go viral.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['trend tracker', 'trending now', 'viral trends', 'google trends', 'creator tools'],
};

export default function TrendTrackerPage() {
  return <TrendTrackerClient />;
}