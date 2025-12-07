import { Platform } from "react-native";

export function isWeb() {
  return Platform.OS === "web";
}

export function isMobile() {
  return Platform.OS === "ios" || Platform.OS === "android";
}

export function getPlatformType() {
  if (Platform.OS === "web") return "web";
  return "mobile";
}
