import { CookieOptions, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { env } from '@/config/api';

import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(env.supabaseUrl!, env.supabaseAnonKey!, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value; // Get a cookie by name
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options }); // Set a cookie
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options }); // Remove a cookie
        },
      },
    });

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(new URL(`/auth/login`, request.url));
    }
  }

  return NextResponse.redirect(requestUrl.origin);
}
