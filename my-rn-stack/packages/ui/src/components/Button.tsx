// ui/components/buttons/Button.tsx

import React from "react";
import { Pressable, Text } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { useTheme } from "../theme/useTheme";

type Variant = "primary" | "ghost" | "danger" | "info";
type Size = "xs" | "sm" | "md" | "lg";

interface ButtonProps {
  icon?: LucideIcon;
  label?: string;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

export function Button({
  icon: Icon,
  label,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) {
  const { theme, colors } = useTheme();

  const heightMap = {
    xs: 28,
    sm: 32,
    md: 40,
    lg: 48,
  };

  const iconSizeMap = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
  };

  const horizontalPadding = {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
  };

  const backgroundColor =
    variant === "primary"
      ? colors.primary
      : variant === "danger"
      ? colors.error
      : "transparent";

  const contentColor =
    variant === "ghost"
      ? colors.textPrimary
      : colors.textInverted;

  const borderColor =
    variant === "primary"
      ? colors.primary
      : variant === "danger"
      ? colors.error
      : variant === "ghost"
      ? colors.textPrimary
      : colors.textInverted;


  if (__DEV__ && !Icon && !label) {
    console.warn(
      "[ui/Button] Button rendered without `icon` and `label`. It will appear empty."
    );
  }

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        minHeight: heightMap[size],
        paddingHorizontal: horizontalPadding[size],
        paddingVertical: theme.space.md,
        borderWidth: 2,
        borderColor: borderColor,
        borderRadius: theme.radius.md,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: pressed
          ? colors.surface
          : backgroundColor,
        opacity: disabled ? 0.5 : 1,
      })}
    >
      {Icon && <Icon size={iconSizeMap[size]} color={contentColor} />}

      {label && (
        <Text
          style={{
            color: contentColor,
            fontSize: theme.typography.fontSize[size],
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}
