import {
  Screen,
  Section,
  Heading,
  P,
  Small,
  Divider,
  Spacer,
  Code,
  CodeInline,
  TextGroup,
  Row,
  Button
} from "ui";
import { Link } from "expo-router";

export default function GettingStarted() {
  return (
    <Screen>

      {/* INTRO */}
      <Section>
        <Heading level={1}>Getting Started</Heading>

        <P>
          Questa guida ti mostra come installare e integrare SmartTutor UI.
          Tutti i componenti sono progettati per funzionare nativamente con Expo,
          React Native e architetture scalabili come Turborepo.
        </P>
      </Section>

      <Spacer size={20} />

      {/* INSTALLAZIONE */}
      <Section id="installazione">
        <Heading level={2}>1. Installazione</Heading>
        <Divider />

        <P>
          Installa la libreria nel tuo progetto.
          Questo aggiunge tutti i componenti, il sistema di tema, i design token
          e la tipografia.
        </P>

        <Spacer size={12} />

        <Code>npm install ui</Code>

        <Small>
          Puoi usare anche <CodeInline>yarn</CodeInline> o <CodeInline>pnpm</CodeInline>.
        </Small>

        <Spacer size={12} />

        <P>
          Dopo l’installazione, i componenti possono essere importati direttamente
          tramite <CodeInline>import {"{ Button }"} from "ui"</CodeInline>.
        </P>
      </Section>

      <Spacer size={30} />

      {/* THEME PROVIDER */}
      <Section id="theme-provider">
        <Heading level={2}>2. Integrazione del ThemeProvider</Heading>
        <Divider />

        <P>
          Il <CodeInline>ThemeProvider</CodeInline> è il cuore di SmartTutor UI.
        </P>

        <Spacer size={12} />

        <P>Gestisce:</P>
        <TextGroup spacing={0}>
          <P>• tema light/dark</P>
          <P>• palette colori</P>
          <P>• tipografia globale</P>
          <P>• spacing e layout</P>
          <P>• re-render automatico dei componenti quando il tema cambia</P>
        </TextGroup>

        <Spacer size={12} />

        <P>Va inserito nel root della tua app:</P>

        <Spacer size={8} />

        <Code>
          {`import { ThemeProvider } from "ui";

export default function App() {
  return (
    <ThemeProvider>
      <RootLayout />
    </ThemeProvider>
  );
}`}
        </Code>

        <Small>
          Puoi cambiare tema dinamicamente con <CodeInline>useTheme()</CodeInline>.
        </Small>

        <Spacer size={20} />

        <Row gap={10}>
          <Link href="/components/theme" asChild>
            <Button title="Approfondisci su Theme" type="outline" />
          </Link><></>
        </Row>

      </Section>

      <Spacer size={30} />

      {/* UTILIZZO */}
      <Section id="utilizzo">
        <Heading level={2}>3. Utilizzare i componenti</Heading>
        <Divider />

        <P>
          Dopo aver configurato il ThemeProvider puoi usare qualsiasi componente.
          Non serve gestire stile, colori o tipografia: tutto è già integrato.
        </P>

        <Code>
          {`import { Button, Heading, Section } from "ui";

export default function Example() {
  return (
    <Section>
      <Heading level={3}>Benvenuto</Heading>
      <Button title="Continua" type="primary" />
    </Section>
  );
}`}
        </Code>

        <Spacer size={12} />

        <P>
          Ogni componente utilizza automaticamente i valori del tema corrente.
          Cambia il tema e la UI seguirà senza dover modificare altro.
        </P>
      </Section>

      <Spacer size={40} />

      <Section>
        <Divider />
        <Small>SmartTutor UI – Documentazione Ufficiale</Small>
      </Section>

    </Screen>
  );
}
