import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type FilterApplied = {
  key: string,
  term: string
}

export const useFilter = (params: URLSearchParams) => {
  const [filtersApplied, setFiltersApplied] = useState<FilterApplied[]>([]);
  const [key, setKey] = useState<string>('name');
  const [term, setTerm] = useState<string>();

  const pathname = usePathname();
  const { replace } = useRouter();

  const setFilterParams = () => {
    if (term) {
      params.set(`filter[${key}]`, term);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleRemoveFilter = (filterToRemove: FilterApplied) => {
    params.delete(`filter[${filterToRemove.key}]`);
    setFiltersApplied(filtersApplied.filter(filter => filter.key !== filterToRemove.key));
    replace(`${pathname}?${params.toString()}`);
  };

  // params.delete(`filter[${key}]`);

  const handleSetKey = (key: string) => {
    setKey(key);
  };

  const handleSetTerm = (term: string) => {
    setTerm(term);
  };

  const createFilterFromPair = ([key, value]: [string, string]): FilterApplied => {
    const newKey = key.replace('filter[', '').replace(']', '');
    return { key: newKey, term: value };
  };

  useEffect(() => {
    setFilterParams();
    const filters: FilterApplied[] = Array.from(params.entries())
        .filter(([key]) => key.includes('filter'))
        .map(createFilterFromPair);

    setFiltersApplied(filters);
  }, [term]);

  return {
    handleSetKey,
    handleSetTerm,
    key,
    term,
    setFilterParams,
    filtersApplied,
    handleRemoveFilter
  };
};
