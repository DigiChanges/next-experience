import React from 'react';
import { Button } from '@nextui-org/react';

type Props = {
    ariaLabel?: string,
    className?: string,
    isIconOnly?: boolean,
    color?:any,
    variant?: any,
    onClick?: (event: any) => void,
    onPress?: (event: any) => void,
    children: any
}

export const ButtonForm = ({ ariaLabel, className, isIconOnly, onClick, onPress, color, variant, children }: Props) => {
  const handleOnClick = (event: any) => {
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
