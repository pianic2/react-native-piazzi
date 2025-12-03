import React from "react";
import { View, ViewProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

interface SectionProps extends ViewProps {
  children: React.ReactNode;
  padding?: number;
  background?: string;
}

export function Section({
  children,
  padding = 20,
  background,
  style,
  ...rest
}: SectionProps) {
  const { colors } = useTheme();

  return (
    <View
      {...rest}
      style={[
        {
          padding,
          backgroundColor: background || colors.surface,
          borderRadius: 12,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
