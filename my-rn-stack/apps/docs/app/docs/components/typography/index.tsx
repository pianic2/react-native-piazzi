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
  Link,
  Button,
  Quote,
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
          questo modello base. I componenti usano solo i token definiti dal sistema di Theming, dunque nessuno stile arbitrario.
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

<Text weight="regular" muted>
  Testo secondario
</Text>`}</Code>

          <Text size="lg" weight="bold">
            Testo di esempio
          </Text>

          <Text size="md" weight="medium">
            Testo principale
          </Text>

          <Text weight="regular" variant="muted">
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
          <CodeInline>Text</CodeInline> è il mattone fondamentale da cui derivano tutti i componenti tipografici della libreria.
          Prima di conoscere tutti i componeti testuali ti invitiamo a leggere la documentazione completa di <CodeInline>Text</CodeInline> riportata al link qui sotto.
        </P>

        <Link
          href="/docs/components/typography/Text"
          variant="button"
        >
          Documentazione completa di Text
        </Link>
      </TextGroup>


      {/* -----------------------------
          TEXT GROUP
      ----------------------------- */}
      <TextGroup>
        <Heading level={2}>TextGroup</Heading>
        <P>
          Componente per raggruppare blocchi di testo con spaziatura coerente tra di essi.{" "}
          Utile per organizzare paragrafi o sezioni di testo all'interno di layout più complessi.
        </P>

        <Divider />

        <Heading level={4}>Parametri</Heading>
        <TextGroup>
          <Row align="flex-start">
            <Row justify="flex-end" wrap={false}><CodeInline>spacing</CodeInline></Row>
            <P>
              <B>Spaziatura tra paragrafi:</B>{" "}
              Definisce la spaziatura verticale tra i componenti figli all'interno del gruppo.
              Può essere uno dei seguenti valori predefiniti dagli <Link href="docs/tokens/spacing">spacing token</Link>: <CodeInline>none</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline> e <CodeInline>xxxl</CodeInline>.
            </P>
          </Row>
        </TextGroup>

        <Code>{`<TextGroup spacing="md">
  <P>Primo paragrafo.</P>
  <P>Secondo paragrafo.</P>
</TextGroup>`}</Code>

        <TextGroup spacing="md">
          <P>Primo paragrafo.</P>
          <P>Secondo paragrafo.</P>
        </TextGroup>
      </TextGroup>

      {/* =====================================================
          VARIANTI SEMANTICHE
      ===================================================== */}
      <TextGroup spacing="md">
        <TextGroup>
          <Heading level={2}>Componenti Semantici</Heading>

          <P>
            I componenti seguenti non aggiungono nuove capacità.
            Applicano semplicemente preset coerenti di <CodeInline>Text</CodeInline>.
            Di seguito trovi una panoramica dei componenti tipografici disponibili.
          </P>
        </TextGroup>

        {/* -----------------------------
          P
        ----------------------------- */}
        <Card>
          <TextGroup>
            <Heading level={3}>P</Heading>
            <P>Definisce un paragrafo standard nel quale inserire il corpo del testo</P>

            <Divider />

            <Code>{`<P>
  Questo è un paragrafo standard.
</P>`}</Code>

            <P>Questo è un paragrafo standard.</P>
          </TextGroup>
        </Card>


        {/* -----------------------------
          Heading
      ----------------------------- */}
        <Card>
          <TextGroup>
            <Heading level={3}>Heading</Heading>
            <P>Definisce titoli e sottotitoli con diversi livelli di gerarchia</P>

            <Divider />

            <Heading level={4}>Parametri aggiuntivi</Heading>
            <TextGroup>
              <Row align="flex-start">
                <Row justify="flex-end" wrap={false}><CodeInline>level</CodeInline></Row>
                <P>
                  <B>Grandezza del titolo:</B>{" "}
                  I livelli vanno da 1 (più grande) a 6 (più piccolo) e corrispondono alle dimensioni dei font definiti nel sistema di theming.
                </P>
              </Row>
            </TextGroup>

            <Code>{`<Heading level={1}>Titolo H1</Heading>`}</Code>

            <Heading level={1}>Titolo H1</Heading>
          </TextGroup>
        </Card>


        {/* -----------------------------
          Small
      ----------------------------- */}
        <Card>
          <TextGroup>
            <Heading level={3}>Small</Heading>
            <P>Un testo di carattere più piccolo, usato per note a piè di pagina, copyright o dettagli legali</P>

            <Divider />

            <Code>{`<Small>
  Testo di supporto o meta-informazione
</Small>`}</Code>

            <Small>Testo di supporto o meta-informazione</Small>
          </TextGroup>
        </Card>


        {/* -----------------------------
          B
      ----------------------------- */}
        <Card>
          <TextGroup>
            <Heading level={3}>B</Heading>
            <P>Componente per il testo in grassetto</P>

            <Divider />

            <Code>{`<B>Testo in grassetto</B>`}</Code>
            <B>Testo in grassetto</B>

          </TextGroup>
        </Card>

        {/* -----------------------------
          QUOTE
      ----------------------------- */}
        <Card>
          <TextGroup>
            <Heading level={3}>Quote</Heading>
            <P>Componente per citazioni o estratti di testo</P>

            <Divider />

            <Code>{`<Quote>
  Questa è una citazione di esempio.
</Quote>`}</Code>

            <Quote>Questa è una citazione di esempio.</Quote>
          </TextGroup>
        </Card>

        {/* -----------------------------
          CODE
      ----------------------------- */}
        <Card>
          <TextGroup>
            <Heading level={3}>Code</Heading>
            <P>
              Componente per blocchi di codice o testo preformattato.{" "}
              È già disponibile di default un pulsante per fare copia incolla del testo attraverso un utility definita nativamente nella libreria.
            </P>

            <Divider />

            <Code>{`<Code>
  const example = "Questo è un blocco di codice";
</Code>`}</Code>

            <Code>
              {`const example = "Questo è un blocco di codice";`}
            </Code>
          </TextGroup>
        </Card>

        {/* -----------------------------
          CODE INLINE
      ----------------------------- */}
        <Card>
          <TextGroup>
            <Heading level={3}>CodeInline</Heading>
            <P>Componente per snippet di codice o testo tecnico inline all'interno di paragrafi</P>

            <Divider />

            <Code>{`<P>
  Usa il componente <CodeInline>CodeInline</CodeInline> per evidenziare codice inline.
</P>`}</Code>

            <P>
              Usa il componente <CodeInline>CodeInline</CodeInline> per evidenziare codice inline.
            </P>
          </TextGroup>
        </Card>
      </TextGroup>


      <Row justify="flex-end">
        <Link href="/docs/components/layout" variant="button" size="lg">Layout</Link>
      </Row>
    </Column>
  );
}
