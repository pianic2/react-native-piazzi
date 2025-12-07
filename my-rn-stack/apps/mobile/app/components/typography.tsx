import { ScrollView, View } from "react-native";
import {
  Heading,
  Card,
  Divider,
  P,
  B,
  Small,
  Code,
  CodeInline,
  Quote,
  TextGroup,
} from "ui";

export default function TypographyDoc() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>

      <Heading level={1}>Tipografia</Heading>
      <P>
        Questa sezione include tutti i componenti usati per gestire e
        strutturare il testo all’interno della UI. Ogni componente è
        tematizzato, accessibile e progettato per migliorare leggibilità e
        coerenza del design.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* ========================================================= */}
      {/* HEADING */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 10 }}>
        <Heading level={3}>Heading</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          Il componente <B>Heading</B> definisce titoli gerarchici da 1 a 5.
          Ogni livello ha dimensioni e peso differenti, utili per costruire
          una struttura visiva chiara ed efficace.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`level: 1 | 2 | 3 | 4 | 5
  Livello del titolo.

style: TextStyle
  Stili aggiuntivi del testo.

children: ReactNode
  Contenuto del titolo.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code>
{`<TextGroup spacing={10}>
  <Heading level={1}>Heading 1</Heading>
  <Heading level={2}>Heading 2</Heading>
  <Heading level={3}>Heading 3</Heading>
  <Heading level={4}>Heading 4</Heading>
  <Heading level={5}>Heading 5</Heading>
</TextGroup>`}
        </Code>

        <TextGroup spacing={10} style={{ marginTop: 10 }}>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
        </TextGroup>
      </Card>

      {/* ========================================================= */}
      {/* PARAGRAFO P */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>P – Paragrafo</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          Il componente <B>P</B> è il paragrafo principale. Utilizza dimensioni
          e interlinea ottimizzate per la lettura continua e applica
          automaticamente il colore del tema.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`style: TextStyle
  Override degli stili del testo.

children: ReactNode
  Contenuto del paragrafo.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code>
{`<P>
  Questo è un esempio di paragrafo
  reso con il componente P.
</P>`}
        </Code>

        <P style={{ marginTop: 10 }}>
          Questo è un esempio di paragrafo reso con il componente P.
        </P>
      </Card>

      {/* ========================================================= */}
      {/* SMALL */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Small – Testo secondario</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>Small</B> è usato per note, didascalie e contenuti a bassa
          priorità. Ha dimensioni ridotte e opacità inferiore rispetto a P.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`style: TextStyle
  Override degli stili.

children: ReactNode
  Contenuto del testo secondario.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code>
{`<Small>Questo è un testo secondario.</Small>`}
        </Code>

        <Small style={{ marginTop: 10 }}>Questo è un testo secondario.</Small>
      </Card>

      {/* ========================================================= */}
      {/* B – BOLD INLINE */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>B – Bold inline</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          Il componente <B>B</B> evidenzia una parte di testo mantenendo il
          comportamento inline. È perfetto per parole chiave o enfasi semantica.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`style: TextStyle
  Override degli stili.

children: ReactNode
  Testo in grassetto.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code>
{`<P>
  Questo è un paragrafo con una parte in <B>grassetto</B>.
</P>`}
        </Code>

        <P style={{ marginTop: 10 }}>
          Questo è un paragrafo con una parte in <B>grassetto</B>.
        </P>
      </Card>

      {/* ========================================================= */}
      {/* CODEINLINE */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>CodeInline – Codice inline</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>CodeInline</B> evidenzia frammenti di codice all’interno del testo,
          come variabili o proprietà, mantenendo un flusso naturale.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`style: TextStyle
  Override degli stili inline.

children: ReactNode
  Codice inline.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code>
{`<P>
  Il valore deriva da <CodeInline>colors.text</CodeInline>.
</P>`}
        </Code>

        <P style={{ marginTop: 10 }}>
          Il valore deriva da <CodeInline>colors.text</CodeInline>.
        </P>
      </Card>

      {/* ========================================================= */}
      {/* CODE – BLOCCO */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Code – Blocco di codice</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>Code</B> mostra blocchi di codice multilinea con font monospace,
          padding e background tematizzato.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`style: ViewStyle
  Stili del contenitore.

  children: string | ReactNode
  Codice da visualizzare.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code style={{ marginTop: 10 }}>
{`<Code style={{ marginTop: 10 }}>
  const greeting = "Hello, World!";
</Code>`}
        </Code>
      </Card>

      {/* ========================================================= */}
      {/* QUOTE */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Quote – Citazione</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>Quote</B> formatta un blocco citazione con bordo laterale e
          stile narrativo, ideale per evidenziare concetti chiave.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`style: ViewStyle
  Stili aggiuntivi.

children: ReactNode
  Testo della citazione.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code>
{`<Quote>
  La buona tipografia migliora la comprensione.
</Quote>`}
        </Code>

        <Quote style={{ marginTop: 10 }}>
          La buona tipografia migliora la comprensione.
        </Quote>
      </Card>

      {/* ========================================================= */}
      {/* TEXTGROUP */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>TextGroup – Gestione dello spacing</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>TextGroup</B> applica automaticamente una spaziatura verticale
          coerente tra più elementi tipografici.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`spacing: number
  Distanza verticale tra gli elementi.

style: ViewStyle
  Stili aggiuntivi.

children: ReactNode[]
  Elementi da impaginare.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>
        <Code>
{`<TextGroup spacing={12}>
  <P>Primo paragrafo.</P>
  <P>Secondo paragrafo.</P>
  <Small>Nota secondaria.</Small>
</TextGroup>`}
        </Code>

        <TextGroup spacing={12} style={{ marginTop: 10 }}>
          <P>Primo paragrafo.</P>
          <P>Secondo paragrafo.</P>
          <Small>Nota secondaria.</Small>
        </TextGroup>
      </Card>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}
