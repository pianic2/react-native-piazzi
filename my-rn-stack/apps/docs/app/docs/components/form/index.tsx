import React, { useState } from "react";
import {
    Column,
    Heading,
    P,
    B,
    Small,
    TextGroup,
    Card,
    Code,
    CodeInline,
    Text,
    Row,
    Divider,
    Link,
    Button,
    Input,
    Box,
    PasswordInput,
    Textarea,
    RadioGroup,
    Select,
    Switch,
} from "ui";
import Icon from "react-native-vector-icons/FontAwesome6";


export default function FormIndex() {
    const [male, setMale] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <Column gap="xl">
            {/* =====================================================
            INTRO
            ===================================================== */}
            <TextGroup>
                <Heading level={1}>Sistema di Form</Heading>
                <P>
                    Il sistema di form della libreria UI offre una serie di
                    componenti e strumenti per creare moduli interattivi,
                    accessibili e facili da usare in applicazioni React Native.
                </P>
            </TextGroup>

            {/* =====================================================
            COMPONENTI DI FORM
             ===================================================== */}
            <TextGroup spacing="lg">
                <TextGroup>
                    <Heading level={2}>Componenti</Heading>
                    <P>
                        Analogamente al Typography System, il sistema di form{" "}
                        include componenti predefiniti che seguono le linee guida{" "}
                        di design della libreria UI. Tutti i compnenti sono{" "}
                        stati creati a partire dal componente <CodeInline>Input</CodeInline>.
                    </P>
                </TextGroup>

                {/* =====================================================
                INPUT
                 ===================================================== */}
                <Card>
                    <TextGroup>
                        <Heading level={3}>Input</Heading>
                        <P>
                            Componente centrale per la raccolta di dati testuali
                            dagli utenti. Supporta vari tipi di input, come testo,
                            email, password e numeri.
                        </P>

                        <Divider />
                        <Heading level={4}>Parametri</Heading>
                        <TextGroup>
                            {/* size */}
                            <Row align="flex-start">
                                <Row justify="flex-end" style={{ width: 110 }}>
                                    <CodeInline align="right">size</CodeInline></Row>
                                <P>
                                    Specifica la dimensione dell'input.{" "}
                                    Può essere <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline> o <CodeInline>lg</CodeInline>.
                                </P>
                            </Row>
                            {/* error */}
                            <Row align="flex-start">
                                <Row justify="flex-end" style={{ width: 110 }}>
                                    <CodeInline align="right">error</CodeInline></Row>
                                <P>
                                    Indica se l'input è in uno stato di errore.{" "}
                                    Se impostato su <CodeInline>true</CodeInline>, lo stile dell'input cambierà per riflettere lo stato di errore.
                                </P>
                            </Row>
                            {/* helperText */}
                            <Row align="flex-start">
                                <Row justify="flex-end" style={{ width: 110 }}>
                                    <CodeInline align="right">helperText</CodeInline></Row>
                                <P>
                                    Testo di supporto opzionale visualizzato sotto l'input.{" "}
                                    Utile per fornire indicazioni aggiuntive all'utente.
                                </P>
                            </Row>
                            {/* editable */}
                            <Row align="flex-start">
                                <Row justify="flex-end" style={{ width: 110 }}>
                                    <CodeInline align="right">editable</CodeInline></Row>
                                <P>
                                    Determina se l'input è modificabile.{" "}
                                    Se impostato su <CodeInline>false</CodeInline>, l'input sarà di sola lettura.
                                </P>
                            </Row>
                            {/* leftIcon */}
                            <Row align="flex-start">
                                <Row justify="flex-end" style={{ width: 110 }}>
                                    <CodeInline align="right">leftIcon</CodeInline></Row>
                                <P>
                                    Icona opzionale visualizzata sul lato sinistro dell'input.{" "}
                                    Può essere utilizzata per indicare il tipo di input richiesto.
                                </P>
                            </Row>
                            {/* rightIcon */}
                            <Row align="flex-start">
                                <Row justify="flex-end" style={{ width: 110 }}>
                                    <CodeInline align="right">rightIcon</CodeInline></Row>
                                <P>
                                    Icona opzionale visualizzata sul lato destro dell'input.{" "}
                                    Utile per azioni come la visualizzazione della password o la cancellazione del testo.
                                </P>
                            </Row>
                            {/* ...rest */}
                            <Row align="flex-start">
                                <Row justify="flex-end" style={{ width: 110 }}>
                                    <CodeInline align="right">...rest</CodeInline></Row>
                                <P>
                                    Supporta inoltre tutte le proprietà standard di un <CodeInline>TextInput</CodeInline> in React Native.
                                </P>
                            </Row>
                        </TextGroup>

                        <Divider />

                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<Input
  label="Email"
  required
  errorText="Inserisci un'email valida"
  helperText="Ti invieremo una conferma via email"
>
</Input>`}</Code>

                        <Input
                            label="Email"
                            leftIcon={<Icon name="envelope" size={18} />}
                            helperText="Ti invieremo una conferma via email"
                            placeholder="Email"
                        />
                    </TextGroup>
                </Card>

                <Card>
                    <TextGroup>
                        <Heading level={3}>Textarea</Heading>
                        <P>
                            Componente per l'inserimento di testo multilinea. Ideale
                            per commenti, descrizioni o qualsiasi altro input che
                            richieda più righe di testo.
                        </P>

                        <Divider />
                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<Textarea
  label="Descrizione"
  placeholder="Scrivi qui la tua descrizione..."
/>`}</Code>

                        <Textarea
                            leftIcon={<Icon name="envelope" size={18} />}
                            placeholder="Scrivi qui la tua descrizione..."
                        />
                    </TextGroup>
                </Card>

                <Card>
                    <TextGroup>
                        <Heading level={3}>PasswordInput</Heading>
                        <P>
                            Componente specializzato per l'inserimento di password.
                            Include funzionalità per mostrare o nascondere la
                            password inserita, migliorando l'usabilità e la
                            sicurezza.
                        </P>

                        <Divider />
                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<PasswordInput
  label="Password"
  placeholder="Inserisci la tua password"
