import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { URLSearchParams } from 'url';
import {InitialPaginationParams} from "@/features/shared/interfaces/InitialPaginationParams";

export const usePagination = () => {
  const setInitialPaginationParams = (params: URLSearchParams, initialParams: InitialPaginationParams ) => {
    if (!params.get(`pagination[offset]`)) {
      params.set('pagination[offset]', initialParams.offset);
    }
    if (!params.get('pagination[limit]')) {
      params.set('pagination[limit]', initialParams.limit);
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

  const resetPaginationParams = (
      params: URLSearchParams,
      replace: (href: string, options?: NavigateOptions | undefined) => void, pathname: string) => {
    params.set('pagination[offset]', '0');
    params.set('pagination[limit]', '5');
    replace(`${pathname}?${params.toString()}`);
  }

  return {
    setInitialPaginationParams,
    setPaginationParams,
    resetPaginationParams
  };
};
