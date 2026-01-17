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

} from "ui";

import { Dimensions } from 'react-native';

export default function TextDocs() {
  const { theme } = useTheme();

  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Text</Heading>
        <P>
          Il componente <CodeInline>Text</CodeInline> è un componente di base per la visualizzazione di testo con stili personalizzabili.{" "}
          <CodeInline>Text</CodeInline> è il componente più basso livello delsistema tipografico.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">size</CodeInline></Row>
            <P>
              <B>Dimensione del font:</B>{" "}
              recupera dai <Link href="docs/tokens/typography">token tipografici</Link>{" "}
              (<CodeInline>theme.typography.fontSize</CodeInline>){" "}
              la dimensione del carattere. Le opzioni disponibili sono:{" "}
              <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline> e <CodeInline>xxxl</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>weight</CodeInline></Row>
            <P>
              <B>Spessore dei caratteri:</B>{" "}
              recupera dai <Link href="docs/tokens/typography">token tipografici</Link>{" "}
              (<CodeInline>theme.typography.fontWeight</CodeInline>){" "}
              lo spessore del carattere. Le opzioni disponibili sono:{" "}
              <CodeInline>regular</CodeInline>, <CodeInline>medium</CodeInline>, <CodeInline>semibold</CodeInline> e <CodeInline>bold</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>lineHeight</CodeInline></Row>
            <P>
              <B>Line height coerente:</B>{" "}
              recupera dai <Link href="docs/tokens/typography">token tipografici</Link>{" "}
              (<CodeInline>theme.typography.lineHeight</CodeInline>){" "}
              il valore della line height. Le opzioni disponibili sono:{" "}
              <CodeInline>tight</CodeInline>, <CodeInline>normal</CodeInline> e <CodeInline>relaxed</CodeInline>.
              Il valore della line height viene moltiplicato per la dimensione del font selezionata.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>variant</CodeInline></Row>
            <P>
              <B>Varianti del testo:</B>{" "}
              determina il colore semantico del testo. Le opzioni disponibili sono:{" "}
              <CodeInline>default</CodeInline>, <CodeInline>muted</CodeInline>, <CodeInline>danger</CodeInline> e <CodeInline>success</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>align</CodeInline></Row>
            <P>
              <B>Allineamento del testo:</B>{" "}
              determina l'allineamento del testo. Le opzioni disponibili sono recuperate di default dalla proprietà <CodeInline>textAlign</CodeInline>:{" "}
              <CodeInline>left</CodeInline>, <CodeInline>center</CodeInline>, <CodeInline>right</CodeInline> e <CodeInline>justify</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline>truncate</CodeInline></Row>
            <P>
              <B>Troncamento del testo:</B>{" "}
              determina se il testo viene troncato quando supera lo spazio disponibile. Le opzioni disponibili sono:{" "}
              <CodeInline>true</CodeInline> e <CodeInline>false</CodeInline>.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>
      <TextGroup>

        <Heading level={2}>API di base</Heading>
        <Code>{`<Text
  size="md"
  weight="regular"
  variant="default"
  align="justify"
  truncate={false}
>
  Contenuto testuale
</Text>`}</Code>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Esempio di utilizzo</Heading>

        <TextGroup>
          <Code style={{ flex: 1, minWidth: 0 }}>
            {`<Text size="xs" weight="regular">
  Lorem Ipsum is simply dummy text.
</Text>`}
          </Code>

          <Text
            size="xs"
            weight="regular"
            style={{ flex: 1, minWidth: 0 }}
          >
            Lorem Ipsum is simply dummy text.
          </Text>
        </TextGroup>

        <TextGroup>
          <Code style={{ flex: 1, minWidth: 0 }}>
            {`<Text size="lg" weight="bold" align="center" >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</Text>`}
          </Code>

          <Text
            size="lg"
            weight="bold"
            align="center"
            style={{ flex: 1, minWidth: 0 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </TextGroup>

        <TextGroup>
          <Code style={{ flex: 1, minWidth: 0 }}>
            {`<Text size="md" weight="medium" variant="danger" truncate={true} >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
</Text>`}
          </Code>

          <Text
            size="md"
            weight="medium"
            variant="danger"
            truncate={true}
            style={{ flex: 1, minWidth: 0 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Text>
        </TextGroup>
      </TextGroup>

      <Row><Link href="/docs" variant="button">Documentazione</Link></Row>
    </Column>
  );
}
