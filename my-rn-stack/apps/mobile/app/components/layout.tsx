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
  Row,
  Column,
  Spacer,
  Section,
  Screen,
} from "ui";

export default function LayoutDoc() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>

      {/* TITLE */}
      <Heading level={1}>Layout</Heading>
      <P>
        I componenti di layout permettono di strutturare la pagina in modo
        coerente, leggibile e scalabile. Offrono utilità flessibili per
        disporre elementi in riga, colonna, suddividere sezioni, gestire 
        spaziature e creare schermate consistenti con il tema.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* ROW */}
      <Card style={{ marginTop: 10 }}>
        <Heading level={3}>Row</Heading>
        <Divider />

        <P>
          Il componente <B>Row</B> permette di disporre gli elementi
          <B> orizzontalmente</B>. Supporta:
        </P>

        <Column gap={6} style={{ marginTop: 10 }}>
          <P><B>gap</B> – distanza tra gli elementi</P>
          <P><B>align</B> – allineamento verticale</P>
          <P><B>justify</B> – allineamento orizzontale</P>
        </Column>

        <P style={{ marginTop: 10 }}>Esempio:</P>

        <Row gap={10} style={{ marginTop: 10 }}>
          <Section><P>Elemento A</P></Section>
          <Section><P>Elemento B</P></Section>
          <Section><P>Elemento C</P></Section>
        </Row>

        <Code>
{`<Row gap={10} align="center" justify="flex-start">
  <Section>...</Section>
  <Section>...</Section>
</Row>`}
        </Code>
      </Card>

      {/* COLUMN */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Column</Heading>
        <Divider />

        <P>
          Il componente <B>Column</B> dispone gli elementi 
          <B> verticalmente</B> con un <B>gap automatico</B> tra ciascun figlio.
          Ideale per moduli, stack di componenti o testi.
        </P>

        <Column gap={12} style={{ marginTop: 10 }}>
          <Section><P>Elemento 1</P></Section>
          <Section><P>Elemento 2</P></Section>
          <Section><P>Elemento 3</P></Section>
        </Column>

        <Code>
{`<Column gap={12}>
  <Section>Elemento 1</Section>
  <Section>Elemento 2</Section>
</Column>`}
        </Code>
      </Card>

      {/* SPACER */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Spacer</Heading>
        <Divider />

        <P>
          Il componente <B>Spacer</B> crea uno spazio vuoto 
          <B>verticale o orizzontale</B>. Perfetto per separare blocchi di UI.
        </P>

        <P>
          <B>size</B> controlla la dimensione dello spazio,  
          <B>horizontal</B> decide se applicarlo come larghezza invece che altezza.
        </P>

        <Column gap={0} style={{ marginTop: 10 }}>
          <P>Testo sopra</P>
          <Spacer size={20} />
          <P>Testo sotto</P>
        </Column>

        <Code>
{`<Spacer size={20} />
<Spacer size={12} horizontal />`}
        </Code>
      </Card>

      {/* SECTION */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Section</Heading>
        <Divider />

        <P>
          Il componente <B>Section</B> rappresenta un contenitore con 
          <B>padding standard</B> e <B>background tematizzato</B>.  
          È usato per suddividere logicamente una pagina.
        </P>

        <Section style={{ marginTop: 10 }}>
          <P>Questa è una sezione con padding automatico e bordo arrotondato.</P>
        </Section>

        <Code>
{`<Section padding={20}>
  <P>Contenuto della sezione</P>
</Section>`}
        </Code>
      </Card>

      {/* SCREEN */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Screen</Heading>
        <Divider />

        <P>
          Il componente <B>Screen</B> è il layout principale di una pagina:
        </P>

        <Column gap={6} style={{ marginTop: 10 }}>
          <P><B>SafeAreaView</B> integrato</P>
          <P><B>padding automatico</B> responsivo</P>
          <P><B>background</B> collegato al tema</P>
          <P><B>flex: 1</B> per occupare tutto lo schermo</P>
        </Column>

        <Screen style={{ marginTop: 16 }}>
          <P>Questa è una schermata base con SafeArea e padding integrato.</P>
        </Screen>

        <Code>
{`<Screen>
  <Heading level={2}>Titolo pagina</Heading>
  <P>Contenuto della schermata</P>
</Screen>`}
        </Code>
      </Card>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}
