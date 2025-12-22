// ui/components/layout/Spacer.tsx

import React from "react";
import { View } from "react-native";
import { useTheme } from "../../theme/useTheme";

type SpaceKey = keyof ReturnType<typeof useTheme>["theme"]["space"];

interface SpacerProps {
  spacing?: SpaceKey;
  horizontal?: boolean;
}

export function Spacer({
  spacing = "md",
  horizontal = false,
}: SpacerProps) {
  const { theme } = useTheme();

  return (
    <View
      style={
        horizontal
          ? { width: theme.space[spacing] }
          : { height: theme.space[spacing] }
      }
    />
  );
}
