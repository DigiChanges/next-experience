import { useEffect, useState } from 'react';

export type FilterApplied = {
  key: string,
  term: string
}

export const useFilter = (params: URLSearchParams) => {
  const [filtersApplied, setFiltersApplied] = useState<FilterApplied[]>([]);
  const [filterValues, setFilterValues] = useState<FilterApplied>({
    key: '',
    term: ''
  });

  const setFilterParams = () => {
    if (filterValues.term) {
      params.set(`filter[${filterValues.key}]`, filterValues.term);
    }
  };

  const handleSetFilterValues = (values: {
    key?: string;
    term?: string;
  }) => {
    if (values.key) {
      setFilterValues({ ...filterValues, key: values.key });
    }
    if (values.term) {
      setFilterValues({ ...filterValues, term: values.term });
    }
  };

  const handleRemoveFilter = (filterToRemove: FilterApplied) => {
    params.delete(`filter[${filterToRemove.key}]`);

    setFiltersApplied(filtersApplied.filter(filter => filter.key !== filterToRemove.key));
  };
  const handleRemoveFilterAll = () => {
    filtersApplied.map(e =>{
      params.delete(`filter[${e.key}]`);

    })
    setFiltersApplied([]);
  };

  const createFilterFromPair = ([key, value]: [string, string]): FilterApplied => {
    const newKey = key.replace('filter[', '').replace(']', '');
    return { key: newKey, term: value };
  };

  const handleSetFiltersApplied = () => {
    const filters: FilterApplied[] = Array.from(params.entries())
      .filter(([key]) => key.includes('filter'))
      .map(createFilterFromPair);

    setFiltersApplied(filters);
  };

  useEffect(() => {
    setFilterParams();
  }, [filterValues.term]);

  return {
    handleSetFilterValues,
    filterValues,
    setFilterParams,
    filtersApplied,
    handleRemoveFilter,
    handleSetFiltersApplied,
    handleRemoveFilterAll
  };
};
