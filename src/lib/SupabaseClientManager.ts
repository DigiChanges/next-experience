import { createServerClient, type CookieOptions } from '@supabase/ssr';

import { cookies } from 'next/headers';

import { env } from '@/config/api';

class SupabaseClientManager {
  private createClientWithOptions(options: object) {
    const cookieStore = cookies();
    return createServerClient(env.supabaseUrl!, env.supabaseAnonKey!, {
      ...options,
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options: CookieOptions) => {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing user sessions.
          }
        },
        remove: (name: string, options: CookieOptions) => {
          try {
            cookieStore.delete({ name, ...options });
          } catch {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing user sessions.
          }
        },
      },
    });
  }

  getPrivateClient() {
    return this.createClientWithOptions({
      global: {
        headers: {
          Authorization: `Bearer ${process.env.SUPABASE_PRIVATE_KEY}`,
        },
      },
    });
  }

  getPublicClient() {
    return this.createClientWithOptions({});
  }
}

export const supabaseClientManager = new SupabaseClientManager();
