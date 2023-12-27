import { cookies } from 'next/headers';

export const useGetLang = () => {
  const cookieStore = cookies();
  const data =  cookieStore.get('NEXT_LOCALE');
  const lang = data?.value;
  return {
    lang
  };
};
