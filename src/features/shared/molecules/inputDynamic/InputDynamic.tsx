import React from 'react';

import { OptionKey } from '@/features/items/constants/selectOptionsData';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { InputOptions } from '@/features/shared/molecules/inputOptions/InputOptions';
import { InputSearchFromTo } from '@/features/shared/molecules/inputSearchFromTo/InputSearchFromTo';
import { InputSearchSimple } from '@/features/shared/molecules/inputSimple/InputSearchSimple';

export const enum EnumFilterApply {
  Single = 0,
  FromTo = 1,
  Options = 2,
}
type Props = {
  handleSetFilterValues: (values: { term: string }) => void;
  keySelected: OptionKey;
  color: SelectColorType;
  place: string;
};

export const InputDynamic = (props: Props) => {
  switch (props.keySelected.filter) {
    case EnumFilterApply.Single:
      return <InputSearchSimple {...props} />;
    case EnumFilterApply.FromTo:
      return <InputSearchFromTo {...props} />;
    case EnumFilterApply.Options:
      return <InputOptions {...props} />;
    default:
      return <InputSearchSimple {...props} />;
  }
};
