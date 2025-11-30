import { View, StyleSheet } from "react-native";
import { Button, Card, Heading, Divider } from "ui";

/**
 * Showcase completo della UI:
 * Utile come pagina di test quando si sviluppa la libreria.
 */
export default function ComponentsDemo() {
  return (
    <View style={styles.container}>
      <Heading level={1}>Components Demo</Heading>

      <Card style={styles.card}>
        <Heading level={3}>Buttons</Heading>
        <Divider />

        <Button title="Primary" type="primary" />
        <View style={styles.spacer} />

        <Button title="Secondary" type="secondary" />
        <View style={styles.spacer} />

        <Button title="Outline" type="outline" />
      </Card>

      <Card style={styles.card}>
        <Heading level={3}>Typography</Heading>
        <Divider />
        <Heading level={1}>H1 Title</Heading>
        <Heading level={2}>H2 Subtitle</Heading>
        <Heading level={3}>H3 Section</Heading>
        <Heading level={4}>H4 Meta</Heading>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: { marginTop: 20 },
  spacer: { height: 12 },
});
