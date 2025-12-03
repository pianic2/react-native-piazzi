import { Screen, Heading, Card, Divider, P, B, Code, CodeInline } from "ui";

export default function CardDoc() {
  return (
    <Screen style={{ flex: 1, padding: 20 }}>
      
      {/* TITLE */}
      <Heading level={1}>Card</Heading>
      <P>
        Il componente <B>Card</B> è un contenitore con sfondo, ombra e 
        bordi arrotondati. Serve per raggruppare contenuti visivamente
        correlati, come sezioni informative, pannelli o gruppi di componenti.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* ---------------------------------------------------------- */}
      {/* DESCRIZIONE */}
      {/* ---------------------------------------------------------- */}

      <Card>
        <Heading level={3}>A cosa serve</Heading>
        <Divider />

        <P>
          La card fornisce una superficie sollevata ( <CodeInline>elevation</CodeInline> ) che 
          separa il contenuto dal resto della UI. Può essere utilizzata per 
          creare blocchi informativi, pannelli impostazioni, preview o 
          contenitori stilisticamente coerenti.
        </P>

        <P>
          Supporta override del colore di sfondo, border-radius, padding ed 
          elevazione, mantenendo comunque la tematizzazione light/dark.
        </P>
      </Card>

      {/* ---------------------------------------------------------- */}
      {/* PROPS */}
      {/* ---------------------------------------------------------- */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Props</Heading>
        <Divider />

        <Code>
{`style?: ViewStyle | ViewStyle[]
  Stili aggiuntivi per la card.

bgColor?: string
  Override del colore di sfondo.

radius?: number
  Border radius della card (default: 14).

padding?: number
  Padding interno (default: 16).

elevation?: number
  Intensità dell'ombra (default: 2).

children?: ReactNode
  Contenuto interno della card.`}
        </Code>
      </Card>

      {/* ---------------------------------------------------------- */}
      {/* ESEMPI */}
      {/* ---------------------------------------------------------- */}

      <Heading level={2} style={{ marginTop: 30 }}>Esempi</Heading>

      {/* BASE */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Card base</Heading>
        <Divider />

        <P style={{ marginTop: 10 }}>
          Questo è un contenitore card standard.
        </P>

        <Code style={{ marginTop: 10 }}>
{`<Card>
  <P>Questo è un contenuto nella card.</P>
</Card>`}
        </Code>
      </Card>

      {/* CUSTOM BACKGROUND */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Card con sfondo custom</Heading>
        <Divider />

        <Card bgColor="#FFF2E0" padding={18}>
          <P>Anteprima documentazione personalizzata.</P>
        </Card>

        <Code style={{ marginTop: 10 }}>
{`<Card bgColor="#FFF2E0" padding={18}>
  <P>Anteprima documentazione personalizzata.</P>
</Card>`}
        </Code>
      </Card>

      {/* ELEVATION */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Card con elevazione aumentata</Heading>
        <Divider />

        <Card elevation={6}>
          <P>Questa card ha un'ombra più marcata.</P>
        </Card>

        <Code style={{ marginTop: 10 }}>
{`<Card elevation={6}>
  <P>Questa card ha un'ombra più marcata.</P>
</Card>`}
        </Code>
      </Card>

      {/* CUSTOM RADIUS */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Card con border-radius variabile</Heading>
        <Divider />

        <Card radius={24}>
          <P>Una card con bordi più rotondi.</P>
        </Card>

        <Code style={{ marginTop: 10 }}>
{`<Card radius={24}>
  <P>Una card con bordi più rotondi.</P>
</Card>`}
        </Code>
      </Card>
    </Screen>
  );
}
