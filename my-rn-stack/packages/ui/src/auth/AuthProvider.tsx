import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { AuthConfig, AuthUser, AuthState, AuthContextValue, TokenPair } from "./types";


export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children, config }: { children: any; config: AuthConfig }) {
  const { storage, api, autoRefresh, refreshIntervalMs = 600000 } = config;

  const [state, setState] = useState<AuthState>({
    user: null,
    tokens: null,
    isInitializing: true,
    isAuthenticating: false,
  });

  // INIT: carica token e user
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const tokens = await storage.getTokens().catch(() => null);
      if (cancelled) return;

      if (!tokens) {
        setState((s) => ({ ...s, isInitializing: false }));
        return;
      }

      let user: AuthUser | null = null;
      if (api.loadUser) {
        try {
          user = await api.loadUser(tokens.access);
        } catch {}
      }

      setState({
        user,
        tokens,
        isInitializing: false,
        isAuthenticating: false,
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [storage, api]);

  async function handleLogin(payload: any) {
    setState((s) => ({ ...s, isAuthenticating: true }));

    try {
      const tokens = await api.login(payload);
      await storage.saveTokens(tokens);

      let user: AuthUser | null = null;
      if (api.loadUser) {
        try {
          user = await api.loadUser(tokens.access);
        } catch {}
      }

      setState({
        user,
        tokens,
        isInitializing: false,
        isAuthenticating: false,
      });

      config.onLoginSuccess?.(tokens, user);
    } catch (err) {
      setState((s) => ({ ...s, isAuthenticating: false }));
      throw err;
    }
  }

  async function handleSignup(payload: any) {
    if (!api.signup) throw new Error("Signup not available");
    setState((s) => ({ ...s, isAuthenticating: true }));

    try {
      const tokens = await api.signup(payload);
      await storage.saveTokens(tokens);

      let user: AuthUser | null = null;
      if (api.loadUser) {
        try {
          user = await api.loadUser(tokens.access);
        } catch {}
      }

      setState({
        user,
        tokens,
        isInitializing: false,
        isAuthenticating: false,
      });

      config.onLoginSuccess?.(tokens, user);
    } catch (err) {
      setState((s) => ({ ...s, isAuthenticating: false }));
      throw err;
    }
  }

  async function handleLogout() {
    await storage.clearTokens();
    setState({
      user: null,
      tokens: null,
      isInitializing: false,
      isAuthenticating: false,
    });
    config.onLogout?.();
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      login: handleLogin,
      signup: api.signup ? handleSignup : undefined,
      logout: handleLogout,
    }),
    [state]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
