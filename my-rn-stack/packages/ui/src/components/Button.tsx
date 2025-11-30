import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  Platform,
} from "react-native";
import { LucideIcon } from "lucide-react-native";
import { useTheme } from "../theme/useTheme";

type ButtonType = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  type?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  icon?: LucideIcon;
  disabled?: boolean;

  // override opzionali
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

export function Button({
  title,
  onPress,
  type = "primary",
  size = "md",
  loading = false,
  icon: Icon,
  disabled = false,
  bgColor,
  textColor,
  borderColor,
}: ButtonProps) {
  const { colors } = useTheme();

  // palette in base al tipo + modalità (light/dark)
  const palette = colors[type];

  // override colori se specificati
  const finalBg = bgColor || palette.bg;
  const finalText = textColor || palette.text;
  const finalBorder = borderColor || palette.border;

  // spacing + dimensioni
  const sizeMap = {
    sm: { pv: 8, ph: 14, br: 8, fs: 14, is: 16 },
    md: { pv: 14, ph: 20, br: 10, fs: 16, is: 20 },
    lg: { pv: 18, ph: 26, br: 12, fs: 18, is: 22 },
  };

  const s = sizeMap[size];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={Platform.OS === "ios" ? 0.65 : 1}
      style={[
        styles.base,
        {
          backgroundColor: finalBg,
          borderColor: finalBorder,
          borderWidth: type === "outline" ? 2 : 0,
          paddingVertical: s.pv,
          paddingHorizontal: s.ph,
          borderRadius: s.br,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
    >
      <View style={styles.row}>
        {/* ICONA */}
        {Icon && !loading && (
          <Icon
            size={s.is}
            color={finalText}
            style={{ marginRight: title ? 10 : 0 }}
          />
        )}

        {/* LOADER */}
        {loading && <ActivityIndicator size="small" color={finalText} />}

        {/* TITOLO */}
        {!loading && title && (
          <Text
            style={[
              styles.label,
              {
                color: finalText,
                fontSize: s.fs,
              },
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "600",
  },
});
