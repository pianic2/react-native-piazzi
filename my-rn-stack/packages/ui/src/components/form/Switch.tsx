import React, { useRef, useEffect } from "react";
import { Pressable, Animated, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";

type FormStatus = "default" | "error" | "success" | "warning";
type ColorScheme =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger";

interface SwitchProps {
  value: boolean;
  onChange: (v: boolean) => void;
  status?: FormStatus;
  colorScheme?: ColorScheme;
}

export function Switch({
  value,
  onChange,
  status = "default",
  colorScheme = "primary",
}: SwitchProps) {
  const { colors } = useTheme();
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [value, anim]);

  const palette =
    (colors as any)[colorScheme] || (colors as any).primary || colors.primary;

  const trackBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      status === "error" ? colors.danger.bg : colors.outline.border,
      status === "error" ? colors.danger.bg : palette.bg,
    ],
  });

  const thumbPos = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  return (
    <Pressable onPress={() => onChange(!value)}>
      <Animated.View style={[styles.track, { backgroundColor: trackBg }]}>
        <Animated.View style={[styles.thumb, { left: thumbPos }]} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 44,
    height: 24,
    borderRadius: 20,
    justifyContent: "center",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
  },
});
