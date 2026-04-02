import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const modes = ["light", "dark", "system"] as const;

export default function ThemeToggle() {
  const { mode, setMode, theme } = useTheme();

  const styles = createStyles(theme);

  const circleColors: Record<(typeof modes)[number], string> = {
    light: "#facc15",
    dark: "#111",
    system: "#6366f1",
  };

  return (
    <View style={styles.container}>
      {modes.map((item) => {
        const active = mode === item;

        return (
          <Pressable
            key={item}
            onPress={() => setMode(item)}
            style={[styles.option, active && styles.activeOption]}
          >
            {/* Circle */}
            <View
              style={[styles.circle, { backgroundColor: circleColors[item] }]}
            />

            {/* MODE label */}
            <Text style={styles.label}>MODE</Text>

            {/* Mode Name */}
            <Text style={styles.modeText}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>

            {/* Check icon */}
            <Text style={styles.icon}>{active ? "✓" : ""}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
      gap: 10,
    },
    option: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: "rgba(0,0,0,0.05)", // could use theme.backgroundLight if you have it
    },
    activeOption: {
      backgroundColor: "rgba(0,0,0,0.1)", // could use theme.primaryLight
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 8,
    },
    label: {
      fontWeight: "bold",
      fontSize: 12,
      marginRight: 6,
      opacity: 0.6,
      color: theme.text,
    },
    modeText: {
      fontSize: 14,
      fontWeight: "600",
      flex: 1,
      color: theme.text,
    },
    icon: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.text,
    },
  });
