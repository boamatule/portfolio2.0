import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Themes';

const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, toggleTheme];
};

const DarkModeButton = () => {
  const [theme, themeToggle] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const setDark = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const storedTheme = localStorage.getItem('theme');

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark);

  useEffect(() => {
    if (defaultDark) {
      setDark();
    } else {
      setLight();
    }
  }, [defaultDark]);

  return (
    <ThemeProvider theme={themeMode}>
      {theme === 'light' ? (
        <SunIcon
        style={{ 
          color: '#999999',
          width: '24px',
          height: '24px',
        }}
        onClick={themeToggle} />
      ) : (
        <MoonIcon 
        style={{ 
          color: '999999',
          width: '24px',
          height: '24px',
        }}
        onClick={themeToggle} />
      )}
    </ThemeProvider>
  );
};

export default React.memo(DarkModeButton);
