// src/theme/defaultTheme.ts

import { spacing, space } from "../tokens/spacing.base";
import { radius } from "../tokens/radius.base";
import { typography } from "../tokens/typography.base";
import { shadows } from "../tokens/shadows.base";
import { zIndex } from "../tokens/zIndex.base";
import { resolveColors } from "../tokens/colors.base";
import type { ThemeMode } from "./types";

export function createBaseTheme(mode: ThemeMode) {
  return {
    mode,
    colors: resolveColors(mode),

    spacing,
    space,
    radius,
    typography,
    shadows,
    zIndex,

    components: {
      button: {
        height: {
          sm: 36,
          md: 44,
          lg: 52,
        },
        radius: radius.md,
      },

      input: {
        height: 44,
        radius: radius.sm,
      },

      card: {
        radius: radius.lg,
        shadow: shadows.sm,
        padding: space.md,
      },
    },
  } as const;
}

export type Theme = ReturnType<typeof createBaseTheme>;
