"use client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Trend Tracker for Creators | Jay Tech Viralkit',
  description: 'Discover what\'s trending right now. Track the hottest topics, keywords, and aesthetics before they go viral.',
  keywords: ['trend tracker', 'trending now', 'viral trends', 'google trends', 'creator tools'],
};


import { Flame, BarChart2, Palette } from 'lucide-react';

// --- MOCK DATA ---
const trendingTopics = [
  { rank: 1, name: 'AI Product Demos', platform: 'TikTok', velocity: 'Fast Rise' },
  { rank: 2, name: 'Vintage Tech Reviews', platform: 'YouTube', velocity: 'Rising' },
  { rank: 3, name: '"A Day in My Life" Vlogs', platform: 'YouTube', velocity: 'Steady' },
  { rank: 4, name: 'GRWM (Get Ready With Me)', platform: 'TikTok', velocity: 'Rising' },
  { rank: 5, name: 'Cozy Desk Setups', platform: 'Instagram', velocity: 'Steady' },
];

const trendingKeywords = ['#AIFilter', '#ProductivityHacks', '#RetroGaming', '#SilentVlog', '#ASMR'];

const trendingPalettes = [
  { name: 'Sunset Vibes', colors: ['#FFC3A0', '#FFAC81', '#FF928B', '#E56B6F', '#B56576'] },
  { name: 'Forest Greens', colors: ['#DDE5B6', '#ADC178', '#A98467', '#6C584C', '#F0EAD2'] },
  { name: 'Cyberpunk Neon', colors: ['#F72585', '#B5179E', '#7209B7', '#560BAD', '#480CA8'] },
];
// --- END MOCK DATA ---

export default function TrendTracker() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Trend Tracker</h1>
        <p className="text-gray-400">Discover the hottest trends before they go viral.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 1: Trending Topics */}
        <div className="lg:col-span-2 bg-brand-light-blue p-6 rounded-xl border border-brand-border-blue">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Flame className="mr-3 text-brand-orange" />
            Trending Topics
          </h2>
          <div className="space-y-3">
            {trendingTopics.map((topic) => (
              <div key={topic.rank} className="bg-brand-dark-blue p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-500 mr-4">{topic.rank}</span>
                  <div>
                    <p className="font-semibold text-white">{topic.name}</p>
                    <p className="text-sm text-gray-400">{topic.platform}</p>
                  </div>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${topic.velocity === 'Fast Rise' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                  {topic.velocity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Keywords & Palettes */}
        <div className="space-y-8">
          {/* Trending Keywords */}
          <div className="bg-brand-light-blue p-6 rounded-xl border border-brand-border-blue">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BarChart2 className="mr-3 text-brand-orange" />
              Top Keywords
            </h2>
            <div className="flex flex-wrap gap-2">
              {trendingKeywords.map((keyword, index) => (
                <span key={index} className="bg-brand-dark-blue text-gray-300 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-brand-orange hover:text-white transition-colors">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          
          {/* Trending Palettes */}
          <div className="bg-brand-light-blue p-6 rounded-xl border border-brand-border-blue">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Palette className="mr-3 text-brand-orange" />
              Aesthetic Palettes
            </h2>
            <div className="space-y-4">
              {trendingPalettes.map((palette) => (
                <div key={palette.name}>
                  <p className="font-semibold text-gray-300 mb-2">{palette.name}</p>
                  <div className="flex h-8 rounded-lg overflow-hidden">
                    {palette.colors.map((color) => (
                      <div key={color} style={{ backgroundColor: color, width: `${100 / palette.colors.length}%` }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}