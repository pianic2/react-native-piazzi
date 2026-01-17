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
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>Card</Heading>
        <P>
          Il componente <CodeInline>Card</CodeInline> è un contenitore flessibile che consente di raggruppare e presentare informazioni correlate in modo visivamente accattivante.{" "}
        </P>
      </TextGroup>

      {/* =====================================================
          PARAMETRI
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          {/* bgColor */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">bgColor</CodeInline></Row>
            <P>
              <B>Colore di sfondo:</B>{" "}
              Imposta il colore di sfondo del Box.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/colors">token di colore</Link> definiti nel tema.
            </P>
          </Row>

          {/* radius */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">radius</CodeInline></Row>
            <P>
              <B>Raggio:</B>{" "}
              Imposta il raggio del bordo del Box.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/spacing">token di spaziatura</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline>.
            </P>
          </Row>

          {/* margin */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">margin</CodeInline></Row>
            <P>
              <B>Margine:</B>{" "}
              Imposta lo spazio esterno del Box.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/spacing">token di spaziatura</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">padding</CodeInline></Row>
            <P>
              <B>Padding:</B>{" "}
              Imposta lo spazio interno del Box.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/spacing">token di spaziatura</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">shadow</CodeInline></Row>
            <P>
              <B>Ombra:</B>{" "}
              Imposta l'ombra del Box per creare un effetto di profondità.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/shadows">token di ombra</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>.
            </P>
          </Row>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">variant</CodeInline></Row>
            <P>
              <B>Variante:</B>{" "}
              Definisce lo stile della Card. Le varianti disponibili sono:{" "}
              <CodeInline>default</CodeInline>, <CodeInline>elevated</CodeInline>, <CodeInline>outline</CodeInline>.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>

      <TextGroup>

        <Heading level={2}>API di base</Heading>
        <Code>{`<Card
  margin="none"
  padding="sm"
  radius={14}
  bgColor="secondary"
  shadow="md"
  variant="default"
>
  Contenuto della Card
</Card>`}</Code>
        <Card
          margin="none"
          padding="sm"
          radius={14}
          bgColor={theme.colors.secondary}
          shadow="md"
          variant="default"
        >
          Contenuto della Card
        </Card>
      </TextGroup>

      <Row justify="flex-end">
        <Link href="/docs/components/surfaces/Badge" variant="button" size="lg">Badge</Link>
      </Row>
    </Column>
  );
}
