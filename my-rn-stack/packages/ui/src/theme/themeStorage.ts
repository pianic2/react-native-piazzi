// src/theme/themeStorage.ts

import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import type { ThemeMode } from "./types";

const STORAGE_KEY = "UI_THEME_MODE";

export async function getStoredTheme(): Promise<ThemeMode | null> {
  try {
    if (Platform.OS === "web") {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    }

    const value = await SecureStore.getItemAsync(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export async function setStoredTheme(mode: ThemeMode) {
  try {
    if (Platform.OS === "web") {
      window.localStorage.setItem(STORAGE_KEY, mode);
      return;
    }

    await SecureStore.setItemAsync(STORAGE_KEY, mode);
  } catch {
    // silenzioso: il tema non è critico
  }
}
