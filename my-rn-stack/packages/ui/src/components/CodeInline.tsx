import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "../theme/useTheme";

export interface CodeInlineProps extends TextProps {
  children: React.ReactNode;
}

export function CodeInline({ children, style, ...rest }: CodeInlineProps) {
  const { colors } = useTheme();

  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: "monospace",
          fontSize: 14,
          paddingVertical: 2,
          paddingHorizontal: 4,
          borderRadius: 4,
          backgroundColor: colors.codeBg,
          color: colors.codeText,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
