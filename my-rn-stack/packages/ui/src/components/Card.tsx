import React from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Platform,
} from "react-native";
import { useTheme } from "../theme/useTheme";

interface CardProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  bgColor?: string;
  radius?: number;
  padding?: number;
  elevation?: number;
  variant?: "default" | "elevated" | "outline";
}

export function Card({
  children,
  style,
  bgColor,
  radius = 14,
  padding = 16,
  elevation = 2,
  variant = "default",
}: CardProps) {
  const { colors } = useTheme();

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
          padding,
        },

        variant === "outline" && {
          borderWidth: 1,
          borderColor: colors.primary.border,
        },

        variant !== "outline" && generateShadow(elevation),

        style,
      ]}
    >
      {children}
    </View>
  );
}

function generateShadow(elevation: number): ViewStyle {
  if (Platform.OS === "android") {
    return {
      elevation,
    };
  }

  // iOS shadow
  return {
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: elevation * 2,
    shadowOffset: { width: 0, height: elevation },
  };
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
  },
});
