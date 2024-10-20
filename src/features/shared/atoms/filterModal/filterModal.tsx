import React, { useMemo } from 'react';
import { useDisclosure } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { ModalComponent, PlacementType } from '@/features/shared/atoms/modal/Modal';
import { icons } from '@/features/shared/hooks/icons';
import { FilterApplied } from '@/features/shared/hooks/useFilter';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { SortComponent } from '@/features/shared/molecules/sort/Sort';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';

import { OptionKey } from '@/features/users/interfaces/OptionKey';

import style from './filter-modal.module.css';

type Props = {
  description?: string;
  success?: string;
  cancel?: string;
  button?: string;
  displayButton?: boolean;
  filtersApplied: FilterApplied[];
  handleRemoveFilter: (filter: FilterApplied) => void;
  handleRemoveFilterAll: () => void;
  handleSetFiltersApplied: () => void;
  handleSetFilterValues: (values: { key?: string; term?: string }) => void;
  keySelected: OptionKey;
  handleReplace: () => void;
  inputFilterData: OptionKey[];
  type?: string;
};

export const FilterModal = ({
  handleSetFilterValues,
  filtersApplied,
  handleRemoveFilter,
  handleRemoveFilterAll,
  keySelected,
  handleSetFiltersApplied,
  type,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { IoOptionsOutline } = icons();
  const searchParams = useSearchParams();
  const params = useMemo(() => {
    const newParams = new URLSearchParams();

    const entriesArray = Array.from(searchParams.entries());
    for (const [key, value] of entriesArray) {
      newParams.append(key, value);
    }

    return newParams;
  }, [searchParams]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleReplaceURL = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  const props = {
    classNames: {
      button: style.buttonModal,
      modal: style.modal,
      modalBody: style.modalBody,
      modalHeader: 'text-normal flex flex-col items-start justify-start gap-1',
      modalFooter: style.modalFooter,
    },
  };

  return (
    <>
      <ModalComponent
        classNames={props.classNames}
        onOpen={onOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        button={<IoOptionsOutline />}
        modalPlacement={PlacementType.CENTER}
        header={'Select filter'}
        description={
          <div className={style.subcontainerAddFilter}>
            <div className={style.subcontainerAddFilter2}>
              <FilterAndSearch
                handleSetFiltersApplied={handleSetFiltersApplied}
                handleSetFilterValues={handleSetFilterValues}
                keySelected={keySelected}
                handleReplace={handleReplaceURL}
                inputFilterData={selectOptionsData}
                classButton={style.btn}
              />
              {type && type === 'UserList' ? <></> : <SortComponent isResponsive={true} />}
            </div>
            <div className={style.containerAddItem}>
              <FiltersApplied
                filtersApplied={filtersApplied}
                handleReplaceURL={handleReplaceURL}
                handleRemoveFilter={handleRemoveFilter}
                handleRemoveFilterAll={handleRemoveFilterAll}
              />
            </div>
          </div>
        }
      />
    </>
  );
};
