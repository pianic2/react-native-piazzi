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
          Il componente <CodeInline>Text</CodeInline> è un componente di base per la visualizzazione di testo con stili personalizzabili.
          <CodeInline>Text</CodeInline> è il componente più basso livello delsistema tipografico.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm" align="right">size</CodeInline></Row>
            <P><B>font size</B> <Link href="docs/tokens/typography">(da token)</Link></P>
          </Row>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">weight</CodeInline></Row>
            <P><B>font weight</B> (da token)</P>
          </Row>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm" align="right">lineHeight</CodeInline></Row>
            <B>line height coerente</B>
          </Row>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">variant</CodeInline></Row>
            <P><B>colore semantico</B> (variant)</P></Row>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">align</CodeInline></Row>
            <B>allineamento</B>
          </Row>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">truncate</CodeInline></Row>
            <B>troncamento</B>
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
        <Row style={{ width: "100%" }} gap="md">
          <Code style={{ flex: 1, minWidth: 0 }}>
            {`<Text
  size="xs"
  weight="regular"
>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</Text>`}
          </Code>

          <Text
            size="xs"
            weight="regular"
            style={{ flex: 1, minWidth: 0 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </Row>
        <Row style={{ width: "100%" }} gap="md">
          <Code style={{ flex: 1, minWidth: 0 }}>
            {`<Text
  size="md"
  weight="medium"
>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</Text>`}
          </Code>

          <Text
            size="sm"
            weight="medium"
            style={{ flex: 1, minWidth: 0 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </Row>
        <Row style={{ width: "100%" }} gap="sm">
          <Code style={{ flex: 1, minWidth: 0 }}>
            {`<Text
  size="md"
  weight="semibold"
>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</Text>`}
          </Code>

          <Text
            size="md"
            weight="semibold"
            style={{ flex: 1, minWidth: 0 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </Row>
        <Row style={{ width: "100%" }} gap="lg">
          <Code style={{ flex: 1, minWidth: 0 }}>
            {`<Text
  size="md"
  weight="bold"
>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</Text>`}
          </Code>

          <Text
            size="lg"
            weight="bold"
            style={{ flex: 1, minWidth: 0 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </Row>
      </TextGroup>
    </Column>
  );
}
