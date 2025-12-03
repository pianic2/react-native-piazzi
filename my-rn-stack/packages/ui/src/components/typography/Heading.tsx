import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { useTheme } from "../../theme/useTheme";

type HeadingLevel = 1 | 2 | 3 | 4 | 5;

interface HeadingProps {
  children: React.ReactNode;
  level?: HeadingLevel;
  style?: TextStyle | TextStyle[];
  color?: string;
  weight?: TextStyle["fontWeight"];
}

export function Heading({
  children,
  level = 2,
  style,
  color,
  weight,
}: HeadingProps) {
  const { colors } = useTheme();

  const sizeMap = {
    1: 42,
    2: 32,
    3: 24,
    4: 18,
    5: 16,
  };

  return (
    <Text
      style={[
        styles.base,
        {
          fontSize: sizeMap[level],
          color: color || colors.text,
          fontWeight: weight || "700",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    marginBottom: 4,
  },
});
