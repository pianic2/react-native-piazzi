import * as SecureStore from "expo-secure-store";
import type { TokenStorage, TokenPair } from "../auth/types";

export const expoSecureStore: TokenStorage = {
  async getTokens() {
    const access = await SecureStore.getItemAsync("access");
    const refresh = await SecureStore.getItemAsync("refresh");
    if (!access || !refresh) return null;
    return { access, refresh };
  },

  async saveTokens(tokens: TokenPair) {
    await SecureStore.setItemAsync("access", tokens.access);
    await SecureStore.setItemAsync("refresh", tokens.refresh);
  },

  async clearTokens() {
    await SecureStore.deleteItemAsync("access");
    await SecureStore.deleteItemAsync("refresh");
  },
};
