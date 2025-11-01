
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hyperthymesia. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <GithubIcon className="w-6 h-6" />
            </a>
            <a href="#documentation" className="text-sm text-gray-500 hover:text-white transition-colors">Docs</a>
            <a href="#community" className="text-sm text-gray-500 hover:text-white transition-colors">Community</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
