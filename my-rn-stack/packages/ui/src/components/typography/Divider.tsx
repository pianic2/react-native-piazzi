import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../../theme/useTheme";

interface DividerProps {
  color?: string;       // override colore linea
  thickness?: number;   // spessore
  spacing?: number;
  style?: ViewStyle | ViewStyle[];
}

export function Divider({
  color,
  thickness = 2,
  spacing = 12,
  style,
}: DividerProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          height: thickness,
          backgroundColor: color || colors.text + "33", // 20% opacity
          spacing,
          width: "100%",
        },
        style,
      ]}
    />
  );
}
