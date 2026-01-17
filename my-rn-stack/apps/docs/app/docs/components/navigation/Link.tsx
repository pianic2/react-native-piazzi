import React from "react";
import { ScrollView } from "react-native";

// UI – esclusivamente dalla tua libreria
import {
  Column,
  Row,
  Card,
  Heading,
  P,
  TextGroup,
  Link,
  CodeInline,
  Code,
  useTheme,
  useToast

} from "ui";

export default function LinkDocs() {
  const { notify } = useToast();
  return (
    <Column>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>Link</Heading>
        <P>
          Il componente <CodeInline>Link</CodeInline> è utilizzato per
          navigare tra le pagine dell'applicazione. Si integra con il
          sistema di routing interno per fornire una navigazione fluida
          e coerente.
        </P>
        <P>
          Utilizzando <CodeInline>Link</CodeInline>, puoi creare collegamenti
          ipertestuali che:
        </P>
        <TextGroup>
          <P>• supportano la navigazione senza ricaricare la pagina</P>
          <P>• gestiscono correttamente lo storico della navigazione</P>
          <P>• sono accessibili e ottimizzati per dispositivi mobili</P>
        </TextGroup>
      </TextGroup>

      {/* =====================================================
          PARAMETRI
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          {/* href */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">href</CodeInline>
            </Row>
            <P>
              Specifica la destinazione del link. Può essere un percorso
              interno all'applicazione o un URL esterno.
            </P>
          </Row>
          {/* variant */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">variant</CodeInline>
            </Row>
            <P>
              Definisce lo stile del link. Può essere "text" per un link
              testuale standard o "button" per un link con aspetto di
              pulsante.
            </P>
          </Row>
          {/* size */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">size</CodeInline>
            </Row>
            <P>
              Imposta la dimensione del link. Le opzioni includono "sm",
              "md" e "lg" per piccole, medie e grandi dimensioni.
            </P>
          </Row>
          {/* underline */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">underline</CodeInline>
            </Row>
            <P>
              Determina se il link deve essere sottolineato. Il valore predefinito è
              <CodeInline>true</CodeInline>.
            </P>
          </Row>
          {/* exact */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">exact</CodeInline>
            </Row>
            <P>
              Specifica se il link deve essere considerato attivo solo quando
              il percorso corrisponde esattamente a <CodeInline>href</CodeInline>.
              Il valore predefinito è <CodeInline>true</CodeInline>.
            </P>
          </Row>
          {/* onPress */}
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}>
              <CodeInline align="right">onPress</CodeInline>
            </Row>
            <P>
              Funzione opzionale da eseguire quando il link viene premuto.
              Utile per gestire eventi personalizzati oltre alla navigazione.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>


      <TextGroup>
        <Heading level={2}>API di base</Heading>
        <P>
          Di seguito è mostrato un esempio esaustivo di come implementare <CodeInline>Link</CodeInline> all'interno del tuo codice.{" "}
          A fine di esempio utilizziamo <Link href="docs/components/feedback">l'hook notify</Link>.
        </P>
        <Code>{`<Link
  href="/docs/components/navigation/Link"
  variant="button"
  size="lg"
  underline={true}
  onPress={notify()}
>
  Card
</Link>`}</Code>
<Link
  href="/docs/components/navigation/Link"
  variant="button"
  size="lg"
  underline={true}
  onPress={() => notify("Congratulazione!", "success", "Sei stato reindirizzato alla documentazione su Link")}
>
  Card
</Link>
      </TextGroup>

      <Row justify="space-between">
        <Link href="/docs" variant="button" size="lg">Docs</Link>
      </Row>
    </Column>
  );
}
