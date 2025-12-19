import React from "react";
import { ScrollView } from "react-native";

// UI – esclusivamente dalla tua libreria
import {
  Column,
  Row,
  Page,
  Card,
  Heading,
  P,
  B,
  Quote,
  Small,
  TextGroup,
  Divider,
  Button,
  Link,
  CodeInline,
  Box,
  Code,
  useTheme,
  useNavLogo
} from "ui";

import {Dimensions} from 'react-native';

export default function Index() {
  const { theme } = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
      <Page>

        {/* ===============================
            HERO
        =============================== */}
        <TextGroup>
          <Heading level={1}>Benvenuto in UI Library!</Heading>

          <Heading level={5} align="justify">
            Una UI cross-platform pensata per React Native, Expo e Web.
            Inizia aggiungendo la libreria alla tua app ed inizia a programmare!
          </Heading>

          <Row>
            <Code>npm install ui</Code>
            <Link href="/docs" variant="button">
              Read Docs
            </Link>
          </Row>

        </TextGroup>

              <TextGroup>
                <Heading level={2}>Filosofia</Heading>
                <P>
                  Il nostro slogan è
                </P>
                <Quote>Ready to Paste</Quote>
                <P>Se un componente richiede spiegazioni verbali per essere usato, è considerato incompleto.</P>
                <P>
                  Questa libreria non è una semplice raccolta di componenti.
                  È un design system operativo, basato su questi principi:
                </P>

                <TextGroup spacing={theme.space.sm}>
                  <B>• token centralizzati</B>
                  <B>• API esplicite</B>
                  <B>• zero comportamento “magico”</B>
                  <B>• composizione sopra la configurazione</B>
                  <B>• layout coerente per default</B>
                </TextGroup>
              </TextGroup>


      <TextGroup>
        <Heading level={2}>Getting Started</Heading>

        <P>
          Installa la libreria.
        </P>
        <Code>{`npm install ui`}</Code>
        <P>
          Inizia racchiudendo i tuoi <CodeInline>Slot</CodeInline>{" "}
          all'interno di <CodeInline>ThemeProvider</CodeInline>:{" "}
          da adesso potrai utilizzare il <CodeInline>ThemeContext</CodeInline>{" "}
          della libreria.
        </P>

        <Code>{`app/_layout.tsx

  import { React } from "react";
  import { Slot } from "expo-router";

  import { ThemeProvider } from "ui";

  export default function RootLayout() {

  return (
    <ThemeProvider>

      {/* Contenuto delle route */}
      <Slot />
    </ThemeProvider>
  );
  }`}</Code>
        <P>

        </P>

        <Row>
          <Link href="/getting-started" variant="button">
            Getting Started
          </Link>
        </Row>

      </TextGroup>

      <TextGroup>
        <Heading level={2}>Componenti</Heading>
        <P>
        Per ogni componente troverai un <B>DOC</B> contente spiegazioni ed esempi.{" "}
        I componenti sono raggruppati a gruppi:
        </P>
        <TextGroup>
          <Link href="docs/components/typography" variant="button">Tipografia</Link>
          <Link href="docs/components/layout" variant="button">Layout</Link>
          <Link href="docs/components/surfaces" variant="button">Superfici</Link>
          <Link href="docs/components/overview" variant="button">Sovrapposizione</Link>
          <Link href="docs/components/navigation" variant="button">Navigazione</Link>
          <Link href="docs/components/feedback" variant="button">Feedback</Link>
          <Link href="docs/components/form" variant="button">Form</Link>
        </TextGroup>
      </TextGroup>
    </Page>
  );
}
