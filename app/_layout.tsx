import React from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Tabs } from "expo-router";
import { HapticTab } from "../components/HapticTab";
import { useTheme } from "../contexts/ThemeContext";

export default function RootLayout() {
  const { colors } = useTheme();

  return (
    <ThemeProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.tint,
          headerShown: false,
          tabBarButton: (props) => <HapticTab {...props} />,
        }}
      />
    </ThemeProvider>
  );
}
