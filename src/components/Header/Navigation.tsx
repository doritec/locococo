import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export const Navigation = () => {
  const { user } = useAuthStore();

  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Buy Crypto</Link>
      <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Sell Crypto</Link>
      <Link to={user ? "/create-offer" : "/register"} className="text-gray-700 hover:text-indigo-600 transition-colors">Create Offer</Link>
      <Link to={user ? "/dashboard" : "/register"} className="text-gray-700 hover:text-indigo-600 transition-colors">Dashboard</Link>
      <Link to={user ? "/wallet" : "/register"} className="text-gray-700 hover:text-indigo-600 transition-colors">Wallet</Link>
    </nav>
  );
};