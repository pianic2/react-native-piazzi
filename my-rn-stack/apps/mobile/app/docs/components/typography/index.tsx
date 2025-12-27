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
  Spacer,
  Link,
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
        <Card>
          <TextGroup>
            <Code>{`<Text size="md" weight="regular">
  Testo di esempio
</Text>`}</Code>
            <Text size="md" weight="regular">Testo di esempio</Text>
          </TextGroup>
        </Card>
        <P>
          Tutti gli altri componenti tipografici (<CodeInline>P</CodeInline>,{" "}
          <CodeInline>Small</CodeInline>, <CodeInline>Heading</CodeInline>, ecc.) sono variazioni
          semantiche di questo modello base.
        </P>
      </TextGroup>

      {/* =====================================================
          COMPONENTI TIPOGRAFICI
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Componenti Tipografici</Heading>
        <Link href="/docs/components/typography/Text" variant="button">Text</Link>
      </TextGroup>


      <P>
        Questo significa che cambiando i token di tipografia, tutta la
        UI si aggiorna automaticamente.
      </P>



    </Column>
  );
}