/>`}</Code>

                        <PasswordInput
                            label="Password"
                            placeholder="Inserisci la tua password"
                        />
                    </TextGroup>
                </Card>

                <Card>
                    <TextGroup>
                        <Heading level={3}>RadioGroup</Heading>
                        <P>
                            Componente per la selezione di un'opzione tra un
                            insieme di scelte predefinite. Utile per domande a
                            risposta singola in moduli e sondaggi.
                        </P>

                        <Divider />
                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<RadioGroup
  label="Sesso"
  options={[
    { label: "Maschio", value: "male" },
    { label: "Femmina", value: "female" },
    { label: "Altro", value: "other" },
  ]}
/>`}</Code>


                    </TextGroup>
                </Card>

                {/* =====================================================
                SELECT
                 ===================================================== */}
                <Card>
                    <TextGroup>
                        <Heading level={3}>Select</Heading>
                        <P>
                            Componente per la selezione di un'opzione da un menu a
                            discesa. Ideale per risparmiare spazio nell'interfaccia
                            utente quando sono disponibili molte opzioni.
                        </P>

                        <Divider />
                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<Select
  label="Paese"
  options={[
    { label: "Italia", value: "it" },
    { label: "Francia", value: "fr" },
    { label: "Germania", value: "de" },
  ]}
/>`}</Code>

                    </TextGroup>
                </Card>


                {/* =====================================================
                SWITCH
                 ===================================================== */}
                <Card>
                    <TextGroup>
                        <Heading level={3}>Switch</Heading>
                        <P>
                            Componente per la selezione binaria, simile a un
                            interruttore on/off. Utile per opzioni di
                            configurazione e preferenze utente.
                        </P>

                        <Divider />
                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<Switch
  label="Attiva notifiche"
  value={notificationsEnabled}
  onChange={setNotificationsEnabled}
/>`}</Code>
                        <Switch
                            label="Attiva notifiche"
                            value={notificationsEnabled}
                            onChange={setNotificationsEnabled}
                        />
                    </TextGroup>
                </Card>

                {/* =====================================================
                ESEMPIO COMPLETO
                 ===================================================== */}
                <Card>
                    <TextGroup>
                        <Heading level={3}>Esempio Completo di Form</Heading>
                        <P>
                            Ecco un esempio di come utilizzare i componenti di form
                            insieme per creare un modulo di registrazione utente.
                        </P>

                        <Divider />
                        <Heading level={4}>Codice</Heading>
                        <Code>{`<Card>
  <TextGroup>
    <Heading level={2}>Registrazione Utente</Heading>
    <Input label="Nome Utente" placeholder="Inserisci il tuo nome utente" />
    <Input label="Email" placeholder="Inserisci la tua email" />
    <PasswordInput label="Password" placeholder="Crea una password" />
    <Textarea label="Bio" placeholder="Parlaci di te..." />
    <RadioGroup
      label="Sesso"
      options={[
        { label: "Maschio", value: "male" },
        { label: "Femmina", value: "female  " },
        { label: "Altro", value: "other" },
      ]}
    />
    <Button label="Registrati" />
  </TextGroup>
</Card>`}</Code>

                        <Card>
                            <TextGroup>
                                <Heading level={2}>Registrazione Utente</Heading>
                                <Input
                                    label="Nome Utente"
                                    placeholder="Inserisci il tuo nome utente"
                                />
                                <Input
                                    label="Email"
                                    placeholder="Inserisci la tua email"
                                />
                                <PasswordInput
                                    label="Password"
                                    placeholder="Crea una password"
                                />
                                <Textarea
                                    label="Bio"
                                    placeholder="Parlaci di te..."
                                />
                                <Button label="Registrati" />
                            </TextGroup>
                        </Card>
                    </TextGroup>
                </Card>
            </TextGroup>

            <Row justify="flex-end">
                <Link href="/docs/components/surfaces" variant="button" size="lg">Surfaces</Link>
            </Row>
        </Column>
    );
}
