/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import ThemeContext from '../../context/theme-context';

export default function ThemeButton() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const onToggle = () => {
    setIsDark(isDark === 'light' ? 'dark' : 'light');
    localStorage.setItem('ms-theme', isDark === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={onToggle} size="small">
      {isDark === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
