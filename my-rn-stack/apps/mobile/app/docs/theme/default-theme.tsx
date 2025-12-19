import React from "react";
import { Column, Heading, P, TextGroup, Divider, Card, Code, CodeInline, Button, useTheme } from "ui";

export default function DefaultThemeDocs() {
  const { theme } = useTheme();
  return (
    <Column style={{ padding: 30 }}>
      <TextGroup>
        <Heading level={1}>Tema di Default</Heading>
        <P>
          Il <CodeInline>defaultTheme</CodeInline> definisce la configurazione iniziale del design system.
          È costruito esclusivamente a partire dai token base.
        </P>
        <Code>{`{
  mode,
  colors: resolveColors(mode),

  spacing,
  space,
  radius,
  typography,
  shadows,
  zIndex,

  components: {
    button: {
      height: {
        sm: 36,
        md: 44,
        lg: 52,
      },
      radius: radius.md,
    },

    input: {
      height: 44,
      radius: radius.sm,
    },

    card: {
      radius: radius.lg,
      shadow: shadows.sm,
      padding: space.md,
    },
  },
}`}</Code>
      </TextGroup>

        <TextGroup>
          <Heading level={3}>Esempio</Heading>
          <Code>{`<P
  style={{
    backgroundColor: theme.colors.primary,
    padding: theme.space.sm
  }}
/>
  Read the Docs
</P>`}</Code>
          <P style={{ backgroundColor: theme.colors.primary, padding: theme.space.sm }}>Lorem Ipsum</P>
        </TextGroup>

    </Column>
  );
}
