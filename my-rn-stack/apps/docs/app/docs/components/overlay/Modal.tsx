
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
  Button,
  Text,
} from "ui";

import { Modal } from "ui";

export default function ModalIndex() {
  const [open, setOpen] = useState(false);

  return (
    <Column>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <TextGroup>
        <Heading level={1}>Modal</Heading>
        <P>
          Il componente <CodeInline>Modal</CodeInline> è un overlay
          che blocca temporaneamente l’interazione con l’interfaccia
          principale per focalizzare l’attenzione dell’utente
          su un contenuto o un’azione specifica.
        </P>
        <P>
          È indicato per <B>conferme</B>, <B>form</B>,
          <B>azioni critiche</B> o flussi che richiedono
          una decisione esplicita.
        </P>
      </TextGroup>

      {/* =====================================================
          ARCHITETTURA
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Architettura</Heading>
        <P>
          <CodeInline>Modal</CodeInline> fa parte dell’
          <B>Overlay System</B> e utilizza il componente
          nativo <CodeInline>Modal</CodeInline> di React Native.
        </P>
        <P>
          Il contenuto viene renderizzato sopra un backdrop
          semi-trasparente che isola l’interazione.
        </P>
      </TextGroup>

      {/* =====================================================
          PROPS
      ===================================================== */}
      <TextGroup>
        <Heading level={2}>Props</Heading>

        <TextGroup>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 160 }}>
              <CodeInline>visible</CodeInline>
            </Row>
            <P>
              <B>Visibilità:</B>{" "}
              Controlla se il modal è aperto o chiuso.
            </P>
          </Row>

          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 160 }}>
              <CodeInline>onClose</CodeInline>
            </Row>
            <P>
              <B>Callback di chiusura:</B>{" "}
              Viene chiamata quando il modal deve chiudersi.
            </P>
          </Row>

          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 160 }}>
              <CodeInline>size</CodeInline>
            </Row>
            <P>
              <B>Dimensione:</B>{" "}
              <CodeInline>sm</CodeInline>,{" "}
              <CodeInline>md</CodeInline>,{" "}
              <CodeInline>lg</CodeInline>.
            </P>
          </Row>

          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 160 }}>
              <CodeInline>dismissOnBackdrop</CodeInline>
            </Row>
            <P>
              <B>Chiusura su backdrop:</B>{" "}
              Permette di chiudere il modal cliccando
              fuori dal contenuto.
            </P>
          </Row>
        </TextGroup>
      </TextGroup>


      {/* =====================================================
          UTILIZZO
      ===================================================== */}
      <Card>
        <TextGroup>
          <Heading level={2}>Utilizzo</Heading>

          <Divider />

          <Heading level={4}>Esempio base</Heading>

          <Code>{`const [open, setOpen] = useState(false);

<Button
  label="Apri Modal"
  onPress={() => setOpen(true)}
/>

<Modal
  visible={open}
  onClose={() => setOpen(false)}
>
  <Text weight="bold">Titolo Modal</Text>
  <Text>Contenuto del modal</Text>
</Modal>`}</Code>

          <Button
            label="Apri Modal"
            onPress={() => setOpen(true)}
          />

          <Modal
            visible={open}
            onClose={() => setOpen(false)}
          >
            <Text weight="bold" size="lg">
              Titolo Modal
            </Text>

            <Text style={{ marginTop: 8 }}>
              Questo è un esempio di contenuto all’interno
              di un modal.
            </Text>

            <Row justify="flex-end" style={{ marginTop: 16 }}>
              <Button
                variant="ghost"
                label="Chiudi"
                onPress={() => setOpen(false)}
              />
            </Row>
          </Modal>
        </TextGroup>
      </Card>

      {/* =====================================================
          NAV
      ===================================================== */}
      <Row justify="flex-end">
        <Link
          href="/docs/components/overlay"
          variant="button"
          size="lg"
        >
          Overlay
        </Link>
      </Row>
    </Column>
  );
}
