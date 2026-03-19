import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
    },
    text: {
      marginBottom: 10,
      color: theme.text,
    },
  });

export default function ThemeToggle() {
  const { mode, setMode, theme } = useTheme();

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setMode("light")}>
        <Text style={styles.text}>Light {mode === "light" ? "✓" : ""}</Text>
      </Pressable>
      <Pressable onPress={() => setMode("dark")}>
        <Text style={styles.text}>Dark {mode === "dark" ? "✓" : ""}</Text>
      </Pressable>
      <Pressable onPress={() => setMode("system")}>
        <Text style={styles.text}>System {mode === "system" ? "✓" : ""}</Text>
      </Pressable>
    </View>
  );
}
