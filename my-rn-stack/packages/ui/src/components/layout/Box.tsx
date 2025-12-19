// ui/components/layout/Box.tsx

import React from "react";
import { View, ViewProps, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../../theme/useTheme";

type SpaceKey = keyof ReturnType<typeof useTheme>["theme"]["space"];
type RadiusKey = keyof ReturnType<typeof useTheme>["theme"]["radius"];
type ShadowKey = keyof ReturnType<typeof useTheme>["theme"]["shadows"];

interface BoxProps extends ViewProps {
  padding?: SpaceKey;
  margin?: SpaceKey;
  bg?: keyof ReturnType<typeof useTheme>["colors"];
  radius?: RadiusKey;
  border?: boolean;
  shadow?: ShadowKey;
  style?: StyleProp<ViewStyle>;
}

export function Box({
  padding,
  margin,
  bg,
  radius = "md",
  border = false,
  shadow,
  style,
  children,
  ...rest
}: BoxProps) {
  const { theme, colors } = useTheme();

  return (
    <View
      {...rest}
      style={[
        padding && { padding: theme.space[padding] },
        margin && { margin: theme.space[margin] },
        bg && { backgroundColor: colors[bg] },
        radius && { borderRadius: theme.radius[radius] },
        border && { borderWidth: 1, borderColor: colors.border },
        shadow && theme.shadows[shadow],
        style,
      ]}
    >
      {children}
    </View>
  );
}
