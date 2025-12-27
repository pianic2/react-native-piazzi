import React from "react";
import { Column, Heading, Alert, P, Row, Link, TextGroup, Divider, Card, Code, CodeInline, Button, useTheme } from "ui";

export default function DefaultThemeDocs() {
  const { theme } = useTheme();
  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Tema di Default</Heading>
        <P>
          Il <CodeInline>defaultTheme</CodeInline> definisce la configurazione iniziale del design system.
          È costruito esclusivamente a partire dai token base.
        </P>
      </TextGroup>
      <TextGroup>
        <Heading level={2}>Struttura</Heading>
        <Code>{`{
  mode,
  colors: resolveColors(mode),

  spacing,
  space,
  radius,
  typography,
  shadows,
  zIndex,

  components: {
    button: {
      height: {
        sm: 36,
        md: 44,
        lg: 52,
      },
      radius: radius.md,
    },

    input: {
      height: 44,
      radius: radius.sm,
    },

    card: {
      radius: radius.lg,
      shadow: shadows.sm,
      padding: space.md,
    },
  },
}`}</Code>
      </TextGroup>

        <TextGroup>
          <Heading level={2}>Utilizzo</Heading>
          <Alert
            variant="warning"
            title="Attenzione!"
            message="Il tema non sarà risolto correttamente al di fuori del ThemeProvider"
          />
          <P>Importa <CodeInline>useTheme</CodeInline> e dichiara una funzione che utilizza il <CodeInline>ThemeContext</CodeInline>. Utilizza <CodeInline>theme</CodeInline> per accedere ai token del tema.</P>
          <Code>{`import { useTheme, P } from "ui";

function MyComponent() {
  const { theme } = useTheme();

  return (
    <P
      style={{
        backgroundColor: theme.colors.primary,
        padding: theme.space.sm
      }}
    />
  );
}`}</Code>
          <P style={{ backgroundColor: theme.colors.primary, padding: theme.space.sm }}>Lorem Ipsum</P>
        </TextGroup>

      <Row justify="flex-end">
        <Link href="/docs/theme/default-theme" variant="button" size="lg">Tema di Default</Link>
      </Row>
    </Column>
  );
}
