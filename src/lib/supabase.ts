import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lgkdmmxfsbzdcdafuraf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxna2RtbXhmc2J6ZGNkYWZ1cmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMDEzNTgsImV4cCI6MjA0ODY3NzM1OH0.4QZQo6pxN7Ho0nIK3_7YnQXWDhSXALEMmmQ0w7HVaFQ';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Profile = {
  id: string;
  username: string;
  email?: string;
  created_at: string;
  avatar_url?: string;
  trades_completed: number;
  rating: number;
  is_verified: boolean;
  wallet_address?: string;
};