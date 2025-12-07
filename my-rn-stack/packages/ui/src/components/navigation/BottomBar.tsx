import React from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../theme/useTheme";

export interface BottomBarItem {
  icon?: React.ReactNode;
  label?: string;
  href?: string;
  onPress?: () => void;
}

export interface BottomBarProps {
  items: BottomBarItem[];
  style?: any;
}

export function BottomBar({ items, style }: BottomBarProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.navBg ?? colors.cardBg,
          borderColor: colors.navBorder ?? colors.cardBorder,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
    >
      {items.map((item, index) => (
        <Pressable
          key={index}
          onPress={item.onPress}
          style={({ pressed }) => [
            styles.item,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          {item.icon}
          {item.label && (
            <Text style={[styles.label, { color: colors.text }]}>
              {item.label}
            </Text>
          )}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});
