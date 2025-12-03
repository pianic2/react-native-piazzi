import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

interface RowProps extends ViewProps {
  gap?: number;
  align?: "flex-start" | "center" | "flex-end";
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
  children: React.ReactNode;
}

export function Row({
  gap = 0,
  align = "center",
  justify = "flex-start",
  style,
  children,
  ...rest
}: RowProps) {
  const validChildren = React.Children.toArray(children).filter(Boolean);

  return (
    <View
      {...rest}
      style={[
        styles.row,
        { alignItems: align, justifyContent: justify },
        style,
      ]}
    >
      {validChildren.map((child, i) => (
        <View key={i} style={{ marginRight: i === validChildren.length - 1 ? 0 : gap }}>
          {child}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
