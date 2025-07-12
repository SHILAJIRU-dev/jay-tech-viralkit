"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './logo'; 

const navLinks = [
  { name: 'Hashtags', path: '/hashtag-generator' },
  { name: 'YouTube Titles', path: '/youtube-title-tool' },
  { name: 'Idea Engine', path: '/idea-engine' },
  { name: 'Calendar', path: '/content-calendar' },
  { name: 'IG Bio', path: '/bio-maker' },
  { name: 'Logo Maker', path: '/logo-maker' },
  { name: 'Trends', path: '/trending-now' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-dark-blue/80 backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center p-4 border-b border-brand-border-blue">
          {/* Replace the old Link with the Logo component */}
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.slice(0, 3).map((link) => ( // Show first 3 links
              <Link key={link.path} href={link.path} className="text-gray-300 hover:text-brand-orange transition-colors duration-300">
                {link.name}
              </Link>
            ))}
            {/* You can add more links or a "More" dropdown here if needed */}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-brand-light-blue/90 backdrop-blur-md sticky top-[69px] z-40"
          >
            <nav className="flex flex-col items-center space-y-4 p-6">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-200 hover:text-brand-orange w-full text-center py-2 rounded-lg hover:bg-brand-dark-blue transition-colors duration-300">
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;