// ui/components/typography/Heading.tsx

import React from "react";
import { TextProps } from "react-native";
import { Text } from "./Text";
import { useTheme } from "../../theme/useTheme";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends TextProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right" | "justify";
  level?: Level;
}

export function Heading({
  level = 2,
  style,
  children,
  align = "left",
  ...rest
}: HeadingProps) {
  const { theme } = useTheme();

  const sizeMap: Record<Level, keyof typeof theme.typography.fontSize> =
    {
      1: "xxxl",
      2: "xxl",
      3: "xl",
      4: "lg",
      5: "md",
      6: "sm",
    };

  return (
    <Text
      {...rest}
      size={sizeMap[level]}
      weight="bold"
      align={align}
      style={[
        style,
      ]}
    >
      {children}
    </Text>
  );
}
