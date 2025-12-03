import { ScrollView, View } from "react-native";
import {
  Heading,
  Card,
  Divider,
  P,
  B,
  Code,
  CodeInline,
  FormField,
} from "ui";
import {
  Input,
  InputPassword,
  Switch,
  Checkbox,
  RadioGroup,
  Select,
} from "ui";
import { useState } from "react";

export default function FormDoc() {
  const [checked, setChecked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [radioValue, setRadioValue] = useState("opt1");
  const [selected, setSelected] = useState("");

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Heading level={1}>Componenti Form</Heading>
      <P>
        I componenti form di <B>SmartTutor UI</B> sono completamente
        tematizzati e integrati con il sistema di theming. Supportano stati
        come <CodeInline>error</CodeInline>, <CodeInline>status</CodeInline>,{" "}
        <CodeInline>variant</CodeInline> e <CodeInline>colorScheme</CodeInline>,
        oltre all’orchestrazione tramite <B>FormField</B>.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* INPUT */}
      <Card>
        <Heading level={3}>Input</Heading>
        <Divider />

        <P>
          <B>Input</B> è il campo base per testo singola riga. Supporta le
          props native di <CodeInline>TextInput</CodeInline>, più alcune extra
          legate al design system: <B>error</B>, <B>status</B>,{" "}
          <B>variant</B>, <B>colorScheme</B>.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Props
        </Heading>
        <Code>
{`error?: boolean
  Attiva lo stato di errore (bordo danger).

status?: "default" | "error" | "success" | "warning"
  Stato semantico del campo.

variant?: "outline" | "filled" | "unstyled"
  Stile visivo del campo (default: "outline").

colorScheme?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger"
  Palette colore di riferimento (default: "outline").

...TextInputProps
  Tutte le props native di TextInput.`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>
        <Code>
{`<Input
  placeholder="Nome"
  variant="outline"
  colorScheme="outline"
/>`}
        </Code>

        <Input
          placeholder="Nome"
          variant="outline"
          colorScheme="outline"
          style={{ marginTop: 10 }}
        />
      </Card>

      {/* INPUT PASSWORD */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>InputPassword</Heading>
        <Divider />

        <P>
          <B>InputPassword</B> estende la logica di <B>Input</B> aggiungendo il
          toggle mostra/nascondi password tramite icona. Supporta le stesse
          props extra di Input.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Props
        </Heading>

        <Code>
{`error?: boolean
status?: "default" | "error" | "success" | "warning"
variant?: "outline" | "filled" | "unstyled"
colorScheme?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger"
...TextInputProps`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>

        <Code>
{`<InputPassword
  placeholder="Password"
  variant="outline"
/>`}
        </Code>

        <InputPassword
          placeholder="Password"
          variant="outline"
          style={{ marginTop: 10 }}
        />
      </Card>

      {/* SWITCH */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Switch</Heading>
        <Divider />

        <P>
          <B>Switch</B> è un toggle on/off minimal, con animazione fluida della
          thumb. Può usare un <CodeInline>colorScheme</CodeInline> e uno{" "}
          <CodeInline>status</CodeInline> per cambiare colore della track.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Props
        </Heading>

        <Code>
{`value: boolean
  Stato dello switch.

onChange: (value: boolean) => void
  Callback al toggle.

status?: "default" | "error" | "success" | "warning"
  Stato semantico del toggle.

colorScheme?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger"
  Palette usata per il colore attivo.`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>

        <Code>
{`<Switch
  value={enabled}
  onChange={setEnabled}
  colorScheme="primary"
/>`}
        </Code>

        <Switch
          value={enabled}
          onChange={setEnabled}
          colorScheme="primary"
        />
      </Card>

      {/* CHECKBOX */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Checkbox</Heading>
        <Divider />

        <P>
          <B>Checkbox</B> rappresenta una selezione booleana con animazione
          della spunta. È pensata per liste di opzioni multiple, termini e
          condizioni, preferenze, ecc.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Props
        </Heading>

        <Code>
{`checked: boolean
  Stato selezionato/non selezionato.

onChange: (checked: boolean) => void
  Callback al click.

status?: "default" | "error" | "success" | "warning"
  Stato semantico.

colorScheme?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger"
  Palette usata per il colore attivo.`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>

        <Code>
{`<Checkbox
  checked={checked}
  onChange={setChecked}
  colorScheme="primary"
/>`}
        </Code>

        <Checkbox
          checked={checked}
          onChange={setChecked}
          colorScheme="primary"
        />
      </Card>

      {/* RADIO GROUP */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>RadioGroup</Heading>
        <Divider />

        <P>
          <B>RadioGroup</B> gestisce selezione singola tra più opzioni.
          Utilizza cerchi esterni/interni e la palette scelta per evidenziare
          l’opzione selezionata.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Props
        </Heading>

        <Code>
{`value: string
  Valore selezionato.

onChange: (value: string) => void
  Callback.

options: { label: string; value: string }[]
  Opzioni disponibili.

status?: "default" | "error" | "success" | "warning"
  Stato semantico.

colorScheme?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger"
  Palette del cerchio attivo.`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>

        <Code>
{`<RadioGroup
  value={radioValue}
  onChange={setRadioValue}
  options={[
    { label: "Opzione 1", value: "opt1" },
    { label: "Opzione 2", value: "opt2" },
  ]}
/>`}
        </Code>

        <RadioGroup
          value={radioValue}
          onChange={setRadioValue}
          options={[
            { label: "Opzione 1", value: "opt1" },
            { label: "Opzione 2", value: "opt2" },
          ]}
        />
      </Card>

      {/* SELECT */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Select</Heading>
        <Divider />

        <P>
          <B>Select</B> permette di scegliere un valore da una lista tramite un
          modal/sheet minimale. Supporta error state e palette personalizzabile.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Props
        </Heading>

        <Code>
{`options: { label: string; value: string }[]
  Lista delle opzioni.

value: string
  Valore selezionato.

onChange: (value: string) => void
  Callback.

placeholder?: string
  Testo mostrato quando nessun valore è selezionato.

error?: boolean
  Stato di errore (bordo danger).

status?: "default" | "error" | "success" | "warning"
  Stato semantico.

colorScheme?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger"
  Palette del bordo.`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>

        <Code>
{`<Select
  value={selected}
  onChange={setSelected}
  placeholder="Seleziona un elemento"
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]}
/>`}
        </Code>

        <Select
          value={selected}
          onChange={setSelected}
          placeholder="Seleziona un elemento"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
          ]}
        />
      </Card>

      {/* FORMFIELD */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>FormField</Heading>
        <Divider />

        <P>
          <B>FormField</B> è il wrapper che unisce label, richieste, testi di
          aiuto ed errori in un unico componente. Coordina il campo figlio
          (Input, Select, ecc.) passando <CodeInline>error</CodeInline>,{" "}
          <CodeInline>status</CodeInline>, e proprietà per l’accessibilità se
          supportate.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Props
        </Heading>

        <Code>
{`label?: string
  Testo mostrato sopra il campo.

helperText?: string
  Testo di aiuto sotto il campo.

errorText?: string
  Messaggio di errore. Se presente, ha priorità sull'helperText.

required?: boolean
  Aggiunge "*" alla label.

variant?: string
  Variante logica passata al field se supportata.

colorScheme?: string
  Palette logica passata al field se supportata.

status?: "default" | "error" | "success" | "warning"
  Stato semantico coordinato.

style?: ViewStyle | ViewStyle[]
  Stili extra.

children: ReactElement
  Campo di input (Input, Select, ecc.).`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>

        <Code>
{`<FormField
  label="Email"
  helperText="Useremo questa email per accedere all'account."
  required
  status="default"
>
  <Input placeholder="Inserisci la tua email" />
</FormField>`}
        </Code>

        <FormField
          label="Email"
          helperText="Useremo questa email per accedere all'account."
          required
        >
          <Input placeholder="Inserisci la tua email" />
        </FormField>
      </Card>

      <View style={{ height: 60 }} />
    </ScrollView>
  );
}
