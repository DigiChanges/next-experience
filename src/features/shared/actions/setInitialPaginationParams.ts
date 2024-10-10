import { URLSearchParams } from 'url';

import { InitialPaginationParams } from '@/features/shared/interfaces/InitialPaginationParams';

export const setInitialPaginationParams = (params: URLSearchParams, initialParams: InitialPaginationParams) => {
  if (!params.get('pagination[offset]')) {
    params.set('pagination[offset]', initialParams.offset);
  }
  if (!params.get('pagination[limit]')) {
    params.set('pagination[limit]', initialParams.limit);
  }
};
