// src/theme/types.ts

import type { Colors } from "../tokens/colors.base";
import type { spacing, space } from "../tokens/spacing.base";
import type { radius } from "../tokens/radius.base";
import type { typography } from "../tokens/typography.base";
import type { shadows } from "../tokens/shadows.base";
import type { zIndex } from "../tokens/zIndex.base";

export interface Theme {
  colors: Colors;

  spacing: typeof spacing;
  space: typeof space;

  radius: typeof radius;
  typography: typeof typography;
  shadows: typeof shadows;
  zIndex: typeof zIndex;

  components?: {
    button?: {
      height?: {
        sm?: number;
        md?: number;
        lg?: number;
      };
      radius?: number;
    };

    input?: {
      height?: number;
      radius?: number;
    };

    card?: {
      radius?: number;
      shadow?: any;
      padding?: number;
    };
  };
}

export type ThemeMode = "light" | "dark";
