import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "@green:theme_mode";

type ThemeMode = "light" | "dark" | "system";

const lightTheme = {
  background: "#fff",
  text: "#1A1C1E",
  link: "#0f0cd6",
  line: "#ccc",
  hover: "#c1ccc6",
};

const darkTheme = {
  background: "#000",
  text: "#FAFAFA",
  link: "#0f0cd6",
  line: "#272626",
  hover: "#797979",
};

type ThemeContextType = {
  theme: typeof lightTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme();

  const [mode, setModeState] = useState<ThemeMode>("system");

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

  const isDark = mode === "system" ? systemTheme === "dark" : mode === "dark";

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("Wrap app with ThemeProvider");
  return ctx;
};
