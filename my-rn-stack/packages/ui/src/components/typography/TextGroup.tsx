import React from "react";
import { View, ViewProps } from "react-native";

interface TextGroupProps extends ViewProps {
  spacing?: number;
  children: React.ReactNode;
}

export function TextGroup({ spacing = 10, children, style, ...rest }: TextGroupProps) {
  const validChildren = React.Children.toArray(children).filter(Boolean);

  return (
    <View {...rest} style={style}>
      {validChildren.map((child, index) => (
        <View
          key={index}
          style={{ marginBottom: index === validChildren.length - 1 ? 0 : spacing }}
        >
          {child}
        </View>
      ))}
    </View>
  );
}
