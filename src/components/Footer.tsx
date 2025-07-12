import Link from 'next/link';
import { Twitter, Github, Facebook } from 'lucide-react';
import Logo from './logo';

const navLinks = [
  { name: 'Hashtag Generator', path: '/hashtag-generator' },
  { name: 'YouTube Title Optimizer', path: '/youtube-title-tool' },
  { name: 'AI Content Idea Engine', path: '/idea-engine' },
  { name: 'Viral Content Calendar', path: '/content-calendar' },
  { name: 'Instagram Bio Generator', path: '/bio-maker' },
  { name: 'AI Glitch Logo Generator', path: '/logo-maker' },
  { name: 'Trend Tracker', path: '/trending-now' },
];

const Footer = () => {
  return (
    <footer className="border-t border-brand-border-blue mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Logo and Socials */}
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <div className="flex space-x-4 mt-6">
              <a href="https://x.com/SirMluhyaMzii" aria-label="Twitter" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Twitter />
              </a>
              <a href="https://web.facebook.com/people/Jay-Tech-Malinya/61576832994095/#" aria-label="Facebook" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook />
              </a>
              <a href="https://github.com/SHILAJIRU-dev" aria-label="GitHub" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Github />
              </a>
            </div>
          </div>

          {/* Column 2: Tools Links (The New Section) */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-white text-lg mb-4">Tools</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-400 hover:text-brand-orange hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal/Company Links */}
          <div className="text-center md:text-left">
             <h3 className="font-bold text-white text-lg mb-4">Company</h3>
             <ul className="space-y-2">
                <li><a href="https://jay1.buzz/about" className="text-gray-400 hover:text-brand-orange hover:underline transition-colors">About Us</a></li>
                <li><a href="https://jay1.buzz/contact" className="text-gray-400 hover:text-brand-orange hover:underline transition-colors">Contact</a></li>
                <li><a href="https://jay1.buzz/legal" className="text-gray-400 hover:text-brand-orange hover:underline transition-colors">Privacy Policy</a></li>
             </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border-blue/50 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jay Tech Viralkit. All Rights Reserved.</p>
          <p className="mt-2">
            Developed by yours truly <a href="https://jay1.buzz/" className="text-brand-orange hover:underline">Jay Tech</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;