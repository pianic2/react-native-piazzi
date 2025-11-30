import React from "react";
import { View, ViewProps } from "react-native";

interface ColumnProps extends ViewProps {
  gap?: number;
  children: React.ReactNode;
}

export function Column({ gap = 10, style, children, ...rest }: ColumnProps) {
  const validChildren = React.Children.toArray(children).filter(Boolean);

  return (
    <View {...rest} style={style}>
      {validChildren.map((child, i) => (
        <View
          key={i}
          style={{ marginBottom: i === validChildren.length - 1 ? 0 : gap }}
        >
          {child}
        </View>
      ))}
    </View>
  );
}
