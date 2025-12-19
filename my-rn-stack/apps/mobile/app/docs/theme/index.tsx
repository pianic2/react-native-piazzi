import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Link } from "ui";

export default function ThemingIndex() {
  return (
    <Column style={{ padding: 30 }}>
      <TextGroup>
        <Heading level={1}>Theming</Heading>
        <P>
          Il sistema di theming è il layer che connette design tokens,
          preferenze utente e rendering dei componenti.
        </P>
        <P>
          È progettato per essere deterministico, persistente e scalabile
          su mobile e web.
        </P>
      </TextGroup>
      <TextGroup>
        <Heading level={2}>Theming</Heading>
        <Link href="/docs/theme/theme-provider" variant="button">ThemeProvider</Link>
        <Link href="/docs/theme/use-theme" variant="button">UseTheme</Link>
        <Link href="/docs/theme/default-theme" variant="button">Thema di default</Link>
      </TextGroup>
      <Card>
        <TextGroup>
          <Heading level={3}>Principi</Heading>
          <P>• Tema derivato da token, mai hardcoded</P>
          <P>• Modalità light / dark persistita</P>
          <P>• Un solo ThemeProvider a livello app</P>
        </TextGroup>
      </Card>
    </Column>
  );
}
