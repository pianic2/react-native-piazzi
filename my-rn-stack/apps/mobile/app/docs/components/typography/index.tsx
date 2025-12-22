import React from "react";
import {
  Column,
  Heading,
  P,
  B,
  TextGroup,
  Divider,
  Card,
  Code,
  CodeInline,
  Text,
  Row,
  Spacer
} from "ui";

export default function TypographyIndex() {
  return (
    <Column>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>Typography System</Heading>
        <P>
          La tipografia della libreria è costruita attorno a un unico
          componente fondamentale: <CodeInline>Text</CodeInline>.
        </P>
        <P>
          Tutti gli altri componenti tipografici (<CodeInline>P</CodeInline>,{" "}
          <CodeInline>Small</CodeInline>, <CodeInline>Heading</CodeInline>, ecc.) sono variazioni
          semantiche di questo modello base.
        </P>
      </TextGroup>

      <Divider />

      {/* =====================================================
          TEXT COME MODELLO BASE
      ===================================================== */}
      <TextGroup spacing="md">
        <Heading level={2}>Text: il modello base</Heading>
        <P>
          <CodeInline>Text</CodeInline> è il componente più basso livello del
          sistema tipografico. {" "}
        </P>


        <Heading level={3}>Parametri</Heading>
        <TextGroup>
          <Row>
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm" align="right">size</CodeInline></Row>
            <P><B>font size</B> (da token)</P>
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


        <Heading level={3}>API di base</Heading>
        <Code>{`<Text
  size="md"
  weight="regular"
  variant="default"
  align="justify"
  truncate={false}
>
  Contenuto testuale
</Text>`}</Code>


        <Heading level={3}>Esempio di utilizzo</Heading>
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
      

      <P>
        Questo significa che cambiando i token di tipografia, tutta la
        UI si aggiorna automaticamente.
      </P>



    </Column>
  );
}
