import { ScrollView, View } from "react-native";
import {
  Heading,
  Card,
  Divider,
  P,
  B,
  Small,
  Code,
  CodeInline,
  TextGroup,
} from "ui";

export default function ThemeDoc() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* ========================================================= */}
      {/* TITLE */}
      {/* ========================================================= */}

      <Heading level={1}>Theme System</Heading>
      <P>
        Il sistema di tema di <B>SmartTutor UI</B> permette di controllare colori,
        superfici, tipografia e varianti dei componenti. Include due temi base
        (light/dark), supporta override profondi tramite <CodeInline>extendTheme()</CodeInline> e
        fornisce un hook <CodeInline>useTheme()</CodeInline> per accedere ai valori in modo reattivo.
      </P>

      <Divider style={{ marginVertical: 20 }} />

      {/* ========================================================= */}
      {/* 1 — TEA BASE */}
      {/* ========================================================= */}
      <Card>
        <Heading level={3}>1. Temi base (Light & Dark)</Heading>
        <Divider />

        <P>
          Nel file <CodeInline>colors.base.ts</CodeInline> la libreria definisce due temi di base: <B>baseLight</B> e <B>baseDark</B>.
          Entrambi includono token fondamentali come colori
          primari, superfici, testo e varianti per i componenti.
        </P>
        <P>
          Infine i temi di base sono serviti con la definizione di <B>baseTheme</B> e vengono esportati insieme con i token denominati <B>light</B> e <B>dark</B>.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio
        </Heading>

        <Code>
          {`// colors.base.ts

export const baseLight = {
  text: "#1A1A1A",
  background: "#FFFFFF",
  surface: "#F7F7F7",

  primary: { bg: "#FF8A3D", text: "#FFFFFF", border: "#FF8A3D" },
  secondary: { bg: "#F2E5DA", text: "#3A2F2A", border: "#EADFD6" },
  outline: { bg: "transparent", text: "#FF8A3D", border: "#FF8A3D" },

  success: { bg: "#5BB98C", text: "#FFFFFF", border: "#5BB98C" },
  warning: { bg: "#F4A236", text: "#FFFFFF", border: "#F4A236" },
  danger: { bg: "#E16458", text: "#FFFFFF", border: "#E16458" },

  codeBg: "#F4F4F4",
  codeBorder: "#E0E0E0",
  codeText: "#333333",
};

export const baseDark = {
  text: "#FFFFFF",
  background: "#1A1A1A",
  surface: "#2A2A2A",

  primary: { bg: "#FF8A3D", text: "#FFFFFF", border: "#FF8A3D" },
  secondary: { bg: "#3A2F2A", text: "#F2E5DA", border: "#564A45" },
  outline: { bg: "transparent", text: "#FF8A3D", border: "#FF8A3D" },

  success: { bg: "#5BB98C", text: "#FFFFFF", border: "#5BB98C" },
  warning: { bg: "#F4A236", text: "#FFFFFF", border: "#F4A236" },
  danger: { bg: "#E16458", text: "#FFFFFF", border: "#E16458" },

  codeBg: "#222222",
  codeBorder: "#444444",
  codeText: "#EEEEEE",
};

export const baseTheme = {
  light: baseLight,
  dark: baseDark,
};`}
        </Code>
      </Card>

      {/* ========================================================= */}
      {/* 2 — THEME CONTEXT */}
      {/* ========================================================= */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>2. ThemeProvider</Heading>
        <Divider />

        <P>
          <B>ThemeProvider</B> è il provider principale del sistema di theming.
          Espone il tema corrente all'intera applicazione, gestisce la modalità
          <CodeInline>light | dark</CodeInline> e applica eventuali override passati
          tramite <CodeInline>extendTheme()</CodeInline>.
        </P>

        <P style={{ marginTop: 10 }}>
          Tutti i componenti della libreria (Button, Card, Typography, Form, Layout)
          leggono i valori del tema tramite <CodeInline>useTheme()</CodeInline>,
          quindi è sufficiente posizionare <B>ThemeProvider</B> al livello più alto
          della tua app.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Cosa espone ThemeProvider
        </Heading>

        <Code>
          {`// all'interno di useTheme()
const { 
  mode,          // "light" | "dark"
  colors,        // palette corrente (merge tra base + override)
  toggleTheme,   // interruttore rapido
  setMode,       // imposta un tema specifico
  isDark: mode === "dark",
  isLight: mode === "light",
} = useTheme();`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>
          Integrazione base nell'app
        </Heading>

        <P style={{ marginTop: 8 }}>
          In un'app Expo/React Native, è consigliato avvolgere l'intera navigazione
          (o lo stack principale) con <B>ThemeProvider</B> e usare{" "}
          <CodeInline>ThemedBackground</CodeInline> per avere subito il background
          corretto.
        </P>

        <Code>
          {`import React from "react";
import { ThemeProvider, ThemedBackground, Heading, Button, useTheme } from "ui";
import { View } from "react-native";

// Esempio di tema custom opzionale
// (puoi anche NON passarne nessuno e usare il tema base)
import { extendTheme } from "ui";

const customTheme = extendTheme({
  primary: {
    bg: "#0A84FF",
    text: "#FFFFFF",
    border: "#0A84FF",
  },
});

// Un semplice screen che usa useTheme
function HomeScreen() {
  const { mode, toggleTheme, colors } = useTheme();

  return (
    <ThemedBackground>
      <Heading level={1}>SmartTutor UI</Heading>

      <Heading level={4} style={{ marginTop: 8 }}>
        Tema attuale: {mode}
      </Heading>

      <View style={{ marginTop: 16 }}>
        <Button
          title="Cambia tema"
          type="primary"
          onPress={toggleTheme}
        />
      </View>

      <View style={{ marginTop: 16 }}>
        <Button
          title="Primary custom"
          type="primary"
          bgColor={colors.primary.bg}
        />
      </View>
    </ThemedBackground>
  );
}

// Entry point dell'app
export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <HomeScreen />
    </ThemeProvider>
  );
}`}
        </Code>

        <P style={{ marginTop: 10 }}>
          In questo esempio, <B>ThemeProvider</B> applica un tema custom esteso a
          partire dal tema base. <CodeInline>HomeScreen</CodeInline> utilizza{" "}
          <CodeInline>useTheme()</CodeInline> per leggere <B>mode</B>,{" "}
          <B>colors</B> e <B>toggleTheme()</B>, mentre{" "}
          <CodeInline>ThemedBackground</CodeInline> fornisce automaticamente il
          background corretto in base al tema attivo.
        </P>
      </Card>


      {/* ========================================================= */}
      {/* 3 — MERGE PROFONDO */}
      {/* ========================================================= */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>3. Merge profondo del tema</Heading>
        <Divider />

        <P>
          Ogni volta che cambia la modalità o viene applicato un override,
          il tema finale viene generato tramite un <B>deep merge</B> tra tema base
          e custom theme. Ciò permette override molto granulari.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>
          Esempio: override minimo
        </Heading>

        <Code>
          {`extendTheme({
  primary: {
    bg: "#0A84FF"
  }
});`}
        </Code>
      </Card>

      {/* ========================================================= */}
      {/* 4 — EXTENDTHEME */}
      {/* ========================================================= */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>4. extendTheme()</Heading>
        <Divider />

        <P>
          <B>extendTheme()</B> permette di sovrascrivere qualsiasi parte del tema,
          mantenendo tutti i token originali non toccati.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>Esempio</Heading>

        <Code>
          {`import { extendTheme, ThemeProvider } from "ui";

const customTheme = extendTheme({
  primary: {
    bg: "#0A84FF",
    text: "#fff",
    border: "#0A84FF"
  },
  text: "#111",
  surface: "#FAFAFA",
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <MainApp />
    </ThemeProvider>
  );
}`}
        </Code>
      </Card>

      {/* ========================================================= */}
      {/* 5 — USETHEME */}
      {/* ========================================================= */}
      <Card style={{ marginTop: 20 }}>
        <Heading level={3}>5. useTheme()</Heading>
        <Divider />

        <P>
          <B>useTheme()</B> permette ai componenti di accedere al tema finale e
          reagire alle modifiche dinamiche.
        </P>

        <Heading level={4} style={{ marginTop: 20 }}>Output</Heading>

        <Code>
          {`const { colors, mode, toggleTheme } = useTheme();`}
        </Code>

        <Heading level={4} style={{ marginTop: 20 }}>Esempio d’uso</Heading>

        <Code>
          {`<Button
  title={\`Tema: \${mode}\`}
  bgColor={colors.primary.bg}
  onPress={toggleTheme}
/>`}
        </Code>
      </Card>
   </ScrollView>
  );
}
