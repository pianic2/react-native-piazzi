// UI – esclusivamente dalla tua libreria
import {
  Column,
  Row,
  Card,
  Heading,
  Button,
  P,
  B,
  TextGroup,
  Link,
  CodeInline,
  Code,
  useTheme,
  Text,
  Box,
  useToast,
} from "ui";

export default function ToastProviderDocs() {
  const { theme } = useTheme();
  const { notify } = useToast();

  return (
    <Column>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>ToastProvider</Heading>
        <P>
          Il componente <CodeInline>ToastProvider</CodeInline> è un{" "}
          <B>provider globale</B> che gestisce il sistema di{" "}
          <B>toast notification</B> dell’applicazione.
        </P>
        <P>
          I toast sono <B>notifiche temporanee non bloccanti</B> utilizzate
          per informare l’utente su eventi, azioni completate o errori,
          senza interrompere il flusso dell’interfaccia.
        </P>
        <P>
          <CodeInline>ToastProvider</CodeInline> centralizza la gestione di{" "}
          <B>durata</B>, <B>posizionamento</B>, <B>priorità</B> e{" "}
          <B>animazioni</B>, mantenendo il sistema coerente e scalabile.
        </P>
      </TextGroup>

      {/* =====================================================
          PARAMETRI
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Parametri</Heading>

        <TextGroup>
          {/* duration */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 130 }}>
              <CodeInline size="md" align="right">duration</CodeInline>
            </Row>
            <P>
              <Heading level={4}>Durata:</Heading>{" "}
              Tempo (in millisecondi) prima che il toast venga
              automaticamente rimosso.
              <B>Valore di default:</B> <CodeInline>3000</CodeInline>.
            </P>
          </Row>

          {/* position */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 130 }}>
              <CodeInline size="md" align="right">position</CodeInline>
            </Row>
            <P>
              <Heading level={4}>Posizione:</Heading>{" "}
              Determina la posizione dello stack dei toast.
              <B>Valori supportati:</B> <CodeInline>"top"</CodeInline>,{" "}
              <CodeInline>"bottom"</CodeInline>.
              <B>Valore di default:</B> <CodeInline>"bottom"</CodeInline>.
            </P>
          </Row>

          {/* dismissOnPress */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 130 }}>
              <CodeInline size="md" align="right">dismissOnPress</CodeInline>
            </Row>
            <P>
              <Heading level={4}>Chiusura manuale:</Heading>{" "}
              Se impostato a <CodeInline>true</CodeInline>, il toast
              può essere chiuso manualmente con un click/tap.
              <B>Valore di default:</B> <CodeInline>true</CodeInline>.
            </P>
          </Row>

          {/* maxToasts */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 130 }}>
              <CodeInline size="md" align="right">maxToasts</CodeInline>
            </Row>
            <P>
              <Heading level={4}>Numero massimo:</Heading>{" "}
              Limita il numero di toast visibili contemporaneamente.
              I toast con priorità più alta (error &gt; warning &gt; success)
              hanno precedenza.
              <B>Valore di default:</B> <CodeInline>3</CodeInline>.
            </P>
          </Row>

          {/* pauseOnHover */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 130 }}>
              <CodeInline size="md" align="right">pauseOnHover</CodeInline>
            </Row>
            <P>
              <Heading level={4}>Pausa su hover (web):</Heading>{" "}
              Se attivo, il countdown del toast viene sospeso
              quando il mouse è sopra il toast.
              <B>Valore di default:</B> <CodeInline>true</CodeInline>.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>

      {/* =====================================================
          UTILIZZO
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Utilizzo</Heading>
        <P>
          Il <CodeInline>ToastProvider</CodeInline> deve essere montato{" "}
          <B>una sola volta</B>, generalmente nel layout o componente radice{" "}
          dell’applicazione.
        </P>

        <Code>{`<ToastProvider
  duration={3000}
  position="bottom"
  dismissOnPress
  maxToasts={3}
  pauseOnHover
>
  <App />
</ToastProvider>`}</Code>
      </TextGroup>

      {/* =====================================================
          HOOK
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>
          Hook: <CodeInline size="xxl">useToast</CodeInline>
        </Heading>

        <P>
          L’hook <CodeInline>useToast</CodeInline> permette di
          mostrare toast da qualsiasi componente figlio del provider.
        </P>

        <Code>{`function MyComponent() {
  const { notify } = useToast();

  return (
    <Button
      label="Mostra Toast"
      onPress={() =>
        notify(
          "Operazione completata con successo",
          "success",
          "Salvataggio"
        )
      }
    />
  );
}`}</Code>

        <Heading level={3}>
          Funzione: <CodeInline size="xl">notify</CodeInline>
        </Heading>

        <P>
          La funzione <CodeInline>notify</CodeInline> crea un nuovo toast
          utilizzando le impostazioni globali del provider.
        </P>

        <TextGroup>
          {/* title */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">title</CodeInline>
            </Row>
            <P>
              <B>Titolo:</B>{" "}
              Titolo del toast, mostrato sopra il messaggio.
            </P>
          </Row>
          {/* variant */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">variant</CodeInline>
            </Row>
            <P>
              <B>Variante:</B>{" "}
              Determina lo stile e la priorità del toast.
              Valori supportati:{" "}
              <CodeInline>"primary"</CodeInline>,{" "}
              <CodeInline>"info"</CodeInline>,{" "}
              <CodeInline>"success"</CodeInline>,{" "}
              <CodeInline>"warning"</CodeInline>,{" "}
              <CodeInline>"error"</CodeInline>.{" "}
              I toast hanno priorità crescente in questo ordine.
            </P>
          </Row>
          {/* message */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">message</CodeInline>
            </Row>
            <P>
              <B>Messaggio (opzionale):</B>{" "}
              Testo principale del toast.
            </P>
          </Row>
        </TextGroup>

        <Heading level={4}>Esempio di utilizzo</Heading>
        <Code>{`notify(
  "Salvataggio completato con successo",
  "success",
  "Il tuo profilo è stato aggiornato."
);`}</Code>
      </TextGroup>

      {/* =====================================================
          ESEMPIO
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Esempio pratico</Heading>
        <P>
          Ecco un esempio di come utilizzare il{" "}
          <CodeInline>ToastProvider</CodeInline> e l’hook{" "}
          <CodeInline>useToast</CodeInline> in un’applicazione.
        </P>
        <Code>{`import { ToastProvider, useToast, Button } from "ui";

function App() {
  const { notify } = useToast();

  return (
    <Button
      label="Mostra Toast di Successo"
      onPress={() =>
        notify(
          "Operazione completata con successo",
          "success",
          "Salvataggio"
        )
      }
    />
  );
}

export default function Root() {
  return (
    <ToastProvider position="top" duration={4000}>
      <App />
    </ToastProvider>
  );
}`}</Code>

    <Button
      label="Mostra Toast di Successo"
      onPress={() =>
        notify(
          "Operazione completata con successo",
          "success",
          "Salvataggio"
        )
      }
    />
      </TextGroup>  

      {/* =====================================================
          NAV
      ===================================================== */}
      <Row justify="flex-end">
        <Link
          href="/docs/components/surfaces/Badge"
          variant="button"
          size="lg"
        >
          Badge
        </Link>
      </Row>
    </Column>
  );
}
