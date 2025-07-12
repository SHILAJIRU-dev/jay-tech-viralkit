import type { Metadata } from 'next';
import BioGeneratorClient from './BioGeneratorClient'; // Import our new client component

export const metadata: Metadata = {title: 'AI Instagram Bio Generator | Jay Tech Viralkit',
  description: 'Create the perfect, eye-catching Instagram bio in seconds. Attract more followers with a bio that shows off your personality.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['instagram bio', 'bio generator', 'ig bio', 'ai tools', 'social media'],
};

export default function BioGeneratorPage() {
  return <BioGeneratorClient />;
}