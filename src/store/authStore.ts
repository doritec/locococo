import { create } from 'zustand';

interface User {
  username: string;
  email?: string;
  created_at: string;
  trades_completed: number;
  rating: number;
  is_verified: boolean;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  signUp: (username: string, email: string | undefined, password: string) => Promise<void>;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  loading: false,
  setUser: (user) => {
    set({ user });
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  },
  setLoading: (loading) => set({ loading }),
  signUp: async (username, email, password) => {
    try {
      set({ loading: true });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if username exists
      const existingUser = localStorage.getItem(username);
      if (existingUser) {
        throw new Error('Username already taken');
      }

      // Create user
      const user = {
        username,
        email,
        created_at: new Date().toISOString(),
        trades_completed: 0,
        rating: 0,
        is_verified: false,
      };

      // Store user data
      localStorage.setItem(username, JSON.stringify({ ...user, password }));
      set({ user });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  signIn: async (username, password) => {
    try {
      set({ loading: true });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check credentials
      const storedUser = localStorage.getItem(username);
      if (!storedUser) {
        throw new Error('Invalid credentials');
      }

      const userData = JSON.parse(storedUser);
      if (userData.password !== password) {
        throw new Error('Invalid credentials');
      }

      const user = {
        username: userData.username,
        email: userData.email,
        created_at: userData.created_at,
        trades_completed: userData.trades_completed,
        rating: userData.rating,
        is_verified: userData.is_verified,
      };

      set({ user });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  signOut: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));