// ui/components/typography/B.tsx

import { Text } from "./Text";
import { TextProps } from "react-native";

export function B(props: TextProps) {
  return <Text weight="bold" {...props} />;
}
