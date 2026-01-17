// ui/components/navigation/BottomBar.tsx

import React from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "../../theme/useTheme";
import { Text } from "../typography/Text";
import { useNav } from "./NavContext";

export function BottomBar({ maxItems = 5 }: { maxItems?: 3 | 4 | 5 }) {
  const { colors, theme } = useTheme();
  const insets = useSafeAreaInsets();

  const { items, pathname, navigate } = useNav();
  const visibleItems = items.slice(0, maxItems);

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,

        borderTopWidth: 1,
        borderTopColor: colors.border,
        backgroundColor: colors.surface,

        flexDirection: "row",
        justifyContent: "space-around",

        paddingTop: theme.space.xs,
        paddingBottom: theme.space.xs,

        // layering (se hai zIndex tokens, usa quelli)
        zIndex: theme.zIndex?.sticky ?? 100,
        height: 60,
      }}
    >
      {visibleItems.map((it) => {
        const active = pathname === it.href;
        const IconNode = active ? it.activeIcon ?? it.icon : it.icon;

        return (
          <Pressable
            key={it.href}
            onPress={() => navigate(it.href)}
            style={({ pressed }) => ({
              alignItems: "center",
              justifyContent: "center",
              minWidth: 64,
              opacity: pressed ? 0.7 : 1,
              paddingVertical: theme.space.xs,
            })}
          >
            {IconNode}

            <Text
              size="sm"
              weight={active ? "bold" : "medium"}
              variant={active ? "default" : "muted"}
              style={{ marginTop: 4 }}
            >
              {it.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
