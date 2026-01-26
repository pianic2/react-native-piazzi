// ui/components/feedback/ToastProvider.tsx

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
} from "react";
import {
  View,
  Pressable,
  Animated,
  Platform,
} from "react-native";

const AnimatedView = Animated.createAnimatedComponent(View);
import { Alert } from "./Alert";
import { useTheme } from "../../theme/useTheme";

/* =====================================================
 * HOVERABLE (web-safe)
 * ===================================================== */

interface HoverableProps {
  children: React.ReactNode;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

function Hoverable({
  children,
  onHoverIn,
  onHoverOut,
}: HoverableProps) {
  if (Platform.OS === "web") {
    return (
      <div
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
        style={{ pointerEvents: "auto" }}
      >
        {children}
      </div>
    );
  }

  return <>{children}</>;
}


/* =====================================================
 * TYPES
 * ===================================================== */

type Variant = "primary" | "info" | "success" | "warning" | "error";
type Position = "top" | "bottom";

interface Toast {
  id: number;
  title: string;
  message?: string;
  variant: Variant;
  duration: number;
  animated: Animated.Value;
}

interface ToastContextValue {
  notify: (
    title: string,
    variant?: Variant,
    message?: string,
  ) => void;
}

/* =====================================================
 * PRIORITY
 * ===================================================== */

const PRIORITY: Record<Variant, number> = {
  error: 5,
  warning: 4,
  success: 3,
  info: 2,
  primary: 1,
};

/* =====================================================
 * CONTEXT
 * ===================================================== */

const ToastContext = createContext<ToastContextValue | null>(null);

/* =====================================================
 * PROVIDER
 * ===================================================== */

interface ToastProviderProps {
  children: React.ReactNode;
  duration?: number;
  position?: Position;
  dismissOnPress?: boolean;
  maxToasts?: number;
  pauseOnHover?: boolean;
}

export function ToastProvider({
  children,
  duration = 3000,
  position = "top",
  dismissOnPress = true,
  maxToasts = 3,
  pauseOnHover = true,
}: ToastProviderProps) {
  const { theme } = useTheme();
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timers = useRef<Map<number, NodeJS.Timeout>>(new Map());

  /* -----------------------------
   * Timer helpers
   * ----------------------------- */

  const clearTimer = (id: number) => {
    const t = timers.current.get(id);
    if (t) {
      clearTimeout(t);
      timers.current.delete(id);
    }
  };

  const startTimer = (id: number, duration: number) => {
    clearTimer(id);
    const timer = setTimeout(() => dismiss(id), duration);
    timers.current.set(id, timer);
  };

  /* -----------------------------
   * Dismiss with animation
   * ----------------------------- */

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => {
      const toast = prev.find((t) => t.id === id);
      if (!toast) return prev;

      Animated.timing(toast.animated, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }).start();

      return prev.filter((t) => t.id !== id);
    });

    clearTimer(id);
  }, []);

  /* -----------------------------
   * Notify (API invariata)
   * ----------------------------- */

  const notify = useCallback(
    (
      title: string,
      variant: Variant = "info",
      message?: string
    ) => {
      const id = Date.now();
      const animated = new Animated.Value(0);

      const toast: Toast = {
        id,
        title,
        message,
        variant,
        duration,
        animated,
      };

      setToasts((prev) => {
        const next = [...prev, toast]
          .sort(
            (a, b) =>
              PRIORITY[b.variant] - PRIORITY[a.variant]
          )
          .slice(0, maxToasts);

        return next;
      });

      Animated.timing(animated, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }).start();

      startTimer(id, duration);
    },
    [duration, maxToasts]
  );

  /* =====================================================
   * RENDER
   * ===================================================== */

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}

      <View
        pointerEvents="box-none"
        style={{
          position: "absolute",
          left: theme.space.md,
          right: theme.space.md,
          gap: theme.space.sm,
          ...(position === "bottom"
            ? { bottom: theme.space.lg }
            : { top: theme.space.lg }),
        }}
      >
        {toasts.map((t) => {
          const animatedStyle = {
            opacity: t.animated,
            transform: [
              {
                translateY: t.animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    position === "bottom" ? 20 : -20,
                    0,
                  ],
                }),
              },
            ],
          };

          const content = (
            <View style={animatedStyle}>
              <Alert
                title={t.title}
                message={t.message}
                variant={t.variant}
              />
            </View>
          );

          if (!dismissOnPress) {
            return (
              <Hoverable
                onHoverIn={() =>
                  pauseOnHover && clearTimer(t.id)
                }
                onHoverOut={() =>
                  pauseOnHover && startTimer(t.id, t.duration)
                }
              >
                {content}
              </Hoverable>
            );
          }

          return (
            <Hoverable
              onHoverIn={() =>
                pauseOnHover && clearTimer(t.id)
              }
              onHoverOut={() =>
                pauseOnHover && startTimer(t.id, t.duration)
              }
            >
              <Pressable onPress={() => dismiss(t.id)}>
                {content}
              </Pressable>
            </Hoverable>
          );

        })}
      </View>
    </ToastContext.Provider>
  );
}

/* =====================================================
 * HOOK
 * ===================================================== */

export function useToastContext() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error(
      "useToast must be used inside ToastProvider"
    );
  }
  return ctx;
}
