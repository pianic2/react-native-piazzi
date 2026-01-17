import React from "react";

// UI – esclusivamente dalla tua libreria
import {
  Column,
  Row,
  Heading,
  P,
  B,
  TextGroup,
  Link,
  CodeInline,
  Code,
  Divider
} from "ui";


export default function DividerDocs() {
  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Divider</Heading>
        <P>
          Il componente <CodeInline>Divider</CodeInline> è un elemento visivo utilizzato per separare contenuti o sezioni all'interno di un'interfaccia utente. Viene comunemente impiegato per migliorare la leggibilità e l'organizzazione del layout.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 150 }}><CodeInline align="right">thickness</CodeInline></Row>
            <P>
              <B>Spessore del divider:</B>{" "}
              Specifica lo spessore della linea del divider. Può essere espresso in unità di misura come pixel (es. <CodeInline>2</CodeInline>).
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 150 }}><CodeInline>spacing</CodeInline></Row>
            <P>
              <B>Spaziatura verticale:</B>{" "}
              Imposta lo spazio verticale sopra e sotto il divider per separarlo dagli altri elementi.{" "}
              Può essere espresso utilizzando i <Link href="docs/tokens/spacing">token di spaziatura</Link> definiti nel tema:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline>.
            </P>
          </Row>
        </TextGroup>
      </TextGroup> 

      <TextGroup>
        <Heading level={2}>API di base</Heading>
        <P>
          Il componente <CodeInline>Divider</CodeInline> è definito con i parametri preimpostati:
        </P>
        <Code>{`<Divider 
  thickness={2} 
  spacing="none" 
/>`}</Code>
    <Heading level={4}>Esempio</Heading>
<Divider 
  thickness={1} 
  spacing="none" 
/>
      </TextGroup>

          <Row justify="space-between">
            <Link href="docs/components/layout/ColumnRow" variant="button">Colonne e Righe</Link>
            <Link href="docs/components/layout/ColumnRow" variant="button">Colonne e Righe</Link>
          </Row>
    </Column>
  );
}
