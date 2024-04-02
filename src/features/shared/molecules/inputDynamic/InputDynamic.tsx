import React from 'react';
import { InputSearchSimple } from '@/features/shared/molecules/inputSimple/InputSearchSimple';
import { InputSearchFromTo } from '@/features/shared/molecules/inputSearchFromTo/InputSearchFromTo';
import { InputOptions } from '@/features/shared/molecules/inputOptions/InputOptions';
import { OptionKey } from '@/features/items/constants/selectOptionsData';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';

export const enum EnumFilterApply {
  Single = 0,
  FromTo = 1,
  Options = 2
}
interface Props {
  handleSetFilterValues: (values: {
    term: string
  }) => void;
  keySelected: OptionKey;
  color: SelectColorType
}

export const InputDynamic = (props: Props) => {
export const InputDynamic = (props: Props): JSX.Element => {
  switch (props.keySelected.filter) {
    case EnumFilterApply.Single:
      return <InputSearchSimple {...props}/>;
    case EnumFilterApply.FromTo:
      return <InputSearchFromTo {...props}/>;
    case EnumFilterApply.Options:
      return <InputOptions {...props}/>;
    default:
      return <InputSearchSimple {...props}/>;
  }
};
