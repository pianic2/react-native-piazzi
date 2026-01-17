import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, Row, Link } from "ui";

export default function TypographyDocs() {
  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Typography</Heading>
        <P>
          La tipografia è semantica.
          I componenti mappano direttamente i token tipografici.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Struttura</Heading>
        <Code>{`// src/tokens/typography.base.ts

export const fontFamily = {
  regular: "System",
  mono: "monospace",
} as const;

export const fontSize = {
  xs: 12,
  sm: 13,
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
`}</Code>
      </TextGroup>
      
      <Row justify="space-between">
        <Link href="/docs/tokens/spacing" variant="button" size="lg">Spacing</Link>
        <Link href="/docs/tokens/zIndex" variant="button" size="lg">Z-Index</Link>
      </Row>
    </Column>
  );
}
