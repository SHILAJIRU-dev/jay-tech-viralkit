import type { Metadata } from 'next';
import ContentCalendarClient from './ContentCalendarClient'; // Import our new client component

export const metadata: Metadata = {
 title: 'Viral Content Calendar | Jay Tech Viralkit',
  description: 'Plan and schedule your social media content with our easy-to-use visual calendar for creators.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['content calendar', 'social media planner', 'scheduling tool', 'content planner'],
};

export default function ContentCalendarPage() {
  return <ContentCalendarClient />;
}