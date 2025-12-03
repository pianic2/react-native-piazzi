// useTheme.ts
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used inside a <ThemeProvider>. " +
            "Assicurati che l'app sia avvolta correttamente.");
    }
    const { mode, colors, toggleTheme, setMode } = ctx;
    return {
        mode, // "light" | "dark"
        colors, // palette corrente (merge tra base + override)
        toggleTheme, // interruttore rapido
        setMode, // imposta un tema specifico
        isDark: mode === "dark",
        isLight: mode === "light",
    };
}
