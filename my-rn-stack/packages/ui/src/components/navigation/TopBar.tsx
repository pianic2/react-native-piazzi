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
        position: "fixed",
        top: 0,
        width: "100vw",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingHorizontal: theme.space.xl,
        paddingVertical: theme.space.lg,
      }}
    >
      <Row justify="space-between" align="center" wrap={false}>
        {/* LEFT */}
        { logo ? <Row gap="md">{logo}{title ? <Text weight="bold" size="xl">{title}</Text> : null}{leftSlot}</Row> : <Text>a</Text>}

        {/* CENTER */}
        <Box gap="lg" style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          {centerSlot ? (
            centerSlot
          ) : (
            items.map((it) => {
              const active = pathname === it.href;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  underline={false}
                  activeStyle={{ fontWeight: "700", color: colors.primary }}
                  style={{ flex: 1, alignSelf:"center", color: active ? colors.primary : colors.textSecondary, width: 80, textAlign: "center", fontSize: theme.typography.fontSize.lg }}
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
