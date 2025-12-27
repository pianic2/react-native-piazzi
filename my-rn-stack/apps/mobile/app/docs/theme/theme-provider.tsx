import React from "react";
import { Column, Heading, P, B, TextGroup, Divider, Card, Code, CodeInline, Button, Row, Link } from "ui";

export default function ThemeProviderDocs() {
  return (
    <Column>
      {/* ===============================
          INTRO
      =============================== */}
      <TextGroup>
        <Heading level={1}>ThemeProvider</Heading>
        <P>
          Il <CodeInline>ThemeProvider</CodeInline> è il cuore del sistema di theming.
          Gestisce stato, persistenza e distribuzione del tema.
        </P>
      </TextGroup>


      {/* ===============================
          RESPONSABILITÀ
      =============================== */}
      <TextGroup>
        <Heading level={2}>Responsabilità</Heading>

        <Button
          variant="ghost"
          disabled
          label="Caricare la modalità salvata (light / dark)"
        />
        <Button
          variant="ghost"
          disabled
          label="Creare il tema runtime"
        />
        <Button
          variant="ghost"
          disabled
          label="Fornire il contesto ai componenti"
        />
      </TextGroup>

      {/* ===============================
          Parametri
      =============================== */}
      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <P>I parametri del ThemeProvider sono definiti in <CodeInline><CodeInline/> </P>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">initialMode</CodeInline></Row>
          <P><B>modalità iniziale</B> (light o dark)</P>
        </Row>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">{"withSafeArea"}</CodeInline></Row>
          <P><B>gestisce safe-area</B> nativamente</P>
        </Row>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">{"withSafeArea"}</CodeInline></Row>
          <P><B>gestisce safe-area</B> nativamente</P>
        </Row>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">{"withScroll"}</CodeInline></Row>
          <P><B>abilita/disabilita ScrollView </B> globale</P>
        </Row>
      </TextGroup>


      <TextGroup>
        <Heading level={2}>Utilizzo</Heading>
        <P>Racchiudi la tua app con il <CodeInline>ThemeProvider</CodeInline> per iniziare ad utilizzare tutti i componenti e le funzioni della libreria.</P>
        <Code>{`// _layout.tsx, App.tsx

import { ThemeProvider } from "ui";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`}</Code>
      </TextGroup>

      <Row justify="flex-end">
        <Link href="/docs/theme/use-theme" variant="button" size="lg">useTheme</Link>
      </Row>
    </Column>
  );
}
