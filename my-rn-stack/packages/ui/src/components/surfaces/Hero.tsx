import React from "react";
import { View, ViewProps, useWindowDimensions } from "react-native";

interface HeroProps extends ViewProps {
  children: React.ReactNode;
}

export function Hero({ children, style, ...rest }: HeroProps) {
  const { height } = useWindowDimensions();
  const heroHeight = Math.round(height) - 80;

  return (
    <View
      {...rest}
      style={[
        {
          height: heroHeight,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
