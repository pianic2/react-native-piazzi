// src/theme/ThemeProvider.tsx

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { Platform, ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { createBaseTheme } from "./defaultTheme";
import type { ThemeMode } from "./types";
import { getStoredTheme, setStoredTheme } from "./themeStorage";

interface ThemeContextValue {
  theme: ReturnType<typeof createBaseTheme>;
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
  ready: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  initialMode?: ThemeMode;
  children: React.ReactNode;
  withSafeArea?: boolean;
  withScroll?: boolean;
}

export function ThemeProvider({
  initialMode = "light",
  children,
  withSafeArea = true,
  withScroll = true,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(initialMode);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const stored = await getStoredTheme();
      if (stored) setModeState(stored);
      setReady(true);
    })();
  }, []);

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m);
    setStoredTheme(m);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  const theme = useMemo(() => createBaseTheme(mode), [mode]);

  if (!ready) return null;

  const ContentWrapper = withScroll ? ScrollView : View;

  const content = (
    <ThemeContext.Provider
      value={{ theme, mode, toggleTheme, setMode, ready }}
    >
      <ContentWrapper
        style={{ flex: 1, backgroundColor: theme.colors.background }}
        contentContainerStyle={
          withScroll ? { flexGrow: 1 } : undefined
        }
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ContentWrapper>
    </ThemeContext.Provider>
  );

  if (!withSafeArea) {
    return content;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {content}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be used inside ThemeProvider");
  }
  return ctx;
}
