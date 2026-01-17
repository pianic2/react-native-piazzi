import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, Row, Link } from "ui";

export default function RadiusDocs() {
  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Radius</Heading>
        <P>
          I token di radius controllano la curvatura degli elementi.
          Comunicano il tono visivo della UI.
        </P>
      </TextGroup>
      <TextGroup>
        <Heading level={2}>Struttura</Heading>

        <Code>{`// src/tokens/radius.base.ts

export const radius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;`}</Code>
      </TextGroup>

      <Row justify="space-between">
        <Link href="/docs/tokens/colors" variant="button" size="lg">Colors</Link>
        <Link href="/docs/tokens/shadow" variant="button" size="lg">Shadow</Link>
      </Row>
    </Column>
  );
}
