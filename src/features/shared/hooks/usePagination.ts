import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { URLSearchParams } from 'url';

export const usePagination = () => {
  const setIntialPaginationParams = (params: URLSearchParams) => {
    if (!params.get('pagination[offset]')) {
      params.set('pagination[offset]', '0');
    }
    if (!params.get('pagination[limit]')) {
      params.set('pagination[limit]', '5');
    }
  };

  const setPaginationParams = (
    page: number,
    pagination: any,
    params: URLSearchParams,
    pathname: string,
    replace: (href: string, options?: NavigateOptions | undefined) => void) => {
    const offset = (page - 1) * pagination.perPage;
    params.set('pagination[offset]', String(offset));
    params.set('pagination[limit]', String(pagination.limit));
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    setIntialPaginationParams,
    setPaginationParams
  };
};
