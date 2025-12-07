import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ViewProps,
  TextProps,
  Pressable,
} from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { useTheme } from "../../theme/useTheme";

interface CodeProps extends ViewProps {
  children: React.ReactNode;
  textStyle?: TextProps["style"];
}

export function Code({ children, style, textStyle, ...rest }: CodeProps) {
  const { colors } = useTheme();
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (typeof children === "string") {
      Clipboard.setString(children);
    } else {
      Clipboard.setString("");
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <View
      {...rest}
      style={[
        styles.wrapper,
        {
          backgroundColor: colors.codeBg,
          borderColor: colors.codeBorder,
        },
        style,
      ]}
    >
      {/* COPY BUTTON */}
      <Pressable
        onPress={handleCopy}
        style={({ pressed }) => [
          styles.copyBtn,
          {
            backgroundColor: pressed
              ? colors.codeBorder
              : colors.codeBg,
          },
        ]}
      >
        <Text
          style={{
            color: colors.codeText,
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </Text>
      </Pressable>

      {/* CODE TEXT */}
      <Text
        style={[
          styles.text,
          { color: colors.codeText },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    position: "relative",
  },
  copyBtn: {
    position: "absolute",
    right: 8,
    top: 8,
    zIndex: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  text: {
    fontFamily: "monospace",
    fontSize: 14,
    lineHeight: 20,
  },
});
