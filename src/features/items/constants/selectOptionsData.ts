import { EnumFilterApply } from '@/features/shared/molecules/inputDynamic/InputDynamic';

export interface OptionKey{
  label: string;
  value: string;
  type: string;
  filter: EnumFilterApply;
  options?: { label: string, value: string }[];
}

export const selectOptionsData: OptionKey[] = [
  {
    label: 'Name',
    value: 'name',
    type: 'text',
    filter: EnumFilterApply.Single
  },
  {
    type: 'number',
    label: 'Type',
    value: 'type',
    filter: EnumFilterApply.Single
  },
  {
    type: 'number',
    label: 'Price',
    value: 'price',
    filter: EnumFilterApply.FromTo
  },
  {
    type: 'date',
    label: 'Date',
    value: 'date',
    filter: EnumFilterApply.FromTo
  },
  {
    type: 'text',
    label: 'Company',
    value: 'company',
    filter: EnumFilterApply.Options,
    options: [
      {
        label: 'Digichanges',
        value: 'digichanges'
      },
      {
        label: 'DGC',
        value: 'dgc'
      }
    ]
  }
];
