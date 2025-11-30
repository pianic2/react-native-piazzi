import { View, StyleSheet } from "react-native";
import { Heading, Card, Divider, Button, useTheme } from "ui";
import { Link } from "expo-router";

export default function Home() {
  const { mode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      {/* TESTO DI BENVENUTO */}
      <Heading level={1}>SmartTutor UI</Heading>
      <Heading level={4} style={{ marginTop: 8 }}>
        Una libreria di componenti React Native progettata per app moderne,
        scalabili e con un design system coerente.
      </Heading>

      {/* SEZIONE TEMA */}
      <Card style={{ marginTop: 24 }}>
        <Heading level={3}>Tema</Heading>
        <Divider />
        <Button title={`Tema attuale: ${mode}`} type="primary" onPress={toggleTheme} />
      </Card>

      {/* ELENCO PAGINE DEI COMPONENTI */}
      <Card style={{ marginTop: 24 }}>
        <Heading level={3}>Componenti disponibili</Heading>
        <Divider />

        <View style={{ marginTop: 10 }}>
          <Link href="/components/buttons" asChild>
            <Button title="Buttons" type="outline" />
          </Link>

          <View style={{ height: 10 }} />

          <Link href="/components/card" asChild>
            <Button title="Card" type="outline" />
          </Link>

          <View style={{ height: 10 }} />

          <Link href="/components/typography" asChild>
            <Button title="Typography" type="outline" />
          </Link>

          <View style={{ height: 10 }} />

          <Link href="/components/layout" asChild>
            <Button title="Layout" type="outline" />
          </Link>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
