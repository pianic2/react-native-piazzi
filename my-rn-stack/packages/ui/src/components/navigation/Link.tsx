import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { Link as ExpoLink } from "expo-router";
import { useTheme } from "../../theme/useTheme";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  underline?: boolean;
  color?: string;
  size?: number;
  weight?: TextStyle["fontWeight"];
  onPress?: (e: GestureResponderEvent) => void;
  asChild?: boolean;
}

export function Link({
  href,
  children,
  style,
  containerStyle,
  underline = true,
  color,
  size = 16,
  weight = "500",
  onPress,
  asChild = false,
}: LinkProps) {
  const { colors } = useTheme();

  const textStyles: TextStyle = {
    color: color || colors.linkText || colors.primary,
    textDecorationLine: underline ? "underline" : "none",
    fontSize: size,
    fontWeight: weight,
  };

  // asChild = integra il Link con un altro componente
  if (asChild) {
    return (
      <ExpoLink href={href} asChild>
        {children}
      </ExpoLink>
    );
  }

  return (
    <ExpoLink href={href} asChild={false}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          containerStyle,
          pressed && { opacity: 0.6 },
        ]}
      >
        <Text style={[textStyles, style]}>{children}</Text>
      </Pressable>
    </ExpoLink>
  );
}
