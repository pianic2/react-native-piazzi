import React from "react";
import { Text, View, StyleSheet, ViewProps, TextProps } from "react-native";
import { useTheme } from "../theme/useTheme";

interface CodeProps extends ViewProps {
  children: React.ReactNode;
  textStyle?: TextProps["style"];
}

export function Code({ children, style, textStyle, ...rest }: CodeProps) {
  const { colors } = useTheme();

  return (
    <View
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor: colors.codeBg,
          borderColor: colors.codeBorder,
        },
        style,
      ]}
    >
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
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  text: {
    fontFamily: "monospace",
    fontSize: 14,
    lineHeight: 20,
  },
});
