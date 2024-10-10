'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@nextui-org/shared-icons';
import { useTheme } from 'next-themes';

import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { SizeType, SwitchComponent } from '@/features/shared/atoms/swich/switch';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <SwitchComponent
      defaultSelected={theme === 'dark'}
      size={SizeType.LARGE}
      color={SelectColorType.SECONDARY}
      startContent={theme === 'light' ? <SunIcon /> : <MoonIcon />}
      endContent={theme === 'dark' ? <MoonIcon /> : <SunIcon color='black' />}
      onClick={toggleTheme}
    ></SwitchComponent>
  );
}
