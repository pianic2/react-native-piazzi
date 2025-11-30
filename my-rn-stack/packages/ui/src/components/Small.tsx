import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "../theme/useTheme";

export interface SmallProps extends TextProps {
  children: React.ReactNode;
}

export function Small({ children, style, ...rest }: SmallProps) {
  const { colors } = useTheme();

  return (
    <Text
      {...rest}
      style={[
        {
          fontSize: 13,
          lineHeight: 18,
          color: colors.secondary.text ?? colors.text,
          opacity: 0.75,
          marginTop: 6,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
