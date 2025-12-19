// ui/components/feedback/Alert.tsx

import React from "react";
import { View } from "react-native";
import { Text } from "../typography/Text";
import { Button } from "../Button";
import { useTheme } from "../../theme/useTheme";

type Variant = "info" | "success" | "warning" | "error";

interface AlertProps {
  title?: string;
  message: string;
  variant?: Variant;
  actionLabel?: string;
  onAction?: () => void;
}

export function Alert({
  title,
  message,
  variant = "info",
  actionLabel,
  onAction,
}: AlertProps) {
  const { theme, colors } = useTheme();

  const bgMap: Record<Variant, string> = {
    info: colors.info,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  };

  return (
    <View
      style={{
        backgroundColor: bgMap[variant],
        borderRadius: theme.radius.md,
        padding: theme.space.md,
      }}
    >
      {title && (
        <Text weight="bold" style={{ color: colors.textInverted }}>
          {title}
        </Text>
      )}

      <Text style={{ color: colors.textInverted }}>
        {message}
      </Text>

      {actionLabel && onAction && (
        <Button
          variant="ghost"
          onPress={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </View>
  );
}
