import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, Row, Link } from "ui";

export default function SpacingDocs() {
  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Spacing</Heading>
        <P>
          I token di spacing definiscono padding, margin e gap.
          Eliminano i numeri magici e rendono i layout coerenti.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Struttura</Heading>
        <Code>{`// src/tokens/spacing.base.ts

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
`}</Code>
      </TextGroup>

      <Row justify="space-between">
        <Link href="/docs/tokens/shadow" variant="button" size="lg">Shadow</Link>
        <Link href="/docs/tokens/typography" variant="button" size="lg">Typography</Link>
      </Row>
    </Column>
  );
}
