// ui/components/typography/Text.tsx

import React from "react";
import { Text as RNText, TextProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

type Variant = "default" | "muted" | "danger" | "success";
type Align = "left" | "center" | "right" | "justify";

interface Props extends TextProps {
  variant?: Variant;
  size?: keyof ReturnType<typeof useTheme>["theme"]["typography"]["fontSize"];
  weight?: keyof ReturnType<typeof useTheme>["theme"]["typography"]["fontWeight"];
  align?: Align;
  truncate?: boolean;
}

export function Text({
  variant = "default",
  size = "md",
  weight = "regular",
  align = "justify",
  truncate = false,
  style,
  children,
  ...rest
}: Props) {
  const { theme, colors } = useTheme();

  const colorMap: Record<Variant, string> = {
    default: colors.textPrimary,
    muted: colors.textMuted,
    danger: colors.error,
    success: colors.success,
  };

  return (
    <RNText
      {...rest}
      numberOfLines={truncate ? 1 : undefined}
      ellipsizeMode={truncate ? "tail" : undefined}
      style={[
        {
          fontSize: theme.typography.fontSize[size],
          lineHeight:
            theme.typography.fontSize[size] *
            theme.typography.lineHeight.normal,
          fontWeight: theme.typography.fontWeight[weight],
          color: colorMap[variant],
          textAlign: align,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}
