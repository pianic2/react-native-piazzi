import * as SecureStore from "expo-secure-store";
import type { TokenStorage } from "./tokenStorage";

const ACCESS_KEY = "access";
const REFRESH_KEY = "refresh";

export const tokenStorage: TokenStorage = {
  async getTokens() {
    const access = await SecureStore.getItemAsync(ACCESS_KEY);
    const refresh = await SecureStore.getItemAsync(REFRESH_KEY);
    if (!access || !refresh) return null;
    return { access, refresh };
  },

  async saveTokens(tokens) {
    await SecureStore.setItemAsync(ACCESS_KEY, tokens.access);
    await SecureStore.setItemAsync(REFRESH_KEY, tokens.refresh);
  },

  async clearTokens() {
    await SecureStore.deleteItemAsync(ACCESS_KEY);
    await SecureStore.deleteItemAsync(REFRESH_KEY);
  },
};
