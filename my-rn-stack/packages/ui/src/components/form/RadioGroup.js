import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pressable, View, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
import { P } from "../typography/P";
export function RadioGroup({ value, onChange, options, status = "default", colorScheme = "primary", }) {
    const { colors } = useTheme();
    const palette = colors[colorScheme] || colors.primary || colors.primary;
    const activeColor = status === "error" ? colors.danger.bg : palette.bg;
    return (_jsx(View, { children: options.map((opt) => {
            const isSelected = value === opt.value;
            return (_jsxs(Pressable, { onPress: () => onChange(opt.value), style: styles.row, children: [_jsx(View, { style: [styles.outer, { borderColor: activeColor }], children: isSelected && (_jsx(View, { style: [styles.inner, { backgroundColor: activeColor }] })) }), _jsx(P, { style: { marginLeft: 8 }, children: opt.label })] }, opt.value));
        }) }));
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
