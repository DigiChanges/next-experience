import { EnumFilterApply } from '@/features/shared/molecules/inputDynamic/InputDynamic';
import { OptionKey } from '@/features/users/interfaces/OptionKey';

export const activeOptions = [
  {
    label: 'Active',
    value: true,
  },
  {
    label: 'Inactive',
    value: false,
  },
];

export const selectOptionsData: OptionKey[] = [
  {
    label: 'Email',
    value: 'user_id.email',
    type: 'text',
    filter: EnumFilterApply.Single,
  },
  {
    type: 'text',
    label: 'Role',
    value: 'role_id.slug',
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
