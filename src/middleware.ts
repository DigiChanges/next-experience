import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CookieOptions, createServerClient } from '@supabase/ssr';
import { localePrefix, locales, pathnames } from '@/config';
import createIntlMiddleware from 'next-intl/middleware';

const privateRoutes =  ['/dashboard', '/items'];
const defaultLocale = 'en';

const intlMiddleware = createIntlMiddleware({
  defaultLocale,
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
        set: (name: string, value: string, options: CookieOptions) => setCookie(name, value, options, request),
        remove: (name: string, options: CookieOptions) => removeCookie(name, options, request)
      }
    }
  );
  const { data: { session } } = await supabase.auth.getSession();
  const isPrivate = privateRoutes.some(route => url.pathname.includes(route));

  if (isPrivate && !session) {
    return redirectTo('/auth/login', request);
  }
  if (!session && url.pathname === '/'){
    return redirectTo('/auth/login', request);
  }
  if (session && url.pathname === '/'){
    return redirectTo('/dashboard', request);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(en|es)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

function setCookie(name: string, value: string, options: CookieOptions, request: NextRequest) {
  const httpOnlyOptions = { ...options, httpOnly: true };
  request.cookies.set({ name, value, ...httpOnlyOptions });
}

function removeCookie(name: string, options: CookieOptions, request: NextRequest) {
  const httpOnlyOptions = { ...options, httpOnly: true };
  request.cookies.set({ name, value: '', ...httpOnlyOptions });
}

function redirectTo(path: string, request: NextRequest) {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = path;
  return NextResponse.redirect(redirectUrl);
}
