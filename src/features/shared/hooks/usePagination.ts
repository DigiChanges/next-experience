import { useEffect, useState } from 'react';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { usePathname, useRouter } from 'next/navigation';

export const usePagination = (pagination: PaginationAPI, params: URLSearchParams) => {
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage ?? 1);

  const pathname = usePathname();
  const { replace } = useRouter();

  const setParams = (offset: number, limit: number) => {
    params.set('pagination[offset]', String(offset));
    params.set('pagination[limit]', String(limit));
  };

  const setPaginationParams = () => {
    const offset = (currentPage - 1) * pagination.perPage;
    setParams(offset, pagination.limit);
    replace(`${pathname}?${params.toString()}`);
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setPaginationParams();
  }, [currentPage]);

  return {
    handlePage,
    currentPage
  };
};
