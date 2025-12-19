import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, CodeInline } from "ui";

export default function ThemeProviderDocs() {
  return (
    <Column style={{ padding: 30 }}>
      <TextGroup>
        <Heading level={1}>ThemeProvider</Heading>
        <P>
          Il <CodeInline>ThemeProvider</CodeInline> è il cuore del sistema di theming.
          Gestisce stato, persistenza e distribuzione del tema.
        </P>
        <Divider />
      </TextGroup>


        <TextGroup>
          <Heading level={3}>Responsabilità</Heading>
          <P>• Caricare la modalità salvata (light / dark)</P>
          <P>• Creare il tema runtime</P>
          <P>• Fornire il contesto ai componenti</P>
        </TextGroup>

                <TextGroup>
                  <Heading level={3}>Opzioni</Heading>
                  <P>• withSafeArea: gestisce safe-area nativamente</P>
                  <P>• withScroll: abilita/disabilita ScrollView globale</P>
                </TextGroup>
                
        <TextGroup>
          <Heading level={3}>Example (_layout.tsx / App.tsx)</Heading>

          <Code>{`import { ThemeProvider } from "ui";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`}</Code>
        </TextGroup>

    </Column>
  );
}
