import React, { useRef, useEffect } from "react";
import { Pressable, Animated, StyleSheet, View } from "react-native";
import { Check } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";

type FormStatus = "default" | "error" | "success" | "warning";
type ColorScheme =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  status?: FormStatus;
  colorScheme?: ColorScheme;
}

export function Checkbox({
  checked,
  onChange,
  status = "default",
  colorScheme = "primary",
}: CheckboxProps) {
  const { colors } = useTheme();
  const scale = useRef(new Animated.Value(checked ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: checked ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [checked, scale]);

  const palette =
    (colors as any)[colorScheme] || (colors as any).primary || colors.primary;

  const backgroundColor =
    status === "error"
      ? colors.danger.bg
      : checked
      ? palette.bg
      : "transparent";

  return (
    <Pressable onPress={() => onChange(!checked)}>
      <View
        style={[
          styles.box,
          { borderColor: palette.border, backgroundColor },
        ]}
      >
        <Animated.View style={{ transform: [{ scale }] }}>
          {checked && <Check size={18} color="#fff" />}
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
