import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
} from "react-native";
import { useTheme } from "../../theme/useTheme";
import { Link } from "./Link";

export interface TopBarItem {
  label?: string;
  href?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

export interface TopBarProps {
  title?: string;
  logo?: React.ReactNode; 
  items?: TopBarItem[];
  right?: TopBarItem[];
  left?: TopBarItem[];
  style?: ViewStyle;
  titleStyle?: TextStyle;
  height?: number;
}

/**
 * TopBar esclusiva per Web.
 */
export function TopBar({
  title,
  logo,
  items = [],
  right = [],
  left = [],
  style,
  titleStyle,
  height = 60,
}: TopBarProps) {
  const { colors } = useTheme();

  if (Platform.OS !== "web") return null;

  return (
    <View
      style={[
        styles.container,
        {
          height,
          backgroundColor: colors.navBg ?? colors.cardBg,
          borderColor: colors.navBorder ?? colors.cardBorder,
        },
        style,
      ]}
    >
      {/* LEFT (logo + left items) */}
      <View style={styles.left}>
        {logo}
        
        {left.map((item, idx) => (
          <WebNavItem key={`left-${idx}`} {...item} />
        ))}

        {title && (
          <Text
            numberOfLines={1}
            style={[
              styles.title,
              { color: colors.text },
              titleStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </View>

      {/* CENTER NAVIGATION */}
      <View style={styles.center}>
        {items.map((item, idx) => (
          <WebNavItem key={`center-${idx}`} {...item} />
        ))}
      </View>

      {/* RIGHT ACTIONS */}
      <View style={styles.right}>
        {right.map((item, idx) => (
          <WebNavItem key={`right-${idx}`} {...item} />
        ))}
      </View>

    </View>
  );
}

function WebNavItem({ label, href, onPress, icon }: TopBarItem) {
  const { colors } = useTheme();

  // LINK (href) ha priorità su onPress
  if (href) {
    return (
      <Link
        href={href}
        underline={false}
        style={{
          color: colors.text,
          fontSize: 15,
          marginHorizontal: 12,
        }}
      >
        {label || icon}
      </Link>
    );
  }

  // BUTTON (NO href)
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.item,
        { opacity: pressed ? 0.6 : 1 },
      ]}
    >
      {icon}
      {label && (
        <Text style={[styles.label, { color: colors.text }]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

/* STYLES -------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    top: 0,
    zIndex: 999,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 120,
  },

  center: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 120,
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },

  label: {
    fontSize: 15,
    marginLeft: 6,
  },
});
