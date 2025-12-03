import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View, Platform, } from "react-native";
import { useTheme } from "../theme/useTheme";
export function Button({ title, onPress, type = "primary", size = "md", loading = false, icon: Icon, disabled = false, bgColor, textColor, borderColor, }) {
    const { colors } = useTheme();
    // palette dinamica basata sul tipo e sul tema
    const palette = colors[type];
    // override manuali
    const finalBg = bgColor || palette?.bg;
    const finalText = textColor || palette?.text;
    const finalBorder = borderColor || palette?.border;
    // dimensioni
    const sizeMap = {
        sm: { pv: 8, ph: 14, br: 8, fs: 14, is: 16 },
        md: { pv: 14, ph: 20, br: 10, fs: 16, is: 20 },
        lg: { pv: 18, ph: 26, br: 12, fs: 18, is: 22 },
    };
    const s = sizeMap[size];
    return (_jsx(TouchableOpacity, { onPress: onPress, disabled: disabled || loading, activeOpacity: Platform.OS === "ios" ? 0.65 : 1, style: [
            styles.base,
            {
                backgroundColor: finalBg,
                borderColor: finalBorder,
                borderWidth: type === "outline" ? 2 : 0,
                paddingVertical: s.pv,
                paddingHorizontal: s.ph,
                borderRadius: s.br,
                opacity: disabled ? 0.6 : 1,
            },
        ], children: _jsxs(View, { style: styles.row, children: [Icon && !loading && (_jsx(Icon, { size: s.is, color: finalText, style: { marginRight: title ? 10 : 0 } })), loading && _jsx(ActivityIndicator, { size: "small", color: finalText }), !loading && title && (_jsx(Text, { style: [
                        styles.label,
                        {
                            color: finalText,
                            fontSize: s.fs,
                        },
                    ], children: title }))] }) }));
}
const styles = StyleSheet.create({
    base: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontWeight: "600",
    },
});
