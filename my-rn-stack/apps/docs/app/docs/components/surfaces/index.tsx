import React from "react";
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
    Hero,
    Box,
} from "ui";

export default function SurfacesIndex() {
    return (
        <Column gap="xl">
            {/* =====================================================
          INTRO
      ===================================================== */}
            <TextGroup>
                <Heading align="left" level={1}>Componenti di Superfice</Heading>

                <P>
                    Il sistema di superfici della UI fornisce componenti flessibili e potenti per creare strutture di pagina coerenti e responsive.{" "}
                    Utilizzando i componenti di superfici, puoi facilmente organizzare e allineare gli elementi della tua interfaccia utente in modo intuitivo.{" "}
                    I componenti di superfice principali includono:
                </P>
            </TextGroup>

            {/* =====================================================
            CARD
        ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>Card</Heading>
                    <P>
                        Il componente <CodeInline>Card</CodeInline> è un contenitore flessibile che consente di raggruppare e presentare informazioni correlate in modo visivamente accattivante.{" "}
                    </P>

                    <Divider />

                    <Heading level={4}>Esempio</Heading>
                    <Code>{`<Card padding="md" margin="none" shadow="lg">
    <Heading level={3}>Titolo della Card</Heading>
    <P>Questo è un esempio di contenuto all'interno di una Card.</P>
    <Button variant="primary" label="Azione" disabled={true} size="sm"/>
</Card>`}</Code>
                    <Card padding="md" shadow="lg">
                        <TextGroup>
                            <Heading level={3}>Titolo della Card</Heading>
                            <P>Questo è un esempio di contenuto all'interno di una Card.</P>
                            <Button variant="primary" label="Azione" disabled={true} size="sm" />
                        </TextGroup>
                    </Card>

                    <Row>
                        <Link href="/docs/components/surfaces/Card" variant="button">Approfondisci Card</Link>
                    </Row>
                </TextGroup>
            </Card>

            {/* =====================================================
            BADGE
        ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>Badge</Heading>
                    <P>
                        Il componente <CodeInline>Badge</CodeInline> è un piccolo indicatore visivo utilizzato per mostrare lo stato, le notifiche o le etichette di categoria.{" "}
                        I Badge sono spesso utilizzati per attirare l'attenzione su informazioni importanti o per indicare conteggi.
                    </P>

                    <Divider />

                    <Heading level={4}>Esempio</Heading>
                    <Code>{`<Badge variant="success">Nuovo</Badge>
<Badge variant="warning">In Attesa</Badge>
<Badge variant="error">Errore</Badge>`}</Code>
                </TextGroup>
            </Card>

            {/* =====================================================
            HERO    
        ===================================================== */}
            <Card>
                <TextGroup>
                    <Heading level={2}>Hero</Heading>
                    <P>
                        Il componente <CodeInline>Hero</CodeInline> è una sezione prominente della pagina utilizzata per catturare l'attenzione degli utenti e comunicare messaggi chiave.{" "}
                        Le Hero sono spesso utilizzate come introduzione visiva o come punto focale per promuovere contenuti importanti.{" "}
                        Il componente <CodeInline>Hero</CodeInline> è progettato per allineare e centrare il contenuto in modo efficace.{" "}
                        L'altezza dell'elemento è configurabile per adattarsi alle esigenze specifiche del layout, di default è impostata a 100% dell'altezza della finestra di visualizzazione.
                    </P>

                    <Divider />

                    <Heading level={4}>Esempio</Heading>
                    <Code>{`<Hero
>
    <TextGroup>
        <Heading level={1} align="center">Benvenuto nella nostra App</Heading>
        <P align="center">Scopri le funzionalità principali e inizia subito.</P>
        <Button variant="primary" label="Inizia Ora" />
    </TextGroup>
</Hero>`}</Code>
                    <Hero
                    >
                        <TextGroup>
                            <Heading level={1} align="center">Benvenuto nella nostra App</Heading>
                            <P align="center">Scopri le funzionalità principali e inizia subito.</P>
                            <Button variant="primary" label="Inizia Ora" />
                        </TextGroup>
                    </Hero>
                </TextGroup>
            </Card>

            <Row justify="flex-end">
                <Link href="/docs/components/feedback" variant="button" size="lg">Feedback</Link>
            </Row>
        </Column>
    );
}
