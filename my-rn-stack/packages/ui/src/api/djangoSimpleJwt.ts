import type { AuthApiConfig, TokenPair, AuthUser } from "../auth/types";

const BASE_URL = "https://api.example.com";

async function postJSON<T>(url: string, body: any): Promise<T> {
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!r.ok) {
    const text = await r.text().catch(() => "");
    const err = new Error("Request failed");
    (err as any).responseText = text;
    throw err;
  }

  return r.json();
}

export const djangoSimpleJwtApi: AuthApiConfig = {
  login: async (payload): Promise<TokenPair> => {
    const res = await postJSON<any>(`${BASE_URL}/auth/jwt/create/`, payload);
    return { access: res.access, refresh: res.refresh };
  },

  signup: async (payload): Promise<TokenPair> => {
    const res = await postJSON<any>(`${BASE_URL}/auth/register/`, payload);
    return { access: res.access, refresh: res.refresh };
  },

  refresh: async (refreshToken): Promise<TokenPair> => {
    const res = await postJSON<any>(`${BASE_URL}/auth/jwt/refresh/`, {
      refresh: refreshToken
    });
    return { access: res.access, refresh: refreshToken };
  },

  loadUser: async (access: string): Promise<AuthUser | null> => {
    const r = await fetch(`${BASE_URL}/auth/me/`, {
      headers: { Authorization: `Bearer ${access}` }
    });
    if (!r.ok) return null;
    return r.json();
  }
};
