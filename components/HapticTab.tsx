import React from "react";
import { Pressable, PressableProps } from "react-native";
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";

export const HapticTab: React.FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
  ...rest
}) => {
  const handlePress: PressableProps["onPress"] = (event) => {
    Haptics.selectionAsync();
    onPress?.(event); 
  };

  return (
    <Pressable {...(rest as PressableProps)} onPress={handlePress}>
      {children}
    </Pressable>
  );
};
