import { supabaseClientManager } from '@/lib/SupabaseClientManager';

import { config as Config } from '../features/shared/actions/config';

import { QueryParams } from './IHttpParams';

export async function getDefaultHeaders(): Promise<any> {
  const { credentials } = Config.apiGateway.server;

  const supabase = supabaseClientManager.getPublicClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const token = session?.access_token ? `Bearer ${session.access_token}` : '';

  const defaultHeaders: any = {
    credentials,
    headers: {
      Authorization: token,
    },
  };

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
