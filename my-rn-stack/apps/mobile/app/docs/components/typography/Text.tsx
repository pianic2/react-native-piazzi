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

export default function TextDocs() {
  const { theme } = useTheme();

  return (
    <Page>
      <Column>
        <TextGroup>
          <Heading level={1}>Componente Text</Heading>
          <P>
            Il componente <CodeInline>Text</CodeInline> è un componente di base per la visualizzazione di testo con stili personalizzabili.
          </P> 
          </TextGroup>
      </Column>
    </Page>
  );
}
