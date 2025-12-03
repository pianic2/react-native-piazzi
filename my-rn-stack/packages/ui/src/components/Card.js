import { jsx as _jsx } from "react/jsx-runtime";
import { View, StyleSheet, Platform, } from "react-native";
import { useTheme } from "../theme/useTheme";
export function Card({ children, style, bgColor, radius = 14, padding = 16, elevation = 2, variant = "default", }) {
    const { colors } = useTheme();
    const cardBackground = bgColor ||
        (variant === "outline" ? "transparent" : colors.surface);
    return (_jsx(View, { style: [
            styles.base,
            {
                backgroundColor: cardBackground,
                borderRadius: radius,
                padding,
            },
            variant === "outline" && {
                borderWidth: 1,
                borderColor: colors.primary.border,
            },
            variant !== "outline" && generateShadow(elevation),
            style,
        ], children: children }));
}
function generateShadow(elevation) {
    if (Platform.OS === "android") {
        return {
            elevation,
        };
    }
    // iOS shadow
    return {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: elevation * 2,
        shadowOffset: { width: 0, height: elevation },
    };
}
const styles = StyleSheet.create({
    base: {
        width: "100%",
    },
});
