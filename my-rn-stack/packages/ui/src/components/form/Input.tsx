// ui/components/form/Input.tsx

import React, { useState } from "react";
import {
  View,
  TextInput,
  TextInputProps,
} from "react-native";
import { LucideIcon } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";

interface InputProps extends TextInputProps {
  error?: boolean;
  helperText?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
}

export function Input({
  error = false,
  editable = true,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  style,
  ...rest
}: InputProps) {
  const { theme, colors } = useTheme();
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? colors.error
    : focused
    ? colors.primary
    : colors.border;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor,
        borderRadius: theme.radius.md,
        backgroundColor: editable
          ? colors.surface
          : colors.disabledBg,
        paddingHorizontal: theme.space.sm,
      }}
    >
      {LeftIcon && (
        <LeftIcon
          size={18}
          color={colors.textMuted}
          style={{ marginRight: theme.space.xs }}
        />
      )}

      <TextInput
        {...rest}
        editable={editable}
        placeholderTextColor={colors.textMuted}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          {
            flex: 1,
            height: theme.components?.input?.height ?? 44,
            color: colors.textPrimary,
          },
          style,
        ]}
      />

      {RightIcon && (
        <RightIcon
          size={18}
          color={colors.textMuted}
          style={{ marginLeft: theme.space.xs }}
        />
      )}
    </View>
  );
}
