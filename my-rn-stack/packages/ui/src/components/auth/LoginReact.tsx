import React, { useState } from "react";
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from "react-native";
import { useAuth } from "../../auth/useAuth";

export function LoginReact({
  onSuccess,
  onError,
  emailLabel = "Email",
  passwordLabel = "Password",
  renderButton
}: {
  onSuccess?: () => void;
  onError?: (err: unknown) => void;
  emailLabel?: string;
  passwordLabel?: string;
  renderButton?: (props: { onPress: () => void; loading: boolean }) => React.ReactNode;
}) {
  const { login, isAuthenticating } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit() {
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
      {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>Login</Text>}
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
