import { QueryParams } from './IHttpParams';
import { config as Config } from '../features/shared/actions/config';

export function getDefaultHeaders(): Record<string, any>
{
    const { credentials } = Config.apiGateway.server;
    console.log(credentials)
    return {
        credentials,
        headers: {
            'Content-Type': 'application/json'
        }
    };
}

export function getParams(queryParams?: QueryParams)
{
    const params = new URLSearchParams(queryParams?.filter);

    if (queryParams?.pagination)
    {
        if (queryParams?.pagination?.limit)
        {
            params.set('pagination[limit]', queryParams?.pagination?.limit);
        }
        if (queryParams?.pagination?.offset)
        {
            params.set('pagination[offset]', queryParams?.pagination?.offset);
        }
    }

    return params;
}
