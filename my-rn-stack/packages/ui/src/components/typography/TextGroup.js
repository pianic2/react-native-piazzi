import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { View } from "react-native";
export function TextGroup({ spacing = 10, children, style, ...rest }) {
    const validChildren = React.Children.toArray(children).filter(Boolean);
    return (_jsx(View, { ...rest, style: style, children: validChildren.map((child, index) => (_jsx(View, { style: { marginBottom: index === validChildren.length - 1 ? 0 : spacing }, children: child }, index))) }));
}
