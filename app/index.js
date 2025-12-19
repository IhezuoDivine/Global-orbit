import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import HomeScreen from "./Home";

export default function index() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 2000);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splash}>
        <StatusBar hidden />
        <Image
          source={require("../assets/Global__Orbit-removebg-preview.png")}
          style={styles.logo}
        />
      </View>
    );
  }

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logo: { width: 200, height: 200 },
});
