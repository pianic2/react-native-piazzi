import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, CodeInline } from "ui";

export default function UseThemeDocs() {
  return (
    <Column style={{ padding: 30 }}>
      <TextGroup>
        <Heading level={1}>useTheme</Heading>
        <P>
          Hook di accesso al contesto del tema.
          È l’unico modo corretto per leggere colori e token runtime.
        </P>
      </TextGroup>

        <TextGroup>
          <Heading level={3}>Utilizzo</Heading>
          <Code>{`import { ThemeProvider, useTheme } from "ui";

export default function RootLayout() {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`}</Code>
        </TextGroup>

      <TextGroup>
        <Heading level={3}>Cosa espone</Heading>
        <P>• <CodeInline>theme</CodeInline>: tema risolto</P>
        <P>• <CodeInline>mode</CodeInline>: <CodeInline>light</CodeInline> | <CodeInline>dark</CodeInline></P>
        <P>• <CodeInline>toggleTheme</CodeInline> / setMode</P>
      </TextGroup>

      <Card>
        <TextGroup>
          <Heading level={3}>Regola</Heading>
          <P>
            Se un componente usa colori o spacing, deve usare <Code>useTheme</Code>.
          </P>
        </TextGroup>
      </Card>
    </Column>
  );
}
