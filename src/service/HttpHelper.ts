import { HeadersContentType, QueryParams } from './IHttpParams';
import { config as Config } from '../features/shared/actions/config';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';

export async function getDefaultHeaders(headers: HeadersContentType): Promise<any> {
  const { credentials } = Config.apiGateway.server;

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token ? `Bearer ${session.access_token}` : '';

  const defaultHeaders: any = {
    credentials,
    headers: {
      Authorization: token
    }
  };

  if (headers !== HeadersContentType.FILE_FORM) {
    defaultHeaders.headers['Content-Type'] = headers;
  }

  return defaultHeaders;
}

export function getParams(queryParams?: QueryParams) {
  const params = new URLSearchParams(queryParams?.filter);

  if (queryParams?.pagination) {
    if (queryParams?.pagination?.limit) {
      params.set('pagination[limit]', queryParams?.pagination?.limit);
    }
    if (queryParams?.pagination?.offset) {
      params.set('pagination[offset]', queryParams?.pagination?.offset);
    }
  }

  return params;
}
