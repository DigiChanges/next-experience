interface IModal {
    name: string;
    type: 'number' | 'text' | 'email' | 'password';
    label: string;
    id: string
}


export const modalData : IModal[] = [
  {
    name: 'name',
    type: 'text',
    label :'Item name',
    id:'name'
  },
  {
    name: 'type',
    type: 'number',
    label :'Item type',
    id:'type'
  }
];

