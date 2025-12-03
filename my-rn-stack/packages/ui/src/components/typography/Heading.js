import { jsx as _jsx } from "react/jsx-runtime";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Heading({ children, level = 2, style, color, weight, }) {
    const { colors } = useTheme();
    const sizeMap = {
        1: 42,
        2: 32,
        3: 24,
        4: 18,
        5: 16,
    };
    return (_jsx(Text, { style: [
            styles.base,
            {
                fontSize: sizeMap[level],
                color: color || colors.text,
                fontWeight: weight || "700",
            },
            style,
        ], children: children }));
}
const styles = StyleSheet.create({
    base: {
        marginBottom: 4,
    },
});
