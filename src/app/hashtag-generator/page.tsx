"use client";

import { useState } from 'react';
import { Sparkles } from 'lucide-react'; // Another cool icon

export default function HashtagGenerator() {
  const [topic, setTopic] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateHashtags = async () => {
    if (!topic) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const dummyHashtags = [
        `#${topic.replace(/\s/g, '').toLowerCase()}`,
        `#${topic}challenge`,
        '#fyp',
        '#trending',
        '#viralvideo',
        '#tiktokgrowth',
        '#discoverpage',
      ];
      setHashtags(dummyHashtags);
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add a little feedback to the user
    alert("Copied to clipboard!");
  };

  const allHashtags = hashtags.join(' ');

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-2">TikTok Hashtag Generator</h1>
      <p className="text-gray-400 mb-8">Enter a topic and get a list of optimized hashtags to boost your reach.</p>
      
      <div className="bg-brand-light-blue p-6 rounded-xl shadow-lg border border-brand-border-blue">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., 'summer fashion tips'"
          className="w-full p-4 bg-brand-dark-blue border-2 border-brand-border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
        />
        <button
          onClick={generateHashtags}
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-brand-orange text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <Sparkles className="mr-2" size={20} />
          {isLoading ? 'Generating Magic...' : 'Generate Hashtags'}
        </button>
      </div>
      
      {hashtags.length > 0 && (
        <div className="mt-8 bg-brand-light-blue p-6 rounded-xl shadow-lg animate-fade-in-up border border-brand-border-blue">
          <h2 className="text-2xl font-bold text-white mb-4">Your Viral Hashtags</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {hashtags.map((tag, index) => (
              <span key={index} className="bg-brand-dark-blue text-gray-300 px-4 py-2 rounded-full cursor-pointer hover:bg-brand-orange hover:text-white transition-all">
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => copyToClipboard(allHashtags)}
            className="mt-6 bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Copy All
          </button>
        </div>
      )}
    </div>
  );
}