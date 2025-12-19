// src/tokens/typography.base.ts

export const fontFamily = {
  regular: "System",
  mono: "monospace",
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 30,
  xxxl: 42,
} as const;

export const lineHeight = {
  tight: 1,
  normal: 1.1,
  relaxed: 1.3,
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const typography = {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} as const;
