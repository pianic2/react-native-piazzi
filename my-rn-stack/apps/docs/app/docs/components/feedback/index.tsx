import React from "react";
import {
    Alert,
    Spinner,
    ProgressBar,
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
    Hero,
    Box,
    ToastProvider,
    Skeleton,
    useToast,
} from "ui";

export default function SurfacesIndex() {
    const { notify } = useToast();

    return (
        <Column>
            {/* =====================================================
          INTRO
      ===================================================== */}
            <TextGroup>
                <Heading align="left" level={1}>Componenti di Feedback</Heading>

                <P>
                    Il sistema di feedback è essenziale per migliorare l'esperienza utente, fornendo risposte visive e interattive alle azioni degli utenti.{" "}
                    I componenti di feedback aiutano a comunicare lo stato delle operazioni, a guidare gli utenti attraverso i processi e a mantenere l'engagement.
                </P>
            </TextGroup>

            {/* =====================================================
            ALERT
        ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>Alert</Heading>
                    <P>
                        Il componente <CodeInline>Alert</CodeInline> è un contenitore flessibile che consente di raggruppare e presentare informazioni correlate in modo visivamente accattivante.{" "}
                    </P>

                    <Divider />


                    <Code>{`<Alert
    title="Titolo dell'Alert" 
    message="Questo è un esempio di contenuto all'interno di un Alert."
    variant="success"
    />`}</Code>
                    <Alert
                        title="Titolo dell'Alert"
                        message="Questo è un esempio di contenuto all'interno di un Alert."
                        variant="success"
                    />

                    <Row>
                        <Link href="docs/components/feedback/Alert" variant="button">Approfondisci Alert</Link>
                    </Row>
                </TextGroup>
            </Card>

            {/* =====================================================
            SPINNER
        ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>Spinner</Heading>
                    <P>
                        Il componente <CodeInline>Spinner</CodeInline> indica che un'operazione è in corso, fornendo un feedback visivo agli utenti durante i tempi di caricamento o elaborazione.{" "}
                        Il colore di default dello <CodeInline>Spinner</CodeInline> è <CodeInline>primary</CodeInline>.
                    </P>

                    <Divider />

                    <TextGroup>
                       <Heading level={4}>Parametri</Heading>
                        {/* variant */}
                        <Row align="flex-start">
                            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">variant</CodeInline></Row>
                            <P>
                                <B>Variante dell'alert:</B>{" "}
                                Definisce lo stile visivo dell'Alert. Le varianti comuni includono <CodeInline>primary</CodeInline>, <CodeInline>success</CodeInline>, <CodeInline>alert</CodeInline>, <CodeInline>info</CodeInline>, e <CodeInline>warning</CodeInline>. Ogni variante applica colori e stili specifici per rappresentare diversi stati o significati.
                            </P>
                        </Row>
                        {/* size */}
                        <Row align="flex-start">
                            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">size</CodeInline></Row>
                            <P>
                                <B>Dimensione dello spinner:</B>{" "}
                                Definisce la dimensione dello spinner. Le dimensioni comuni includono <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, e <CodeInline>lg</CodeInline>. Ogni dimensione applica un formato specifico per rappresentare diversi livelli di grandezza.
                            </P>
                        </Row>
                    </TextGroup>

                    <Code>{`<Spinner size="lg" color="primary" />`}</Code>
                    <Spinner size="lg" />
                </TextGroup>
            </Card>

            {/* =====================================================
            PROGRESS BAR
        ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>Progress Bar</Heading>
                    <P>
                        Il componente <CodeInline>ProgressBar</CodeInline> visualizza il progresso di un'operazione in corso, aiutando gli utenti a comprendere quanto manca al completamento.
                    </P>

                    <Divider />

                    <TextGroup>
                          <Heading level={4}>Parametri</Heading>
                        {/* progress */}
                        <Row align="flex-start">
                            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">progress</CodeInline></Row>
                            <P>
                                <B>Progresso:</B>{" "}
                                Valore numerico compreso tra 0 e 100 che rappresenta la percentuale di completamento della barra di progresso.
                            </P>
                        </Row>
                        {/* color */}
                        <Row align="flex-start">
                            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">color</CodeInline></Row>
                            <P>
                                <B>Colore:</B>{" "}
                                Colore della barra di progresso. Può essere uno dei seguenti valori: <CodeInline>primary</CodeInline>, <CodeInline>info</CodeInline>, <CodeInline>success</CodeInline>, <CodeInline>warning</CodeInline>, <CodeInline>error</CodeInline>.
                            </P>
                        </Row>
                    </TextGroup>

                    <Code>{`<ProgressBar progress={60} color="warning" />`}</Code>
                    <ProgressBar progress={60} color="warning" />

                    <Row>
                        <Link href="docs/components/feedback/ProgressBar" variant="button">Approfondisci Progress Bar</Link>
                    </Row>
                </TextGroup>
            </Card>

            {/* =====================================================
          SKELETON
      ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>Skeleton</Heading>
                    <P>
                        Il componente <CodeInline>Skeleton</CodeInline> fornisce un'indicazione visiva del caricamento dei contenuti, migliorando l'esperienza utente durante i tempi di attesa.
                    </P>

                    <Divider />

                    <TextGroup>
                        <Heading level={4}>Parametri</Heading>
                        {/* width */}
                        <Row align="flex-start">
                            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">width</CodeInline></Row>
                            <P>
                                <B>Larghezza:</B>{" "}
                                Specifica la larghezza del componente Skeleton. Può essere un numero (in pixel) o una stringa (ad esempio, "100%").
                            </P>
                        </Row>
                        {/* height */}
                        <Row align="flex-start">
                            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">height</CodeInline></Row>
                            <P>
                                <B>Altezza:</B>{" "}
                                Specifica l'altezza del componente Skeleton in pixel.
                            </P>
                        </Row>
                        {/* radius */}
                        <Row align="flex-start">
                            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">radius</CodeInline></Row>
                            <P>
                                <B>Raggio:</B>{" "}
                                Specifica il raggio di arrotondamento degli angoli del componente Skeleton in pixel.
                            </P>
                        </Row>
                    </TextGroup>

                    <Code>{`<Skeleton width={200} height={20} />`}</Code>
                        
                    <Skeleton width={200} height={20} />

                    <Row>
                        <Link href="docs/components/feedback/Skeleton" variant="button">Approfondisci Skeleton</Link>
                    </Row>
                </TextGroup>
            </Card>

            {/* =====================================================
          TOASTPROVIDER
      ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>ToastProvider</Heading>
                    <P>
                        Il componente <CodeInline>ToastProvider</CodeInline> gestisce e visualizza notifiche temporanee (toasts) per fornire feedback agli utenti su azioni o eventi.
                    </P>

                    <Divider />

                    <Code>{`<ToastProvider>
  <Button label="Mostra Toast" onPress={() => notify("Questo è un toast di esempio!", "success")} />
</ToastProvider>`}</Code>
                        <Button label="Mostra Toast" variant="secondary"  onPress={() => notify("Questo è un toast di esempio!", "success")} />

                    <Row>
                        <Link href="docs/components/feedback/ToastProvider" variant="button">Approfondisci ToastProvider</Link>
                    </Row>
                </TextGroup>
            </Card>

            <Row justify="flex-end">
                <Link href="/docs/components/navigation" variant="button" size="lg">Navigazione</Link>
            </Row>
        </Column>
    );
}
