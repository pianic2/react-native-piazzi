import React from "react";
import { ScrollView } from "react-native";

// UI – esclusivamente dalla tua libreria
import {
  Column,
  Row,
  Card,
  Heading,
  P,
  B,
  TextGroup,
  Link,
  CodeInline,
  Code,
  useTheme,
  Text,
  Badge,
  Alert

} from "ui";

import { Dimensions } from 'react-native';

export default function AlertDocs() {
  const { theme } = useTheme();

  return (
    <Column>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>Alert</Heading>
        <P>
          Il componente <CodeInline>Alert</CodeInline> è un contenitore flessibile che consente di raggruppare e presentare informazioni importanti in modo visivamente accattivante.{" "}
          Gli Alert sono utilizzati per comunicare messaggi critici, avvisi o conferme all'utente, attirando la sua attenzione in modo efficace.
        </P>
      </TextGroup>

      {/* =====================================================
          PARAMETRI
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          {/* variant */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">variant</CodeInline></Row>  
            <P>
              <B>Variante dell'alert:</B>{" "}
              Definisce lo stile visivo dell'Alert. Le varianti comuni includono <CodeInline>primary</CodeInline>, <CodeInline>success</CodeInline>, <CodeInline>alert</CodeInline>, <CodeInline>info</CodeInline>, e <CodeInline>warning</CodeInline>. Ogni variante applica colori e stili specifici per rappresentare diversi stati o significati.
            </P>
          </Row>

          {/* title */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">title</CodeInline></Row>  
            <P>
              <B>Titolo dell'alert:</B>{" "}
              Un testo opzionale che funge da intestazione per l'Alert, fornendo un contesto immediato sul tipo di messaggio che l'Alert comunica.
            </P>
          </Row>

          {/* message */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">message</CodeInline></Row>  
            <P>
              <B>Messaggio dell'alert:</B>{" "}
              Il contenuto principale dell'Alert che comunica il messaggio all'utente. Può includere informazioni dettagliate, istruzioni o avvisi.
            </P>
          </Row>

          {/* actionLabel */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">actionLabel</CodeInline></Row>  
            <P>
              <B>Etichetta dell'azione:</B>{" "}
              Un testo opzionale che appare su un pulsante all'interno dell'Alert, invitando l'utente a intraprendere un'azione specifica in risposta al messaggio.
            </P>
          </Row>

          {/* onAction */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">onAction</CodeInline></Row>  
            <P>
              <B>Callback dell'azione:</B>{" "}
              Una funzione opzionale che viene eseguita quando l'utente preme il pulsante di azione nell'Alert. Questo consente di gestire eventi come la chiusura dell'Alert o l'esecuzione di operazioni correlate.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>
      <TextGroup>

        <Heading level={2}>API di base</Heading>
        <P>
          
        </P>
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
      </TextGroup>

      <Row justify="space-between">
        <Link href="/docs/components/feedback" variant="button" size="lg">Card</Link>
        <Link href="/docs/components/feedback/ProgressBar" variant="button" size="lg">Barra di Progresso</Link>
      </Row>
    </Column>
  );
}
