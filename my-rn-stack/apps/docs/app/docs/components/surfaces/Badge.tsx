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
  Badge

} from "ui";

import { Dimensions } from 'react-native';

export default function BadgeDocs() {
  const { theme } = useTheme();

  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Badge</Heading>
        <P>
          Il componente <CodeInline>Badge</CodeInline> è un piccolo indicatore visivo utilizzato per mostrare conteggi, stati o etichette.{" "}
          Viene spesso utilizzato in combinazione con altri componenti, come icone o pulsanti, per fornire informazioni aggiuntive all'utente.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">size</CodeInline></Row>  
            <P>
              <B>Dimensione del testo:</B>{" "}
              Imposta la dimensione del testo all'interno del Badge.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/typography">token di dimensione del font</Link> definiti nel tema.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">variant</CodeInline></Row>  
            <P>
              <B>Variante del badge:</B>{" "}
              Definisce lo stile visivo del Badge. Le varianti comuni includono <CodeInline>default</CodeInline>, <CodeInline>primary</CodeInline>, <CodeInline>success</CodeInline>, <CodeInline>alert</CodeInline> e <CodeInline>info</CodeInline>. Ogni variante applica colori e stili specifici per rappresentare diversi stati o significati.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>
      <TextGroup>

        <Heading level={2}>API di base</Heading>
        <P>
          
        </P>
        <Code>{`<Badge size="sm" variant="primary">Badge</Badge>`}</Code>
        <Row>
          <Badge size="sm" variant="primary">Badge</Badge>
        </Row>
      </TextGroup>

      <Row justify="space-between">
        <Link href="/docs/components/surfaces/Card" variant="button" size="lg">Card</Link>
        <Link href="/docs/components/surfaces" variant="button" size="lg">Superfici</Link>
      </Row>
    </Column>
  );
}
