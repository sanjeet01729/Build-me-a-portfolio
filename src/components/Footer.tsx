import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
            aria-label="Twitter Profile"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
