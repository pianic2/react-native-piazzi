import { Slot } from "expo-router";
import { ThemeProvider, ThemedBackground } from "ui";

/**
 * Root layout: wrap globale con ThemeProvider e ThemedBackground.
 */
export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedBackground>
        <Slot />
      </ThemedBackground>
    </ThemeProvider>
  );
}
