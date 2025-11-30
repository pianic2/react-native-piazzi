import { ScrollView } from "react-native";
import { Heading, Card, Divider, Button, P, B, Code } from "ui";

export default function ButtonsDoc() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* TITLE */}
      <Heading level={1}>Button – Componente base per azioni</Heading>

      <P>
        Il componente <B>Button</B> è il pulsante principale della libreria UI.
        È progettato per essere tematizzabile, scalabile e coerente con il design
        system. Supporta varianti (<B>primary</B>, <B>secondary</B>, <B>outline</B>),
        dimensioni (<B>sm</B>, <B>md</B>, <B>lg</B>), stato di loading, icone e
        disabilitazione.
      </P>

      {/* THEME SECTION */}
      <Card style={styles.card}>
        <Heading level={3}>Integrazione con il tema</Heading>
        <Divider />

        <P>
          Il bottone utilizza <B>useTheme</B> per accedere ai colori della palette
          corrente. La variante scelta tramite <B>type</B> determina quali colori
          usare. Gli override opzionali <B>bgColor</B>, <B>textColor</B> e 
          <B>borderColor</B> consentono piena personalizzazione.
        </P>

        <Code>
{`const { colors } = useTheme();
const palette = colors[type];`}
        </Code>
      </Card>

      {/* TYPE SECTION */}
      <Card style={styles.card}>
        <Heading level={3}>Varianti grafiche (type)</Heading>
        <Divider />

        <P>
          La prop <B>type</B> controlla la personalità visiva del bottone. Le varianti
          disponibili (primary, secondary, outline) si appoggiano sui colori definiti
          nel tema.
        </P>
      </Card>

      {/* SIZE SECTION */}
      <Card style={styles.card}>
        <Heading level={3}>Dimensioni (size)</Heading>
        <Divider />

        <P>
          La prop <B>size</B> regola padding, border-radius, font-size e dimensione 
          dell'icona. I preset <B>sm</B>, <B>md</B>, <B>lg</B> mantengono coerenza estetica.
        </P>

        <Code>
{`const sizeMap = {
  sm: { pv: 8,  ph: 14, br: 8,  fs: 14, is: 16 },
  md: { pv: 14, ph: 20, br: 10, fs: 16, is: 20 },
  lg: { pv: 18, ph: 26, br: 12, fs: 18, is: 22 },
};`}
        </Code>
      </Card>

      {/* LOADING */}
      <Card style={styles.card}>
        <Heading level={3}>Stato di loading</Heading>
        <Divider />

        <P>
          Con <B>loading</B> attivo, il bottone mostra un <B>ActivityIndicator</B>,
          disabilita l'interazione, nasconde testo e icona e previene doppi tap.
        </P>
      </Card>

      {/* ICON */}
      <Card style={styles.card}>
        <Heading level={3}>Icone (LucideIcon)</Heading>
        <Divider />

        <P>
          La prop <B>icon</B> permette di rendere un'icona Lucide a sinistra del testo.
          Se <B>loading</B> è true, l'icona viene omessa.
        </P>
      </Card>

      {/* DISABLED */}
      <Card style={styles.card}>
        <Heading level={3}>Stato disabled</Heading>
        <Divider />

        <P>
          Il bottone viene disabilitato quando <B>disabled</B> o <B>loading</B> sono true.
          L'opacità si riduce e il tap viene bloccato.
        </P>
      </Card>

      {/* TOUCH */}
      <Card style={styles.card}>
        <Heading level={3}>Comportamento al tap</Heading>
        <Divider />

        <P>
          Il componente usa <B>TouchableOpacity</B>. Su iOS applica 
          <Code textStyle={{ fontSize: 14 }}>activeOpacity=0.65</Code>.
        </P>
      </Card>

      {/* PROPS TABLE */}
      <Card style={styles.card}>
        <Heading level={3}>Props</Heading>
        <Divider />

        <Code>
{`title: string
onPress: () => void
type: "primary" | "secondary" | "outline"
size: "sm" | "md" | "lg"
loading: boolean
icon: LucideIcon
disabled: boolean
bgColor: string
textColor: string
borderColor: string`}
        </Code>
      </Card>

      {/* EXAMPLES */}
      <Heading level={2} style={{ marginTop: 30 }}>Esempi</Heading>

      <Card style={styles.card}>
        <Heading level={4}>Primary</Heading>
        <Divider />
        <Button title="Continua" type="primary" />
      </Card>

      <Card style={styles.card}>
        <Heading level={4}>Secondary</Heading>
        <Divider />
        <Button title="Avanti" type="secondary" size="lg" />
      </Card>

      <Card style={styles.card}>
        <Heading level={4}>Outline</Heading>
        <Divider />
        <Button title="Annulla" type="outline" size="sm" />
      </Card>

      <Card style={styles.card}>
        <Heading level={4}>Loading</Heading>
        <Divider />
        <Button title="Salvataggio..." loading type="primary" />
      </Card>
    </ScrollView>
  );
}

const styles = {
  card: { marginTop: 20 },
};
