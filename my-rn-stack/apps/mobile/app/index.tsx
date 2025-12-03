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
  Button,
  Spacer,
  useTheme,
} from "ui";

export default function Home() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Screen>

      {/* HEADER INTRO */}
      <Heading level={1}>SmartTutor UI</Heading>
      <P style={{ marginTop: 6 }}>
        Libreria di componenti React Native progettata per app moderne,
        scalabili e completamente tematizzate.
      </P>

      <Small>Framework UI ufficiale per SmartTutor.</Small>

      <Spacer size={20} />

      {/* SEZIONE TEMA */}
      <Section>
        <Heading level={3}>Tema</Heading>
        <Divider />

        <P>
          Puoi cambiare la modalità del tema (light / dark) in tempo reale.
          Tutti i componenti si aggiornano automaticamente.
        </P>

        <Spacer size={10} />

        <Button
          title={`Tema attuale: ${mode}`}
          type="primary"
          onPress={toggleTheme}
        />
      </Section>

      <Spacer size={20} />

      {/* SEZIONE LISTA COMPONENTI */}
      <Section>
        <Heading level={3}>Componenti disponibili</Heading>
        <Divider />

        <P>Seleziona un componente per visualizzarne la documentazione.</P>

        <Column gap={12} style={{ marginTop: 10 }}>
          <Link href="/components/theme" asChild>
            <Button title="Theme" type="outline" />
          </Link>

          <Link href="/components/buttons" asChild>
            <Button title="Buttons" type="outline" />
          </Link>

          <Link href="/components/card" asChild>
            <Button title="Card" type="outline" />
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
        </Column>
      </Section>

    </Screen>
  );
}
