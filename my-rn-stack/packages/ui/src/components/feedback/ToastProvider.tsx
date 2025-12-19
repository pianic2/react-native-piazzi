// ui/components/feedback/ToastProvider.tsx

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import { View } from "react-native";
import { Text } from "../typography/Text";
import { useTheme } from "../../theme/useTheme";

type Variant = "info" | "success" | "warning" | "error";

interface Toast {
  id: number;
  message: string;
  variant: Variant;
}

interface ToastContextValue {
  notify: (message: string, variant?: Variant) => void;
}

const ToastContext =
  createContext<ToastContextValue | null>(null);

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, colors } = useTheme();
  const [toasts, setToasts] = useState<Toast[]>([]);

  const notify = useCallback(
    (message: string, variant: Variant = "info") => {
      const id = Date.now();
      setToasts((t) => [...t, { id, message, variant }]);

      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, 3000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}

      <View
        style={{
          position: "absolute",
          bottom: theme.space.lg,
          left: theme.space.md,
          right: theme.space.md,
        }}
      >
        {toasts.map((t) => (
          <View
            key={t.id}
            style={{
              backgroundColor:
                colors[t.variant],
              padding: theme.space.md,
              borderRadius: theme.radius.md,
              marginBottom: theme.space.sm,
            }}
          >
            <Text style={{ color: colors.textInverted }}>
              {t.message}
            </Text>
          </View>
        ))}
      </View>
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return ctx;
}
