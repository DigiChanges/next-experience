import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

import { config as Config } from '../config/config';

import { HeadersContentType, QueryParams } from './IHttpParams';

interface DefaultHeaders {
  credentials?: string;
  headers?: Record<string, string>;
}

export async function getDefaultHeaders(headers?: HeadersContentType): Promise<DefaultHeaders> {
  const { credentials } = Config.apiGateway.server;

  const supabase = supabaseServerClientManager.getServerPublicClient();

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

  if (headers && headers !== HeadersContentType.FILE_FORM) {
    defaultHeaders.headers = {
      ...defaultHeaders.headers,
      'Content-Type': headers,
    };
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
