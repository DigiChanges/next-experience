import { EnumFilterApply } from '@/features/shared/molecules/inputDynamic/InputDynamic';
import { OptionKey } from '@/features/users/interfaces/OptionKey';

export const selectOptionsData: OptionKey[] = [
  {
    label: 'Name',
    value: 'name',
    type: 'text',
    filter: EnumFilterApply.Single,
  },
  {
    type: 'number',
    label: 'Description',
    value: 'description',
    filter: EnumFilterApply.Single,
  },
  {
    type: 'number',
    label: 'Price',
    value: 'price',
    filter: EnumFilterApply.FromTo,
  },
  {
    type: 'date',
    label: 'Date',
    value: 'date',
    filter: EnumFilterApply.FromTo,
  },
  {
    type: 'text',
    label: 'Company',
    value: 'company',
    filter: EnumFilterApply.Options,
    options: [
      {
        label: 'Digichanges',
        value: 'digichanges',
      },
      {
        label: 'DGC',
        value: 'dgc',
      },
    ],
  },
];
