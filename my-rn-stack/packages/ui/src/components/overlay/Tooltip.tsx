// ui/components/overlay/Tooltip.tsx

import React, { useRef, useState } from "react";
import {
  Platform,
  Pressable,
  View,
  LayoutRectangle,
} from "react-native";
import { useTheme } from "../../theme/useTheme";
import { Text } from "../typography/Text";

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: string;
  placement?: Placement;
  delay?: number;
  children: React.ReactNode;
}

export function Tooltip({
  content,
  placement = "top",
  delay = 450,
  children,
}: TooltipProps) {
  const { theme, colors } = useTheme();
  const timer = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<LayoutRectangle | null>(null);

  if (Platform.OS !== "web") return <>{children}</>;

  function show() {
    timer.current = setTimeout(() => setOpen(true), delay);
  }

  function hide() {
    if (timer.current) clearTimeout(timer.current);
    setOpen(false);
  }

  const tooltipStyle = (() => {
    if (!rect) return { opacity: 0 };

    const gap = 8;
    switch (placement) {
      case "top":
        return { left: rect.x, top: rect.y - gap };
      case "bottom":
        return { left: rect.x, top: rect.y + rect.height + gap };
      case "left":
        return { left: rect.x - gap, top: rect.y };
      case "right":
        return { left: rect.x + rect.width + gap, top: rect.y };
    }
  })();

  return (
    <Pressable
      onHoverIn={show}
      onHoverOut={hide}
      onPressIn={show}
      onPressOut={hide}
      onLayout={(e) => setRect(e.nativeEvent.layout)}
      style={{ alignSelf: "flex-start" }}
    >
      {children}

      {open && rect && (
        <View
          style={{
            position: "absolute",
            ...tooltipStyle,
            backgroundColor: colors.textPrimary,
            paddingHorizontal: theme.space.sm,
            paddingVertical: 6,
            borderRadius: theme.radius.sm,
            zIndex: theme.zIndex.tooltip,
            maxWidth: 260,
          }}
        >
          <Text size="sm" style={{ color: colors.textInverted }}>
            {content}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
