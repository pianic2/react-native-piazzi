import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code } from "ui";

export default function ThemeTypesDocs() {
  return (
    <Column style={{ padding: 30 }}>
      <TextGroup>
        <Heading level={1}>Theme Types</Heading>
        <P>
          Questo file definisce i tipi fondamentali del sistema di theming.
        </P>
      </TextGroup>

      <Divider />

      <Card>
        <TextGroup>
          <Heading level={3}>ThemeMode</Heading>
          <Code>{`type ThemeMode = "light" | "dark"`}</Code>
        </TextGroup>
      </Card>

      <Card>
        <TextGroup>
          <Heading level={3}>Perché è separato</Heading>
          <P>
            I tipi sono condivisi tra Provider, storage e factory
            senza creare dipendenze cicliche.
          </P>
        </TextGroup>
      </Card>
    </Column>
  );
}
