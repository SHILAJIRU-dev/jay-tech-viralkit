"use client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Instagram Bio Generator | Jay Tech Viralkit',
  description: 'Create the perfect, eye-catching Instagram bio in seconds. Attract more followers with a bio that shows off your personality.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',}, 
  keywords: ['instagram bio', 'bio generator', 'ig bio', 'ai tools', 'social media'],
};


import { useState } from 'react';
import { Copy, Instagram, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import toast from 'react-hot-toast';

export default function BioMaker() {
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('witty');
  const [bios, setBios] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ... (handleGenerateBios and copyToClipboard functions remain the same)
   const handleGenerateBios = async () => {
    if (!keywords) {
      setError('Please enter some keywords about your brand or niche.');
      return;
    }
    setError('');
    setIsLoading(true);
    setBios([]);

    try {
      const response = await fetch('/api/generate-bio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keywords, tone }),
      });

      

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }
       const data = await response.json();
      setBios(data.bios);
      toast.success('New bios generated!');
      } catch (err) { // Changed from (err: any)
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // 2. Replace the alert with a success toast
    toast.success("Bio copied to clipboard!"); 
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Wrap this section in a motion.div */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">AI Instagram Bio Generator</h1>
        <p className="text-gray-400 mb-8">Craft the perfect bio that grabs attention and gains followers.</p>
        
        <div className="bg-brand-light-blue p-6 rounded-xl shadow-lg border border-brand-border-blue space-y-4">
          <div>
            <label htmlFor="keywords" className="block text-left font-semibold text-gray-300 mb-2">1. Enter keywords about you</label>
            <input
              id="keywords"
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., 'fitness coach, vegan, minimalist'"
              className="w-full p-3 bg-brand-dark-blue border-2 border-brand-border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
            />
          </div>
          <div>
            <label htmlFor="tone" className="block text-left font-semibold text-gray-300 mb-2">2. Select a tone</label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full p-3 bg-brand-dark-blue border-2 border-brand-border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all appearance-none"
            >
              <option value="witty">Witty & Clever</option>
              <option value="professional">Professional</option>
              <option value="friendly">Friendly & Approachable</option>
              <option value="inspirational">Inspirational</option>
              <option value="bold">Bold & Confident</option>
            </select>
          </div>
          <button
            onClick={handleGenerateBios}
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-brand-orange text-white font-bold py-3 px-4 rounded-lg mt-2 hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            <Sparkles className="mr-2" size={20} />
            {isLoading ? 'Generating Bios...' : 'Generate Bios'}
          </button>
        </div>
      </motion.div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      
      {/* Also wrap the results section */}
      {bios.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Here are your AI-generated bios:</h2>
          <div className="space-y-4">
            {bios.map((bio, index) => (
              <div 
                key={index} 
                className="bg-brand-light-blue p-4 rounded-lg shadow-md flex justify-between items-center border border-brand-border-blue hover:border-brand-orange group transition-all"
              >
                <p className="text-left text-gray-200 flex items-start">
                  <Instagram size={20} className="mr-3 mt-1 text-brand-orange flex-shrink-0" />
                  <span>{bio}</span>
                </p>
                <button 
                  onClick={() => copyToClipboard(bio)}
                  className="p-2 rounded-md bg-brand-dark-blue text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-orange hover:text-white"
                  title="Copy bio"
                >
                  <Copy size={18} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}