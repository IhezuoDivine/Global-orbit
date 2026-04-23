import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,       // hide default header
        gestureEnabled: true,     // enable swipe gestures
        gestureDirection: "horizontal", // horizontal swipe back
      }}
    >
      <Stack.Screen name="index" />        {/* your Home screen */}
      <Stack.Screen name="Profile" />      {/* other screens */}
      <Stack.Screen name="OtherScreen" />  {/* add more screens */}
    </Stack>
  );
}