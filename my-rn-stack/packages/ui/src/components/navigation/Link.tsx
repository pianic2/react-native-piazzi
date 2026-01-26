import React from "react";
import {
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
  Platform,
  Linking,
} from "react-native";
import { useTheme } from "../../theme/useTheme";
import { useOptionalNav } from "./NavContext";

type LinkVariant = "text" | "button";
type LinkSize = "sm" | "md" | "lg";

export interface LinkProps {
  href: string;
  children: React.ReactNode;

  variant?: LinkVariant;
  size?: LinkSize;
  underline?: boolean;

  containerStyle?: ViewStyle | ViewStyle[];
  style?: TextStyle | TextStyle[];

  activeStyle?: TextStyle | TextStyle[];
  activeContainerStyle?: ViewStyle | ViewStyle[];
  exact?: boolean;

  onPress?: () => void;
}

export function Link({
  href,
  children,
  variant = "text",
  size = "md",
  underline = false,
  containerStyle,
  style,
  activeStyle,
  activeContainerStyle,
  exact = true,
  onPress,
}: LinkProps) {
  const { theme, colors } = useTheme();
  const nav = useOptionalNav();

  const pathname = nav?.pathname;
  const isActive = pathname
    ? exact
      ? pathname === href
      : pathname.startsWith(href)
    : false;

  const heightMap = { sm: 32, md: 40, lg: 48 };
  const paddingXMap = {
    sm: theme.space.sm,
    md: theme.space.md,
    lg: theme.space.lg,
  };

  function doNavigate() {
    // 1) Se l’app ha fornito NavProvider, usalo sempre
    if (nav?.navigate) return nav.navigate(href);

    // 2) Link esterni (sempre safe)
    if (/^https?:\/\//i.test(href)) {
      if (Platform.OS === "web") {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }
      Linking.openURL(href);
      return;
    }

    // 3) Fallback web per link interni (senza router)
    if (Platform.OS === "web") {
      window.location.assign(href);
      return;
    }

    // 4) Native senza NavProvider: non possiamo navigare
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.warn(
        `[ui/Link] Nessun NavProvider trovato: impossibile navigare verso "${href}" su native.`
      );
    }
  }

  return (
    <Pressable
      onPress={() => {
        onPress?.();
        doNavigate();
      }}
      style={({ pressed }) => [
        variant === "button" && {
          minHeight: heightMap[size],
          paddingHorizontal: paddingXMap[size],
          borderRadius: theme.radius.md,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.primary,
          opacity: pressed ? 0.85 : 1,
        },
        variant === "text" && pressed && { opacity: 0.7 },
        containerStyle,
        isActive && activeContainerStyle,
      ]}
    >
      <Text
        style={[
          variant === "button"
            ? {
                color: colors.textInverted,
                fontSize: theme.typography.fontSize[size],
                fontWeight: "600",
              }
            : {
                color: colors.primary,
                textDecorationLine: underline ? "underline" : "none",
              },
          style,
          isActive && activeStyle,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}
