// ui/components/feedback/ProgressBar.tsx

import React from "react";
import { View } from "react-native";
import { useTheme } from "../../theme/useTheme";

interface ProgressBarProps {
  value?: number; // 0–100
}

export function ProgressBar({ value }: ProgressBarProps) {
  const { theme, colors } = useTheme();

  const width =
    value !== undefined
      ? `${Math.min(Math.max(value, 0), 100)}%`
      : "30%";

  return (
    <View
      style={{
        height: 8,
        backgroundColor: colors.border,
        borderRadius: theme.radius.full,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width,
          height: "100%",
          backgroundColor: colors.primary,
        }}
      />
    </View>
  );
}
