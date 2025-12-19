import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, Row, Link } from "ui";

export default function ZIndexDocs() {
  return (
    <Column style={{ padding: 30 }}>
      <TextGroup>
        <Heading level={1}>Z-Index</Heading>
        <P>
        Il sistema di z-index è globale e contrattuale.
                  Evita conflitti e bug invisibili.
        </P>
        <Code>{`// src/tokens/zIndex.base,ts

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  toast: 50,
  tooltip: 60,
} as const;

export type ZIndex = keyof typeof zIndex;
`}</Code>
      </TextGroup>
      <Row justify="space-between">
        <Link href="/docs/tokens/typography" variant="button" size="lg">Typography</Link>
        <Link href="/docs" variant="button" size="lg">Read Docs</Link>
      </Row>
    </Column>
  );
}
