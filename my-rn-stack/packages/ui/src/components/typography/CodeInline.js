import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function CodeInline({ children, style, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(Text, { ...rest, style: [
            {
                fontFamily: "monospace",
                fontSize: 14,
                paddingVertical: 2,
                paddingHorizontal: 4,
                borderRadius: 4,
                backgroundColor: colors.codeBg,
                color: colors.codeText,
            },
            style,
        ], children: children }));
}
