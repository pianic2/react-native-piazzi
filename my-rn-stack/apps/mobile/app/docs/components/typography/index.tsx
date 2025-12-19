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
} from "ui";

export default function TypographyIndex() {
  return (
    <Column style={{ padding: 30 }}>
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
      <TextGroup>
        <Heading level={2}>Text: il modello base</Heading>
        <P>
          <CodeInline>Text</CodeInline> è il componente più basso livello del
          sistema tipografico. Incapsula:
        </P>
      </TextGroup>

      <Card style={{ padding: 16 }}>
        <TextGroup>
          <P>• font size (da token)</P>
          <P>• font weight (da token)</P>
          <P>• line height coerente</P>
          <P>• colore semantico (variant)</P>
          <P>• allineamento</P>
          <P>• troncamento</P>
        </TextGroup>
      </Card>

      <Card style={{ padding: 16 }}>
        <TextGroup>
          <Heading level={3}>API di base</Heading>
          <Code>{`<Text
  size="md"
  weight="regular"
  variant="default"
>
  Contenuto testuale
</Text>`}</Code>
        </TextGroup>
      </Card>

      {/* =====================================================
          SIZE & WEIGHT
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Size e Weight</Heading>
        <P>
          <Code>size</Code> e <Code>weight</Code> mappano direttamente
          i token di tipografia definiti nel tema.
        </P>
      </TextGroup>

      <Card style={{ padding: 16 }}>
        <TextGroup>
          <P size="sm">Text size="sm"</P>
          <P size="md">Text size="md"</P>
          <P size="lg">Text size="lg"</P>
          <P size="lg" weight="bold">
            Text size="lg" weight="bold"
          </P>
        </TextGroup>
      </Card>

      <P>
        Questo significa che cambiando i token di tipografia, tutta la
        UI si aggiorna automaticamente.
      </P>



    </Column>
  );
}
