import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CookieOptions, createServerClient } from '@supabase/ssr';
import { localePrefix, locales, pathnames } from '@/config';
import createIntlMiddleware from 'next-intl/middleware';

const privateRoutes =  ['/dashboard', '/items'];


const intlMiddleware = createIntlMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix
});


export async function middleware(request: NextRequest) {
  const url = new URL(request.url);

  const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string): string | undefined {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            const httpOnlyOptions = { ...options, httpOnly: true };
            request.cookies.set({ name, value, ...httpOnlyOptions });
          },
          remove(name: string, options: CookieOptions) {
            const httpOnlyOptions = { ...options, httpOnly: true };
            request.cookies.set({ name, value: '', ...httpOnlyOptions });
          }
        }
      }
  );

  const session = await supabase.auth.getSession();
  const isPrivate = privateRoutes.some(route => {
    return url.pathname.includes(route);
  });

  if (isPrivate && !session.data.session) {
    // Authentication not successful, redirect to home page.
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/auth/login';
    return NextResponse.redirect(redirectUrl);
  }
  if (!session.data.session && url.pathname === '/'){
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/auth/login';
    return NextResponse.redirect(redirectUrl);
  }
  if (session.data.session && url.pathname === '/'){
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/dashboard';
    return NextResponse.redirect(redirectUrl);
  }
  return  intlMiddleware(request);
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|es)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};


