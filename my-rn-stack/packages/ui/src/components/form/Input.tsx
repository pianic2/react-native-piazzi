import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

type FormStatus = "default" | "error" | "success" | "warning";
type Variant = "outline" | "filled" | "unstyled";
type ColorScheme =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger";

interface InputProps extends TextInputProps {
  error?: boolean;
  status?: FormStatus;
  variant?: Variant;
  colorScheme?: ColorScheme;
}

export function Input({
  error,
  status = "default",
  variant = "outline",
  colorScheme = "outline",
  style,
  ...rest
}: InputProps) {
  const { colors } = useTheme();

  const isError = !!error || status === "error";
  const palette =
    (colors as any)[colorScheme] || (colors as any).outline || colors.primary;

  const borderColor = isError ? colors.danger.bg : palette.border;
  const backgroundColor =
    variant === "filled"
      ? palette.bg
      : variant === "unstyled"
      ? "transparent"
      : colors.surface;

  const borderWidth = variant === "unstyled" ? 0 : 1;
  const borderRadius = variant === "unstyled" ? 0 : 10;

  return (
    <TextInput
      {...rest}
      placeholderTextColor={colors.text + "88"}
      style={[
        styles.input,
        {
          borderColor,
          borderWidth,
          borderRadius,
          backgroundColor,
          color: colors.text,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
});
