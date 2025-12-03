import { jsx as _jsx } from "react/jsx-runtime";
import { View } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Divider({ color, thickness = 1, marginVertical = 12, style, }) {
    const { colors } = useTheme();
    return (_jsx(View, { style: [
            {
                height: thickness,
                backgroundColor: color || colors.text + "33", // 20% opacity
                marginVertical,
                width: "100%",
            },
            style,
        ] }));
}
