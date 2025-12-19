// ui/components/layout/Spacer.tsx

import React from "react";
import { View } from "react-native";
import { useTheme } from "../../theme/useTheme";

type SpaceKey = keyof ReturnType<typeof useTheme>["theme"]["space"];

interface SpacerProps {
  size?: SpaceKey;
  horizontal?: boolean;
}

export function Spacer({
  size = "md",
  horizontal = false,
}: SpacerProps) {
  const { theme } = useTheme();

  return (
    <View
      style={
        horizontal
          ? { width: theme.space[size] }
          : { height: theme.space[size] }
      }
    />
  );
}
