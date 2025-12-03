import { jsx as _jsx } from "react/jsx-runtime";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Code({ children, style, textStyle, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(View, { ...rest, style: [
            styles.container,
            {
                backgroundColor: colors.codeBg,
                borderColor: colors.codeBorder,
            },
            style,
        ], children: _jsx(Text, { style: [
                styles.text,
                { color: colors.codeText },
                textStyle,
            ], children: children }) }));
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    text: {
        fontFamily: "monospace",
        fontSize: 14,
        lineHeight: 20,
    },
});
