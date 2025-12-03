// ThemedBackground.tsx
import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "./ThemeContext";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  noPadding?: boolean;
}

export function ThemedBackground({ children, style, noPadding }: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
        },
        !noPadding && styles.padding,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 20,
  },
});
