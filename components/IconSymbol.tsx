import React from "react";
import { Text } from "react-native";

interface IconSymbolProps {
  size?: number;
  name: string;
  color?: string;
}

export const IconSymbol: React.FC<IconSymbolProps> = ({
  size = 24,
  name,
  color = "#000",
}) => {
  // For now, just render the name as text
  return <Text style={{ fontSize: size, color }}>{name}</Text>;
};
