import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
import { P } from "../typography/P";

type FormStatus = "default" | "error" | "success" | "warning";
type ColorScheme =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  value: string;
  onChange: (v: string) => void;
  options: RadioOption[];
  status?: FormStatus;
  colorScheme?: ColorScheme;
}

export function RadioGroup({
  value,
  onChange,
  options,
  status = "default",
  colorScheme = "primary",
}: RadioGroupProps) {
  const { colors } = useTheme();
  const palette =
    (colors as any)[colorScheme] || (colors as any).primary || colors.primary;

  const activeColor = status === "error" ? colors.danger.bg : palette.bg;

  return (
    <View>
      {options.map((opt) => {
        const isSelected = value === opt.value;

        return (
          <Pressable
            key={opt.value}
            onPress={() => onChange(opt.value)}
            style={styles.row}
          >
            <View style={[styles.outer, { borderColor: activeColor }]}>
              {isSelected && (
                <View
                  style={[styles.inner, { backgroundColor: activeColor }]}
                />
              )}
            </View>

            <P style={{ marginLeft: 8 }}>{opt.label}</P>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  outer: {
    width: 22,
    height: 22,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 20,
  },
});
