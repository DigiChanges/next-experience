'use client';
import React from 'react';
import styles from './users.module.css';
// import { useTranslations } from 'next-intl';
import { User } from '@/features/profile/actions/ProfileAction';
import { PaginationComponent } from '@/features/shared/atoms/pagination/Paginations';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';

interface Props {
  users: User[];
  pagination: {
    currentPage: number,
    totalPages: number,
    totalCount: number
  };
}

export const UserList = (props: Props) => {
  // const { t } = useTranslations('UserList');

  const [allUsers, setAllUsers] = React.useState<User[] | any | null>(null);

  const [currentPage, setCurrentPage] = React.useState<number>(1 | props.pagination.currentPage);

  const handlePage = (page: number) => {
    setCurrentPage(page);
    setAllUsers(null);
  };

  React.useEffect(() => {
    if (!allUsers) {
      setAllUsers(props.users);
    }
  }, [allUsers]);

  return (<div className={styles.container}>{allUsers?.length}
    <div className={styles.containerPaginationAndAdd}>
      {props.users.length > 0 &&
          <div className={styles.testNav}>
            <PaginationComponent onChange={handlePage} page={currentPage} total={props.pagination.totalPages}
              color={SelectColorType.SECONDARY}/>
          </div>
      }
    </div>
  </div>);
};
