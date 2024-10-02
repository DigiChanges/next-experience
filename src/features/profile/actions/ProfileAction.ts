'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

const getBasicUser = async() => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

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
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = await getBasicUser();
  const { data, error } = await supabase.from('profiles').select().eq('id', user?.id);
  if (error) {
    throw new Error('Error at getting the user');
  }
  return { id: user?.id, image_id: data[0]?.image_id, phone: user?.phone,  email: user?.email, last_name: data[0]?.last_name, first_name: data[0]?.first_name };
};

export const uploadUser = async(image_id: string| null | undefined, id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase.from('profiles').update({ image_id }).eq('id', id);

  if (error) {
    throw new Error('Error at updating the user');
  } else {
    redirect('/dashboard', RedirectType.push);
  }
};
