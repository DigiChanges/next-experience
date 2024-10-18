import { supabaseClientManager } from '@/lib/SupabaseClientManager';

import { config as Config } from '../features/shared/actions/config';

import { HeadersContentType, QueryParams } from './IHttpParams';

interface DefaultHeaders {
  credentials?: string;
  headers: {
    Authorization: string;
    'Content-Type'?: HeadersContentType;
  };
}

export async function getDefaultHeaders(headers?: HeadersContentType): Promise<DefaultHeaders> {
  const { credentials } = Config.apiGateway.server;

  const supabase = supabaseClientManager.getPublicClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const token = session?.access_token ? `Bearer ${session.access_token}` : '';

  const defaultHeaders: DefaultHeaders = {
    credentials,
    headers: {
      Authorization: token,
    },
  };

  if (headers === HeadersContentType.JSON || !headers) {
    defaultHeaders.headers['Content-Type'] = HeadersContentType.JSON;
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
