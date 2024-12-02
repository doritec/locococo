import React from 'react';
import { Link } from 'react-router-dom';

export const AuthButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/login" className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors">
        Login
      </Link>
      <Link to="/register" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        Register
      </Link>
    </div>
  );
};