// ui/components/overlay/Popover.tsx

import React, { useState } from "react";
import {
  Platform,
  Pressable,
  View,
  LayoutRectangle,
} from "react-native";
import { useTheme } from "../../theme/useTheme";
import { Box } from "../layout/Box";

type Placement = "bottom" | "top" | "right" | "left";

interface PopoverProps {
  renderTrigger: (args: { open: boolean; toggle: () => void }) => React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
}

export function Popover({
  renderTrigger,
  children,
  placement = "bottom",
}: PopoverProps) {
  const { theme, colors } = useTheme();
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<LayoutRectangle | null>(null);

  const toggle = () => setOpen((v) => !v);

  if (Platform.OS !== "web") {
    // Su mobile puoi usare BottomSheet o Modal
    return <>{renderTrigger({ open, toggle })}</>;
  }

  const style = (() => {
    if (!rect) return { opacity: 0 };
    const gap = 8;

    switch (placement) {
      case "bottom":
        return { left: rect.x, top: rect.y + rect.height + gap };
      case "top":
        return { left: rect.x, top: rect.y - gap };
      case "right":
        return { left: rect.x + rect.width + gap, top: rect.y };
      case "left":
        return { left: rect.x - gap, top: rect.y };
    }
  })();

  return (
    <View style={{ alignSelf: "flex-start" }}>
      <View
        onLayout={(e) => setRect(e.nativeEvent.layout)}
      >
        <Pressable onPress={toggle}>
          {renderTrigger({ open, toggle })}
        </Pressable>
      </View>

      {open && rect && (
        <Pressable
          onPress={() => setOpen(false)}
          style={{
            position: "fixed" as any,
            inset: 0,
            backgroundColor: "transparent",
            zIndex: theme.zIndex.overlay,
          }}
        >
          <View
            style={{
              position: "absolute",
              ...style,
              zIndex: theme.zIndex.dropdown,
            }}
          >
            <Box
              bg="surface"
              radius="md"
              shadow="md"
              padding="sm"
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                minWidth: 180,
              }}
            >
              {children}
            </Box>
          </View>
        </Pressable>
      )}
    </View>
  );
}
