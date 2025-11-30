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
      {/* TITLE */}
      <Heading level={1}>Tipografia</Heading>
      <P>
        La tipografia fornisce gli elementi fondamentali per strutturare e
        organizzare il contenuto testuale dell’app. Ogni componente è
        progettato per essere coerente con il tema, leggibile e facilmente
        combinabile con gli altri elementi dell’interfaccia.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* HEADINGS */}
      <Card style={{ marginTop: 10 }}>
        <Heading level={3}>Heading</Heading>
        <Divider />

        <P>
          Il componente <B>Heading</B> definisce la gerarchia visiva dei titoli
          da livello 1 a livello 5. Ogni livello ha dimensioni, peso e spaziatura
          propri per evidenziare la struttura del contenuto.
        </P>

        <TextGroup spacing={12} style={{ marginTop: 16 }}>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
        </TextGroup>
      </Card>

      {/* PARAGRAPH */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>P – Paragrafo</Heading>
        <Divider />

        <P>
          Il componente <B>P</B> rappresenta il paragrafo principale. Mantiene
          leggibilità elevata grazie a <B>fontSize 16</B>, <B>lineHeight 22</B> e
          colore derivato dal tema. È l'elemento base per contenuti testuali.
        </P>

        <P>
          Questo è un esempio di paragrafo formattato automaticamente secondo le
          regole tipografiche della libreria.
        </P>
      </Card>

      {/* SMALL */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Small – Testo secondario</Heading>
        <Divider />

        <P>
          Il componente <B>Small</B> viene utilizzato per note, descrizioni,
          didascalie e contenuti meno importanti. Ha dimensione ridotta e
          opacità lievemente inferiore.
        </P>

        <Small>Questo è un testo secondario.</Small>
      </Card>

      {/* BOLD */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>B – Bold inline</Heading>
        <Divider />

        <P>
          Il componente <B>B</B> consente di enfatizzare un frammento di testo
          all’interno di un paragrafo senza interrompere il flusso testuale.
        </P>

        <P>
          Esempio: puoi scrivere <B>testo in grassetto</B> all’interno del
          paragrafo senza modificare lo stile generale.
        </P>
      </Card>

      {/* CODE INLINE */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>CodeInline – Codice inline</Heading>
        <Divider />

        <P>
          <B>CodeInline</B> viene usato per evidenziare frammenti di codice
          direttamente dentro il testo, ad esempio{" "}
          <CodeInline>colors.text</CodeInline>.
        </P>

        <P>
          Il componente utilizza stile monospace, background dedicato e padding
          compatto per essere leggibile senza interrompere il flusso.
        </P>
      </Card>

      {/* CODE BLOCK */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Code – Blocco di codice</Heading>
        <Divider />

        <P>
          Il componente <B>Code</B> permette di mostrare blocchi di codice
          tematizzati. Supporta testo multilinea e lo stile monospace.
        </P>

        <Code>
{`const palette = colors[type];
const finalBg = bgColor || palette.bg;`}
        </Code>
      </Card>

      {/* QUOTE */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Quote – Citazione</Heading>
        <Divider />

        <P>
          <B>Quote</B> formatta un blocco citazione con bordo laterale e testo
          in stile narrativo, ideale per evidenziare concetti chiave o porzioni 
          discorsive.
        </P>

        <Quote>
          La buona tipografia migliora la leggibilità, la struttura e la
          comprensione del contenuto.
        </Quote>
      </Card>

      {/* TEXTGROUP */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>TextGroup – Gestione automatica dello spacing</Heading>
        <Divider />

        <P>
          Il componente <B>TextGroup</B> gestisce automaticamente lo spazio
          verticale tra più elementi tipografici. È ideale quando si vuole 
          mantenere uno spacing coerente senza aggiungere margini manuali.
        </P>

        <TextGroup spacing={12} style={{ marginTop: 16 }}>
          <P>Questo è il primo paragrafo.</P>
          <P>Questo è il secondo paragrafo, con spacing automatico.</P>
          <Small>Questo è un testo secondario.</Small>
        </TextGroup>

        <Code>
{`<TextGroup spacing={12}>
  <P>Primo paragrafo.</P>
  <P>Secondo paragrafo.</P>
  <Small>Nota secondaria.</Small>
</TextGroup>`}
        </Code>
      </Card>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}
