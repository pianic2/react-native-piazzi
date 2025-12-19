// ui/components/typography/P.tsx

import { Text } from "./Text";
import { TextProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

export function P({
  props: TextProps,
  style,
  children,
  ...rest
}) {
  const { theme } = useTheme();

  return (
    <Text
      {...rest}
      style={[
        style,
      ]}
    >
      {children}
    </Text>
  );
}
