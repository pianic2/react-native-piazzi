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
    Box,
} from "ui";

export default function LayoutIndex() {
    return (
        <Column gap="xl">
            {/* =====================================================
          INTRO
      ===================================================== */}
            <TextGroup>
                <Heading level={1}>Layout</Heading>

                <P>
                    Il sistema di layout della UI fornisce componenti flessibili e potenti per creare strutture di pagina coerenti e responsive.{" "}
                    Utilizzando i componenti di layout, puoi facilmente organizzare e allineare gli elementi della tua interfaccia utente in modo intuitivo.
                </P>
            </TextGroup>

            {/* =====================================================
            COMPONENTI DI LAYOUT
        ===================================================== */}
            <TextGroup spacing="lg">
                <TextGroup>
                    <Heading level={2}>Componenti di Layout</Heading>
                    <P>
                        I componenti di layout principali includono:
                    </P>
                </TextGroup>

                {/* =====================================================
            BOX
        ===================================================== */}
                <Card>
                    <TextGroup>
                        <Heading level={3}>Box</Heading>
                        <P>
                            Componente contenitore versatile che consente di applicare stili, spaziature e layout agli elementi figli.{" "}
                            Equivalente a un <CodeInline>div</CodeInline> in HTML.
                        </P>

                        <Divider />

                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<Box padding="md" margin="none" shadow="lg">
  <Text>This is a Box component</Text>
</Box>`}</Code>

                        <Box padding="md" margin="none" shadow="lg">
                            <Text>This is a Box component</Text>
                        </Box>

                        <Row>
                            <Link href="/docs/components/layout/Box" variant="button">Approfondisci Box</Link>
                        </Row>

                    </TextGroup>
                </Card>

                {/* =====================================================
                    COLUMN E ROW
                ====================================================
                = */}
                <Card>
                    <TextGroup>
                        <Heading level={3}>Column e Row</Heading>
                        <P>
                            Componenti per disporre gli elementi in una colonna verticale (<CodeInline>Column</CodeInline>) o una riga orizzontale (<CodeInline>Row</CodeInline>) con spaziatura personalizzabile tra di essi.
                        </P>

                        <Divider />
                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<Column gap="md">
    <Row gap="md">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
    </Row>
    <Row gap="md">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
    </Row>
</Column>`}</Code>
                        <Column gap="md">
                            <Row gap="md">
                                <Box>Item 1</Box>
                                <Box>Item 2</Box>
                                <Box>Item 3</Box>
                            </Row>
                            <Row gap="md">
                                <Box>Item 1</Box>
                                <Box>Item 2</Box>
                                <Box>Item 3</Box>
                            </Row>
                        </Column>

                        <Row>
                            <Link href="/docs/components/layout/column-row" variant="button">Approfondisci Column e Row</Link>
                        </Row>
                    </TextGroup>

                </Card>
                {/* =====================================================
                    DIVIDER
                ===================================================== */}
                <Card>
                    <TextGroup>
                        <Heading level={3}>Divider</Heading>
                        <P>
                            Componente per inserire una linea di separazione orizzontale tra sezioni di contenuto, utile per migliorare la leggibilità e l'organizzazione visiva.
                        </P>

                        <Divider />

                        <Heading level={4}>Esempio</Heading>
                        <Code>{`<Text>Section 1</Text>
<Divider />
<Text>Section 2</Text>`}</Code>

                        <Text>Section 1</Text>
                        <Divider />
                        <Text>Section 2</Text>

                        <Row>
                            <Link href="/docs/components/layout/divider" variant="button">Approfondisci Divider</Link>
                        </Row>
                    </TextGroup>
                </Card>
            </TextGroup>

            <Row justify="flex-end">
                <Link href="/docs/components/surfaces" variant="button" size="lg">Surfaces</Link>
            </Row>
        </Column>
    );
}
