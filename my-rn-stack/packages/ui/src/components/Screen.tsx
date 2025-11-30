import React from "react";
import { SafeAreaView, ViewProps, StyleSheet } from "react-native";
import { useTheme } from "../theme/useTheme";

interface ScreenProps extends ViewProps {
  children: React.ReactNode;
  padding?: number;
}

export function Screen({ children, padding = 20, style, ...rest }: ScreenProps) {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          paddingHorizontal: padding,
          paddingTop: padding,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
