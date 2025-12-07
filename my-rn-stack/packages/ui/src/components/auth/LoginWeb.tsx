import React, { useState } from "react";
import { useAuth } from "../../auth/useAuth";

export function LoginWeb({
  onSuccess,
  onError,
  emailLabel = "Email",
  passwordLabel = "Password"
}: {
  onSuccess?: () => void;
  onError?: (err: unknown) => void;
  emailLabel?: string;
  passwordLabel?: string;
}) {
  const { login, isAuthenticating } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    try {
      await login({ email, password });
      onSuccess?.();
    } catch (err: any) {
      const msg = err?.responseText || err?.message || "Login failed";
      setErrorMsg(msg);
      onError?.(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label>{emailLabel}</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>{passwordLabel}</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}

      <button disabled={isAuthenticating}>
        {isAuthenticating ? "Loading..." : "Login"}
      </button>
    </form>
  );
}
