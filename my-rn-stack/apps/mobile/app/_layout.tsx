import { Slot } from "expo-router";
import { ThemeProvider, ThemedBackground } from "ui";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedBackground>
        <Slot />
      </ThemedBackground>
    </ThemeProvider>
  );
}
