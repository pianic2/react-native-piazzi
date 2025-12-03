import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { View, StyleSheet } from "react-native";
export function Row({ gap = 0, align = "center", justify = "flex-start", style, children, ...rest }) {
    const validChildren = React.Children.toArray(children).filter(Boolean);
    return (_jsx(View, { ...rest, style: [
            styles.row,
            { alignItems: align, justifyContent: justify },
            style,
        ], children: validChildren.map((child, i) => (_jsx(View, { style: { marginRight: i === validChildren.length - 1 ? 0 : gap }, children: child }, i))) }));
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
});
