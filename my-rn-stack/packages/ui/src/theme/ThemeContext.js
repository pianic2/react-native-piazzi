import { jsx as _jsx } from "react/jsx-runtime";
// ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { extendTheme } from "./extendTheme";
import { safeGetItem, safeSetItem } from "./safeStorage";
export const ThemeContext = createContext(undefined);
export function ThemeProvider({ children, theme: overrides, }) {
    const mergedTheme = extendTheme(overrides);
    const [mode, setMode] = useState("light");
    useEffect(() => {
        (async () => {
            const stored = await safeGetItem("theme-mode");
            if (stored === "dark" || stored === "light") {
                setMode(stored);
            }
        })();
    }, []);
    async function updateMode(next) {
        setMode(next);
        await safeSetItem("theme-mode", next);
    }
    return (_jsx(ThemeContext.Provider, { value: {
            mode,
            colors: mergedTheme[mode],
            setMode: updateMode,
            toggleTheme: () => updateMode(mode === "light" ? "dark" : "light"),
        }, children: children }));
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx)
        throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
}
