import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, Twitter, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="flex items-center gap-2">
            <Coins className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Moneiero
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/terms" className="text-gray-600 hover:text-indigo-600 transition-colors">Terms of service</Link>
            <Link to="/faq" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</Link>
            <Link to="/fees" className="text-gray-600 hover:text-indigo-600 transition-colors">Fees</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact us</Link>
            <Link to="/guides" className="text-gray-600 hover:text-indigo-600 transition-colors">Guides</Link>
            <Link to="/reputation" className="text-gray-600 hover:text-indigo-600 transition-colors">Reputation</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/monerocare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/monerocare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};