import { jsx as _jsx } from "react/jsx-runtime";
import { View } from "react-native";
export function Spacer({ size = 10, horizontal = false }) {
    return (_jsx(View, { style: horizontal ? { width: size } : { height: size } }));
}
