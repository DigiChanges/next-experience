import { EnumFilterApply } from '@/features/shared/molecules/inputDynamic/InputDynamic';

export interface OptionKey {
  label: string;
  value: string;
  type: string;
  filter: EnumFilterApply;
  options?: { label: string; value: string }[];
}

export const selectOptionsData: OptionKey[] = [
  {
    label: 'Email',
    value: 'email',
    type: 'text',
    filter: EnumFilterApply.Single,
  },
  {
    type: 'text',
    label: 'Role',
    value: 'role',
    filter: EnumFilterApply.Options,
    options: [
      {
        label: 'Admin',
        value: 'admin',
      },
      {
        label: 'Operator',
        value: 'operator',
      },
    ],
  },
];
