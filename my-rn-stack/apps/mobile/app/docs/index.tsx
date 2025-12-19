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
    <Column style={{ padding: 30, gap: 0 }}>
        <TextGroup>
          <Heading level={2}>Documentazione</Heading>
          <Link href="/docs/tokens" variant="button">Tokens</Link>
          <Link href="/docs/theme" variant="button">Theming</Link>
          <Link href="/docs/components/typography" variant="button">Tipografia</Link>
        </TextGroup>
    </Column>
  );
}
