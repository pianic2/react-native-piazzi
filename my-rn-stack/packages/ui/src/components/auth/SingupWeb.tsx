import React, { useState } from "react";
import { useAuth } from "../../auth/useAuth";

export function SignupFormWeb({
  onSuccess,
  onError,
  emailLabel = "Email",
  passwordLabel = "Password",
  confirmPasswordLabel = "Conferma Password",
  validate
}: {
  onSuccess?: () => void;
  onError?: (err: unknown) => void;
  emailLabel?: string;
  passwordLabel?: string;
  confirmPasswordLabel?: string;
  validate?: (payload: any) => string | null;
}) {
  const { signup, isAuthenticating } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (password !== confirm) {
      setErrorMsg("Le password non coincidono");
      return;
    }

    if (validate) {
      const err = validate({ email, password });
      if (err) {
        setErrorMsg(err);
        return;
      }
    }

    try {
      await signup?.({ email, password });
      onSuccess?.();
    } catch (err: any) {
      const msg = err?.responseText || err?.message || "Signup failed";
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

      <label>{confirmPasswordLabel}</label>
      <input
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}

      <button disabled={isAuthenticating}>
        {isAuthenticating ? "Loading..." : "Registrati"}
      </button>
    </form>
  );
}
