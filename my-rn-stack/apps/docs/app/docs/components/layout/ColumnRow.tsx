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

} from "ui";

import { Dimensions } from 'react-native';

export default function ColumnRowDocs() {
  const { theme } = useTheme();

  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Column e Row</Heading>
        <P>
          Il componente <CodeInline>Column</CodeInline> è un componente di layout che dispone gli elementi figli in una colonna verticale.{" "}
          Il componente <CodeInline>Row</CodeInline> è un componente di layout che dispone gli elementi figli in una riga orizzontale.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Parametri</Heading>
        <TextGroup>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">gap</CodeInline></Row>
            <P>
              <B>Spaziatura tra figli:</B>{" "}
              recupera dai <Link href="docs/tokens/spacing">token di spaziatura</Link>{" "}
              (<CodeInline>theme.spacing</CodeInline>){" "}
              la dimensione dello spazio tra gli elementi. Le opzioni disponibili sono:{" "}
              <CodeInline>none</CodeInline>, <CodeInline>xs</CodeInline>, <CodeInline>sm</CodeInline>, <CodeInline>md</CodeInline>, <CodeInline>lg</CodeInline>, <CodeInline>xl</CodeInline>, <CodeInline>xxl</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">align</CodeInline></Row>
            <P>
              <B>Allineamento verticale:</B>{" "}
              definisce l'allineamento verticale degli elementi figli all'interno della riga. Le opzioni disponibili sono:{" "}
              <CodeInline>flex-start</CodeInline>, <CodeInline>center</CodeInline>, <CodeInline>flex-end</CodeInline>, <CodeInline>stretch</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">justify</CodeInline></Row>
            <P>
              <B>Allineamento orizzontale:</B>{" "}
              definisce l'allineamento orizzontale degli elementi figli all'interno della riga. Le opzioni disponibili sono:{" "}
              <CodeInline>flex-start</CodeInline>, <CodeInline>center</CodeInline>, <CodeInline>flex-end</CodeInline>, <CodeInline>space-between</CodeInline>, <CodeInline>space-around</CodeInline>, <CodeInline>space-evenly</CodeInline>.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">wrap</CodeInline></Row>
            <P>
              <B>Avvolgimento:</B>{" "}
              se impostato su <CodeInline>true</CodeInline>, consente agli elementi figli di andare a capo quando lo spazio orizzontale non è sufficiente.
            </P>
          </Row>
          <Row align="flex-start">
            <Row justify="flex-end" style={{ width: 100 }}><CodeInline align="right">flex</CodeInline></Row>
            <P>
              <B>Flessibilità:</B>{" "}
              consente di specificare il fattore di crescita flessibile dell'elemento all'interno del contenitore flessibile.
              I valori tipici sono <CodeInline>0</CodeInline> (non cresce), <CodeInline>1</CodeInline> (cresce per occupare lo spazio disponibile), <CodeInline>n</CodeInline> (cresce <CodeInline>n</CodeInline> volte rispetto a un elemento con valore 1).
            </P>
          </Row>

        </TextGroup>
      </TextGroup>
      <TextGroup>

        <Heading level={2}>API di base</Heading>
        <P>I componenti <CodeInline>Column</CodeInline> e <CodeInline>Row</CodeInline> sono definiti con i parametri preimpostati:</P>
        <Code>{`<Column
  gap = "md",
  align = "center",
  justify = "flex-start",
  wrap = false,
  flex={1}>
    ...
</Column>`}</Code>
      <Code>{`<Row
  gap = "md",
  align = "center",
  justify = "flex-start",
  wrap = false,
  flex={1}>
    ...
</Row>`}</Code>
      </TextGroup>

      <Row justify="space-between">
        <Link href="/docs/components/layout/Box" variant="button">Box</Link>
        <Link href="/docs/components/layout/Divider" variant="button">Divider</Link>
      </Row>
    </Column>
  );
}
