import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

export async function safeGetItem(key: string): Promise<string | null> {
  if (isWeb) {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  }

  return await SecureStore.getItemAsync(key);
}

export async function safeSetItem(key: string, value: string): Promise<void> {
  if (isWeb) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value);
    return;
  }

  await SecureStore.setItemAsync(key, value);
}

export async function safeDeleteItem(key: string): Promise<void> {
  if (isWeb) {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
    return;
  }

  await SecureStore.deleteItemAsync(key);
}
