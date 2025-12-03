import React, { useState } from "react";
import { Pressable, View, Modal, StyleSheet, Text } from "react-native";
import { ChevronDown } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";

type FormStatus = "default" | "error" | "success" | "warning";
type ColorScheme =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: boolean;
  status?: FormStatus;
  colorScheme?: ColorScheme;
}

export function Select({
  options,
  value,
  onChange,
  placeholder,
  error,
  status = "default",
  colorScheme = "outline",
}: SelectProps) {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value);

  const isError = !!error || status === "error";
  const palette =
    (colors as any)[colorScheme] || (colors as any).outline || colors.outline;

  const borderColor = isError ? colors.danger.bg : palette.border;
  const backgroundColor = colors.surface;

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        style={[
          styles.button,
          { borderColor, backgroundColor },
        ]}
      >
        <Text style={{ flex: 1, color: colors.text }}>
          {selected?.label || placeholder || "Seleziona..."}
        </Text>
        <ChevronDown size={18} color={colors.text} />
      </Pressable>

      <Modal transparent animationType="fade" visible={open}>
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={[styles.sheet, { backgroundColor: colors.surface }]}>
            {options.map((opt) => (
              <Pressable
                key={opt.value}
                onPress={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                style={styles.option}
              >
                <Text style={{ color: colors.text, fontSize: 16 }}>
                  {opt.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  sheet: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  option: {
    paddingVertical: 14,
  },
});
