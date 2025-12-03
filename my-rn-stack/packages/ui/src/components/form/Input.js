import { jsx as _jsx } from "react/jsx-runtime";
import { TextInput, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Input({ error, status = "default", variant = "outline", colorScheme = "outline", style, ...rest }) {
    const { colors } = useTheme();
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
    return (_jsx(TextInput, { ...rest, placeholderTextColor: colors.text + "88", style: [
            styles.input,
            {
                borderColor,
                borderWidth,
                borderRadius,
                backgroundColor,
                color: colors.text,
            },
            style,
        ] }));
}
const styles = StyleSheet.create({
    input: {
        width: "100%",
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
    },
});
