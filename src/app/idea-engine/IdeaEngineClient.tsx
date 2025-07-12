"use client";

import { useState } from 'react';
import { BrainCircuit } from 'lucide-react';

export default function IdeaEngineClient() {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<{title: string; description: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateIdeas = async () => {
    if (!topic) return;
    setIsLoading(true);
    // Simulate an AI API call
    setTimeout(() => {
      const dummyIdeas = [
        { title: `A "Day in the Life" of a ${topic}`, description: "Show your audience a typical day, highlighting the unique aspects of your niche." },
        { title: 'Reacting to Common Misconceptions', description: `Address and debunk common myths or mistakes related to ${topic}.` },
        { title: 'Top 5 Tools/Apps for a Beginner', description: `Create a helpful resource guide for newcomers interested in ${topic}.` },
        { title: 'Tutorial: How to Achieve [Specific Goal]', description: `A step-by-step guide to solving a common problem within the ${topic} niche.` },
        { title: 'Q&A Session with Your Audience', description: `Announce a Q&A and answer the most frequently asked questions about ${topic}.` },
      ];
      setIdeas(dummyIdeas);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-2">AI Content Idea Engine</h1>
      <p className="text-gray-400 mb-8">Never run out of content ideas again. Enter your niche to get inspired.</p>
      
      <div className="bg-brand-light-blue p-6 rounded-xl shadow-lg border border-brand-border-blue">
        <div className="relative">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your niche or topic, e.g., 'street photography'"
            className="w-full p-4 bg-brand-dark-blue border-2 border-brand-border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
          />
        </div>
        <button
          onClick={generateIdeas}
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-brand-orange text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <BrainCircuit className="mr-2" size={20} />
          {isLoading ? 'Generating...' : 'Find Ideas'}
        </button>
      </div>
      
      {ideas.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Generated Ideas:</h2>
          <div className="space-y-4">
            {ideas.map((idea, index) => (
              <div 
                key={index} 
                className="bg-brand-light-blue p-5 rounded-lg shadow-md text-left border border-brand-border-blue transition-all"
              >
                <h3 className="font-bold text-lg text-brand-orange">{idea.title}</h3>
                <p className="text-gray-300 mt-1">{idea.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}