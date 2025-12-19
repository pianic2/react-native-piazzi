// ui/components/layout/Row.tsx

import React from "react";
import { ScrollView, View, ViewProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

type SpaceKey = keyof ReturnType<typeof useTheme>["theme"]["space"];

interface RowProps extends ViewProps {
  gap?: SpaceKey;
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: boolean;
  children: React.ReactNode;
  flex?: int;
}

export function Row({
  gap = "md",
  align = "center",
  justify = "flex-start",
  wrap = false,
  style,
  children,
  flex = 1,
  ...rest
}: RowProps) {
  const { theme } = useTheme();
  const validChildren = React.Children.toArray(children).filter(Boolean);

  return (
      <View
        {...rest}
        style={[
          {
            flexDirection: "row",
            alignItems: align,
            justifyContent: justify,
            flexWrap: wrap ? "wrap" : "nowrap",
          },
          style,
        ]}
      >
        {validChildren.map((child, i) => (
          <View
            key={i}
            style={{
              alignSelf: "stretch",
              marginRight:
                gap && i < validChildren.length - 1
                  ? theme.space[gap]
                  : 0,
            }}
          >
            {child}
          </View>
        ))}
      </View>
  );
}
