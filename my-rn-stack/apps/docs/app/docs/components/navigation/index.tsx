import React from "react";

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
    Divider
} from "ui";

export default function NavigationIndex() {
    return (
        <Column>
            {/* =====================================================
          INTRO
      ===================================================== */}
            <TextGroup>
                <Heading level={1}>Navigation System</Heading>
                <P>
                    Il <B>Navigation System</B> della UI fornisce un insieme di
                    componenti e provider progettati per gestire la navigazione
                    in modo <B>coerente</B>, <B>scalabile</B> e <B>cross-platform</B>.
                </P>
                <P>
                    Il sistema è basato su un approccio <B>provider-driven</B>:
                    la navigazione viene configurata una sola volta e consumata
                    automaticamente dai componenti visivi in base alla piattaforma
                    e al layout selezionato.
                </P>
            </TextGroup>

            {/* =====================================================
          ARCHITETTURA
      ===================================================== */}
            <TextGroup>
                <Heading level={2}>Architettura</Heading>
                <P>
                    Il cuore del sistema è il componente{" "}
                    <CodeInline>NavBar</CodeInline>, che inizializza il{" "}
                    <CodeInline>NavProvider</CodeInline> e decide quale layout
                    di navigazione utilizzare.
                </P>

                <Code>{`<NavBar
  items={NAV_ITEMS}
  logo={<Logo />}
  layout="auto"
/>`}</Code>

                <P>
                    In modalità <CodeInline>auto</CodeInline>, la UI sceglie
                    automaticamente il layout più appropriato:
                </P>

                <TextGroup>
                    <P>• <B>Web</B> → TopBar o SideBar</P>
                    <P>• <B>Mobile</B> → BottomBar</P>
                </TextGroup>
            </TextGroup>

            {/* =====================================================
          NAVBAR
      ===================================================== */}
            <TextGroup>
                <Heading level={2}>NavBar</Heading>
                <P>
                    <CodeInline>NavBar</CodeInline> è il componente di alto livello
                    che:
                </P>

                <TextGroup>
                    <P>• inizializza il contesto di navigazione</P>
                    <P>• fornisce logo e voci di menu</P>
                    <P>• gestisce la navigazione tramite router</P>
                    <P>• seleziona il layout corretto</P>
                </TextGroup>

                <Heading level={3}>Parametri</Heading>

                <TextGroup>
                    <Row align="flex-start">
                        <Row justify="flex-end" style={{ width: 140 }}>
                            <CodeInline>items</CodeInline>
                        </Row>
                        <P>
                            <B>Voci di navigazione:</B>{" "}
                            Array di oggetti con <CodeInline>label</CodeInline>,{" "}
                            <CodeInline>href</CodeInline> e icone opzionali.
                        </P>
                    </Row>

                    <Row align="flex-start">
                        <Row justify="flex-end" style={{ width: 140 }}>
                            <CodeInline>logo</CodeInline>
                        </Row>
                        <P>
                            <B>Logo:</B>{" "}
                            Componente React visualizzato nella barra di navigazione.
                        </P>
                    </Row>

                    <Row align="flex-start">
                        <Row justify="flex-end" style={{ width: 140 }}>
                            <CodeInline>layout</CodeInline>
                        </Row>
                        <P>
                            <B>Layout:</B>{" "}
                            <CodeInline>auto</CodeInline>,{" "}
                            <CodeInline>top</CodeInline>,{" "}
                            <CodeInline>bottom</CodeInline>,{" "}
                            <CodeInline>sidebar</CodeInline>.
                        </P>
                    </Row>

                    <Row align="flex-start">
                        <Row justify="flex-end" style={{ width: 140 }}>
                            <CodeInline>bottomMaxItems</CodeInline>
                        </Row>
                        <P>
                            <B>BottomBar limit:</B>{" "}
                            Numero massimo di elementi visibili nella{" "}
                            <CodeInline>BottomBar</CodeInline>.
                        </P>
                    </Row>

                    <Row align="flex-start">
                        <Row justify="flex-end" style={{ width: 140 }}>
                            <CodeInline>sidebarWidth</CodeInline>
                        </Row>
                        <P>
                            <B>Larghezza SideBar:</B>{" "}
                            Larghezza della <CodeInline>SideBar</CodeInline> su web.
                        </P>
                    </Row>
                </TextGroup>
            </TextGroup>

            {/* =====================================================
          LAYOUT COMPONENTS
      ===================================================== */}
            <TextGroup>
                <Heading level={2}>Layout di Navigazione</Heading>

                <Card>
                    <Heading level={3}>TopBar</Heading>
                    <P>
                        La <B>TopBar</B> è una barra orizzontale posizionata
                        nella parte superiore dello schermo.
                    </P>
                    <P>
                        È utilizzata <B>solo su web</B> e visualizza logo,
                        voci di navigazione e slot personalizzabili.
                    </P>
                </Card>

                <Card>
                    <Heading level={3}>BottomBar</Heading>
                    <P>
                        La <B>BottomBar</B> è una barra di navigazione inferiore
                        pensata per dispositivi <B>mobile</B>.
                    </P>
                    <P>
                        Mostra un numero limitato di voci per garantire
                        usabilità e accessibilità.
                    </P>
                </Card>

                <Card>
                    <Heading level={3}>SideBar</Heading>
                    <P>
                        La <B>SideBar</B> è una barra verticale laterale
                        utilizzata su web per applicazioni complesse.
                    </P>
                    <P>
                        Supporta modalità compatta ed espansa e
                        navigazione gerarchica.
                    </P>
                </Card>

                <P>
                    In modalità <CodeInline>auto</CodeInline>, la UI
                    seleziona automaticamente il layout più adatto
                    in base alla piattaforma.
                </P>
            </TextGroup>

            {/* =====================================================
          LINK
      ===================================================== */}

            <Card>
                <TextGroup>
                    <Heading level={2}>Link</Heading>
                    <P>
                        Il componente <CodeInline>Link</CodeInline> è
                        profondamente integrato con il Navigation System.

                    </P>

                    <TextGroup spacing="xs">
                        <P>
                            Se utilizzato all’interno del{" "}
                            <CodeInline>NavProvider</CodeInline>, il link:
                        </P>
                        <P>• rileva automaticamente lo stato attivo</P>
                        <P>• utilizza il router interno</P>
                        <P>• applica stili attivi coerenti</P>
                    </TextGroup>

                    <Divider />

                    <Heading level={4}>Esempio</Heading>
                    <Code>{`<Link href="/home">Home</Link>`}</Code>

                    <Link href="docs/components/navigation/Link" variant="button">Approfondisci Link</Link>
                </TextGroup>
            </Card>


            <Row justify="flex-end">
                <Link
                    href="/docs/components/overlay"
                    variant="button"
                    size="lg"
                >
                    Sovrapposizioni
                </Link>
            </Row>
        </Column>
    );
}
