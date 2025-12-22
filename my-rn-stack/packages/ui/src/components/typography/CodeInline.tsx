// ui/components/typography/CodeInline.tsx

import React from "react";
import { Text } from "./Text";
import { useTheme } from "../../theme/useTheme";
import type { ComponentProps } from "react";

type PProps = ComponentProps<typeof Text>;

export function CodeInline(props: PProps) {
  const { theme, colors } = useTheme();

  return (
    <Text
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
      {...props}
    />
  );
}
