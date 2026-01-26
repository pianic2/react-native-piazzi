// ui/components/feedback/Skeleton.tsx

import React from "react";
import { View, Animated } from "react-native";
import { useTheme } from "../../theme/useTheme";

interface SkeletonProps {
  width?: number | string;
  height?: number;
  radius?: number;
}

export function Skeleton({
  width = "100%",
  height = 16,
  radius,
}: SkeletonProps) {
  const { theme, colors } = useTheme();
  const opacity = React.useRef(
    new Animated.Value(0.3)
  ).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <View
      style={{
        // width,
        height,
        borderRadius: radius ?? theme.radius.sm,
        backgroundColor: colors.border,
        opacity,
      }}
    />
  );
}
