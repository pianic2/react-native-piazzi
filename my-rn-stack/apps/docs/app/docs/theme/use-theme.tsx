import React from "react";
import { Column, Heading, P, Link, TextGroup, Divider, Card, Code, CodeInline, Row, useTheme } from "ui";

export default function UseThemeDocs() {
  const { colors } = useTheme();

  return (
    <Column>
      <TextGroup>
        <Heading level={1}>useTheme</Heading>
        <P>
          È il Hook di accesso al contesto del tema.
          È l’unico modo corretto per leggere i token runtime e cambiare modalità.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Utilizzo</Heading>
        <P>Importa il hook <CodeInline>useTheme</CodeInline> e utilizzalo all'interno dei componenti per accedere al <CodeInline>ThemeContext</CodeInline>.</P>
        <Code>{`import { P, useTheme } from "ui";

export default function RootLayout() {
  const { theme, mode, colors, toggleTheme } = useTheme();

  return (
      <P style={{ color: colors.primary }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </P>

  );
}`}</Code>
        <P style={{ color: colors.primary, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
      </TextGroup>

      {/* ===============================
          COSA ESPONE
      =============================== */}
      <TextGroup>
        <Heading level={2}>Cosa espone</Heading>
        <P>Di seguito sono riportati i token esposti dal contesto del tema:</P>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">{"theme"}</CodeInline></Row>
          <P>tema risolto</P>
        </Row>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">{"mode: light | dark"}</CodeInline></Row>
          <P>Modalità corrente</P>
        </Row>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">{"colors"}</CodeInline></Row>
          <P>Scorciatoia per i colori della libreria</P>
        </Row>
        <Row>
          <Row justify="flex-end" style={{ width: 220 }}><CodeInline size="sm" align="right">{"toggleTheme"}</CodeInline></Row>
          <P>Permette di cambiare tra <CodeInline>light</CodeInline> e <CodeInline>dark</CodeInline></P>
        </Row>
      </TextGroup>

      <Row justify="flex-end">
        <Link href="/docs/theme/default-theme" variant="button" size="lg">Tema di Default</Link>
      </Row>
    </Column>
  );
}
