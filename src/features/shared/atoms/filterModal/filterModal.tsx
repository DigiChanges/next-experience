'use client';
import React, {useMemo} from 'react';
import style from "./filterModal.module.css";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input
} from "@nextui-org/react";
import {icons} from "@/features/shared/hooks/icons";
import {FiltersApplied} from "@/features/shared/molecules/filtersApplied/FiltersApplied";
import {InputFilter} from "@/features/shared/molecules/inputFilter/InputFilter";
import {SearchIcon} from "@nextui-org/shared-icons";
import {useTranslations} from "next-intl";
import {SortComponent} from "@/features/shared/atoms/sort/Sort";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {OptionKey} from "@/features/items/constants/selectOptionsData";
import {InputKeysFilter} from "@/features/shared/molecules/inputKeysFilter/inputKeysFilter";

interface Props {
    description?: string;
    success?: string;
    cancel?: string;
    button?: string;
    displayButton?: boolean;
    handleSetKey?: any;
    searchType?: any;
    inputVal?: any;
    setInputVal?: any;
    handleSearch?: any;
    inputFilterData?: any;
    filtersApplied?: any;
    handleRemoveFilter?: any;
    handleSetFiltersApplied: () => void;
    handleSetFilterValues:(values: {
        key?: string;
        term?: string;
    }) => void;
    keySelected: OptionKey,
    handleReplace: () => void;
}
export const FilterModal:React.FC<Props> = (props) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {IoOptionsOutline,IoFunnel} = icons();
    const t = useTranslations('Items');
    const searchParams = useSearchParams();
    const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleReplaceURL = () => {
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <>
            <Button className={style.buttonModal} onPress={onOpen}><IoOptionsOutline /></Button>
            <Modal className={style.modal} placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col justify-start items-start text-normal gap-1">Select filter</ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <div className={style.subcontainerAddFilter}>
                                    <div className={style.subcontainerAddFilter2}>
                                        <div className={style.containerInputFilter}>
                                            <InputKeysFilter data={props.inputFilterData} handleSetFilterValues={props.handleSetFilterValues}/>
                                        </div>
                                        <div className={style.input}>
                                            <Input
                                                type={props.searchType}
                                                value={props.inputVal}
                                                onChange={e => props.setInputVal(e.target.value)}
                                                placeholder={t('search')}
                                                classNames={{
                                                    input: ['bg-bgInputFilter'],
                                                    inputWrapper: [style.inputWrapper]
                                                }}
                                                startContent={
                                                    <SearchIcon className={style.searchIcon}/>
                                                }
                                            />
                                        </div>
                                        <SortComponent isResponsive={true} />
                                    </div>
                                    <div className={style.containerAddItem}>
                                        <FiltersApplied
                                            filtersApplied={props.filtersApplied}
                                            handleReplaceURL={handleReplaceURL}
                                            handleRemoveFilter={props.handleRemoveFilter}
                                        />
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <div className={style.btn}>
                                    <Button onClick={props.handleSearch}><IoFunnel/> {t('button')}</Button>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
