import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { View } from "react-native";
export function Column({ gap = 10, style, children, ...rest }) {
    const validChildren = React.Children.toArray(children).filter(Boolean);
    return (_jsx(View, { ...rest, style: style, children: validChildren.map((child, i) => (_jsx(View, { style: { marginBottom: i === validChildren.length - 1 ? 0 : gap }, children: child }, i))) }));
}
