import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';

export const usePagination = (pagination: PaginationAPI, params: URLSearchParams) => {
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage ?? 1);
  const pathname = usePathname();
  const { replace } = useRouter();

  const setParams = (offset: number, limit: number) => {
    params.set('pagination[offset]', String(offset));
    params.set('pagination[limit]', String(limit));
    // Update the URL
    replace(`${pathname}?${params.toString()}`);
  };

  const setPaginationParams = () => {
    const offset = (currentPage - 1) * pagination?.perPage;
    setParams(offset, pagination?.limit);
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setPaginationParams();

    replace(`${pathname}?${params.toString()}`);
  }, [currentPage]);

  return {
    handlePage,
    currentPage,
  };
};
