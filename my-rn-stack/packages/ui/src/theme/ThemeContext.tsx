import React, { createContext, useContext, useEffect, useState } from "react";
import { COLOR_MAP, ThemeMode } from "./colors";
import { safeGetItem, safeSetItem } from "./safeStorage";

export interface ThemeContextValue {
  mode: ThemeMode;
  colors: typeof COLOR_MAP["light"]
  toggleTheme: () => void;
  setTheme: (m: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    (async () => {
      const saved = await safeGetItem("theme-mode");
      if (saved === "dark" || saved === "light") {
        setMode(saved);
      }
    })();
  }, []);

  async function updateTheme(newMode: ThemeMode) {
    setMode(newMode);
    await safeSetItem("theme-mode", newMode);
  }

  function toggleTheme() {
    updateTheme(mode === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        colors: COLOR_MAP[mode],
        toggleTheme,
        setTheme: updateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be inside ThemeProvider");
  }
  return ctx;
}
