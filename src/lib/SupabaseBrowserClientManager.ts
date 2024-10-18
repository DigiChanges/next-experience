import { createBrowserClient } from '@supabase/ssr';
import { env } from '@/config/api';

class SupabaseBrowserClientManager {
  getBrowserClient() {
    return createBrowserClient(env.supabaseUrl!, env.supabaseAnonKey!);
  }
}

export const supabaseBrowserClientManager = new SupabaseBrowserClientManager();
