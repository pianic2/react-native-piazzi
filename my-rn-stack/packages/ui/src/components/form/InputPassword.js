import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, TextInput, } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";
export function InputPassword({ error, status = "default", variant = "outline", colorScheme = "outline", style, ...rest }) {
    const { colors } = useTheme();
    const [visible, setVisible] = useState(false);
    const isError = !!error || status === "error";
    const palette = colors[colorScheme] || colors.outline || colors.primary;
    const borderColor = isError ? colors.danger.bg : palette.border;
    const backgroundColor = variant === "filled"
        ? palette.bg
        : variant === "unstyled"
            ? "transparent"
            : colors.surface;
    const borderWidth = variant === "unstyled" ? 0 : 1;
    const borderRadius = variant === "unstyled" ? 0 : 10;
    return (_jsxs(View, { style: styles.container, children: [_jsx(TextInput, { ...rest, secureTextEntry: !visible, placeholderTextColor: colors.text + "88", style: [
                    styles.input,
                    {
                        borderColor,
                        borderWidth,
                        borderRadius,
                        backgroundColor,
                        color: colors.text,
                    },
                    style,
                ] }), _jsx(TouchableOpacity, { onPress: () => setVisible((v) => !v), style: styles.iconWrapper, children: visible ? (_jsx(EyeOff, { size: 20, color: colors.text })) : (_jsx(Eye, { size: 20, color: colors.text })) })] }));
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
