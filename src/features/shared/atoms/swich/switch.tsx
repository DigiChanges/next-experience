import React from 'react';
import { Switch } from '@nextui-org/react';

import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';

export enum SizeType {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

type Props = {
  className?: string;
  size?: SizeType;
  color: SelectColorType;
  defaultSelected?: boolean;
  children?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
};

export const SwitchComponent = ({
  className,
  size,
  color,
  defaultSelected,
  startContent,
  endContent,
  onClick,
  ariaLabel,
  children,
}: Props) => {
  const handleClick = (event: any) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <Switch
      className={className}
      size={size}
      color={color}
      defaultSelected={defaultSelected}
      onClick={handleClick}
      startContent={startContent}
      endContent={endContent}
      aria-label={ariaLabel}
    >
      {children}
    </Switch>
  );
};
