// ui/components/typography/CodeInline.tsx

import React from "react";
import { TextProps } from "react-native";
import { Text } from "./Text";
import { useTheme } from "../../theme/useTheme";

export function CodeInline(props: TextProps) {
  const { theme, colors } = useTheme();

  return (
    <Text
      {...props}
      size="sm"
      style={[
        {
          fontFamily: theme.typography.fontFamily.mono,
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: theme.radius.sm,
          paddingHorizontal: theme.space.sm,
          paddingVertical: 1,
        },
        props.style,
      ]}
    />
  );
}
