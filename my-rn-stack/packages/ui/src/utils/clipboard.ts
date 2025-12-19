/**
 * Universal clipboard utility.
 * Funziona su:
 * - Web (navigator.clipboard)
 * - React Native / Expo (@react-native-clipboard/clipboard)
 */

export async function copyToClipboard(text: string): Promise<void> {
  // 1. WEB API (la migliore)
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // se fallisce, proviamo lato native
    }
  }

  // 2. REACT NATIVE / EXPO (@react-native-clipboard/clipboard)
  try {
    // dynamic require per non esplodere su ambienti non-RN
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Clipboard = require("@react-native-clipboard/clipboard");

    if (Clipboard?.setString) {
      Clipboard.setString(text);
      return;
    }

    if (Clipboard?.default?.setString) {
      Clipboard.default.setString(text);
      return;
    }
  } catch {
    // modulo non disponibile o non in ambiente RN
  }

  console.warn("Clipboard API non disponibile su questa piattaforma.");
}
