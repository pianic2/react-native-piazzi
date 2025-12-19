// ui/components/typography/Small.tsx

import { Text } from "./Text";
import { TextProps } from "react-native";

export function Small(props: TextProps) {
  return <Text size="sm" variant="muted" {...props} />;
}
