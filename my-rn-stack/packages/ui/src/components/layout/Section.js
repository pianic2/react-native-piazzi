import { jsx as _jsx } from "react/jsx-runtime";
import { View } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Section({ children, padding = 20, background, style, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(View, { ...rest, style: [
            {
                padding,
                backgroundColor: background || colors.surface,
                borderRadius: 12,
            },
            style,
        ], children: children }));
}
