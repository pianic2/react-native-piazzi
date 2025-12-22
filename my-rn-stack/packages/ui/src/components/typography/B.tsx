// ui/components/typography/B.tsx

import { Text } from "./Text";
import type { ComponentProps } from "react";

type PProps = ComponentProps<typeof Text>;

export function B(props: PProps) {
  return <Text weight="bold" {...props} />;
}
