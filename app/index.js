import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import HomeScreen from "./Home";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // Splash screen
  if (showSplash) {
    return (
      <View style={styles.splash}>
        <StatusBar hidden /> {/* hides status bar */}
        <Image
          source={require("../assets/G.O_logo-removebg-preview.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  // Home screen after splash
  return <HomeScreen />;
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
