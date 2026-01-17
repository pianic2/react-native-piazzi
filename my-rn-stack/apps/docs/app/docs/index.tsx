import React from "react";
import { ScrollView } from "react-native";


// UI – esclusivamente dalla tua libreria
import {
  Column,
  Row,
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
  useTheme
} from "ui";

export default function DocsIndex() {
  const { theme } = useTheme();

  return (
    <Column>

      <TextGroup>
        <Heading level={1}>Documentazione</Heading>
        <P>Esplora la documentazione completa della libreria UI per scoprire tutti i componenti, i token di design e le funzionalità di theming disponibili.</P>
      </TextGroup>

      <TextGroup>
        <Heading level={3}>Elenco delle Categorie:</Heading>
        <Link href="/docs/tokens" variant="button">Tokens</Link>
        <Link href="/docs/theme" variant="button">Theming</Link>
        <Link href="/docs/components/typography" variant="button">Tipografia</Link>
        <Link href="/docs/components/layout" variant="button">Layout</Link>
        <Link href="/docs/components/surfaces" variant="button">Superfici</Link>
        <Link href="/docs/components/feedback" variant="button">Feedback</Link>
        <Link href="/docs/components/navigation" variant="button">Navigazione</Link>
        <Link href="/docs/components/overlay" variant="button">Sovrapposizioni</Link>
        <Link href="/docs/components/form" variant="button">Form</Link>
      </TextGroup>

    </Column>
  );
}
