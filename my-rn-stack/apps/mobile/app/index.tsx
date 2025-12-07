import { Link } from "expo-router";
import {
  Screen,
  Section,
  Heading,
  P,
  Small,
  Row,
  Column,
  Divider,
  Card,
  Code,
  CodeInline,
  Button,
  Spacer,
  useTheme,
  NavBar
} from "ui";

export default function Home() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Screen>
      {/* HERO */}
      <Section>
        <Heading level={1}>SmartTutor UI</Heading>

        <P style={{ marginTop: 6 }}>
          Una libreria UI modulare, tematizzata e perfettamente integrata con Expo.
          Pensata per progetti scalabili, puliti e veloci da sviluppare.
        </P>

        <Small>
          Componenti cross-platform (Android, iOS, Web) con Theme System integrato.
        </Small>
      </Section>

      <Spacer size={30} />

      {/* INSTALLAZIONE */}
      <Section>
        <Heading level={2}>Installazione</Heading>
        <Divider />

        <P>
          Installa la libreria nel tuo progetto Expo o React Native.
          Questo comando aggiunge SmartTutor UI alle tue dipendenze.
        </P>

        <Spacer size={12} />

        <Code>{`npm install ui`}</Code>

        <Small>
          Puoi usare anche <Small>yarn</Small> o <Small>pnpm</Small>.
        </Small>

        <Spacer size={18} />

        <Row gap={12}>
          <Link href="/getting-started#installazione" asChild>
            <Button title="Leggi di più sull’installazione" type="outline" />
          </Link><></>
        </Row>
      </Section>

      <Spacer size={30} />

      {/* INTEGRAZIONE TEMA */}
      <Section>
        <Heading level={2}>Integrazione nella tua App</Heading>
        <Divider />

        <P>
          Per abilitare sistema di tematizzazione, colori, tipografia e layout,
          la tua app deve essere avvolta dal <Small>ThemeProvider</Small>.
        </P>

        <P>
          Questo permette a tutti i componenti di reagire automaticamente al tema corrente.
        </P>

        <Spacer size={12} />

        <Code>
          {`import { ThemeProvider } from "ui";

export default function App() {
  return (<ThemeProvider>
    <RootLayout />
  </ThemeProvider>);
}`}
        </Code>

        <Spacer size={20} />

        <Row gap={12}>
          <Link href="/getting-started#theme-provider" asChild>
            <Button title="Come funziona il ThemeProvider" type="outline" />
          </Link><></>
        </Row>
      </Section>

      <Spacer size={30} />

      {/* UTILIZZO */}
      <Section>
        <Heading level={2}>Utilizzo rapido</Heading>
        <Divider />

        <P>Ora puoi importare qualsiasi componente:</P>

        <Spacer size={12} />

        <Code>
          {`import { Button, Card, Heading, P } from "ui";

export default function MyComponent() {
  return (
    <Card>
      <Heading level={3}>Benvenuto in SmartTutor UI</Heading>
      <P>Questo è un esempio di utilizzo dei componenti.</P>
      <Button title="Cliccami" onPress={() => alert("Ciao!")} />
    </Card>
  );
}`}
        </Code>

        <Small>
          Ogni componente utilizza automaticamente stile, spacing, colori e tipografia del tema.
        </Small>

        <Spacer size={20} />

        <Row gap={12}>
          <Link href="/getting-started#utilizzo" asChild>
            <Button title="Guida completa all’utilizzo" type="outline" />
          </Link><></>
        </Row>
      </Section>

      <Spacer size={30} />

      {/* COMPONENTI */}
      <Section>
        <Heading level={2}>Componenti disponibili</Heading>
        <Divider />

        <P>Esplora la documentazione completa:</P>

        <Column gap={12} style={{ marginTop: 12 }}>
          <Link href="/components/theme" asChild>
            <Button title="Theme" type="outline" />
          </Link>

          <Link href="/components/typography" asChild>
            <Button title="Typography" type="outline" />
          </Link>

          <Link href="/components/layout" asChild>
            <Button title="Layout" type="outline" />
          </Link>

          <Link href="/components/form" asChild>
            <Button title="Form" type="outline" />
          </Link>

          <Link href="/components/buttons" asChild>
            <Button title="Buttons" type="outline" />
          </Link>

          <Link href="/components/card" asChild>
            <Button title="Card" type="outline" />
          </Link>
        </Column>
      </Section>

      <Spacer size={40} />

      {/* FOOTER */}
      <Section>
        <Divider />
        <Small>SmartTutor UI – Libreria Open Source</Small>
      </Section>

    </Screen>
  );
}
