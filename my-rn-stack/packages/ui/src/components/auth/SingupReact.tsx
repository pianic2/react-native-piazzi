import React, { useState } from "react";
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from "react-native";
import { useAuth } from "../../auth/useAuth";

export function SignupFormNative({
  onSuccess,
  onError,
  emailLabel = "Email",
  passwordLabel = "Password",
  confirmPasswordLabel = "Conferma Password",
  renderButton,
  validate
}: {
  onSuccess?: () => void;
  onError?: (err: unknown) => void;
  emailLabel?: string;
  passwordLabel?: string;
  confirmPasswordLabel?: string;
  renderButton?: (props: { onPress: () => void; loading: boolean }) => React.ReactNode;
  validate?: (payload: any) => string | null;
}) {
  const { signup, isAuthenticating } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit() {
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
    <View style={styles.container}>
      <Text>{emailLabel}</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text>{passwordLabel}</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text>{confirmPasswordLabel}</Text>
      <TextInput
        style={styles.input}
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry
      />

      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

      {renderButton ? (
        renderButton({ onPress: handleSubmit, loading: isAuthenticating })
      ) : (
        <DefaultButton onPress={handleSubmit} loading={isAuthenticating} />
      )}
    </View>
  );
}

function DefaultButton({ onPress, loading }: { onPress: () => void; loading: boolean }) {
  return (
    <View style={styles.button} onTouchEnd={onPress}>
      {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>Registrati</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8
  },
  error: {
    color: "red",
    marginTop: 6
  },
  button: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "black",
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "600"
  }
});
