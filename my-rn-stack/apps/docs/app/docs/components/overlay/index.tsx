import React, { useState } from "react";

// UI – esclusivamente dalla tua libreria
import {
  Column,
  Heading,
  P,
  B,
  TextGroup,
  Code,
  CodeInline,
  Row,
  Card,
  Link,
  Divider,
  Popover,
  Button,
  Text,
  Tooltip,
  Modal,
} from "ui";

export default function OverlayIndex() {
  const [modal, setModal] = useState(false);

  return (
    <Column>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>Overlay System</Heading>
        <P>
          Il <B>Overlay System</B> della UI fornisce un insieme di componenti
          progettati per visualizzare contenuti <B>sovrapposti</B>
          all’interfaccia principale.
        </P>
        <P>
          Gli overlay permettono di mostrare informazioni contestuali,
          azioni temporanee o flussi secondari senza interrompere
          la navigazione principale dell’utente.
        </P>
      </TextGroup>

      {/* =====================================================
          ARCHITETTURA
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Architettura</Heading>
        <P>
          Il sistema è composto da componenti specializzati, ognuno pensato
          per uno specifico caso d’uso:
        </P>

        <TextGroup>
          <P>• <CodeInline>Popover</CodeInline> → azioni e contenuti contestuali</P>
          <P>• <CodeInline>Tooltip</CodeInline> → suggerimenti informativi</P>
          <P>• <CodeInline>BottomSheet</CodeInline> → flussi e contenuti secondari su mobile</P>
        </TextGroup>

        <P>
          Ogni componente è <B>platform-aware</B> e adatta il proprio
          comportamento in base al contesto (web o mobile).
        </P>
      </TextGroup>

      {/* =====================================================
          POPOVER
      ===================================================== */}
      <Card>
        <TextGroup>
          <Heading level={2}>Popover</Heading>
          <P>
            Il componente <CodeInline>Popover</CodeInline> visualizza
            un contenuto flottante ancorato a un trigger.
            È ideale per menu contestuali, azioni rapide o pannelli
            informativi leggeri.
          </P>

          <Divider />

          <Heading level={4}>Parametri</Heading>
          <TextGroup>
            {/* renderTrigger */}
            <Row align="flex-start">
              <Row justify="flex-end" style={{ width: 110 }}>
                <CodeInline align="right">renderTrigger</CodeInline>
              </Row>
              <P>
                Funzione che riceve un oggetto con metodi per controllare
                l'apertura/chiusura del Popover e restituisce il
                componente trigger.
              </P>
            </Row>
            {/* placement */}
            <Row align="flex-start">
              <Row justify="flex-end" style={{ width: 110 }}>
                <CodeInline align="right">placement</CodeInline>
              </Row>
              <P>
                Specifica la posizione del Popover rispetto al trigger.
                Valori comuni includono <CodeInline>top</CodeInline>,
                <CodeInline>bottom</CodeInline>, <CodeInline>left</CodeInline>
                e <CodeInline>right</CodeInline>.
              </P>
            </Row>
            {/* gap */}
            <Row align="flex-start">
              <Row justify="flex-end" style={{ width: 110 }}>
                <CodeInline align="right">gap</CodeInline>
              </Row>
              <P>
                Distanza in pixel tra il Popover e il trigger.
                Usa i token tipografici per coerenza con il design system: <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline> e <CodeInline>xxxl</CodeInline>.
              </P>
            </Row>
          </TextGroup>
          <Divider />

          <Heading level={4}>Esempio</Heading>
          <P>
            Ecco un esempio di utilizzo del componente{" "}<CodeInline>Popover</CodeInline>:
          </P>
          <Code>{`<Popover
  renderTrigger={({ toggle }) => (
    <Button label="Apri Popover" onPress={toggle} />
  )}
>
  <Text>Contenuto del Popover</Text>
</Popover>`}</Code>

          <Popover
            renderTrigger={({ toggle }) => (
              <Button size="sm" label="Apri Popover" variant="ghost" onPress={toggle} />
            )}
          >
            <Text>Contenuto del Popover</Text>
          </Popover>

        </TextGroup>
      </Card>

      {/* =====================================================
          TOOLTIP
      ===================================================== */}
      <Card>
        <TextGroup>
          <Heading level={2}>Tooltip</Heading>
          <P>
            Il componente <CodeInline>Tooltip</CodeInline> fornisce
            brevi suggerimenti informativi associati a un elemento.
            È pensato esclusivamente per <B>web</B> e viene mostrato
            al passaggio del mouse o al focus.
          </P>

          <Divider />

          <Heading level={4}>Parametri</Heading>
          <TextGroup>
            {/* content */}
            <Row align="flex-start">
              <Row justify="flex-end" style={{ width: 100 }}>
                <CodeInline align="right">content</CodeInline>
              </Row>
              <P>
                Contenuto del Tooltip, solitamente una stringa o un
                componente di testo.
              </P>
            </Row>
            {/* placement */}
            <Row align="flex-start">
              <Row justify="flex-end" style={{ width: 100 }}>
                <CodeInline align="right">placement</CodeInline>
              </Row>
              <P>
                Specifica la posizione del Tooltip rispetto all'elemento
                target. Valori comuni includono <CodeInline>top</CodeInline>,
                <CodeInline>bottom</CodeInline>, <CodeInline>left</CodeInline>
                e <CodeInline>right</CodeInline>.
              </P>
            </Row>
            {/* delay */}
            <Row align="flex-start">
              <Row justify="flex-end" style={{ width: 100 }}>
                <CodeInline align="right">delay</CodeInline>
              </Row>
              <P>
                Tempo in millisecondi prima che il Tooltip venga mostrato o nascosto. Impostata di defaul a <CodeInline>450</CodeInline>
              </P>
            </Row>
          </TextGroup>

          <Divider />

          <Heading level={4}>Esempio</Heading>
          <Code>{`<Tooltip content="Informazione aggiuntiva">
  <Text>Hover me</Text>
</Tooltip>`}</Code>
          <Tooltip placement="top" content="Informazione aggiuntiva">
            <Text>Hover me</Text>
          </Tooltip>

        </TextGroup>
      </Card>

      {/* =====================================================
          MODAL
      ===================================================== */}
      <Card>
        <TextGroup>
          <Heading level={2}>Modal</Heading>
          <P>
            Il componente <CodeInline>Modal</CodeInline> è una finestra
            di dialogo sovrapposta che richiede l'attenzione dell'utente.
            Viene utilizzato per azioni critiche, conferme o contenuti
            che richiedono un focus completo.
          </P>
          <Divider />

          <Heading level={4}>Esempio</Heading>
          <Code>{`<Modal
  onClose={() => { }}
  size="md"
  visible={modal}
  dismissOnBackdrop={true}
>
<TextGroup>
    <Heading level={3}>Contenuto del Modal</Heading>
    <P>Un testo di esempio all'interno del Modal.</P>
    <Button label="Chiudi il modale" variant="danger" onPress={() => setModal(false)} />
  </TextGroup>
</Modal>

<Button label="Apri il modale" variant="secondary" size="sm" onPress={() => setModal(true)} />`}</Code>

          <Modal
            onClose={() => { }}
            size="md"
            visible={modal}
            dismissOnBackdrop={true}
          >
            <TextGroup>
              <Heading level={3}>Contenuto del Modal</Heading>
              <P>Un testo di esempio all'interno del Modal.</P>
              <Button label="Chiudi il modale" variant="danger" onPress={() => setModal(false)} />
            </TextGroup>
          </Modal>

          <Button label="Apri il modale" variant="secondary" size="sm" onPress={() => setModal(true)} />

          <Divider />

          <Link
            href="/docs/components/overlay/Modal"
            variant="button"
          >
            Approfondisci Modal
          </Link>
        </TextGroup>
      </Card>

      {/* =====================================================
          BEST PRACTICES
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Best practices</Heading>
        <TextGroup>
          <P>• Usa <CodeInline>Tooltip</CodeInline> solo per informazioni brevi</P>
          <P>• Preferisci <CodeInline>Popover</CodeInline> per azioni contestuali</P>
          <P>• Usa <CodeInline>Modal</CodeInline> per avvisi sovrapposti</P>
          <P>• Evita overlay annidati</P>
        </TextGroup>
      </TextGroup>

      {/* =====================================================
          NAV
      ===================================================== */}
      <Row justify="flex-end">
        <Link
          href="/docs/components/feedback"
          variant="button"
          size="lg"
        >
          Feedback
        </Link>
      </Row>
    </Column>
  );
}
