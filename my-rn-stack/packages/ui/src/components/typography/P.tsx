import React from "react";
import { Text } from "./Text";
import type { ComponentProps } from "react";

type PProps = ComponentProps<typeof Text>;

export function P(props: PProps) {
  console.log(props);
  
  return (
    <Text
      size="md"
      weight="regular"
      align="justify"
      {...props}
    />
  );
}
