import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function P({ children, style, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(Text, { ...rest, style: [
            {
                fontSize: 16,
                lineHeight: 22,
                color: colors.text,
            },
            style,
        ], children: children }));
}
