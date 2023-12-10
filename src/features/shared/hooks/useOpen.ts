import { useState } from 'react';


export const useOpen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return {
    handleIsOpen,
    isOpen
  };
};
