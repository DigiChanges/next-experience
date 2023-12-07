import { createClient } from '@/lib/server/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const username = String(formData.get('username'));
  const password = String(formData.get('password'));
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error, data } = await supabase.auth.signInWithPassword({
    email: username,
    password
  });

  const isSession = await supabase.auth.getSession();
  console.log(isSession);

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/auth/signin?error=Could not authenticate user`,
      {
        status: 301
      }
    );
  }

  // Always redirect to the transition page with a "method" parameter
  return NextResponse.redirect(
    `${requestUrl.origin}/`,
    {
      status: 301
    }
  );

  console.log(formData);
}
