import type { TokenStorage, TokenPair } from "../auth/types";

export const localStorageTokenStorage: TokenStorage = {
  async getTokens() {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");
    if (!access || !refresh) return null;
    return { access, refresh };
  },

  async saveTokens(tokens: TokenPair) {
    localStorage.setItem("access", tokens.access);
    localStorage.setItem("refresh", tokens.refresh);
  },

  async clearTokens() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  },
};
