import React, { createContext, useContext } from 'react';
import { Colors } from '@/constants/theme';
import { useColorScheme as useSystemColorScheme } from 'react-native';

type Theme = typeof Colors.light;

interface ThemeContextType {
  colors: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  colors: Colors.light,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useSystemColorScheme() ?? 'light';

  return (
    <ThemeContext.Provider value={{ colors: Colors[colorScheme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
