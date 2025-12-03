import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

export interface BProps extends TextProps {
  children: React.ReactNode;
}

export function B({ children, style, ...rest }: BProps) {
  const { colors } = useTheme();

  return (
    <Text
      {...rest}
      style={[
        {
          fontWeight: "700",
          color: colors.text,
        },
        style
      ]}
    >
      {children}
    </Text>
  );
}
