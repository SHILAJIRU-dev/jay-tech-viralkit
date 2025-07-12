"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";

import Meteors from '@/components/Meteors';
import ToolCardSkeleton from '@/components/ToolCardSkeleton';

// Import all our new Lottie animations
import heroTechAnimation from '@/assets/lottie/hero-tech-animation.json';
import trendsAnimation from '@/assets/lottie/trends-animation.json';
import hashtagAnimation from '@/assets/lottie/hashtag-animation.json';
import youtubeAnimation from '@/assets/lottie/youtube-animation.json'; 
import ideaAnimation from '@/assets/lottie/idea-animation.json';
import calendarAnimation from '@/assets/lottie/calendar-animation.json';
import bioAnimation from '@/assets/lottie/bio-animation.json';
import logoAnimation from '@/assets/lottie/logo-animation.json';
import arrowAnimation from '@/assets/lottie/arrow-animation.json';
import { useEffect, useState } from 'react';


// Update the tools array to include the animation data
const tools = [
    { name: 'Trend Tracker', path: '/trending-now', description: 'Discover the hottest topics, keywords, and aesthetics right now.', animationData: trendsAnimation },
    { name: 'Hashtag Generator', path: '/hashtag-generator', description: 'Generate viral hashtags to boost your video reach.', animationData: hashtagAnimation },
    { name: 'YouTube Title Optimizer', path: '/youtube-title-tool', description: 'Craft irresistible, click-worthy titles for your videos.', animationData: youtubeAnimation },
    { name: 'AI Content Idea Engine', path: '/idea-engine', description: 'Never run out of content ideas again. Get inspired now.', animationData: ideaAnimation },
    { name: 'Viral Content Calendar', path: '/content-calendar', description: 'Visually plan and schedule your content for all platforms.', animationData: calendarAnimation },
    { name: 'Instagram Bio Generator', path: '/bio-maker', description: 'Craft the perfect AI-powered bio to gain more followers.', animationData: bioAnimation },
    { name: 'AI Glitch Logo Generator', path: '/logo-maker', description: 'Create a unique, glitch-style logo for your brand in seconds.', animationData: logoAnimation }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading period
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="relative text-center overflow-x-hidden">
      {/* Hero Animation (Above Title) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
         className="w-64 h-64 mx-auto" 
      >
        <Lottie animationData={heroTechAnimation} loop={true} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white my-4"
      >
        Create Content That <span className="text-brand-orange">Goes Viral</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Your ultimate toolkit for trending hashtags, optimized titles, and AI-powered ideas. Stop guessing, start growing.
      </motion.p>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <ToolCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool) => (
            <motion.div key={tool.name} variants={itemVariants}>
              <Link
                href={tool.path}
                className="group block p-6 h-full bg-brand-light-blue rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-brand-border-blue hover:border-brand-orange relative overflow-hidden"
              >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Meteors number={20} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full text-left">
                {/* Lottie Animation for the card */}
                <div className="w-full h-32 mb-4 flex items-center justify-center bg-brand-dark-blue/30 rounded-lg">
                    <Lottie animationData={tool.animationData} loop={true} className="w-24 h-24" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">{tool.name}</h2>
                <p className="text-gray-400 mb-4 flex-grow">{tool.description}</p>
                
                <div className="flex items-center justify-end text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                  <span className="mr-2">Get Started</span>
                  <div className="w-8 h-8">
                    <Lottie animationData={arrowAnimation} loop={true} />
                  </div>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}