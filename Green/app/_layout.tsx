import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/ThemeContext"; 
import React from 'react';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}

