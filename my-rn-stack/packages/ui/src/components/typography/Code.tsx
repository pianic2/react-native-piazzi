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
          flex: 1,          // 🔑 fondamentale
          minWidth: 0,      // 🔑 evita overflow in row

          position: "relative",
          minHeight: 40, // 🔒 contratto con Button md
          borderWidth: 1,
          borderRadius: theme.radius.md,
          borderColor: colors.codeBorder,
          backgroundColor: colors.codeBg,

          flexDirection: "row",
          alignItems: "center", // 🔑 allineamento verticale
          justifyContent: "center",
          paddingHorizontal: theme.space.md,
          paddingRight: 40, // spazio riservato al copy button
          flexWrap: "wrap",
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
          right: (40 - theme.typography.lineHeight.normal * theme.typography.fontSize.sm) / 2,
          top: (40 - theme.typography.lineHeight.normal * theme.typography.fontSize.sm) / 2,
          height: theme.typography.fontSize.md,
          width: theme.typography.fontSize.md,
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
          <Check size={14} color={colors.codeText} />
        ) : (
          <Copy size={14} color={colors.codeText} />
        )}
      </Pressable>

      {/* CODE TEXT */}
      <Text
        style={[
          {
            flex: 1,          // 🔑 fondamentale
            minWidth: 0,      // 🔑 evita overflow in row
            flexShrink: 1,
            padding: (40 - theme.typography.lineHeight.normal * theme.typography.fontSize.sm) / 2,
            color: colors.codeText,
            fontFamily: theme.typography.fontFamily.mono,
            fontSize: theme.typography.fontSize.sm,
            lineHeight: theme.typography.lineHeight.normal * theme.typography.fontSize.sm,
            flexWrap: "wrap",
            alignSelf: "center",
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}
