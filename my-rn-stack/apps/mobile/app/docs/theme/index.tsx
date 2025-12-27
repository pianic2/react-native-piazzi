import React from "react";
import {
  Column,
  Heading,
  P,
  TextGroup,
  Button,
  Card,
  Link,
  Divider,
  Code,
  Small,
  Box,
  Row,
  Badge,
  B
} from "ui";

export default function ThemingIndex() {
  return (
    <Column>
      {/* ===============================
          INTRO
      =============================== */}
      <TextGroup>
        <Heading level={1}>Theming</Heading>
        <P>
          Il sistema di theming è il layer che connette design tokens,
          preferenze utente e rendering dei componenti.
        </P>
        <P>
          È progettato per essere deterministico, persistente e scalabile
          su mobile e web, senza ramificazioni o override impliciti.
        </P>
      </TextGroup>

      {/* ===============================
          PRINCIPI
      =============================== */}
      <TextGroup>
        <Heading level={2}>Principi chiave</Heading>

        <Button
          variant="ghost"
          disabled
          label="Tema derivato esclusivamente da design tokens"
        />
        <Button
          variant="ghost"
          disabled
          label="Nessun colore o valore hardcoded nei componenti"
        />
        <Button
          variant="ghost"
          disabled
          label="Supporto nativo light / dark persistito"
        />
        <Button
          variant="ghost"
          disabled
          label="Un solo ThemeProvider a livello app"
        />
        <Button
          variant="ghost"
          disabled
          label="API sincrona e prevedibile"
        />
      </TextGroup>

      {/* ===============================
          ARCHITETTURA
      =============================== */}
      <TextGroup>
        <Heading level={2}>Architettura</Heading>
        <P>
          Il theming è composto da tre livelli distinti e non accoppiati:
        </P>

        <TextGroup spacing="md">
          <Card>
            <TextGroup>
              <Row>
                <Badge>1</Badge>
                <Heading level={3}>Design Tokens</Heading>
              </Row>

              <P>
                Valori primitivi (colori, spaziature, radius, tipografia).
                Non dipendono dal runtime.
              </P>

            </TextGroup>
          </Card>
          <Card>
            <TextGroup>
              <Row>
                <Badge>2</Badge>
                <Heading level={3}>Theme</Heading>
              </Row>

              <P>
                Aggregazione semantica dei token (es. colors.primary,
                colors.text, space.md).
              </P>

            </TextGroup>
          </Card>
          <Card>
            <TextGroup>
              <Row>
                <Badge>3</Badge>
                <Heading level={3}>Runtime</Heading>
              </Row>

              <P>
                Scelta del tema attivo (light / dark), persistenza e accesso
                tramite hook.
              </P>

            </TextGroup>
          </Card>
        </TextGroup>
      </TextGroup>

      {/* ===============================
          COSA NON FARE
      =============================== */}
      <TextGroup>
        <Heading level={2}>Cosa NON fare</Heading>
        <P>
          Il sistema di theming è intenzionalmente restrittivo.
          Alcuni pattern sono considerati anti-pattern:
        </P>

        <Code>
          {`// ❌ vietato
<View style={{ backgroundColor: "#ffffff" }} />

// ❌ vietato
const color = dark ? "#000" : "#fff";

// ❌ vietato
style={{ margin: 12 }}`}
        </Code>

        <Small>
          Se un valore non esiste nei token, va aggiunto ai token.
        </Small>
      </TextGroup>

      {/* ===============================
          ENTRY POINT
      =============================== */}
      <TextGroup>
        <Heading level={2}>Entry point</Heading>
        <P>
          Il theming è sempre inizializzato a livello applicazione.
          Tutti i componenti assumono che il ThemeProvider sia presente.
        </P>
      </TextGroup>

      <TextGroup>
        <Heading level={3}>Elenco dei Componenti</Heading>
        <Link href="/docs/theme/theme-provider" variant="button">
          ThemeProvider
        </Link>
        <Link href="/docs/theme/use-theme" variant="button">
          useTheme
        </Link>
        <Link href="/docs/theme/default-theme" variant="button">
          Tema di default
        </Link>
      </TextGroup>
    </Column>
  );
}
