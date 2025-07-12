"use client";

import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import toast from 'react-hot-toast';
import { Bot, Download } from 'lucide-react';
import Lottie from "lottie-react";

// Make sure you have created these files in your project
// e.g., in src/assets/lottie/
import loadingAnimation from '@/assets/lottie/loading-animation.json';
import emptyStateAnimation from '@/assets/lottie/empty-state-animation.json';


export default function LogoMakerClient() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateLogo = async () => {
    if (!prompt) {
      toast.error('Please enter a prompt to describe your logo.');
      return;
    }
    setIsLoading(true);
    setImageUrl('');

    try {
      const response = await fetch('/api/generate-logo'); // Using the mock API for now
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
      toast.success("Logo generated successfully!");

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-2">AI Glitch Logo Generator</h1>
      <p className="text-gray-400 mb-8">Describe an idea and get a unique, glitch-style logo in seconds.</p>

      <div className="bg-brand-light-blue p-6 rounded-xl shadow-lg border border-brand-border-blue">
        <label htmlFor="prompt" className="block text-left font-semibold text-gray-300 mb-2">Enter a concept or idea</label>
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'a brain made of circuits' or 'a minimalist fox'"
          className="w-full p-3 bg-brand-dark-blue border-2 border-brand-border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
        />
        <button
          onClick={handleGenerateLogo}
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-brand-orange text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <Bot className="mr-2" size={20} />
          {isLoading ? 'Generating...' : 'Generate Logo'}
        </button>
      </div>

      <div className="mt-8 w-full aspect-square max-w-lg mx-auto bg-brand-dark-blue rounded-xl flex items-center justify-center border-2 border-dashed border-brand-border-blue p-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <Lottie animationData={loadingAnimation} loop={true} className="w-64 h-64" />
            <p className="mt-4 text-lg">The AI is creating your masterpiece...</p>
          </div>
        ) : imageUrl ? (
          <div className="relative group w-full h-full">
            <Image
              src={imageUrl}
              alt="Generated Logo"
              fill
              className="rounded-xl object-contain"
            />
            <a
              href={imageUrl}
              download="jay-tech-logo.png"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              title="Download Logo"
            >
              <Download size={20} />
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <Lottie animationData={emptyStateAnimation} loop={true} className="w-72 h-72" />
            <p className="mt-2 text-lg font-medium">Your generated logo will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}