// ui/components/layout/Page.tsx

import React from "react";
import {
  ScrollView,
  ScrollViewProps,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../theme/useTheme";

export interface PageProps extends ScrollViewProps {
  style?: StyleProp<ViewStyle>;
}

export function Page({ style, ...props }: PageProps) {
  const { theme } = useTheme();
  const isWeb = Platform.OS === "web";

  return (
    <ScrollView
      {...props}
      style={{ flex: 1 }}
      contentContainerStyle={[
        {
          paddingTop: isWeb ? 3 * theme.space.lg + 40 : theme.space.lg,
          paddingBottom: !isWeb ? 3 * theme.space.lg + 40 : theme.space.lg,
          paddingHorizontal: theme.space.lg,
        },
        style,
      ]}
      showsVerticalScrollIndicator={false}
    />
  );
}
