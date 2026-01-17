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
  TextGroup,
  Link,
  CodeInline,
  Code,
  useTheme,
  Text,
  Box,

} from "ui";

import { Dimensions } from 'react-native';

export default function TextDocs() {
  const { theme } = useTheme();

  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Box</Heading>
        <P>
          Il componente <CodeInline>Box</CodeInline> è un componente contenitore versatile che consente di applicare stili, spaziature e layout agli elementi figli.{" "}
          Equivalente a un <CodeInline>div</CodeInline> in HTML.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Parametri</Heading>

        <TextGroup>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">margin</CodeInline></Row>
            <P>
              <B>Margine:</B>{" "}
              Imposta lo spazio esterno intorno al Box.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/spacing">token di spaziatura</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>border</CodeInline></Row>
            <P>
              <B>Bordo:</B>{" "}
              Se impostato su <CodeInline>true</CodeInline>, aggiunge un bordo attorno al Box utilizzando il colore del bordo definito nel tema.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>radius</CodeInline></Row>
            <P>
              <B>Raggio del bordo:</B>{" "}
              Imposta l'angolo arrotondato del Box. Può essere espresso utilizzando i <Link href="docs/tokens/radius">token di raggio</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>padding</CodeInline></Row>
            <P>
              <B>Padding:</B>{" "}
              Imposta lo spazio interno tra il contenuto del Box e i suoi bordi.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/spacing">token di spaziatura</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>bg</CodeInline></Row>
            <P>
              <B>Colore di sfondo:</B>{" "}
              Definisce il colore di sfondo del Box. Può essere un valore esadecimale, un nome di colore CSS o un riferimento a un <Link href="docs/tokens/colors">token di colore</Link> definito nel tema.
            </P>
          </Row>

          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>shadow</CodeInline></Row>
            <P>
              <B>Ombra:</B>{" "}
              Aggiunge un'ombra al Box per creare un effetto di profondità. Può essere espresso utilizzando i <Link href="docs/tokens/shadow">token di ombra</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>

      <TextGroup>

        <Heading level={2}>API di base</Heading>
        <Code>{`<Box
  margin="none"
  border={true}
  radius="md"
  padding="sm"
  bg="primary"
  shadow="md"
>
  Contenuto del Box
</Box>`}</Code>
        <Box
          margin="none"
          border={true}
          radius="md"
          padding="sm"
          bg="primary"
          shadow="md"
        >
          Contenuto del Box
        </Box>
      </TextGroup>

      <Row justify="space-between">
        <Link href="/docs/components/layout" variant="button">Layout</Link>
        <Link href="/docs/components/layout/ColumnRow" variant="button">Colonne e Righe</Link>
      </Row>
    </Column>
  );
}
