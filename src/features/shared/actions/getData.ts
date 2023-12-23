import { env } from '@/config/api';

export async function getData<T>(uri: string) {
  const res = await fetch(`${env.urlBase}/${uri}`, {
    headers:{
      'Content-Type':'application/json'
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (await res.json()).data as T;
}
