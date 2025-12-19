// src/tokens/spacing.base.ts

export const spacing = {
  0: 0,
  5: 5,
  8: 8,
  12: 12,
  20: 20,
  30: 30,
  80: 80,
} as const;

export type Spacing = keyof typeof spacing;

// Alias semantici (consigliati nei componenti)
export const space = {
  xs: spacing[0],
  sm: spacing[5],
  md: spacing[8],
  lg: spacing[20],
  xl: spacing[30],
  xxl: spacing[80],
} as const;
