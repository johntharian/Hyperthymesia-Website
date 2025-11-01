import React, { useState, useEffect } from 'react';
import { GithubIcon } from './icons/GithubIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#/our-story' },
    { name: 'Features', href: '#/features' },
    { name: 'How It Works', href: '#/how-it-works' },
    { name: 'Use Cases', href: '#/use-cases' },
    { name: 'Roadmap', href: '#/roadmap' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
            Hyperthymesia
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <a href="https://github.com/johntharian/Hyperthymesia" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <GithubIcon className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
