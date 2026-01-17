import React from "react";
import { Text } from "./Text";
import type { ComponentProps } from "react";

type PProps = ComponentProps<typeof Text>;

export function Small(props: PProps) {
  
  return (
    <Text
      size="sm"
      variant="muted"
      {...props}
    />
  );
}