import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CookieOptions, createServerClient } from '@supabase/ssr';


export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers
    }
  });

  const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string): string | undefined {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            // Setting the cookie to HTTP only.
            const httpOnlyOptions = { ...options, httpOnly: true };
            request.cookies.set({ name, value, ...httpOnlyOptions });
            response = NextResponse.next({
              request: { headers: request.headers }
            });
            response.cookies.set({ name, value, ...httpOnlyOptions });
          },
          remove(name: string, options: CookieOptions) {
            const httpOnlyOptions = { ...options, httpOnly: true };
            request.cookies.set({ name, value: '', ...httpOnlyOptions });
            response = NextResponse.next({
              request: { headers: request.headers }
            });
            response.cookies.set({ name, value: '', ...httpOnlyOptions });
          }
        }
      }
  );

  const session = await supabase.auth.getSession();

  if (!session.data.session) {
    // Authentication not successful, redirect to home page.
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/auth/login';
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ['/items', '/']
};


