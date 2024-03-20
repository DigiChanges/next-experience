'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@nextui-org/shared-icons';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) { return null; }
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size="lg"
      color="secondary"
      startContent={theme === 'light' ? <SunIcon /> : <MoonIcon />}
      endContent={theme === 'dark' ? <MoonIcon /> : <SunIcon color="black" />}
      onClick={toggleTheme}
    >
    </Switch>
  );
}
