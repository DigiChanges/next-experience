import { QueryParams } from './IHttpParams';
import { config as Config } from '../features/shared/actions/config';
import { cookies } from 'next/headers';

export function getDefaultHeaders(): Record<string, any> {
  const { credentials } = Config.apiGateway.server;

  const cookieStore = cookies();
  const cookieValue =  cookieStore.get('sb-xovsaxzresdetrmkouss-auth-token');
  let token;

  if (cookieValue) {
    token = JSON.parse(cookieValue.value).access_token;
  }

  return {
    credentials,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    }
  };
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
