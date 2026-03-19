import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import { ThemeProvider } from "../contexts/ThemeContext"; // wrap your app in theme
import ProfileDisplay from "../contexts/ProfileDisplay"; // your Drawer navigator

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splash}>
        <StatusBar hidden />
        <Image
          source={require("../assets/G.O_logo-removebg-preview.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <ProfileDisplay />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
