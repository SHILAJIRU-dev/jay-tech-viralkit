"use client";

import { useState } from 'react';
import { Youtube, ThumbsUp, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

export default function YouTubeTitleToolClient() {
  const [topic, setTopic] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateTitles = async () => {
    if (!topic) return;
    setIsLoading(true);
    // Simulate an AI API call
    setTimeout(() => {
      const dummyTitles = [
        `The Ultimate Guide to ${topic} in 2025`,
        `I Tried ${topic} for 30 Days... Here's What Happened`,
        `7 ${topic} Mistakes You're Making (and How to Fix Them)`,
        `Is ${topic} Dead? The Surprising Truth`,
        `The SECRET to Mastering ${topic} That NO ONE Is Talking About`,
      ];
      setTitles(dummyTitles);
      setIsLoading(false);
    }, 1500);
  };
  
   const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // 2. Replace the alert with a success toast
    toast.success("Title copied to clipboard!"); 
  };

  
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-2">YouTube Title Optimizer</h1>
      <p className="text-gray-400 mb-8">Enter your video topic to generate irresistible, click-worthy titles.</p>
      
      <div className="bg-brand-light-blue p-6 rounded-xl shadow-lg border border-brand-border-blue">
        <div className="relative">
          <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'home workout for beginners'"
            className="w-full p-4 pl-12 bg-brand-dark-blue border-2 border-brand-border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
          />
        </div>
        <button
          onClick={generateTitles}
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-brand-orange text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <Sparkles className="mr-2" size={20} />
          {isLoading ? 'Optimizing...' : 'Generate Titles'}
        </button>
      </div>
      
      {titles.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Optimized Titles:</h2>
          <div className="grid grid-cols-1 gap-4">
            {titles.map((title, index) => (
              <div 
                key={index} 
                className="bg-brand-light-blue p-4 rounded-lg shadow-md flex justify-between items-center border border-brand-border-blue hover:border-brand-orange group transition-all"
              >
                <p className="text-left text-gray-200">{title}</p>
                <button 
                  onClick={() => copyToClipboard(title)}
                  className="p-2 rounded-md bg-brand-dark-blue text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-orange hover:text-white"
                  title="Copy to clipboard"
                >
                  <ThumbsUp size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}