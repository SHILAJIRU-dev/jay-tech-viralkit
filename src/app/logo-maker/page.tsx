import type { Metadata } from 'next';
import LogoMakerClient from './LogoMakerClient';

export const metadata: Metadata = {
  title: 'AI Glitch Logo Maker | Jay Tech Viralkit',
  description: 'Generate a unique, modern, glitch-style logo for your brand, profile picture, or project for free.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['logo maker', 'glitch logo', 'ai logo generator', 'free logo', 'branding tool'],
};

export default function LogoMakerPage() {
  return <LogoMakerClient />;
}