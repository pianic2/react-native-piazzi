import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Pressable, View, Modal, StyleSheet, Text } from "react-native";
import { ChevronDown } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";
export function Select({ options, value, onChange, placeholder, error, status = "default", colorScheme = "outline", }) {
    const { colors } = useTheme();
    const [open, setOpen] = useState(false);
    const selected = options.find((o) => o.value === value);
    const isError = !!error || status === "error";
    const palette = colors[colorScheme] || colors.outline || colors.outline;
    const borderColor = isError ? colors.danger.bg : palette.border;
    const backgroundColor = colors.surface;
    return (_jsxs(_Fragment, { children: [_jsxs(Pressable, { onPress: () => setOpen(true), style: [
                    styles.button,
                    { borderColor, backgroundColor },
                ], children: [_jsx(Text, { style: { flex: 1, color: colors.text }, children: selected?.label || placeholder || "Seleziona..." }), _jsx(ChevronDown, { size: 18, color: colors.text })] }), _jsx(Modal, { transparent: true, animationType: "fade", visible: open, children: _jsx(Pressable, { style: styles.overlay, onPress: () => setOpen(false), children: _jsx(View, { style: [styles.sheet, { backgroundColor: colors.surface }], children: options.map((opt) => (_jsx(Pressable, { onPress: () => {
                                onChange(opt.value);
                                setOpen(false);
                            }, style: styles.option, children: _jsx(Text, { style: { color: colors.text, fontSize: 16 }, children: opt.label }) }, opt.value))) }) }) })] }));
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
