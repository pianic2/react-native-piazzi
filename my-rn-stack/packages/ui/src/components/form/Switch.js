import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { Pressable, Animated, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Switch({ value, onChange, status = "default", colorScheme = "primary", }) {
    const { colors } = useTheme();
    const anim = useRef(new Animated.Value(value ? 1 : 0)).current;
    useEffect(() => {
        Animated.timing(anim, {
            toValue: value ? 1 : 0,
            duration: 180,
            useNativeDriver: false,
        }).start();
    }, [value, anim]);
    const palette = colors[colorScheme] || colors.primary || colors.primary;
    const trackBg = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            status === "error" ? colors.danger.bg : colors.outline.border,
            status === "error" ? colors.danger.bg : palette.bg,
        ],
    });
    const thumbPos = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 22],
    });
    return (_jsx(Pressable, { onPress: () => onChange(!value), children: _jsx(Animated.View, { style: [styles.track, { backgroundColor: trackBg }], children: _jsx(Animated.View, { style: [styles.thumb, { left: thumbPos }] }) }) }));
}
const styles = StyleSheet.create({
    track: {
        width: 44,
        height: 24,
        borderRadius: 20,
        justifyContent: "center",
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        position: "absolute",
    },
});
