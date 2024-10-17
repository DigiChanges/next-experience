import React from 'react';
import { Button } from '@nextui-org/react';

import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';

export enum VariantType {
  SOLID = 'solid',
  BORDERED = 'bordered',
  LIGHT = 'light',
  FLAT = 'flat',
  FADED = 'faded',
  SHADOW = 'shadow',
  GHOST = 'ghost',
}

type Props = {
  ariaLabel?: string;
  className?: string;
  isIconOnly?: boolean;
  color?: SelectColorType;
  variant?: VariantType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const ButtonForm = ({ ariaLabel, className, isIconOnly, onClick, onPress, color, variant, children }: Props) => {
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  const handleOnPress = (event: any) => {
    if (onPress) {
      onPress(event);
    }
  };
  return (
    <Button
      aria-label={ariaLabel}
      className={className}
      isIconOnly={isIconOnly}
      color={color}
      variant={variant}
      onClick={handleOnClick}
      onPress={handleOnPress}
    >
      {children}
    </Button>
  );
};
