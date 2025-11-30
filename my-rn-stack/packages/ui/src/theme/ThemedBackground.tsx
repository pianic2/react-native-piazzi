import React from "react";
import { View, StyleSheet } from "react-native";
import { useThemeContext } from "./ThemeContext";

export function ThemedBackground({ children }: { children: React.ReactNode }) {
  const { colors } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
