import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useFilter } from '@/features/shared/hooks/useFilter';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { OptionKey } from '@/features/users/interfaces/OptionKey';

export const useFilterAndPagination = (selectOptionsData: OptionKey[], pagination: any) => {
  const [keySelected, setKeySelected] = useState<OptionKey>({ ...selectOptionsData[0] });
  const searchParams = useSearchParams();
  const params = useMemo(() => {
    const newParams = new URLSearchParams();
    const entriesArray = Array.from(searchParams.entries());
    for (const [key, value] of entriesArray) {
      newParams.append(key, value);
    }
    return newParams;
  }, [searchParams]);

  const handleReplaceURL = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  const pathname = usePathname();
  const { replace } = useRouter();
  const { handlePage, currentPage } = usePagination(pagination, params);
  const {
    filterValues,
    filtersApplied,
    handleRemoveFilter,
    handleSetFiltersApplied,
    handleRemoveFilterAll,
    handleSetFilterValues,
  } = useFilter(params);

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const handleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };
  //
  const handleSearchType = useCallback(() => {
    const data = selectOptionsData.find(({ value }) => value === filterValues.key);
    if (data) {
      setKeySelected(data);
    }
  }, [filterValues.key, selectOptionsData]);

  useEffect(() => {
    handleSetFilterValues({
      key: selectOptionsData[0].value,
    });
  }, [selectOptionsData]);

  useEffect(() => {
    handleSearchType();
  }, [handleSearchType]);

  useEffect(() => {
    handleReplaceURL();
  }, [currentPage]);

  return {
    keySelected,
    setKeySelected,
    filterValues,
    filtersApplied,
    handleRemoveFilter,
    handleSetFiltersApplied,
    handleRemoveFilterAll,
    openDropdownId,
    handleDropdown,
    currentPage,
    handlePage,
    handleSetFilterValues,
    handleReplaceURL,
  };
};
