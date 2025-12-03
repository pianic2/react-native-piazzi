import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Small({ children, style, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(Text, { ...rest, style: [
            {
                fontSize: 13,
                lineHeight: 18,
                color: colors.secondary.text ?? colors.text,
                opacity: 0.75,
                marginTop: 6,
            },
            style,
        ], children: children }));
}
