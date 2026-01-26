// ui/components/navigation/TopBar.tsx

import React from "react";
import { Platform } from "react-native";
import { useTheme } from "../../theme/useTheme";
import { Row } from "../layout/Row";
import { Box } from "../layout/Box";
import { Text } from "../typography/Text";
import { Link } from "./Link";
import { useNavItems, useNavPathname, useNavLogo } from "./NavContext";

export interface TopBarProps {
  title?: string;

  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export function TopBar({ title, leftSlot, centerSlot, rightSlot }: TopBarProps) {
  if (Platform.OS !== "web") return null;

  const { colors, theme } = useTheme();
  const logo = useNavLogo();
  const items = useNavItems();
  const pathname = useNavPathname();

  return (
    <Box
      bg="surface"
      style={{
        position: "absolute",
        top: 0,
        borderBottomWidth: 1,
        width: '100%',
        borderBottomColor: colors.border,
        paddingHorizontal: theme.space.lg,
        paddingVertical: theme.space.lg,
      }}
    >
      <Row justify="space-between" align="center" wrap={false} style={{ height: 40 }}>
        {/* LEFT */}
        { logo ? <Row gap="md">{logo}{title ? <Text weight="bold" size="sm">{title}</Text> : null}{leftSlot}</Row> : <Text>a</Text>}

        {/* CENTER */}
        <Box style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          {centerSlot ? (
            centerSlot
          ) : (
            items.map((it) => {
              const active = pathname === it.href;
              return (
                <Link
                  href={it.href}
                  underline={false}
                  activeStyle={{ fontWeight: theme.typography.fontWeight.bold, color: colors.primary }}
                  style={{ flex: 1, alignSelf:"center", color: active ? colors.primary : colors.textSecondary, width: 90, textAlign: "center", fontSize: theme.typography.fontSize.lg }}
                >
                  {it.label}
                </Link>
              );
            })
          )}
        </Box>

        {/* RIGHT */}
        { rightSlot ? <Row align="center" gap="sm" style={{ justifyContent: "flex-end" }}>
          {rightSlot}
        </Row> : null }
      </Row>
    </Box>
  );
}
