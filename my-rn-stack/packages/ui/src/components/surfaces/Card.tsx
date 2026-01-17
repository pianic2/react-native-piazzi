import React from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Platform,
} from "react-native";
import { useTheme } from "../../theme/useTheme";
import { shadows, Shadow } from "../../tokens/shadows.base";

interface CardProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  bgColor?: string;
  radius?: number;
  margin?: keyof ReturnType<typeof useTheme>["theme"]["space"];
  padding?: keyof ReturnType<typeof useTheme>["theme"]["space"];
  variant?: "default" | "elevated" | "outline";
  shadow?: Shadow;
}

export function Card({
  children,
  style,
  bgColor,
  radius = 14,
  margin = "none",
  padding = "md",
  variant = "default",
  shadow,
}: CardProps) {
  const { theme, colors } = useTheme();

  const resolvedShadow: Shadow =
    shadow ??
    (variant === "outline"
      ? "none"
      : variant === "elevated"
      ? "md"
      : "sm");

  const cardBackground =
    bgColor ||
    (variant === "outline" ? "transparent" : colors.surface);

  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: cardBackground,
          borderRadius: radius,
          margin: theme.space[margin],
          padding: theme.space[padding],
        },

        variant === "outline" && {
          borderWidth: 1,
          borderColor: colors.border,
        },

        applyShadow(resolvedShadow),

        style,
      ]}
    >
      {children}
    </View>
  );
}

/**
 * Applica shadow token in modo cross-platform
 */
function applyShadow(shadow: Shadow): ViewStyle {
  const { theme } = useTheme();

  if (Platform.OS === "android") {
    return {
      elevation: theme.shadows[shadow].elevation,
    };
  }

  // iOS / Web
  return {
    shadowColor: theme.shadows[shadow].shadowColor,
    shadowOffset: theme.shadows[shadow].shadowOffset,
    shadowOpacity: theme.shadows[shadow].shadowOpacity,
    shadowRadius: theme.shadows[shadow].shadowRadius,
  };
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
  },
});
