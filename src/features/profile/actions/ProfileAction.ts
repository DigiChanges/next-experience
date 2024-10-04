'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

interface User {
  id: string;
  image_id: string | null;
  phone: string | null;
  email: string | null;
  last_name: string | null;
  first_name: string | null;
}

const getCookies = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

const getSession = async() => {
  const supabase = getCookies();

  const { data, error } = await supabase.auth.getSession();
  const user = data?.session?.user;

  if (error) {
    throw new Error('Error at getting the user', error);
  }
  if (!user) {
    redirect('/auth/login', RedirectType.push);
  } else {
    return user;
  }
};

export const getUser = async() => {
  const supabase = getCookies();

  const user = await getSession();

  if (!user) {
    redirect('/auth/login', RedirectType.push);
  }

  const { data, error } = await supabase.from('profiles').select().eq('id', user?.id);

  if (error) {
    throw new Error('Error at getting the user');
  }

  const userComplete: User = {
    id: user.id,
    image_id: data[0]?.image_id,
    phone: user.phone ?? null,
    email: user.email ?? null,
    last_name: data[0]?.last_name,
    first_name: data[0]?.first_name
  };

  return userComplete;
};

export const uploadUser = async(image_id: string| null | undefined, id: string) => {
  const supabase = getCookies();

  await supabase.from('profiles').update({ image_id }).eq('id', id);

  redirect('/dashboard', RedirectType.push);
};
