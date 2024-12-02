import React from 'react';
import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <Coins className="w-8 h-8 text-indigo-600" />
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-500">
        Moneiero
      </span>
    </Link>
  );
};