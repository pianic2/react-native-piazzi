// deepMerge.ts
export function deepMerge(target, override) {
    const result = { ...target };
    if (!override)
        return result;
    for (const key in override) {
        const value = override[key];
        if (value && typeof value === "object" && !Array.isArray(value)) {
            result[key] = deepMerge(result[key], value);
        }
        else {
            result[key] = value;
        }
    }
    return result;
}
