import {
  InitialPaginationParams,
  InitialUsersPaginationParams,
} from '@/features/shared/interfaces/InitialPaginationParams';

export const paginationInitialParams: InitialPaginationParams = {
  limit: '5',
  offset: '0',
};

export const paginationInitialUsersParams: InitialUsersPaginationParams = {
  page: '1',
  perPage: '6',
};
