import { View } from "react-native";
import { Heading, Card, Divider } from "ui";

export default function CardDemo() {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Heading level={2}>Card</Heading>
      <Heading level={5} style={{ marginTop: 6 }}>
        Dimostrazione del componente Card, con tema e varianti.
      </Heading>

      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>Default</Heading>
        <Divider />
        <Heading level={5}>Questa è una card con stile base.</Heading>
      </Card>

      <Card style={{ marginTop: 20 }} radius={6} elevation={6}>
        <Heading level={3}>Elevated</Heading>
        <Divider />
        <Heading level={5}>Card con ombra più profonda.</Heading>
      </Card>
    </View>
  );
}
