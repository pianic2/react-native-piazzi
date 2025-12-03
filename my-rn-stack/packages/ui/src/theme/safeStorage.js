import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
const isWeb = Platform.OS === "web";
export async function safeGetItem(key) {
    if (isWeb) {
        if (typeof window === "undefined")
            return null;
        return window.localStorage.getItem(key);
    }
    return await SecureStore.getItemAsync(key);
}
export async function safeSetItem(key, value) {
    if (isWeb) {
        if (typeof window === "undefined")
            return;
        window.localStorage.setItem(key, value);
        return;
    }
    await SecureStore.setItemAsync(key, value);
}
export async function safeDeleteItem(key) {
    if (isWeb) {
        if (typeof window === "undefined")
            return;
        window.localStorage.removeItem(key);
        return;
    }
    await SecureStore.deleteItemAsync(key);
}
