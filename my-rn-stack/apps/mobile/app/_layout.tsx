import { Slot } from "expo-router";
import { ThemeProvider, ThemedBackground } from "ui";
import { NavBar } from "ui";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedBackground>
        {/* NAVBAR ADATTIVA */}
        <NavBar
          title="Docs"
          items={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
          ]}
        />

        <Slot />
      </ThemedBackground>
    </ThemeProvider>
  );
}
