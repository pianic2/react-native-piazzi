import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-native",

    // Expo / RN runtime deps
    "react-native-safe-area-context",
    "lucide-react-native",
    "expo-secure-store",
  ],
});
