import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = '@green:theme_mode';

type ThemeMode = 'light' | 'dark' | 'system';

const lightTheme = {
  background: '#F8F9FE',
  text: '#1A1C1E',
};

const darkTheme = {
  background: '#09090B',
  text: '#FAFAFA',
};

type ThemeContextType = {
  theme: typeof lightTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme(); 
  
  const [mode, setModeState] = useState<ThemeMode>('system');

  
  useEffect(() => {
    const loadTheme = async () => {
      const saved = await AsyncStorage.getItem(THEME_KEY);
      if (saved) setModeState(saved as ThemeMode);
    };
    loadTheme();
  }, []);


  const setMode = async (newMode: ThemeMode) => {
    setModeState(newMode);
    await AsyncStorage.setItem(THEME_KEY, newMode);
  };

  
  const isDark =
    mode === 'system'
      ? systemTheme === 'dark'
      : mode === 'dark';

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('Wrap app with ThemeProvider');
  return ctx;
};