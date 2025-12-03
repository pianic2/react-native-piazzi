// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { extendTheme } from "./extendTheme";
import { baseTheme } from "./colors.base";
import { safeGetItem, safeSetItem } from "./safeStorage";

export type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  mode: ThemeMode;
  colors: any;
  setMode: (m: ThemeMode) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  theme: overrides,
}: {
  children: React.ReactNode;
  theme?: any;
}) {
  const mergedTheme = extendTheme(overrides);
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    (async () => {
      const stored = await safeGetItem("theme-mode");
      if (stored === "dark" || stored === "light") {
        setMode(stored);
      }
    })();
  }, []);

  async function updateMode(next: ThemeMode) {
    setMode(next);
    await safeSetItem("theme-mode", next);
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        colors: mergedTheme[mode],
        setMode: updateMode,
        toggleTheme: () => updateMode(mode === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
