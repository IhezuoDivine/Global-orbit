import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const ScreenWrapper = ({
  children,
  bgColor = "#000",
  barStyle = "light-content",
}) => {
  return (
    <View style={[styles.unsafeArea, { backgroundColor: bgColor }]}>
      {/* Top status bar / notch */}
      <StatusBar backgroundColor={bgColor} barStyle={barStyle} />

      {/* Safe area for your app content */}
      <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  unsafeArea: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default ScreenWrapper;
