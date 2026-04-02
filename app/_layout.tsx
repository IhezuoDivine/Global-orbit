// app/_layout.tsx
import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import ProfileDisplay from "../contexts/ProfileDisplay";

export default function AppLayout() {
  return (
    <ThemeProvider>
      <ThemedBackground>
        <ProfileDisplay />
      </ThemedBackground>
    </ThemeProvider>
  );
}

function ThemedBackground({ children }: { children: React.ReactNode }) {
  const { theme, mode } = useTheme();

  // Determine if dark mode is active
  const isDark =
    mode === "dark" || (mode === "system" && theme.background === "#09090B");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
