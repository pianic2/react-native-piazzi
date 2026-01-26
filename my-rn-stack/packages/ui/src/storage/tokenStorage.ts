import type { TokenPair } from "../auth/types";

export interface TokenStorage {
  getTokens(): Promise<TokenPair | null>;
  saveTokens(tokens: TokenPair): Promise<void>;
  clearTokens(): Promise<void>;
}
