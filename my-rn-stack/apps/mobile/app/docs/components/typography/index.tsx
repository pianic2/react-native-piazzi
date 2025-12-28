import React from "react";
import {
  Column,
  Heading,
  P,
  B,
  Small,
  TextGroup,
  Divider,
  Card,
  Code,
  CodeInline,
  Text,
  Row,
  Spacer,
  Link,
  Button,
} from "ui";

export default function TypographyIndex() {
  return (
    <Column gap="xl">
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>Typography System</Heading>

        <P>
          Il sistema tipografico della UI è costruito attorno a un unico
          componente fondamentale: <CodeInline>Text</CodeInline>.
          Tutti i componenti tipografici sono <B>derivazioni semantiche</B> di
          questo modello base. Nessun componente introduce stili arbitrari.
        </P>
      </TextGroup>

      {/* =====================================================
          ESEMPIO
      ===================================================== */}
      <Card>
        <TextGroup>
        <Heading level={3}>Esempio</Heading>
        <P>Ecco un esempio esplicativo di come utilizzare il componente Text:</P>
          <Code>{`<Text size="lg" weight="bold">
  Testo di esempio
</Text>

<Text size="md" weight="medium">
  Testo principale
</Text>

<Text size="sm" weight="regular" muted>
  Testo secondario
</Text>`}</Code>

          <Text size="lg" weight="bold">
            Testo di esempio
          </Text>

          <Text size="md" weight="medium">
            Testo principale
          </Text>

          <Text size="sm" weight="regular" variant="muted">
            Testo secondario
          </Text>
        </TextGroup>
      </Card>

      {/* =====================================================
          FILOSOFIA
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Filosofia</Heading>

        <P>
          La tipografia è <B>token-driven</B>.  
          Modificando i <Link href="docs/tokens/typography" variant="text">typography tokens</Link>, l’intera UI si
          aggiorna in modo coerente e prevedibile.
        </P>

        <P>
          Questo approccio garantisce:
        </P>

        <TextGroup spacing="sm">
          <Button variant="ghost" disabled={true} label="coerenza visiva" />
          <Button variant="ghost" disabled={true} label="scalabilità del design" />
          <Button variant="ghost" disabled={true} label="assenza di magic numbers" />
        </TextGroup>
      </TextGroup>

      {/* =====================================================
          COMPONENTE BASE — TEXT
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Text</Heading>

        <P>
          <CodeInline>Text</CodeInline> è il mattone fondamentale.
          Tutti i testi devono essere derivati da questo componente.
          Inizia leggendo la documentazione completa qui sotto.
        </P>

        <Link
          href="/docs/components/typography/Text"
          variant="button"
        >
          Documentazione completa
        </Link>
      </TextGroup>

      {/* =====================================================
          VARIANTI SEMANTICHE
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Componenti Semantici</Heading>

        <P>
          I componenti seguenti non aggiungono nuove capacità.
          Applicano semplicemente preset coerenti di <CodeInline>Text</CodeInline>.
        </P>
      </TextGroup>

      {/* -----------------------------
          P
      ----------------------------- */}
      <Card>
        <TextGroup>
          <Heading level={3}>P</Heading>

          <Code>{`<P>
  Questo è un paragrafo standard.
</P>`}</Code>

          <P>Questo è un paragrafo standard.</P>
        </TextGroup>
      </Card>

      {/* -----------------------------
          Small
      ----------------------------- */}
      <Card>
        <TextGroup>
          <Heading level={3}>Small</Heading>

          <Code>{`<Small>
  Testo di supporto o meta-informazione
</Small>`}</Code>

          <Small>Testo di supporto o meta-informazione</Small>
        </TextGroup>
      </Card>

      {/* -----------------------------
          Heading
      ----------------------------- */}
      <Card>
        <TextGroup>
          <Heading level={3}>Heading</Heading>

          <Code>{`<Heading level={1}>Titolo H1</Heading>
<Heading level={2}>Titolo H2</Heading>
<Heading level={3}>Titolo H3</Heading>`}</Code>

          <Heading level={1}>Titolo H1</Heading>
          <Heading level={2}>Titolo H2</Heading>
          <Heading level={3}>Titolo H3</Heading>
        </TextGroup>
      </Card>

      <Divider />

      {/* =====================================================
          LINEE GUIDA
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Linee Guida</Heading>

        <P>
          Segui queste regole per mantenere la UI consistente:
        </P>

        <Row>
          <Text>• usa sempre componenti tipografici, mai <CodeInline>Text</CodeInline> raw con style</Text>
        </Row>
        <Row>
          <Text>• non hardcodare fontSize, lineHeight o fontWeight</Text>
        </Row>
        <Row>
          <Text>• se serve una nuova variante, estendi il sistema, non il componente</Text>
        </Row>
      </TextGroup>
    </Column>
  );
}
