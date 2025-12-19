import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, Link, Row } from "ui";

export default function ColorsDocs() {
  return (
    <Column style={{ padding: 30 }}>
      <TextGroup>
        <Heading level={1}>Colors</Heading>
        <P>
          I token di colore definiscono il linguaggio visivo della UI.
          I componenti non usano mai colori diretti, ma solo token semantici.
        </P>
        <Divider />
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Struttura</Heading>
        <P>
          I colori sono organizzati per ruolo:
          di seguito sono riportati tutti i tokens che la libreria mette a disposizione.
        </P>
        <Code>{`export const lightColors = {
  primary: "#5B7CFF",
  primaryHover: "#4A6BEE",
  primaryActive: "#3A5ADD",

  secondary: "#FF9F43",
  secondaryHover: "#F08E32",
  secondaryActive: "#E07E22",

  accent: "#22C55E",

  success: "#16A34A",
  warning: "#F59E0B",
  error: "#DC2626",
  info: "#2563EB",

  background: "#FFFFFF",
  surface: "#F8F9FB",
  surfaceElevated: "#FFFFFF",

  textPrimary: "#0F172A",
  textSecondary: "#475569",
  textMuted: "#94A3B8",
  textInverted: "#FFFFFF",

  border: "#E2E8F0",
  divider: "#CBD5E1",
  outline: "#94A3B8",

  disabled: "#CBD5E1",
  disabledBg: "#F1F5F9",

  overlay: "rgba(15, 23, 42, 0.6)",
  backdrop: "rgba(0, 0, 0, 0.4)",
} as const;`}</Code>
      </TextGroup>

      <Row justify="flex-end">
        <Link href="/docs/tokens/radius" variant="button" size="lg">Radius</Link>
      </Row>
    </Column>
  );
}
