import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

import { env } from '@/config/api';

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(env.supabaseUrl!, env.supabaseAnonKey!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.delete({ name, ...options });
        } catch {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};

export const createClientServer = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(env.supabaseUrl!, env.supabaseAnonKey!, {
    global: {
      headers: {
        Authorization: `Bearer ${process.env.SUPABASE_PRIVATE_KEY}`,
      },
    },
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.delete({ name, ...options });
        } catch {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};

export const getSupabaseClient = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

export const getSupabaseClientServer = () => {
  const cookieStore = cookies();
  return createClientServer(cookieStore);
};
