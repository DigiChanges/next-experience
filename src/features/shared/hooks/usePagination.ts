import { useEffect, useState } from 'react';

import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';

export const usePagination = (pagination: PaginationAPI, params: URLSearchParams) => {
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage ?? 1);
  const setParams = (offset: number, limit: number) => {
    params.set('pagination[offset]', String(offset));
    params.set('pagination[limit]', String(limit));
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
  }, [currentPage]);

  return {
    handlePage,
    currentPage,
  };
};
