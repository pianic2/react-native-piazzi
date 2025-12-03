import { ScrollView } from "react-native";
import {
  Heading,
  Card,
  Divider,
  P,
  B,
  Small,
  Code,
  CodeInline,
  Row,
  Column,
  Spacer,
  Section,
  Screen,
} from "ui";

export default function LayoutDoc() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>

      <Heading level={1}>Layout</Heading>
      <P>
        I componenti di layout servono a organizzare visivamente contenuti,
        spaziature e sezioni di una schermata. Ogni componente è progettato
        per essere flessibile, responsive e coerente con il design system.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* ========================================================= */}
      {/* ROW */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 10 }}>
        <Heading level={3}>Row</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          Il componente <B>Row</B> dispone i contenuti in <B>orizzontale</B>.
          È utile per creare strutture su riga, pulsanti affiancati,
          suddivisioni e layout flessibili.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`gap?: number
  Spaziatura orizzontale tra i figli.

align?: "flex-start" | "center" | "flex-end" | "stretch"
  Allineamento verticale degli elementi.

justify?: "flex-start" | "center" | "flex-end" | "space-between"
  Allineamento orizzontale.

style?: ViewStyle
  Stili extra per il contenitore.

children: ReactNode
  Elementi da disporre in fila.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>

        <Code>
{`<Row gap={10} align="center">
  <Section><P>Elemento A</P></Section>
  <Section><P>Elemento B</P></Section>
  <Section><P>Elemento C</P></Section>
</Row>`}
        </Code>

        <Row gap={10} align="center" style={{ marginTop: 12 }}>
          <Section><P>Elemento A</P></Section>
          <Section><P>Elemento B</P></Section>
          <Section><P>Elemento C</P></Section>
        </Row>
      </Card>

      {/* ========================================================= */}
      {/* COLUMN */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Column</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>Column</B> dispone i contenuti in <B>verticale</B> con
          spaziatura automatica. È ideale per moduli, stack di UI o
          blocchi testuali.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`gap?: number
  Spaziatura verticale tra gli elementi.

style?: ViewStyle
  Stili aggiuntivi del contenitore.

children: ReactNode
  Elementi impilati verticalmente.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>

        <Code>
{`<Column gap={12}>
  <Section><P>Elemento 1</P></Section>
  <Section><P>Elemento 2</P></Section>
  <Section><P>Elemento 3</P></Section>
</Column>`}
        </Code>

        <Column gap={12} style={{ marginTop: 12 }}>
          <Section><P>Elemento 1</P></Section>
          <Section><P>Elemento 2</P></Section>
          <Section><P>Elemento 3</P></Section>
        </Column>
      </Card>

      {/* ========================================================= */}
      {/* SPACER */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Spacer</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>Spacer</B> crea spazio vuoto verticale o orizzontale.
          È perfetto per separare sezioni e controllare la pausa visiva.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`size: number
  Dimensione dello spazio in px.

horizontal?: boolean
  Se true, applica larghezza invece che altezza.

style?: ViewStyle
  Override degli stili.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>

        <Code>
{`<P>Testo sopra</P>
<Spacer size={20} />
<P>Testo sotto</P>`}
        </Code>

        <P style={{ marginTop: 12 }}>Testo sopra</P>
        <Spacer size={20} />
        <P>Testo sotto</P>
      </Card>

      {/* ========================================================= */}
      {/* SECTION */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Section</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>Section</B> è un contenitore strutturale con padding coerente,
          superfici tematizzate e bordi arrotondati. Perfetto per organizzare
          blocchi logici di contenuto.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`padding?: number
  Padding interno della sezione.

style?: ViewStyle
  Override degli stili del contenitore.

children: ReactNode
  Contenuto della sezione.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>

        <Code>
{`<Section>
  <P>Contenuto della sezione</P>
</Section>`}
        </Code>

        <Section style={{ marginTop: 12 }}>
          <P>Contenuto della sezione</P>
        </Section>
      </Card>

      {/* ========================================================= */}
      {/* SCREEN */}
      {/* ========================================================= */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Screen</Heading>
        <Divider />

        {/* DESCRIZIONE */}
        <P>
          <B>Screen</B> è il layout principale di pagina: integra SafeAreaView,
          padding responsivo e background tematizzato. È la base di ogni
          schermata dell’app.
        </P>

        {/* PROPS */}
        <Heading level={4} style={{ marginTop: 20 }}>Props</Heading>
        <Code>
{`style?: ViewStyle
  Override degli stili di layout.

children: ReactNode
  Contenuto della schermata.`}
        </Code>

        {/* ESEMPIO */}
        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>

        <Code>
{`<Screen>
  <Heading level={2}>Titolo pagina</Heading>
  <P>Contenuto della schermata</P>
</Screen>`}
        </Code>

        <Screen style={{ marginTop: 12, padding: 16 }}>
          <Heading level={4}>Esempio Screen</Heading>
          <P>Questa è una schermata base con SafeArea e padding integrato.</P>
        </Screen>
      </Card>
    </ScrollView>
  );
}
