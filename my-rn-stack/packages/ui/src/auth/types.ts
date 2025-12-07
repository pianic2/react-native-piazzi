export interface TokenPair {
  access: string;
  refresh: string;
}

export interface AuthUser {
  id: string | number;
  email?: string;
  [key: string]: any;
}

export interface TokenStorage {
  getTokens(): Promise<TokenPair | null>;
  saveTokens(tokens: TokenPair): Promise<void>;
  clearTokens(): Promise<void>;
}

export interface AuthApiConfig {
  login: (payload: any) => Promise<TokenPair>;
  signup?: (payload: any) => Promise<TokenPair>;
  refresh?: (refreshToken: string) => Promise<TokenPair>;
  loadUser?: (access: string) => Promise<AuthUser | null>;
}

export interface AuthConfig {
  storage: TokenStorage;
  api: AuthApiConfig;
  autoRefresh?: boolean;
  refreshIntervalMs?: number;
  onLogout?: () => void;
  onLoginSuccess?: (tokens: TokenPair, user?: AuthUser | null) => void;
}

export interface AuthState {
  user: AuthUser | null;
  tokens: TokenPair | null;
  isInitializing: boolean;
  isAuthenticating: boolean;
}

export interface AuthContextValue extends AuthState {
  login: (payload: any) => Promise<void>;
  signup?: (payload: any) => Promise<void>;
  logout: () => Promise<void>;
}