// extendTheme.ts
import { deepMerge } from "../utils/deepMerge";
import { baseTheme } from "./colors.base";
export function extendTheme(overrides = {}) {
    return {
        light: deepMerge(baseTheme.light, overrides.light),
        dark: deepMerge(baseTheme.dark, overrides.dark),
    };
}
