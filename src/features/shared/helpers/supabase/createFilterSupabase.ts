import { FilterApplied } from '@/features/shared/hooks/useFilter';

export const filterSupabase = (queryParams: { filter?: URLSearchParams | undefined }) => {
  const createFilterFromPair = ([key, value]: [string, string]): FilterApplied => {
    const newKey = key.replace('filter[', '').replace(']', '');
    return { key: newKey, term: value };
  };

  const filterObject: Record<string, string> = {};

  if (queryParams.filter) {
    queryParams.filter.forEach((value, key) => {
      if (key.startsWith('filter[')) {
        filterObject[key] = value;
      }
    });
  }

  return Object.entries(filterObject).reduce(
    (acc, [key, value]) => {
      const { key: newKey, term } = createFilterFromPair([key, value as string]);
      acc[newKey] = term;
      return acc;
    },
    {} as Record<string, string>,
  );
};
