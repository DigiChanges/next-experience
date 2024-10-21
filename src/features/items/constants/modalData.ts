interface IModal {
  name: string;
  description: 'number' | 'text' | 'email' | 'password';
  label: string;
  id: string;
}

export const modalData: IModal[] = [
  {
    name: 'name',
    description: 'text',
    label: 'Item name',
    id: 'name',
  },
  {
    name: 'type',
    description: 'number',
    label: 'Item type',
    id: 'type',
  },
];
