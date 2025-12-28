/**
 * Universal clipboard utility.
 * Funziona su:
 * - Web (navigator.clipboard)
 * - Expo (expo-clipboard)
 */

export async function copyToClipboard(text: string): Promise<void> {
  // 1. WEB
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // fallback Expo
    }
  }

  // 2. EXPO (iOS / Android)
  try {
    // dynamic import per evitare crash su web / SSR
    const Clipboard = await import("expo-clipboard");

    if (Clipboard?.setStringAsync) {
      await Clipboard.setStringAsync(text);
      return;
    }
  } catch {
    // modulo non disponibile
  }

  console.warn("Clipboard API non disponibile su questa piattaforma.");
}
