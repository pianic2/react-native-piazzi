import { jsx as _jsx } from "react/jsx-runtime";
import { View, StyleSheet } from "react-native";
import { useTheme } from "./ThemeContext";
export function ThemedBackground({ children, style, noPadding }) {
    const { colors } = useTheme();
    return (_jsx(View, { style: [
            {
                flex: 1,
                backgroundColor: colors.background,
            },
            !noPadding && styles.padding,
            style,
        ], children: children }));
}
const styles = StyleSheet.create({
    padding: {
        padding: 20,
    },
});
