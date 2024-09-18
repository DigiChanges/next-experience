import React, { useMemo } from 'react';
import style from './filter-modal.module.css';
import { useDisclosure } from '@nextui-org/react';
import { icons } from '@/features/shared/hooks/icons';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { SortComponent } from '@/features/shared/atoms/sort/Sort';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { OptionKey, selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { FilterApplied } from '@/features/shared/hooks/useFilter';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { ModalComponent } from '@/features/shared/atoms/modal/Modal';

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
    handleSetFilterValues:(values: {
        key?: string;
        term?: string;
    }) => void;
    keySelected: OptionKey,
    handleReplace: () => void;
    inputFilterData: OptionKey[];
}

export const FilterModal = ({ handleSetFilterValues, filtersApplied, handleRemoveFilter, handleRemoveFilterAll, keySelected, handleSetFiltersApplied }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { IoOptionsOutline } = icons();
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleReplaceURL = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  const props = {
    classNames: {
      button:style.buttonModal,
      modal:style.modal,
      modalBody:style.modalBody,
      modalHeader:'text-normal flex flex-col items-start justify-start gap-1',
      modalFooter:style.modalFooter
    }
  };

  return (
    <>
      <ModalComponent
        classNames={props.classNames}
        onOpen={onOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        button={<IoOptionsOutline />}
        modalPlacement="center"
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
              <SortComponent isResponsive={true}/>
            </div>
            <div className={style.containerAddItem}>
              <FiltersApplied
                filtersApplied={filtersApplied}
                handleReplaceURL={handleReplaceURL}
                handleRemoveFilter={handleRemoveFilter}
                handleRemoveFilterAll={handleRemoveFilterAll}/>
            </div>
          </div>
        }
      />
    </>
  );
};
