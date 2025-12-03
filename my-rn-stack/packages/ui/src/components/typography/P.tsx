import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

export interface PProps extends TextProps {
  children: React.ReactNode;
}

export function P({ children, style, ...rest }: PProps) {
  const { colors } = useTheme();

  return (
    <Text
      {...rest}
      style={[
        {
          fontSize: 16,
          lineHeight: 22,
          color: colors.text,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
