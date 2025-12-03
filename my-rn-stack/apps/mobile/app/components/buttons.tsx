import { ScrollView, View } from "react-native";
import { Heading, Card, Divider, P, B, Code, CodeInline, TextGroup } from "ui";
import { Button } from "ui";

export default function ButtonsDoc() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* TITLE */}
      <Heading level={1}>Button</Heading>
      <P>
        Il componente <B>Button</B> rappresenta l’azione principale nella UI.  
        È completamente tematizzato, supporta varianti visive, dimensioni,
        icone, stato di caricamento e override dei colori.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* ---------------------------------------------------------- */}
      {/* DESCRIZIONE */}
      {/* ---------------------------------------------------------- */}

      <Card>
        <Heading level={3}>A cosa serve</Heading>
        <Divider />

        <P>
          Il bottone è progettato per essere il componente principale per le 
          interazioni dell’utente. Può essere utilizzato per call-to-action,
          conferme, cancellazioni, navigazioni e operazioni asincrone con stato
          di caricamento. Il suo design si adatta automaticamente al tema 
          corrente (light/dark) e può essere personalizzato tramite override.
        </P>
      </Card>

      {/* ---------------------------------------------------------- */}
      {/* PROPS */}
      {/* ---------------------------------------------------------- */}

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Props</Heading>
        <Divider />

        <Code>
{`title?: string
  Testo mostrato sul pulsante.

onPress?: () => void
  Funzione chiamata al tocco.

type?: "primary" | "secondary" | "outline"
  Variante grafica del pulsante (default: "primary").

size?: "sm" | "md" | "lg"
  Dimensione del pulsante (default: "md").

loading?: boolean
  Se true mostra il loader e disabilita il bottone.

icon?: LucideIcon
  Icona visualizzata a sinistra del testo.

disabled?: boolean
  Disabilita il bottone e riduce l’opacità.

bgColor?: string
  Override del colore di sfondo.

textColor?: string
  Override del colore del testo.

borderColor?: string
  Override del colore del bordo.`}
        </Code>
      </Card>

      {/* ---------------------------------------------------------- */}
      {/* ESEMPI */}
      {/* ---------------------------------------------------------- */}

      <Heading level={2} style={{ marginTop: 30 }}>Esempi</Heading>

      {/* PRIMARY */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Primary</Heading>
        <Divider />
        <Button title="Continua" type="primary" onPress={() => {}} />

        <Code style={{ marginTop: 10 }}>
{`<Button
  title="Continua"
  type="primary"
  onPress={handlePress}
/>`}
        </Code>
      </Card>

      {/* SECONDARY */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Secondary</Heading>
        <Divider />
        <Button title="Avanti" type="secondary" size="lg" />

        <Code style={{ marginTop: 10 }}>
{`<Button
  title="Avanti"
  type="secondary"
  size="lg"
/>`}
        </Code>
      </Card>

      {/* OUTLINE */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Outline</Heading>
        <Divider />
        <Button title="Annulla" type="outline" size="sm" />

        <Code style={{ marginTop: 10 }}>
{`<Button
  title="Annulla"
  type="outline"
  size="sm"
/>`}
        </Code>
      </Card>

      {/* LOADING */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Loading</Heading>
        <Divider />
        <Button title="Caricamento..." loading type="primary" />

        <Code style={{ marginTop: 10 }}>
{`<Button
  title="Caricamento..."
  loading
  type="primary"
/>`}
        </Code>
      </Card>

      {/* OVERRIDE */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={4}>Override manuale dei colori</Heading>
        <Divider />

        <Button
          title="Custom Danger"
          bgColor="#D32F2F"
          textColor="#FFFFFF"
          borderColor="#B71C1C"
        />

        <Code style={{ marginTop: 10 }}>
{`<Button
  title="Custom Danger"
  bgColor="#D32F2F"
  textColor="#FFFFFF"
  borderColor="#B71C1C"
/>`}
        </Code>
      </Card>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}
