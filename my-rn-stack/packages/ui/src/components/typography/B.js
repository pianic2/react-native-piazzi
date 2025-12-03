import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function B({ children, style, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(Text, { ...rest, style: [
            {
                fontWeight: "700",
                color: colors.text,
            },
            style
        ], children: children }));
}
