// ui/components/layout/Divider.tsx

import React from "react";
import { View, ViewProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

interface DividerProps extends ViewProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  color?: keyof ReturnType<typeof useTheme>["colors"];
}

export function Divider({
  orientation = "horizontal",
  thickness = 1,
  color = "divider",
  style,
  ...rest
}: DividerProps) {
  const { colors } = useTheme();

  return (
    <View
      {...rest}
      style={[
        orientation === "horizontal"
          ? { height: thickness, width: "100%" }
          : { width: thickness, height: "100%" },
        { backgroundColor: colors[color], marginVertical: 10, },
        style,
      ]}
    />
  );
}
