import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { AuthButtons } from './AuthButtons';
import { UserMenu } from './UserMenu';
import { useAuthStore } from '../../store/authStore';

export const Header = () => {
  const { user } = useAuthStore();

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
        {user ? <UserMenu user={user} /> : <AuthButtons />}
      </div>
    </header>
  );
};