import { jsx as _jsx } from "react/jsx-runtime";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Quote({ children, style, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(View, { ...rest, style: [
            styles.container,
            {
                borderLeftColor: colors.primary?.bg ?? "#FF8A3D",
            },
            style,
        ], children: _jsx(Text, { style: [
                styles.text,
                { color: colors.text },
            ], children: children }) }));
}
const styles = StyleSheet.create({
    container: {
        borderLeftWidth: 4,
        paddingLeft: 12,
        marginTop: 12,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        fontStyle: "italic",
    },
});
