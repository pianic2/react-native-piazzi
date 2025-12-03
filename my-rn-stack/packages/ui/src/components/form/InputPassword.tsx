import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  TextInput,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
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

interface InputPasswordProps extends TextInputProps {
  error?: boolean;
  status?: FormStatus;
  variant?: Variant;
  colorScheme?: ColorScheme;
}

export function InputPassword({
  error,
  status = "default",
  variant = "outline",
  colorScheme = "outline",
  style,
  ...rest
}: InputPasswordProps) {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

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
    <View style={styles.container}>
      <TextInput
        {...rest}
        secureTextEntry={!visible}
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

      <TouchableOpacity
        onPress={() => setVisible((v) => !v)}
        style={styles.iconWrapper}
      >
        {visible ? (
          <EyeOff size={20} color={colors.text} />
        ) : (
          <Eye size={20} color={colors.text} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  iconWrapper: {
    position: "absolute",
    right: 12,
    top: 12,
  },
});
