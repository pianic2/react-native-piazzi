// ui/components/typography/P.tsx

import { Text } from "./Text";
import { TextProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

interface PProps extends TextProps {
  children?: React.ReactNode;
}

export function P({
  style,
  children,
  ...rest
}: PProps) {
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
