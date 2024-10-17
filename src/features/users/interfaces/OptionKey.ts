import { EnumFilterApply } from '@/features/shared/molecules/inputDynamic/InputDynamic';

export interface OptionKey {
  label: string;
  value: string;
  type: string;
  filter: EnumFilterApply;
  options?: { label: string; value: string }[];
}
