import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  ViewProps,
  TextProps,
  Platform,
} from "react-native";
import { Copy, Check } from "lucide-react-native";
import { useTheme } from "../../theme/useTheme";
import { copyToClipboard } from "../../utils/clipboard";

interface CodeProps extends ViewProps {
  children: string | number;
  textStyle?: TextProps["style"];
}

export function Code({
  children,
  style,
  textStyle,
  ...rest
}: CodeProps) {
  const { theme, colors } = useTheme();
  const [copied, setCopied] = useState(false);

  const fontSize = theme.typography.fontSize.sm;
  const lineHeight =
    theme.typography.lineHeight.normal * fontSize;

  const CONTAINER_HEIGHT = 40;
  const ICON_SIZE = 14;

  async function handleCopy() {
    await copyToClipboard(String(children));
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <View
      {...rest}
      style={[
        {
          minWidth: 0,
          minHeight: CONTAINER_HEIGHT,

          position: "relative",
          borderWidth: 1,
          borderRadius: theme.radius.md,
          borderColor: colors.codeBorder,
          backgroundColor: colors.codeBg,

          flexDirection: "row",
          alignItems: "flex-start",
          paddingHorizontal: theme.space.md,
          paddingRight: 40,
        },
        style,
      ]}
    >
      {/* COPY BUTTON */}
      <Pressable
        onPress={handleCopy}
        hitSlop={8}
        android_ripple={{ color: colors.codeBorder }}
        style={({ pressed }) => ({
          position: "absolute",
          right: (40 - ICON_SIZE) / 2,
          top: (CONTAINER_HEIGHT - ICON_SIZE) / 2,
          height: ICON_SIZE,
          width: ICON_SIZE,
          borderRadius: theme.radius.sm,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            pressed && Platform.OS !== "android"
              ? colors.codeBorder
              : "transparent",
        })}
      >
        {copied ? (
          <Check size={ICON_SIZE} color={colors.codeText} />
        ) : (
          <Copy size={ICON_SIZE} color={colors.codeText} />
        )}
      </Pressable>

      {/* CODE TEXT */}
      <Text
        style={[
          {
            minWidth: 0,
            flexShrink: 1,
            paddingVertical: (CONTAINER_HEIGHT - lineHeight) / 2,
            color: colors.codeText,
            fontFamily: theme.typography.fontFamily.mono,
            fontSize,
            lineHeight,
            flexWrap: "wrap",
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}
