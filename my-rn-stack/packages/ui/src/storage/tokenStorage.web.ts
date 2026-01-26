import type { TokenStorage } from "./tokenStorage";

function hasLocalStorage(): boolean {
  try {
    return (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    );
  } catch {
    return false;
  }
}

export const tokenStorage: TokenStorage = {
  async getTokens() {
    if (!hasLocalStorage()) return null;
    const access = window.localStorage.getItem("access");
    const refresh = window.localStorage.getItem("refresh");
    if (!access || !refresh) return null;
    return { access, refresh };
  },

  async saveTokens(tokens) {
    if (!hasLocalStorage()) return;
    window.localStorage.setItem("access", tokens.access);
    window.localStorage.setItem("refresh", tokens.refresh);
  },

  async clearTokens() {
    if (!hasLocalStorage()) return;
    window.localStorage.removeItem("access");
    window.localStorage.removeItem("refresh");
  },
};
