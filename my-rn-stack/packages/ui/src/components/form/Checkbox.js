import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { Pressable, Animated, StyleSheet, View } from "react-native";
import { Check } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";
export function Checkbox({ checked, onChange, status = "default", colorScheme = "primary", }) {
    const { colors } = useTheme();
    const scale = useRef(new Animated.Value(checked ? 1 : 0)).current;
    useEffect(() => {
        Animated.spring(scale, {
            toValue: checked ? 1 : 0,
            useNativeDriver: true,
        }).start();
    }, [checked, scale]);
    const palette = colors[colorScheme] || colors.primary || colors.primary;
    const backgroundColor = status === "error"
        ? colors.danger.bg
        : checked
            ? palette.bg
            : "transparent";
    return (_jsx(Pressable, { onPress: () => onChange(!checked), children: _jsx(View, { style: [
                styles.box,
                { borderColor: palette.border, backgroundColor },
            ], children: _jsx(Animated.View, { style: { transform: [{ scale }] }, children: checked && _jsx(Check, { size: 18, color: "#fff" }) }) }) }));
}
const styles = StyleSheet.create({
    box: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
});
