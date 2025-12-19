// ui/components/surfaces/Card.tsx

import React from "react";
import { ViewProps } from "react-native";
import { Box } from "../layout/Box";
import { useTheme } from "../../theme/useTheme";

type Variant = "flat" | "elevated";

interface CardProps extends ViewProps {
  variant?: Variant;
  padding?: keyof ReturnType<typeof useTheme>["theme"]["space"];
}

export function Card({
  variant = "flat",
  padding,
  style,
  children,
  ...rest
}: CardProps) {
  const { theme } = useTheme();

  return (
    <Box
      {...rest}
      bg="surface"
      padding={padding ?? "lg"}
      radius="lg"
      shadow={
        variant === "elevated"
          ? "sm"
          : undefined
      }
      style={style}
    >
      {children}
    </Box>
  );
}
