import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams } from 'next/navigation';


export const useFilter = () => {
  const setInitialFilterParams = (params: URLSearchParams) => {
    return {
      filter: params
    };
  };

  const setFilterParams = (
    key: string,
    term: string,
    searchParams: ReadonlyURLSearchParams,
    pathname: string,
    replace:(href: string, options?: NavigateOptions | undefined) => void,
    params: URLSearchParams
  ) => {
    if (term) {
      params.set(`filter[${key}]`, term);
    } else {
      params.delete(`filter[${key}]`);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return {
    setInitialFilterParams,
    setFilterParams
  };
};
