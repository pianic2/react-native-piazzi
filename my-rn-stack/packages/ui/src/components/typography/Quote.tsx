import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

interface QuoteProps extends ViewProps {
  children: React.ReactNode;
}

export function Quote({ children, style, ...rest }: QuoteProps) {
  const { colors } = useTheme();

  return (
    <View
      {...rest}
      style={[
        styles.container,
        {
          borderLeftColor: colors.primary?.bg ?? "#FF8A3D",
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: colors.text },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 4,
    paddingLeft: 12,
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontStyle: "italic",
  },
});
