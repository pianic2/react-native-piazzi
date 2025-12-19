// ui/utils/safeArea.ts

import { EdgeInsets } from "react-native-safe-area-context";

export function withSafeAreaPadding(
  insets: EdgeInsets,
  options?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  }
) {
  return {
    paddingTop: options?.top ? insets.top : 0,
    paddingBottom: options?.bottom ? insets.bottom : 0,
    paddingLeft: options?.left ? insets.left : 0,
    paddingRight: options?.right ? insets.right : 0,
  };
}
