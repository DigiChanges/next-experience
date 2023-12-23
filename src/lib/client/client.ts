import { createBrowserClient } from '@supabase/ssr';
import { env } from '@/config/api';
export const createClient = () =>
  createBrowserClient(
        env.supabaseUrl!,
        env.supabaseAnonKey!
  );
