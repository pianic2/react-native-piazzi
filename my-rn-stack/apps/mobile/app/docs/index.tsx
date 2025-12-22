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
        <Heading level={2}>Documentazione</Heading>
        <P>Esplora la documentazione completa della libreria UI per scoprire tutti i componenti, i token di design e le funzionalità di theming disponibili.</P>
        <Link href="/docs/tokens" variant="button">Tokens</Link>
        <Link href="/docs/theme" variant="button">Theming</Link>
        <Link href="/docs/components/typography" variant="button">Tipografia</Link>
      </TextGroup>
    </Column>
  );
}
