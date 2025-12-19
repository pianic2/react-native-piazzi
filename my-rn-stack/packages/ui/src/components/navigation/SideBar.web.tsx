// ui/components/navigation/SideBar.web.tsx

import React, { useState } from "react";
import { Platform, Pressable, ScrollView, View } from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";
import { Text } from "../typography/Text";
import { Link } from "./Link";
import { useNavItems, useNavPathname } from "./NavContext";

export function SideBar({ width = 280 }: { width?: number }) {
  if (Platform.OS !== "web") return null;

  const { colors, theme } = useTheme();
  const items = useNavItems();
  const pathname = useNavPathname();
  const [collapsed, setCollapsed] = useState(false);

  const finalWidth = collapsed ? 72 : width;

  return (
    <View
      // @ts-ignore fixed ok on RN web
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: finalWidth,
        backgroundColor: colors.surface,
        borderRightWidth: 1,
        borderRightColor: colors.border,
        paddingTop: theme.space.md,
        zIndex: theme.zIndex.sticky,
      }}
    >
      <Pressable
        onPress={() => setCollapsed((v) => !v)}
        style={({ pressed }) => ({
          alignSelf: "flex-end",
          padding: theme.space.sm,
          opacity: pressed ? 0.7 : 1,
        })}
      >
        {collapsed ? (
          <ChevronRight size={18} color={colors.textSecondary} />
        ) : (
          <ChevronLeft size={18} color={colors.textSecondary} />
        )}
      </Pressable>

      <ScrollView contentContainerStyle={{ padding: theme.space.sm }}>
        {items.map((it) => {
          const active = pathname === it.href;

          return (
            <Link
              key={it.href}
              href={it.href}
              underline={false}
              containerStyle={{
                paddingVertical: theme.space.sm,
                paddingHorizontal: theme.space.sm,
                borderRadius: theme.radius.md,
                backgroundColor: active ? colors.disabledBg : "transparent",
                marginBottom: theme.space.xs,
              }}
              activeStyle={{ color: colors.primary, fontWeight: "700" }}
              style={{ color: colors.textPrimary }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {it.icon ? <View style={{ marginRight: collapsed ? 0 : theme.space.sm }}>{it.icon}</View> : null}
                {!collapsed ? <Text>{it.label}</Text> : null}
              </View>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default SideBar;
