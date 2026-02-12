
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter uppercase leading-none">Swapnil</span>
          <span className="text-xl font-light tracking-widest uppercase text-white/60 leading-none">Pandey</span>
        </div>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#content" className="hover:text-white transition-colors">Content</a>
          <a href="#reels" className="hover:text-white transition-colors">Reels</a>
          <a href="#brands" className="hover:text-white transition-colors">Brands</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-6">
          <a href="https://www.instagram.com/swapnilpandeyg?igsh=MW92Nnk3dWgxbzVwYQ==" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Instagram size={20} className="text-white/80" />
          </a>
          <a href="mailto:contact@swapnil.com" className="hover:scale-110 transition-transform">
            <Mail size={20} className="text-white/80" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
